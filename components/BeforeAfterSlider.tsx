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
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
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
        className="relative w-full aspect-[16/9.5] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-sm border border-slate-200 select-none cursor-ew-resize bg-slate-900"
      >
        {/* "After" Image (Underneath) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={afterImage}
            alt="After teeth whitening treatment"
            fill
            priority
            className="object-cover object-[center_48%]"
            sizes="(max-width: 768px) 100vw, 550px"
          />
          <div className="absolute bottom-2.5 right-2.5 z-10 bg-[#009eb8] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs uppercase tracking-wider">
            {afterLabel}
          </div>
        </div>

        {/* "Before" Image (Clipped Overlay) */}
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
              priority
              className="object-cover object-[center_48%]"
              sizes="(max-width: 768px) 100vw, 550px"
            />
          </div>
          <div className="absolute bottom-2.5 left-2.5 z-10 bg-[#603b22]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs uppercase tracking-wider">
            {beforeLabel}
          </div>
        </div>

        {/* Split Divider Handle */}
        <div
          className="absolute top-0 bottom-0 w-[2.5px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.3)] z-20 cursor-ew-resize flex items-center justify-center transform -translate-x-1/2"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={() => setIsDragging(true)}
        >
          <div className="w-8 h-8 rounded-full bg-white shadow-lg border-2 border-[#009eb8] flex items-center justify-center text-[#009eb8] hover:scale-110 transition-transform">
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="8 16 4 12 8 8" />
              <polyline points="16 8 20 12 16 16" />
            </svg>
          </div>
        </div>
      </div>

      {/* Pill Tag at the bottom matching Reference 1 */}
      <div className="mt-3.5 inline-flex items-center gap-1.5 border border-slate-200 bg-white py-1 px-4 rounded-full shadow-2xs text-[11px] font-semibold text-[#1d174e]">
        <span>{treatmentTag}</span>
      </div>
    </div>
  );
}
