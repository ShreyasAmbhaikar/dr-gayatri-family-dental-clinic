import React from "react";

interface ScriptBubbleProps {
  lines: string[];
  shape?: "circle" | "blob" | "none";
  showCircle?: boolean;
  className?: string;
  textClassName?: string;
}

/** Handwritten accent text, optionally inside a translucent frosted bubble. The last line gets a heart. */
export default function ScriptBubble({
  lines,
  shape = "circle",
  showCircle = true,
  className = "",
  textClassName = "text-[30px] sm:text-[34px]",
}: ScriptBubbleProps) {
  const hasCircle = showCircle && shape !== "none";
  const radius = shape === "circle" ? "rounded-full" : "rounded-[58%_42%_52%_48%/48%_56%_44%_52%]";
  const circleStyles = hasCircle
    ? `bg-white/60 backdrop-blur-md border border-white/70 shadow-[0_10px_30px_-12px_rgba(14,110,150,0.35)] ${radius}`
    : "";

  return (
    <div
      aria-hidden="true"
      className={`select-none pointer-events-none flex items-center justify-center ${circleStyles} ${className}`}
    >
      <p className={`font-script text-navy leading-[0.95] -rotate-[8deg] drop-shadow-sm ${textClassName}`}>
        {lines.map((line, i) => (
          <span key={line} className="block" style={{ paddingLeft: `${i * 0.35}em` }}>
            {line}
            {i === lines.length - 1 && <span className="text-[0.8em] text-purple"> ♡</span>}
          </span>
        ))}
      </p>
    </div>
  );
}
