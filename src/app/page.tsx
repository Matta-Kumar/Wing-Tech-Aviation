import Image from "next/image";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import KenBurnsImage from "@/components/KenBurnsImage";
import InfoSection from "@/components/InfoSection";
import HeroContent from "@/components/HeroContent";
import ParallaxRow from "@/components/ParallaxRow";
import SpotlightReveal from "@/components/SpotlightReveal";

const pathways = [
  {
    href: "/cpl",
    photo: "/images/pathway-cpl-cockpit.jpg",
    tag: "DGCA Approved",
    label: "Commercial Pilot Licence",
    cta: "Explore CPL",
    description:
      "For students who aspire to pursue the pathway toward becoming a professional pilot. Learn about the academic requirements, training stages, medical considerations and aviation subjects involved in commercial pilot training.",
  },
  {
    href: "/ame",
    photo: "/images/pathway-ame-engine.jpg",
    tag: "DGCA Approved",
    label: "Aircraft Maintenance Engineering",
    cta: "Explore AME",
    description:
      "For students with an interest in aircraft, engineering and technical systems. Discover how aircraft maintenance professionals contribute to aviation safety and reliability.",
  },
  {
    href: "/cabin-crew",
    photo: "/images/pathway-cabin-crew.jpg",
    tag: null,
    label: "Cabin Crew",
    cta: "Explore Cabin Crew",
    description:
      "For students who enjoy communication, hospitality, teamwork and aviation. Understand the professional responsibilities involved in passenger service, safety and emergency procedures.",
  },
  {
    href: "/airport-management",
    photo: "/images/pathway-airport-ops.jpg",
    tag: null,
    label: "Airport Management & Operations",
    cta: "Explore Airport Management",
    description:
      "For students interested in airport operations, passenger services, ground handling and aviation management. Explore the many careers that keep airports functioning every day.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — full-screen cursor-spotlight reveal, matching the
          reference build exactly: SpotlightReveal fills the section
          (base aircraft image, cover-fit, slow zoom-out), HeroContent's
          three text blocks are absolutely positioned on top of it
          (top-centre heading, bottom-left caption, bottom-right
          description+CTAs) — not a side-by-side split, one full scene. */}
      <section className="relative min-h-screen overflow-hidden bg-navy" style={{ minHeight: "100dvh" }}>
        <SpotlightReveal
          baseSrc="/images/flight-outside.png"
          revealSrc="/images/flight-inside.png"
          alt="Wing Tech Aviation aircraft — hover to see inside"
        />
        <HeroContent />
      </section>

      {/* Pathways showcase — full-bleed photo/panel rows with true scroll
          parallax: the photo and text panel in each row are independent
          elements translating at different rates (see ParallaxRow), so
          they visibly drift apart/together as the row crosses the
          viewport, alternating which side the photo sits on. */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pb-10 pt-20">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Explore
            </p>
            <h2 className="mt-2 font-serif text-4xl font-semibold text-navy sm:text-5xl">
              Aviation career pathways
            </h2>
          </Reveal>
        </div>

        <div>
          {pathways.map((p, i) => (
            <ParallaxRow key={p.href} p={p} reversed={i % 2 === 1} dark={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* 1. Why Choose Wing Tech — deliberately photo-free, but not a repeat
          of the hairline-list treatment: an indexed editorial list (serif
          numerals) gives it its own identity before the photo-driven blocks
          that follow. */}
      <InfoSection
        tone="ivory"
        eyebrow="Why Wing Tech"
        heading="Why Choose Wing Tech Aviation?"
        columns={2}
        variant="numbered"
        items={[
          "Career-focused aviation education",
          "Programmes designed around aviation career pathways",
          "Guidance from experienced aviation professionals and faculty",
          "Practical learning opportunities where applicable",
          "Individual career counselling",
          "Student and parent support throughout the admissions process",
          "Convenient location in Madhapur, Hyderabad",
        ]}
        cta={{ href: "/about", label: "About Wing Tech Aviation" }}
      />

      {/* 2. Who Can Apply — large photo, left side. Only 3 items + a note,
          so the photo can carry more visual weight than the list. */}
      <InfoSection
        tone="white"
        eyebrow="Eligibility"
        heading="Who Can Apply?"
        intro="Our programmes are primarily designed for:"
        items={[
          "Students who have completed or are completing 10+2.",
          "Graduates seeking a career change into aviation.",
          "Students who want professional guidance before selecting an aviation career.",
        ]}
        note="Different programmes have different academic and other eligibility requirements."
        cta={{ href: "/eligibility", label: "Check Your Eligibility" }}
        photo={{
          src: "/images/eligibility-classroom.jpg",
          alt: "Young adults attentively listening to an instructor in a sunlit classroom",
          side: "left",
          size: "large",
          objectPosition: "left center",
        }}
      />

      {/* 3. Start With the Right Career Choice — smaller inset photo,
          right side, alongside the (larger) 2-column list. */}
      <InfoSection
        tone="ivory"
        eyebrow="Counselling"
        heading="Start With the Right Career Choice"
        intro="Choosing an aviation career is an important decision. Before applying, our admissions team helps students understand:"
        columns={2}
        items={[
          "Which aviation career best matches their interests.",
          "Academic eligibility.",
          "Training pathway.",
          "Medical or technical considerations where applicable.",
          "Career expectations.",
          "Questions parents may have before making an education decision.",
        ]}
        cta={{ href: "/contact", label: "Book Free Career Counselling" }}
        photo={{
          src: "/images/counselling-session.jpg",
          alt: "A counsellor talking through career options with a student",
          side: "right",
          size: "inset",
        }}
      />

      {/* 4. Upcoming Aviation Career Sessions — full-bleed dark photo band,
          the one true departure from the ivory/white rhythm on this page. */}
      <section className="relative overflow-hidden bg-navy-dark">
        <Image
          src="/images/career-session-audience.jpg"
          alt="An attentive audience at an aviation career awareness session"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 35%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgb(10 27 48 / 0.88) 0%, rgb(10 27 48 / 0.62) 45%, rgb(10 27 48 / 0.3) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgb(10 27 48 / 0.15) 0%, rgb(10 27 48 / 0.5) 100%)",
          }}
        />

        <Reveal className="relative mx-auto max-w-6xl px-6 py-28">
          <div className="max-w-xl">
            <p className="font-mono text-[0.65rem] font-medium uppercase tracking-wider text-gold-bright">
              Events
            </p>
            <h2 className="mt-2 font-serif text-4xl font-semibold text-white sm:text-5xl">
              Upcoming Aviation Career Sessions
            </h2>
            <p className="mt-4 text-white/70">
              Attend our aviation career awareness sessions to learn more
              about:
            </p>
            <ul className="mt-6 grid gap-x-8 sm:grid-cols-2">
              {[
                "Commercial Pilot pathways",
                "Aircraft Maintenance Engineering",
                "Cabin Crew careers",
                "Airport Operations careers",
              ].map((item) => (
                <li
                  key={item}
                  className="border-t border-hairline-on-dark py-3 text-sm text-white/85"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/contact" variant="link-light" className="mt-8">
              Register for the Next Session
            </Button>
          </div>
        </Reveal>
      </section>

      {/* 5. Parent Information — inset photo again, mirrored to the left
          side this time so the page doesn't settle into a left/right
          pattern of its own. */}
      <InfoSection
        tone="ivory"
        eyebrow="For Parents"
        heading="Parent Information"
        intro="We believe parents should have clear information before making an education decision. Our parent counselling sessions explain:"
        columns={2}
        items={[
          "Programme structure",
          "Eligibility",
          "Training pathway",
          "Fees and admissions process",
          "Career expectations",
          "Student support",
        ]}
        cta={{ href: "/contact", label: "Schedule Parent Counselling" }}
        photo={{
          src: "/images/parent-counselling.jpg",
          alt: "Parents in a counselling conversation with an admissions advisor",
          side: "left",
          size: "inset",
          objectPosition: "65% center",
        }}
      />

      {/* Final CTA — the closing bookend to the hero: same photo-driven,
          chamfered, navy-graded treatment, mirrored (chamfer at the top
          this time) so the page opens and closes on the same visual note
          instead of ending on flat, image-free text. */}
      <section className="clip-signature-start relative flex min-h-[640px] items-center overflow-hidden bg-navy-dark lg:min-h-[760px]">
        <KenBurnsImage
          src="/images/final-cta-golden-hour.jpg"
          alt="A passenger aircraft glowing in golden-hour light on the tarmac"
          objectPosition="center 40%"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgb(10 27 48 / 0.3) 0%, rgb(10 27 48 / 0.55) 45%, rgb(10 27 48 / 0.92) 100%)",
          }}
        />

        <Reveal className="relative mx-auto w-full max-w-6xl px-6 py-24 text-center">
          <p className="text-sm text-white/70">
            Take the first step by checking your eligibility or speaking
            with our admissions team.
          </p>
          <h2 className="mt-4 font-serif text-5xl font-semibold text-white sm:text-6xl md:text-7xl">
            Ready to explore a career in aviation?
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            <Button href="/eligibility" variant="primary">
              Check Eligibility
            </Button>
            <Button href="/contact" variant="link-light">
              Book Counselling
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
