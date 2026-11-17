"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  treatmentTag?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  treatmentTag,
  className = "",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Measure and keep container width synced via ResizeObserver
  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    const ro = new ResizeObserver(updateWidth);
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 3) percentage = 3;
    if (percentage > 97) percentage = 97;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(5, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(95, prev + 5));
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging, handleMove]);

  return (
    <div className={`flex flex-col items-center w-full ${className}`}>
      {/* Slider Visual Container */}
      <div
        ref={containerRef}
        onMouseMove={(e) => isDragging && handleMove(e.clientX)}
        onTouchMove={handleTouchMove}
        onKeyDown={handleKeyDown}
        role="slider"
        aria-label="Before and after comparison slider"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-[22px] overflow-hidden shadow-lg border-2 border-white select-none cursor-ew-resize bg-slate-900 group focus:outline-none focus:ring-2 focus:ring-teal"
      >
        {/* "After" Image (Base layer) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={afterImage}
            alt="After treatment result"
            fill
            sizes="(max-width: 768px) 100vw, 650px"
            className="object-cover object-center"
          />
          <div className="absolute bottom-3 right-3 z-10 bg-teal text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider backdrop-blur-sm">
            {afterLabel}
          </div>
        </div>

        {/* "Before" Image (Clipped overlay) */}
        <div
          className="absolute inset-0 h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div
            className="relative h-full"
            style={{
              width: containerWidth ? `${containerWidth}px` : "100%",
            }}
          >
            <Image
              src={beforeImage}
              alt="Before treatment condition"
              fill
              sizes="(max-width: 768px) 100vw, 650px"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute bottom-3 left-3 z-10 bg-navy/85 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
            {beforeLabel}
          </div>
        </div>

        {/* Split Divider Handle */}
        <div
          className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)] z-20 cursor-ew-resize flex items-center justify-center -translate-x-1/2"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={() => setIsDragging(true)}
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-xl border-2 border-teal flex items-center justify-center text-teal group-hover:scale-110 active:scale-95 transition-transform">
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="8 15 4 11 8 7" />
              <polyline points="16 7 20 11 16 15" />
            </svg>
          </div>
        </div>
      </div>

      {/* Pill Tag at the bottom if provided */}
      {treatmentTag && (
        <div className="mt-3.5 inline-flex items-center gap-1.5 border border-slate-200/90 bg-white py-1 px-4 rounded-full shadow-xs text-[12px] font-semibold text-navy">
          <span>{treatmentTag}</span>
        </div>
      )}
    </div>
  );
}
