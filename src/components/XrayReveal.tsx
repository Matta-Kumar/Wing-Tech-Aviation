"use client";

import { useRef, useState } from "react";
import Image from "next/image";

/**
 * Hover a "closed" image to reveal a second image underneath, in a circle
 * that follows the cursor. Used in the hero: a full aircraft exterior that
 * reveals its interior cutaway wherever you hover. Falls back to
 * touch-drag on touch devices (no persistent hover there).
 */
export default function XrayReveal({
  baseSrc,
  revealSrc,
  alt,
  fit = "cover",
  objectPosition = "center",
  radius = 160,
}: {
  baseSrc: string;
  revealSrc: string;
  alt: string;
  fit?: "cover" | "contain";
  objectPosition?: string;
  radius?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState(false);
  const objectFit = fit;

  function updatePos(clientX: number, clientY: number) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({
      x: ((clientX - rect.left) / rect.width) * 100,
      y: ((clientY - rect.top) / rect.height) * 100,
    });
  }

  const maskStyle = active
    ? {
        maskImage: `radial-gradient(circle ${radius}px at ${pos.x}% ${pos.y}%, black 60%, transparent 100%)`,
        WebkitMaskImage: `radial-gradient(circle ${radius}px at ${pos.x}% ${pos.y}%, black 60%, transparent 100%)`,
      }
    : { maskImage: "none", WebkitMaskImage: "none", opacity: 0 };

  return (
    <div
      ref={ref}
      className="group relative h-full w-full cursor-crosshair select-none"
      onMouseMove={(e) => updatePos(e.clientX, e.clientY)}
      onMouseEnter={(e) => {
        setActive(true);
        updatePos(e.clientX, e.clientY);
      }}
      onMouseLeave={() => setActive(false)}
      onTouchStart={(e) => {
        const t = e.touches[0];
        setActive(true);
        updatePos(t.clientX, t.clientY);
      }}
      onTouchMove={(e) => {
        const t = e.touches[0];
        updatePos(t.clientX, t.clientY);
      }}
      onTouchEnd={() => setActive(false)}
    >
      {/* Closed/exterior — always visible, the resting state */}
      <Image src={baseSrc} alt={alt} fill sizes="(min-width: 1024px) 50vw, 100vw" style={{ objectFit, objectPosition }} />

      {/* Interior — only shown through the cursor-following circle */}
      <div className="absolute inset-0 transition-opacity duration-200" style={maskStyle}>
        <Image src={revealSrc} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" style={{ objectFit, objectPosition }} />
      </div>

      <span
        className={`pointer-events-none absolute bottom-2 right-2 rounded-full bg-white px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-navy transition-opacity duration-300 ${
          active ? "opacity-0" : "opacity-80"
        }`}
      >
        Hover to look inside
      </span>
    </div>
  );
}
