import Image from "next/image";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import KenBurnsImage from "@/components/KenBurnsImage";
import InfoSection from "@/components/InfoSection";

const profileFields = [
  { label: "Designation", value: "To be announced" },
  { label: "Aviation Experience", value: "To be announced" },
  { label: "Area of Expertise", value: "To be announced" },
];

export default function FacultyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-navy-dark">
        <KenBurnsImage
          src="/images/faculty-mentor.jpg"
          alt="Instructor explaining a concept on a whiteboard"
          priority
          objectPosition="center 30%"
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
            FACULTY
          </p>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-black uppercase leading-[0.98] tracking-wide text-white sm:text-5xl md:text-6xl">
            Learn From Aviation Professionals
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            Our faculty and academic support team focus on helping students
            understand aviation concepts, professional expectations and the
            learning pathway associated with their chosen programme.
          </p>
        </div>
      </section>

      <InfoSection
        tone="white"
        eyebrow="Teaching Philosophy"
        heading="Faculty Approach"
        intro="Our teaching philosophy emphasises:"
        columns={2}
        items={[
          "Conceptual understanding",
          "Practical examples",
          "Aviation safety",
          "Professional discipline",
          "Communication skills",
          "Student mentoring",
        ]}
        cta={{ href: "/about", label: "About Wing Tech Aviation" }}
      />

      <InfoSection
        tone="ivory"
        eyebrow="Expertise"
        heading="Areas of Expertise"
        intro="Faculty and trainers may contribute across areas such as:"
        columns={2}
        items={[
          "Aviation subjects",
          "Aircraft systems",
          "Airport operations",
          "Cabin service",
          "Communication",
          "Career counselling",
        ]}
        cta={{ href: "/career-pathways", label: "Take the Career Assessment" }}
        photo={{
          src: "/images/eligibility-classroom.jpg",
          alt: "Young adults attentively listening to an instructor in a sunlit classroom",
          side: "left",
          size: "inset",
        }}
      />

      {/* Student Mentoring — contained, matching every other section's
          max-w-6xl column. */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Mentoring
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-navy sm:text-4xl">
              Student Mentoring
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate">
              Faculty members support students through:
            </p>
            <ul className="mt-6 grid max-w-xl gap-x-8 sm:grid-cols-2">
              {[
                "Academic guidance",
                "Clarifying concepts",
                "Career discussions",
                "Professional development",
                "Preparation for the next stage of their aviation journey",
              ].map((item) => (
                <li
                  key={item}
                  className="border-t border-hairline py-2.5 text-sm text-charcoal"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Meet Our Faculty — paired with a generic mentoring-environment
          photo (not a specific faculty headshot — those are still pending
          verification) alongside the placeholder profile slots. */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-16">
              <div className="lg:col-span-3">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                  Our Team
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-navy sm:text-4xl">
                  Meet Our Faculty
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate">
                  Only publish credentials that have been verified and
                  approved.
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate">
                  Profile listings for our teaching team are being finalised
                  — sample profile slots are shown below as a preview of the
                  format.
                </p>

                <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2">
                  {[1, 2].map((slot) => (
                    <div key={slot} className="border-t border-hairline pt-6">
                      <div className="flex items-center gap-5">
                        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-sm border border-hairline bg-white">
                          <span className="text-[0.6rem] uppercase tracking-wider text-slate">
                            Photo
                            <br />
                            Pending
                          </span>
                        </div>
                        <div>
                          <h3 className="font-serif text-lg font-semibold text-navy">
                            Faculty Name Pending
                          </h3>
                          <p className="text-xs uppercase tracking-wider text-gold">
                            Profile awaiting verification
                          </p>
                        </div>
                      </div>
                      <dl className="mt-5 space-y-2">
                        {profileFields.map((f) => (
                          <div key={f.label} className="flex justify-between gap-4 text-sm">
                            <dt className="text-slate">{f.label}</dt>
                            <dd className="text-charcoal">{f.value}</dd>
                          </div>
                        ))}
                      </dl>
                      <p className="mt-4 text-sm leading-relaxed text-slate">
                        Short biography to be published once credentials have
                        been verified and approved.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-[280px] sm:h-[360px] lg:col-span-2 lg:h-auto lg:min-h-[400px]">
                <Image
                  src="/images/faculty-mentoring-student.jpg"
                  alt="A mentor explaining a concept to a student"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <Reveal className="mx-auto max-w-6xl px-6 py-20 text-center">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Button href="/eligibility" variant="primary">
              Check Your Eligibility
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
