"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

export interface BentoItem {
  src: string;
  alt: string;
  /** What the photo shows. Used as the tile label and the full-screen caption. */
  caption: string;
  /** Grid span classes for the bento layout. */
  span: string;
  position?: string;
}

/** Bento grid of photos. Clicking a tile opens a full-screen viewer with next/previous navigation. */
export default function BentoGallery({ items }: { items: BentoItem[] }) {
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const touchX = useRef<number | null>(null);

  const go = useCallback((dir: 1 | -1) => setActive((i) => (i === null ? i : (i + dir + items.length) % items.length)), [items.length]);
  const close = useCallback(() => {
    setActive(null);
    lastFocus.current?.focus();
  }, []);

  useEffect(() => {
    if (active === null) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active, close, go]);

  const current = active !== null ? items[active] : null;

  return (
    <>
      <ul className="grid grid-cols-2 lg:grid-cols-4 grid-flow-dense auto-rows-[150px] sm:auto-rows-[200px] lg:auto-rows-[215px] gap-3 sm:gap-4">
        {items.map((item, i) => (
          <li key={item.src + i} className={item.span}>
            <button
              type="button"
              onClick={(e) => {
                lastFocus.current = e.currentTarget;
                setActive(i);
              }}
              aria-label={`View full screen: ${item.caption}`}
              className="group relative block w-full h-full overflow-hidden rounded-[22px] sm:rounded-[28px] ring-4 ring-white shadow-[0_18px_36px_-20px_rgba(29,23,78,0.45)] cursor-zoom-in focus-visible:outline-2 focus-visible:outline-teal"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                style={{ objectPosition: item.position ?? "center" }}
              />
              <span aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(29,23,78,0.78)_100%)] opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="absolute left-3.5 right-3.5 bottom-3 sm:left-4 sm:bottom-3.5 flex items-end justify-between gap-2 text-left">
                <span className="font-serif font-bold text-white text-[14px] sm:text-[16px] leading-tight drop-shadow">{item.caption}</span>
                <span className="w-8 h-8 flex-shrink-0 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 text-white grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Expand className="w-4 h-4" aria-hidden="true" />
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${current.caption}, photo ${active! + 1} of ${items.length}`}
          className="fixed inset-0 z-[90] flex flex-col bg-[linear-gradient(160deg,#1d1260_0%,#150c48_100%)]"
          onClick={close}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <div className="flex items-center justify-between px-4 sm:px-8 pt-4 sm:pt-6 text-white" onClick={(e) => e.stopPropagation()}>
            <span className="text-[13px] font-semibold tracking-[0.2em] uppercase text-teal-bright">
              {active! + 1} / {items.length}
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close full screen view"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 grid place-items-center cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          <div className="relative flex-1 min-h-0 px-3 sm:px-24 py-4" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-full">
              <Image src={current.src} alt={current.alt} fill sizes="100vw" priority className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
            </div>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous photo"
              className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/15 hover:bg-white/30 border border-white/30 text-white grid place-items-center cursor-pointer transition-colors backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next photo"
              className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/15 hover:bg-white/30 border border-white/30 text-white grid place-items-center cursor-pointer transition-colors backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>

          <div className="pb-6 sm:pb-8 text-center text-white px-4" onClick={(e) => e.stopPropagation()}>
            <p className="font-serif font-bold text-[20px] sm:text-[26px]">{current.caption}</p>
            <div className="mt-3 flex justify-center gap-2" role="tablist" aria-label="Choose photo">
              {items.map((it, i) => (
                <button
                  key={it.src + i}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Show photo ${i + 1}: ${it.caption}`}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${i === active ? "w-7 bg-teal-bright" : "w-2 bg-white/35 hover:bg-white/60"}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
