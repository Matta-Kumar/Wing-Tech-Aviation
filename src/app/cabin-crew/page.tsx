import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import KenBurnsImage from "@/components/KenBurnsImage";
import InfoSection from "@/components/InfoSection";

export default function CabinCrewPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-navy-dark">
        <KenBurnsImage
          src="/images/pathway-cabin-crew.jpg"
          alt="Cabin crew member at an aircraft door"
          priority
          objectPosition="center 35%"
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
            CABIN CREW
          </p>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-black uppercase leading-[0.98] tracking-wide text-white sm:text-5xl md:text-6xl">
            Build a Career in Cabin Operations
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            Cabin crew professionals are responsible for much more than
            hospitality. Their role combines passenger service, safety,
            communication, teamwork and emergency preparedness.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">
            Our Cabin Crew programme is designed to introduce students to the
            professional standards expected in cabin operations.
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
          "Enjoy interacting with people.",
          "Communicate confidently.",
          "Are willing to work as part of a team.",
          "Can remain calm under pressure.",
          "Have an interest in aviation and customer service.",
        ]}
        cta={{ href: "/eligibility", label: "Check Cabin Crew Eligibility" }}
      />

      <InfoSection
        tone="ivory"
        eyebrow="Curriculum"
        heading="Learning Areas"
        intro="The programme introduces areas such as:"
        columns={2}
        items={[
          "Cabin safety awareness",
          "Passenger service",
          "Professional communication",
          "Grooming and presentation",
          "Emergency procedures",
          "Teamwork",
          "Customer handling",
          "Aviation terminology",
          "Interview preparation",
        ]}
        cta={{ href: "/eligibility", label: "Check Cabin Crew Eligibility" }}
        photo={{
          src: "/images/cabin-crew-training-room.jpg",
          alt: "Cabin crew trainees practising safety demonstration positions",
          side: "left",
          size: "inset",
        }}
      />

      <InfoSection
        tone="white"
        eyebrow="Skill-Building"
        heading="Professional Skills"
        intro="Students develop skills in:"
        columns={2}
        items={[
          "Communication",
          "Listening",
          "Empathy",
          "Confidence",
          "Professional etiquette",
          "Conflict handling",
          "Teamwork",
        ]}
        cta={{ href: "/eligibility", label: "Check Cabin Crew Eligibility" }}
      />

      <InfoSection
        tone="ivory"
        eyebrow="Where It Leads"
        heading="Career Pathways"
        intro="Students may eventually explore opportunities in areas such as:"
        columns={1}
        items={[
          "Cabin Crew",
          "Passenger Service",
          "Aviation Hospitality",
          "Customer Experience",
          "Airline Ground Services",
        ]}
        note="Career outcomes depend on individual performance and employer selection processes."
        cta={{ href: "/career-pathways", label: "Take the Career Assessment" }}
        photo={{
          src: "/images/cabin-crew-aisle-service.jpg",
          alt: "A cabin crew member walking the aisle attending to passengers",
          side: "right",
          size: "inset",
        }}
      />

      <InfoSection
        tone="white"
        eyebrow="Next Step"
        heading="Career Assessment"
        intro="Our Cabin Crew assessment evaluates:"
        columns={2}
        items={[
          "Communication",
          "Service orientation",
          "Confidence",
          "Teamwork",
          "Career suitability",
        ]}
        cta={{
          href: "/eligibility",
          label: "Take the Cabin Crew Career Assessment",
        }}
      />

      <section className="bg-ivory">
        <Reveal className="mx-auto max-w-6xl px-6 py-20 text-center">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Button href="/eligibility" variant="primary">
              Take the Cabin Crew Career Assessment
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
