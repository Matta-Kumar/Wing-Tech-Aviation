"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Button from "./Button";

type Pathway = {
  href: string;
  photo: string;
  tag: string | null;
  label: string;
  cta: string;
  description: string;
};

/**
 * True scroll parallax: the photo and the text panel are independent
 * elements that translate at different rates as the row crosses the
 * viewport, so they visibly drift apart/together rather than moving as
 * one rigid unit — this is what makes it read as parallax rather than a
 * plain scroll-reveal.
 */
export default function ParallaxRow({
  p,
  reversed,
  dark,
}: {
  p: Pathway;
  reversed: boolean;
  dark: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  // Tight offset window (row centre ±most of the viewport) rather than the
  // row's full enter-to-exit range — same pixel range, much less scroll
  // distance to cover it in, so the drift is actually visible per scroll
  // tick instead of averaging out over ~1400px of scrolling.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.15"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0px", "0px"] : ["-140px", "140px"]);
  const textY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0px", "0px"] : ["90px", "-90px"]);

  const photo = (
    <div className="relative h-[320px] overflow-hidden sm:h-[400px] lg:h-[480px]">
      <motion.div style={{ y: photoY }} className="absolute inset-x-0 -top-40 -bottom-40">
        <Image src={p.photo} alt={p.label} fill sizes="(min-width: 1024px) 50vw, 100vw" style={{ objectFit: "cover" }} />
      </motion.div>
    </div>
  );

  // The colored background must stay put and always fully cover the grid
  // cell — only the CONTENT inside it drifts. Applying the transform to
  // the background+content div together (as before) moves the color away
  // from part of the cell as it translates, exposing the page's white
  // background underneath at the row boundary. Same fix pattern as the
  // photo side: static outer box, transformed inner wrapper.
  const panel = (
    <div
      className={`relative h-full min-h-[320px] overflow-hidden px-10 py-16 sm:min-h-[400px] lg:min-h-[480px] lg:px-16 ${
        dark ? "bg-navy text-white" : "bg-ivory text-charcoal"
      }`}
    >
      <motion.div style={{ y: textY }} className="flex h-full flex-col justify-center">
        {p.tag && (
          <span
            className={`font-mono text-[0.65rem] font-medium uppercase tracking-wider ${
              dark ? "text-gold-bright" : "text-gold"
            }`}
          >
            {p.tag}
          </span>
        )}
        <h3 className={`mt-2 font-serif text-3xl font-semibold sm:text-4xl ${dark ? "text-white" : "text-navy"}`}>
          {p.label}
        </h3>
        <p className={`mt-4 max-w-sm text-sm leading-relaxed ${dark ? "text-white/70" : "text-slate"}`}>
          {p.description}
        </p>
        <Button href={p.href} variant={dark ? "link-light" : "link"} className="mt-6">
          {p.cta}
        </Button>
      </motion.div>
    </div>
  );

  return (
    <div ref={ref} className="grid grid-cols-1 overflow-hidden lg:grid-cols-2">
      {reversed ? (
        <>
          {panel}
          {photo}
        </>
      ) : (
        <>
          {photo}
          {panel}
        </>
      )}
    </div>
  );
}
