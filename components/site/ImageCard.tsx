import React from "react";
import Image from "next/image";

/**
 * Photo card, built to the "Replicate This Image Design" specification:
 *  - a clean rounded rectangle with smooth, large-radius corners (rounder on the outer side), no border
 *  - a flat teal accent shape (#0FB5B8) behind the photo that extends slightly past its edge,
 *    leans a few degrees and is partly hidden by the photo
 * Pass `children` instead of `src` to place other content (e.g. a map) in the same frame.
 */
export default function ImageCard({
  src,
  alt = "",
  side = "left",
  ratio = 1.84,
  mobileRatio = 1.5,
  position = "center",
  zoom = 1,
  origin = "50% 50%",
  sizes = "(max-width: 1024px) 92vw, 580px",
  priority = false,
  className = "",
  children,
}: {
  src?: string;
  alt?: string;
  side?: "left" | "right";
  ratio?: number;
  mobileRatio?: number;
  position?: string;
  zoom?: number;
  origin?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  // The specification defines a single design (accent on the left), so every card uses it.
  // `side` is accepted for backwards compatibility with existing call sites.
  void side;
  const left = true;
  const vars = { "--r": ratio, "--rm": mobileRatio } as React.CSSProperties;

  return (
    <div className={`relative w-full max-w-[640px] mx-auto lg:max-w-none ${left ? "pl-[7.5%]" : "pr-[7.5%]"} ${className}`}>
      {/* Teal accent: flat, rounded, slightly leaning, mostly hidden behind the photo */}
      <div
        aria-hidden="true"
        className={`absolute top-[13%] bottom-[7%] w-[20%] bg-[linear-gradient(180deg,#14bec1_0%,#0fb5b8_100%)] ${
          left
            ? "left-0 origin-top skew-x-[6deg] rounded-[44px_0_0_44px]"
            : "right-0 origin-top -skew-x-[6deg] rounded-[0_44px_44px_0]"
        }`}
      />
      {/* Photo */}
      <div
        className={`relative overflow-hidden bg-white aspect-(--rm) lg:aspect-(--r) shadow-[0_20px_40px_-28px_rgba(29,23,78,0.25)] ${
          left
            ? "rounded-[20px_40px_40px_28px] sm:rounded-[26px_54px_54px_34px]"
            : "rounded-[40px_20px_28px_40px] sm:rounded-[54px_26px_34px_54px]"
        }`}
        style={vars}
      >
        {children ?? (
          <Image
            src={src ?? ""}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover"
            style={{ objectPosition: position, transform: `scale(${zoom})`, transformOrigin: origin }}
          />
        )}
      </div>
    </div>
  );
}
