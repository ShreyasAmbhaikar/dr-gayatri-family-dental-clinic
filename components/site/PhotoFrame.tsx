import React from "react";
import ImageCard from "@/components/site/ImageCard";

/** Kept for existing imports. Renders the site's ImageCard design. */
export default function PhotoFrame(props: {
  src: string;
  alt: string;
  side?: "left" | "right";
  ratio?: number;
  mobileRatio?: number;
  position?: string;
  sizes?: string;
  priority?: boolean;
  zoom?: number;
  origin?: string;
  className?: string;
}) {
  return <ImageCard {...props} />;
}
