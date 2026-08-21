import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import type { ReactNode } from "react";

type Variant = "primary" | "link" | "link-light";

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}) {
  if (variant === "primary") {
    // Gold fill, not navy — navy is also this site's dominant section
    // background (hero, footer, alternating panels), so a navy-filled
    // button disappears into a navy backdrop. Gold reads clearly against
    // both navy and light (ivory/white) sections, so the primary action
    // never blends in regardless of what's behind it.
    return (
      <Link
        href={href}
        className={`group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold tracking-wide text-navy transition-colors duration-200 hover:bg-gold-bright ${className}`}
      >
        {children}
        <ArrowRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </Link>
    );
  }

  const color = variant === "link-light" ? "text-white" : "text-navy";

  return (
    <Link
      href={href}
      className={`link-underline group inline-flex items-center gap-1.5 text-sm font-medium tracking-wide ${color} ${className}`}
    >
      {children}
      <ArrowRight
        size={14}
        className="transition-transform duration-200 group-hover:translate-x-1"
      />
    </Link>
  );
}
