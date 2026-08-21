import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import KenBurnsImage from "@/components/KenBurnsImage";
import InfoSection from "@/components/InfoSection";

export default function AmePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-navy-dark">
        <KenBurnsImage
          src="/images/pathway-ame-engine.jpg"
          alt="Close-up of an aircraft turbine engine"
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
            AIRCRAFT MAINTENANCE ENGINEERING · DGCA APPROVED
          </p>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-black uppercase leading-[0.98] tracking-wide text-white sm:text-5xl md:text-6xl">
            Build a Career in Aircraft Engineering
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            Aircraft Maintenance Engineering is an aviation career for
            students who are interested in engineering, mechanical systems,
            electrical systems and aircraft technology.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">
            Aircraft maintenance professionals play an important role in
            ensuring that aircraft are inspected, maintained and released for
            service in accordance with applicable requirements.
          </p>
        </div>
      </section>

      <InfoSection
        tone="white"
        eyebrow="Who It's For"
        heading="Who Is This Programme For?"
        intro="Students who:"
        columns={1}
        items={[
          "Have completed 10+2 with the required science subjects.",
          "Enjoy mathematics and physics.",
          "Are interested in mechanical or electrical systems.",
          "Prefer technical problem-solving.",
          "Want to work close to aircraft and aviation technology.",
        ]}
        cta={{ href: "/eligibility", label: "Check AME Eligibility" }}
      />

      <InfoSection
        tone="ivory"
        eyebrow="Curriculum"
        heading="Learning Areas"
        intro="Students are introduced to topics such as:"
        columns={2}
        items={[
          "Aircraft structures",
          "Aircraft systems",
          "Basic aerodynamics",
          "Electrical systems",
          "Mechanical systems",
          "Aviation safety",
          "Maintenance practices",
          "Technical documentation",
          "Human factors",
        ]}
        cta={{ href: "/eligibility", label: "Check AME Eligibility" }}
        photo={{
          src: "/images/ame-hangar-technicians.jpg",
          alt: "Technicians working on a small aircraft inside a hangar",
          side: "left",
          size: "inset",
        }}
      />

      <InfoSection
        tone="white"
        eyebrow="Aptitude"
        heading="Why Technical Students Choose AME"
        intro="AME may suit students who enjoy:"
        columns={1}
        items={[
          "Understanding how machines work.",
          "Diagnosing technical issues.",
          "Working with tools and systems.",
          "Following procedures carefully.",
          "Learning continuously as technology evolves.",
        ]}
        cta={{ href: "/eligibility", label: "Check AME Eligibility" }}
      />

      <InfoSection
        tone="ivory"
        eyebrow="Where It Leads"
        heading="Career Pathways"
        intro="Depending on qualifications, training and experience, students may eventually explore roles associated with:"
        columns={2}
        items={[
          "Aircraft maintenance",
          "Maintenance organisations",
          "Airline engineering departments",
          "Aviation technical support",
          "Related aerospace technical careers",
        ]}
        cta={{ href: "/career-pathways", label: "Take the Career Assessment" }}
        photo={{
          src: "/images/ame-hangar-wide.jpg",
          alt: "Small aircraft parked inside a wide maintenance hangar",
          side: "right",
          size: "inset",
        }}
      />

      <InfoSection
        tone="white"
        eyebrow="Next Step"
        heading="Admissions Assessment"
        intro="Our AME counselling process includes:"
        columns={2}
        items={[
          "Academic review.",
          "Technical aptitude discussion.",
          "Career counselling.",
          "Parent interaction where appropriate.",
        ]}
        cta={{ href: "/eligibility", label: "Take the AME Career Assessment" }}
      />

      <section className="bg-ivory">
        <Reveal className="mx-auto max-w-6xl px-6 py-20 text-center">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Button href="/eligibility" variant="primary">
              Take the AME Career Assessment
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
