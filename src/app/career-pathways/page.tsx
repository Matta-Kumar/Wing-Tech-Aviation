import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import KenBurnsImage from "@/components/KenBurnsImage";

export const metadata: Metadata = {
  title: "Career Pathways",
  description:
    "Aviation offers more than one career. Compare the CPL, AME, Cabin Crew and Airport Management pathways to find the one suited to your interests and goals.",
};

const pathways = [
  {
    title: "Commercial Pilot",
    href: "/cpl",
    cta: "Explore CPL",
    photo: "/images/pathway-cpl-cockpit.jpg",
    interested: ["Flying", "Physics", "Mathematics", "Decision-making"],
    journey:
      "10+2 → Eligibility → Medical process → Ground studies → Flight training → Further licensing stages",
  },
  {
    title: "Aircraft Maintenance Engineering",
    href: "/ame",
    cta: "Explore AME",
    photo: "/images/pathway-ame-engine.jpg",
    interested: ["Engineering", "Machines", "Problem-solving", "Technical systems"],
    journey:
      "10+2 PCM → Technical learning → Practical training → Experience → Further professional progression",
  },
  {
    title: "Cabin Crew",
    href: "/cabin-crew",
    cta: "Explore Cabin Crew",
    photo: "/images/pathway-cabin-crew.jpg",
    interested: ["Communication", "Hospitality", "Teamwork", "Travel"],
    journey:
      "10+2 → Professional training → Interview preparation → Employer selection process",
  },
  {
    title: "Airport Management",
    href: "/airport-management",
    cta: "Explore Airport Management",
    photo: "/images/pathway-airport-ops.jpg",
    interested: ["Operations", "Organisation", "Customer service", "Airports"],
    journey:
      "10+2 → Airport operations training → Career preparation → Employer selection process",
  },
];

export default function CareerPathwaysPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-navy-dark">
        <KenBurnsImage
          src="/images/hero-cockpit-dusk.jpg"
          alt="Aircraft cockpit at dusk"
          priority
          objectPosition="center 45%"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgb(6 16 29 / 0.35) 0%, rgb(6 16 29 / 0.55) 30%, rgb(6 16 29 / 0.88) 62%, rgb(6 16 29 / 0.97) 100%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-32">
          <p className="font-mono text-xs tracking-[0.2em] text-gold-bright">
            CAREER PATHWAYS
          </p>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-black uppercase leading-[0.98] tracking-wide text-white sm:text-5xl">
            Aviation Offers More Than One Career
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            The aviation industry includes a wide range of professional
            roles. Choosing the right pathway depends on your interests,
            academic background and career goals.
          </p>
        </div>
      </section>

      {/* 4-pathway comparison — photo/text rows */}
      <section className="bg-white">
        <div className="divide-y divide-hairline">
          {pathways.map((p, i) => (
            <Reveal key={p.title}>
              <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-14 sm:grid-cols-12 sm:gap-10">
                <div className="relative h-48 overflow-hidden sm:col-span-4 sm:h-full">
                  <Image
                    src={p.photo}
                    alt={p.title}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="sm:col-span-8">
                  <p className="font-mono text-xs tracking-[0.2em] text-gold">
                    PATHWAY {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 font-serif text-2xl font-semibold text-navy sm:text-3xl">
                    {p.title}
                  </h2>

                  <p className="mt-5 text-xs font-medium uppercase tracking-wider text-slate">
                    Interested in
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-1">
                    {p.interested.map((item) => (
                      <li key={item} className="text-sm text-charcoal">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 text-xs font-medium uppercase tracking-wider text-slate">
                    Journey
                  </p>
                  <p className="mt-2 max-w-2xl font-mono text-xs leading-relaxed text-charcoal sm:text-sm">
                    {p.journey}
                  </p>

                  <Button href={p.href} variant="link" className="mt-6">
                    {p.cta}
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Which Pathway Is Right for You? */}
      <section className="bg-ivory">
        <Reveal className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="font-serif text-4xl font-semibold text-navy sm:text-5xl">
            Which Pathway Is Right for You?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate">
            Take our aviation career assessment or speak with a counsellor.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            <Button href="/eligibility" variant="primary">
              Take the Career Assessment
            </Button>
            <Button href="/contact" variant="link">
              Book Career Counselling
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
