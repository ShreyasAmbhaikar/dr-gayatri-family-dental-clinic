import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "outline" | "teal";
type Size = "sm" | "md";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  icon?: React.ReactNode;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

type AnchorProps = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: never;
};

type NativeButtonProps = BaseProps & {
  href?: undefined;
  onClick?: () => void;
};

export type ButtonProps = AnchorProps | NativeButtonProps;

const VARIANTS: Record<Variant, string> = {
  primary: "btn-primary-grad text-white hover:shadow-xl",
  teal: "btn-teal-grad text-white hover:shadow-xl",
  outline:
    "bg-white/90 text-navy border-[1.5px] border-purple/70 hover:border-purple hover:bg-white shadow-[0_4px_14px_-8px_rgba(58,31,143,0.35)]",
};

const SIZES: Record<Size, string> = {
  sm: "text-[13px] px-5 py-2.5 gap-2",
  md: "text-[14px] px-7 py-3.5 gap-2.5",
};

/** Pill button that renders an <a> when given href, otherwise a <button>. */
export default function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", icon, arrow = false, className = "", children } = props;

  const classes = `group inline-flex items-center justify-center rounded-full font-semibold whitespace-nowrap transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  const content = (
    <>
      {icon}
      <span>{children}</span>
      {arrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
      )}
    </>
  );

  if (props.href !== undefined) {
    if (props.href.startsWith("/")) {
      return (
        <Link href={props.href} className={classes}>
          {content}
        </Link>
      );
    }
    return (
      <a href={props.href} target={props.target} rel={props.rel} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={props.onClick} className={classes}>
      {content}
    </button>
  );
}
