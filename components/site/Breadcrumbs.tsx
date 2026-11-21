import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  name: string;
  /** Omit on the current page. */
  href?: string;
}

export default function Breadcrumbs({
  items,
  light = false,
  className = "",
}: {
  items: Crumb[];
  light?: boolean;
  className?: string;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] sm:text-[13.5px] ${
        light ? "text-white/80" : "text-body"
      } ${className}`}
    >
      {items.map((item, i) => (
        <React.Fragment key={item.name}>
          {i > 0 && (
            <ChevronRight
              className={`w-3.5 h-3.5 ${light ? "text-white/40" : "text-body/80"}`}
              aria-hidden="true"
            />
          )}
          {item.href ? (
            <Link
              href={item.href}
              className={light ? "hover:text-[#38d8e8] transition-colors" : "hover:text-teal transition-colors"}
            >
              {item.name}
            </Link>
          ) : (
            <span aria-current="page" className={`font-semibold ${light ? "text-white" : "text-navy"}`}>
              {item.name}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
