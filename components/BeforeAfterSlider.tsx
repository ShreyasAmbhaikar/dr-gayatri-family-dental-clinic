"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  treatmentTag?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  treatmentTag = "Teeth Whitening Result",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
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
    <div className="flex flex-col items-center w-full">
      {/* Slider Visual Container */}
      <div
        ref={containerRef}
        onMouseMove={(e) => isDragging && handleMove(e.clientX)}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[16/9] sm:aspect-[16/10] rounded-3xl overflow-hidden shadow-xl border-4 border-white select-none cursor-ew-resize bg-slate-900"
      >
        {/* "After" Image (Underneath, full size) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={afterImage}
            alt="After professional teeth whitening treatment"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 550px"
          />
          <div className="absolute bottom-3 right-3 z-10 bg-[#00a4c4] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
            {afterLabel}
          </div>
        </div>

        {/* "Before" Image (Clipped overlay) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div
            className="relative w-full h-full"
            style={{
              width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%",
            }}
          >
            <Image
              src={beforeImage}
              alt="Before teeth whitening treatment"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 550px"
            />
          </div>
          <div className="absolute bottom-3 left-3 z-10 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
            {beforeLabel}
          </div>
        </div>

        {/* Split Divider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 cursor-ew-resize flex items-center justify-center transform -translate-x-1/2"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={() => setIsDragging(true)}
        >
          <div className="w-8 h-8 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-[#00a4c4]">
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
              <polyline points="9 18 3 12 9 6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Pill Tag at the bottom */}
      <div className="mt-4 inline-flex items-center gap-2 border border-slate-200 bg-white py-1.5 px-4 rounded-full shadow-xs text-xs font-semibold text-[#1c1549]">
        <span>{treatmentTag}</span>
      </div>
    </div>
  );
}
