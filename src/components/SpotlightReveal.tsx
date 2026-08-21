"use client";

import { useEffect, useRef, useState } from "react";

const SPOTLIGHT_R = 260;

function RevealLayer({
  image,
  cursorX,
  cursorY,
}: {
  image: string;
  cursorX: number;
  cursorY: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [maskUrl, setMaskUrl] = useState<string | null>(null);

  useEffect(() => {
    function resize() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const gradient = ctx.createRadialGradient(cursorX, cursorY, 0, cursorX, cursorY, SPOTLIGHT_R);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.4, "rgba(255,255,255,1)");
    gradient.addColorStop(0.6, "rgba(255,255,255,0.75)");
    gradient.addColorStop(0.75, "rgba(255,255,255,0.4)");
    gradient.addColorStop(0.88, "rgba(255,255,255,0.12)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(cursorX, cursorY, SPOTLIGHT_R, 0, Math.PI * 2);
    ctx.fill();

    setMaskUrl(canvas.toDataURL());
  }, [cursorX, cursorY]);

  return (
    <>
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0" style={{ display: "none" }} />
      <div
        className="pointer-events-none absolute inset-0 z-30 bg-contain bg-center bg-no-repeat sm:bg-cover"
        style={{
          backgroundImage: `url(${image})`,
          maskImage: maskUrl ? `url(${maskUrl})` : undefined,
          WebkitMaskImage: maskUrl ? `url(${maskUrl})` : undefined,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
        }}
      />
    </>
  );
}

/**
 * A cursor-following spotlight that reveals a second image through a soft
 * circular mask over a base image — the hero's signature interaction.
 * Cursor position is eased (lerped) toward the raw pointer position every
 * animation frame, giving the spotlight a soft trailing feel rather than
 * snapping instantly. Mirrors the exact mechanic used on the reference
 * (Lithos) hero, adapted to this component's own base/reveal images.
 *
 * Below `sm`, the background uses `bg-contain` instead of `bg-cover` — on
 * a narrow/tall mobile viewport, `cover` crops the wide aircraft image
 * down to an unrecognisable close-up of one section of fuselage; `contain`
 * keeps the whole aircraft visible (letterboxed against the navy section
 * background either side) so it stays a recognisable, "interactive"
 * object rather than abstract background texture. Touch devices get
 * touchstart/move/end in place of hover so the reveal still works there.
 */
export default function SpotlightReveal({
  baseSrc,
  revealSrc,
  alt,
}: {
  baseSrc: string;
  revealSrc: string;
  alt: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -999, y: -999 });
  const smooth = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number | undefined>(undefined);
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });
  const [hinted, setHinted] = useState(false);

  useEffect(() => {
    function setFromClient(clientX: number, clientY: number) {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouse.current = { x: clientX - rect.left, y: clientY - rect.top };
      setHinted(true);
    }
    function onMove(e: MouseEvent) {
      setFromClient(e.clientX, e.clientY);
    }
    function onTouchMove(e: TouchEvent) {
      const t = e.touches[0];
      if (t) setFromClient(t.clientX, t.clientY);
    }
    function onTouchEnd() {
      mouse.current = { x: -999, y: -999 };
    }

    const el = containerRef.current;
    el?.addEventListener("mousemove", onMove);
    el?.addEventListener("touchstart", onTouchMove, { passive: true });
    el?.addEventListener("touchmove", onTouchMove, { passive: true });
    el?.addEventListener("touchend", onTouchEnd);

    function loop() {
      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1;
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1;
      setCursorPos({ x: smooth.current.x, y: smooth.current.y });
      rafRef.current = requestAnimationFrame(loop);
    }
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      el?.removeEventListener("mousemove", onMove);
      el?.removeEventListener("touchstart", onTouchMove);
      el?.removeEventListener("touchmove", onTouchMove);
      el?.removeEventListener("touchend", onTouchEnd);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 cursor-crosshair touch-none"
      onMouseLeave={() => {
        mouse.current = { x: -999, y: -999 };
      }}
    >
      <div
        className="hero-zoom absolute inset-0 bg-contain bg-center bg-no-repeat sm:bg-cover"
        style={{ backgroundImage: `url(${baseSrc})` }}
        role="img"
        aria-label={alt}
      />
      <RevealLayer image={revealSrc} cursorX={cursorPos.x} cursorY={cursorPos.y} />

      <span
        className={`pointer-events-none absolute bottom-6 right-6 z-40 hidden rounded-full bg-white px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-navy transition-opacity duration-300 sm:block ${
          hinted ? "opacity-0" : "opacity-80"
        }`}
      >
        Hover to look inside
      </span>
    </div>
  );
}
