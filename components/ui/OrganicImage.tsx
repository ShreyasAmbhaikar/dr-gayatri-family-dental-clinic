import React, { useId } from "react";
import Image from "next/image";

/** Blob outlines in 0–1 coordinates (clipPathUnits="objectBoundingBox"), so they scale to any box. */
const SHAPES = {
  // Right-bleeding hero blob: curved top, bulging left edge, sweeping bottom.
  hero: "M0.24,0.11 C0.36,0.02 0.52,0.07 0.68,0.075 C0.82,0.08 0.92,0.03 1,0 L1,0.85 C0.88,0.94 0.7,1 0.5,0.985 C0.28,0.97 0.1,0.86 0.04,0.66 C-0.01,0.47 0.07,0.24 0.24,0.11 Z",
  // Left-bleeding portrait blob with an S-curved right edge.
  about: "M0,0.05 C0.2,0 0.45,0.06 0.64,0.03 C0.84,0 0.97,0.12 0.985,0.32 C1,0.5 0.9,0.6 0.93,0.76 C0.96,0.92 0.8,1 0.6,0.975 C0.4,0.95 0.2,1 0,0.95 Z",
  // Right-bleeding landscape blob with a soft left edge.
  clinic: "M1,0.03 C0.82,0 0.6,0.07 0.38,0.05 C0.16,0.03 0.03,0.16 0.02,0.38 C0.01,0.56 0.05,0.7 0.1,0.84 C0.17,1 0.4,0.96 0.6,0.98 C0.78,1 0.92,0.98 1,0.97 Z",
} as const;

export type OrganicShape = keyof typeof SHAPES;

export interface OrganicLayer {
  /** Fill classes for the echo layer (e.g. a gradient). */
  className: string;
  x?: string;
  y?: string;
  scale?: number;
  blur?: boolean;
}

interface OrganicImageProps {
  src: string;
  alt: string;
  shape: OrganicShape;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  /** Same-shape layers drawn behind the photo (glows, offset ribbons). */
  layers?: OrganicLayer[];
  /** SVG content in 0–1 coordinates drawn above the photo (waves, ribbons). */
  decor?: React.ReactNode;
  /** Makes the photo clickable. */
  onClick?: () => void;
  clickLabel?: string;
  children?: React.ReactNode;
}

export default function OrganicImage({
  src,
  alt,
  shape,
  className = "",
  imgClassName = "",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 60vw",
  layers = [],
  decor,
  onClick,
  clickLabel,
  children,
}: OrganicImageProps) {
  // useId output can contain characters that break url(#id) references.
  const clipId = `blob-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const clipStyle: React.CSSProperties = { clipPath: `url(#${clipId})`, WebkitClipPath: `url(#${clipId})` };

  const photo = (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={`object-cover ${imgClassName}`}
    />
  );

  return (
    <div className={`relative ${className}`}>
      <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d={SHAPES[shape]} />
          </clipPath>
        </defs>
      </svg>

      {layers.map((layer, i) => (
        <div
          key={i}
          aria-hidden="true"
          className={`absolute inset-0 pointer-events-none ${layer.blur ? "blur-2xl" : ""}`}
          style={{ transform: `translate(${layer.x ?? "0px"}, ${layer.y ?? "0px"}) scale(${layer.scale ?? 1})` }}
        >
          <div className={`w-full h-full ${layer.className}`} style={clipStyle} />
        </div>
      ))}

      {onClick ? (
        <button
          type="button"
          onClick={onClick}
          aria-label={clickLabel ?? alt}
          className="absolute inset-0 overflow-hidden cursor-pointer group"
          style={clipStyle}
        >
          {photo}
        </button>
      ) : (
        <div className="absolute inset-0 overflow-hidden" style={clipStyle}>
          {photo}
        </div>
      )}

      {decor && (
        <svg
          viewBox="0 0 1 1"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden="true"
        >
          {decor}
        </svg>
      )}

      {children}
    </div>
  );
}
