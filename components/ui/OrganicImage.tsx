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
  // Smooth random organic blob 1 (closed pebble/egg silhouette from user reference)
  blob1: "M 0.980,0.505 C 0.980,0.559 0.960,0.617 0.938,0.668 C 0.915,0.718 0.882,0.765 0.846,0.806 C 0.809,0.846 0.765,0.883 0.717,0.910 C 0.669,0.937 0.614,0.957 0.560,0.968 C 0.505,0.979 0.446,0.984 0.389,0.978 C 0.333,0.972 0.269,0.961 0.221,0.933 C 0.172,0.905 0.127,0.858 0.097,0.812 C 0.067,0.767 0.054,0.709 0.041,0.658 C 0.028,0.607 0.020,0.556 0.019,0.505 C 0.018,0.453 0.023,0.401 0.035,0.349 C 0.046,0.297 0.060,0.239 0.090,0.191 C 0.119,0.142 0.161,0.088 0.210,0.059 C 0.260,0.031 0.329,0.021 0.387,0.020 C 0.445,0.018 0.505,0.034 0.558,0.050 C 0.611,0.066 0.661,0.089 0.706,0.117 C 0.752,0.144 0.794,0.177 0.833,0.214 C 0.871,0.252 0.913,0.293 0.938,0.341 C 0.962,0.390 0.980,0.450 0.980,0.505 Z",
  // Smooth random organic blob 2 (closed curved pebble silhouette from user reference)
  blob2: "M 0.976,0.524 C 0.985,0.578 0.977,0.643 0.959,0.696 C 0.942,0.750 0.910,0.807 0.870,0.846 C 0.831,0.885 0.773,0.911 0.723,0.932 C 0.672,0.953 0.619,0.965 0.567,0.973 C 0.514,0.981 0.461,0.984 0.408,0.979 C 0.355,0.973 0.295,0.966 0.248,0.941 C 0.202,0.915 0.162,0.869 0.130,0.825 C 0.099,0.782 0.077,0.731 0.059,0.681 C 0.041,0.630 0.027,0.578 0.023,0.524 C 0.019,0.470 0.019,0.410 0.035,0.359 C 0.051,0.307 0.085,0.256 0.121,0.215 C 0.157,0.174 0.203,0.140 0.250,0.111 C 0.297,0.082 0.349,0.052 0.403,0.039 C 0.457,0.026 0.523,0.015 0.574,0.032 C 0.625,0.048 0.671,0.101 0.710,0.138 C 0.749,0.175 0.776,0.215 0.809,0.254 C 0.841,0.293 0.878,0.326 0.906,0.371 C 0.934,0.416 0.967,0.470 0.976,0.524 Z",
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
