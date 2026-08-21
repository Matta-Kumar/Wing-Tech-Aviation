import Image from "next/image";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import KenBurnsImage from "@/components/KenBurnsImage";
import InfoSection from "@/components/InfoSection";

const journey = [
  "Academic eligibility.",
  "Medical fitness requirements.",
  "Aviation ground studies.",
  "Required examinations.",
  "Flight training.",
  "Further licensing steps according to applicable regulations.",
];

export default function CplPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-navy-dark">
        <KenBurnsImage
          src="/images/pathway-cpl-cockpit.jpg"
          alt="Aircraft cockpit instrument panel"
          priority
          objectPosition="center 40%"
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
            COMMERCIAL PILOT LICENCE · DGCA APPROVED
          </p>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-black uppercase leading-[0.98] tracking-wide text-white sm:text-5xl md:text-6xl">
            Explore the Commercial Pilot Pathway
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            For many students, becoming a professional pilot is a lifelong
            ambition. The journey toward commercial flying involves academic
            preparation, aviation knowledge, medical fitness, examinations
            and practical flight training.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">
            Our CPL pathway is designed to help students understand the
            process and prepare for the next stages of pilot training.
          </p>
        </div>
      </section>

      <InfoSection
        tone="white"
        eyebrow="Who It's For"
        heading="Who Is This Pathway For?"
        intro="Students who:"
        columns={1}
        items={[
          "Have completed 10+2 with the required subjects.",
          "Enjoy mathematics and physics.",
          "Have an interest in aviation and flying.",
          "Are prepared for a disciplined training environment.",
          "Are willing to understand the medical and regulatory requirements involved in pilot training.",
        ]}
        cta={{ href: "/eligibility", label: "Check CPL Eligibility" }}
      />

      <InfoSection
        tone="ivory"
        eyebrow="Curriculum"
        heading="What You Will Learn About"
        intro="The CPL pathway introduces students to aviation subjects such as:"
        columns={2}
        items={[
          "Air Navigation",
          "Aviation Meteorology",
          "Air Regulations",
          "Aircraft Technical Knowledge",
          "Principles of Flight",
          "Aviation English and Communication",
          "Flight Planning",
          "Aviation Safety",
        ]}
        cta={{ href: "/eligibility", label: "Check CPL Eligibility" }}
        photo={{
          src: "/images/cpl-training-aircraft-cockpit.jpg",
          alt: "Cockpit of a single-engine training aircraft",
          side: "left",
          size: "inset",
        }}
      />

      {/* Understanding the Pilot Journey — numbered stages */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <div className="lg:grid lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                  The Journey
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-navy sm:text-4xl">
                  Understanding the Pilot Journey
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate">
                  A typical pilot-training journey involves several stages,
                  which may include:
                </p>
              </div>
              <div className="mt-8 lg:col-span-8 lg:mt-0">
                <ol className="max-w-xl">
                  {journey.map((step, i) => (
                    <li
                      key={step}
                      className="flex gap-6 border-t border-hairline py-3"
                    >
                      <span className="font-mono text-sm text-gold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-charcoal">{step}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 max-w-xl text-sm text-slate">
                  The exact pathway depends on the student&apos;s
                  circumstances and applicable aviation requirements.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Academic Eligibility + Medical Considerations — contained photo
          pairing (photo right, both text blocks stacked left), same
          max-w-6xl column every other section on the site uses. */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-16">
            <div className="space-y-10 lg:col-span-3">
              <Reveal>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                  Academics
                </p>
                <h2 className="mt-2 font-serif text-2xl font-semibold text-navy">
                  Academic Eligibility
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-charcoal">
                  Students considering the CPL pathway should generally have
                  completed 10+2 with Physics and Mathematics or an accepted
                  equivalent qualification.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-charcoal">
                  Our admissions team reviews academic documents before
                  counselling students further.
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                  Medical
                </p>
                <h2 className="mt-2 font-serif text-2xl font-semibold text-navy">
                  Medical Considerations
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-charcoal">
                  Medical fitness is an important aspect of professional
                  pilot training.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-charcoal">
                  Before making a major financial commitment, students are
                  encouraged to understand the applicable aviation medical
                  process and discuss any concerns with the appropriate
                  authorised medical professionals.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-charcoal">
                  The admissions team can explain the process but cannot
                  guarantee medical clearance.
                </p>
              </Reveal>
            </div>
            <div className="relative h-[280px] sm:h-[360px] lg:col-span-2 lg:h-auto lg:min-h-[400px]">
              <Image
                src="/images/cpl-medical-checkup.jpg"
                alt="A doctor conducting a medical examination with a patient"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      <InfoSection
        tone="white"
        eyebrow="Where It Leads"
        heading="Career Pathways"
        intro="Students pursuing the commercial pilot pathway may eventually explore careers such as:"
        columns={2}
        items={[
          "Airline Pilot",
          "Charter Pilot",
          "Corporate Aviation Pilot",
          "Flight Instructor",
          "Other professional flying roles, subject to applicable qualifications and experience.",
        ]}
        cta={{ href: "/career-pathways", label: "Take the Career Assessment" }}
      />

      <InfoSection
        tone="ivory"
        eyebrow="Next Step"
        heading="Is CPL Right for You?"
        intro="Our career counselling session helps students and parents discuss:"
        columns={2}
        items={[
          "Academic eligibility",
          "Medical considerations",
          "Training stages",
          "Financial planning",
          "Career expectations",
        ]}
        cta={{ href: "/eligibility", label: "Check CPL Eligibility" }}
        photo={{
          src: "/images/counselling-session.jpg",
          alt: "A counsellor talking through career options with a student",
          side: "left",
          size: "inset",
        }}
      />

      <section className="bg-white">
        <Reveal className="mx-auto max-w-6xl px-6 py-20 text-center">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Button href="/eligibility" variant="primary">
              Check CPL Eligibility
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
