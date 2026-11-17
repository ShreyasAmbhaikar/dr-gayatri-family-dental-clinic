import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  name: string;
  /** Omit on the current page. */
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] sm:text-[13.5px] text-body">
      {items.map((item, i) => (
        <React.Fragment key={item.name}>
          {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-body/80" aria-hidden="true" />}
          {item.href ? (
            <Link href={item.href} className="hover:text-teal transition-colors">
              {item.name}
            </Link>
          ) : (
            <span aria-current="page" className="font-semibold text-navy">
              {item.name}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
