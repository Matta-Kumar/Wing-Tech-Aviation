import Image from "next/image";
import Button from "./Button";
import Reveal from "./Reveal";

type Photo = {
  src: string;
  alt: string;
  /** Which side of the row the photo sits on at desktop width. */
  side?: "left" | "right";
  /** "large" gives the photo an even 50/50 split; "inset" (default) uses
   *  a narrower 2/5 column so the list still has room to breathe. No card,
   *  no radius, no shadow on the photo itself — but contained within the
   *  same `max-w-6xl` column every other section on the site uses (see
   *  note below), not edge-to-edge full-bleed. */
  size?: "large" | "inset";
  objectPosition?: string;
};

/**
 * Photo and no-photo blocks share the exact same `max-w-6xl mx-auto px-6
 * py-20` outer container. An earlier version made the photo variant
 * edge-to-edge full-bleed while the no-photo variant stayed contained —
 * the page width visibly jumped between adjacent sections as you scrolled.
 * True full-bleed (edge-to-edge, no container) is reserved for the hero
 * and the home page's `ParallaxRow` pathway rows — the site's few
 * deliberate "big moment" sections. `InfoSection` is used dozens of times
 * across every page for routine content blocks and must stay visually
 * consistent with itself regardless of whether a given call has a photo.
 */

export default function InfoSection({
  eyebrow,
  heading,
  intro,
  items,
  note,
  cta,
  tone = "ivory",
  columns = 1,
  photo,
  variant = "default",
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
  items: string[];
  note?: string;
  cta: { href: string; label: string };
  tone?: "ivory" | "white";
  columns?: 1 | 2;
  photo?: Photo;
  /** "numbered" swaps the hairline-divided list for an indexed editorial
   *  list (serif numerals, no dividers) — used to give a photo-free block
   *  its own typographic identity instead of repeating the hairline-list
   *  treatment used everywhere else. */
  variant?: "default" | "numbered";
}) {
  const list =
    variant === "numbered" ? (
      <ol
        className={`mt-6 grid gap-x-10 gap-y-7 ${
          columns === 2 ? "sm:grid-cols-2" : "max-w-xl"
        }`}
      >
        {items.map((item, i) => (
          <li key={item} className="flex gap-4">
            <span className="font-serif text-xl font-semibold text-gold tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="pt-0.5 text-sm leading-relaxed text-charcoal">
              {item}
            </span>
          </li>
        ))}
      </ol>
    ) : (
      <ul
        className={`mt-6 grid gap-x-8 ${
          columns === 2 ? "sm:grid-cols-2" : "max-w-xl"
        }`}
      >
        {items.map((item) => (
          <li
            key={item}
            className="border-t border-hairline py-3 text-sm text-charcoal"
          >
            {item}
          </li>
        ))}
      </ul>
    );

  if (photo) {
    const side = photo.side ?? "right";
    const large = photo.size === "large";

    // Below lg the columns stack, so the photo needs its own explicit
    // height. At lg+ they sit side by side in one grid row — `lg:h-auto`
    // plus a `min-h` floor lets the grid's default stretch behaviour size
    // the photo to match whatever height the text column actually needs
    // (e.g. a long two-column list), instead of a fixed px height that
    // leaves the image short of the row's real height when text content
    // runs long.
    const photoEl = (
      <div
        className={`relative h-[280px] sm:h-[360px] lg:h-auto ${
          large ? "lg:min-h-[480px]" : "lg:min-h-[400px]"
        } ${large ? "" : "lg:col-span-2"}`}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={large ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 40vw, 100vw"}
          style={{
            objectFit: "cover",
            objectPosition: photo.objectPosition ?? "center",
          }}
        />
      </div>
    );

    const contentEl = (
      <div className={`flex flex-col justify-center ${large ? "" : "lg:col-span-3"}`}>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
            {eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-navy sm:text-4xl">
            {heading}
          </h2>
          {intro && <p className="mt-4 max-w-xl text-slate">{intro}</p>}
          {list}
          {note && <p className="mt-6 text-sm text-slate">{note}</p>}
          <Button href={cta.href} variant="link" className="mt-8">
            {cta.label}
          </Button>
        </Reveal>
      </div>
    );

    return (
      <section className={tone === "ivory" ? "bg-ivory" : "bg-white"}>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div
            className={`grid grid-cols-1 gap-8 lg:gap-16 ${
              large ? "lg:grid-cols-2" : "lg:grid-cols-5"
            }`}
          >
            {side === "left" ? (
              <>
                {photoEl}
                {contentEl}
              </>
            ) : (
              <>
                {contentEl}
                {photoEl}
              </>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={tone === "ivory" ? "bg-ivory" : "bg-white"}>
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                {eyebrow}
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-navy sm:text-4xl">
                {heading}
              </h2>
            </div>

            <div className="mt-8 lg:col-span-8 lg:mt-0">
              {intro && <p className="max-w-2xl text-slate">{intro}</p>}
              {list}
              {note && <p className="mt-6 text-sm text-slate">{note}</p>}
              <Button href={cta.href} variant="link" className="mt-8">
                {cta.label}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
