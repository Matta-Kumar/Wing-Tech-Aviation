import Image from "next/image";
import type { ReactNode } from "react";

export default function PageStub({
  eyebrow,
  title,
  description,
  photo = "/images/pathway-airport-ops.jpg",
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  photo?: string;
  children?: ReactNode;
}) {
  return (
    <>
      <section className="relative flex min-h-[55vh] items-end overflow-hidden bg-navy-dark">
        <Image
          src={photo}
          alt=""
          fill
          sizes="100vw"
          priority
          style={{ objectFit: "cover", filter: "brightness(0.75) saturate(0.9)" }}
          className="opacity-90"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgb(6 16 29 / 0.55) 0%, rgb(6 16 29 / 0.9) 100%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-32">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-bright">
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-2xl font-heading text-4xl font-black uppercase tracking-wide text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-snug text-white/80">
            {description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        {children ?? (
          <p className="max-w-xl text-slate">
            Page content is coming from the content blueprint (
            <code className="font-mono text-sm">
              docs/Wing Tech Aviation Website.pdf
            </code>
            ) — this is a routing/design-system placeholder.
          </p>
        )}
      </section>
    </>
  );
}
