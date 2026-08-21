"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

export default function KenBurnsImage({
  src,
  alt,
  priority = false,
  objectPosition = "center",
  parallax = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  objectPosition?: string;
  parallax?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], parallax && !reduceMotion ? ["0%", "18%"] : ["0%", "0%"]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ y }}
        initial={{ scale: 1 }}
        animate={reduceMotion ? { scale: 1 } : { scale: 1.08 }}
        transition={{ duration: 26, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition,
            filter: "brightness(0.8) saturate(0.9)",
          }}
        />
      </motion.div>
    </div>
  );
}
