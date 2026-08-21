import { ArrowRight } from "@phosphor-icons/react/ssr";
import Reveal from "@/components/Reveal";
import KenBurnsImage from "@/components/KenBurnsImage";
import Image from "next/image";

const overview = [
  {
    programme: "CPL",
    items: ["10+2.", "Physics.", "Mathematics.", "An interest in professional flying."],
    note: "Further medical and regulatory requirements apply.",
  },
  {
    programme: "AME",
    items: ["10+2.", "Physics.", "Chemistry.", "Mathematics."],
    note: "A technical aptitude assessment may also be recommended.",
  },
  {
    programme: "Cabin Crew",
    items: ["10+2.", "Good communication skills.", "An interest in passenger service and aviation."],
    note: "Employer-specific requirements may vary.",
  },
  {
    programme: "Airport Management",
    items: ["10+2.", "Communication skills.", "An interest in airport operations."],
    note: null,
  },
];

const nextSteps = [
  "We review your academic background.",
  "An admissions counsellor contacts you.",
  "We discuss your career interests.",
  "If required, we recommend an assessment or counselling session.",
  "We guide you through the next steps.",
];

const inputClass =
  "mt-2 w-full rounded-sm border border-hairline bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-slate/60 focus:border-navy focus:outline-none";
const labelClass = "block text-sm font-medium text-charcoal";

export default function EligibilityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-navy-dark">
        <KenBurnsImage
          src="/images/eligibility-classroom.jpg"
          alt="Young adults attentively listening to an instructor in a sunlit classroom"
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
            ELIGIBILITY
          </p>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-black uppercase leading-[0.98] tracking-wide text-white sm:text-5xl">
            Check Your Eligibility
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            Different aviation careers have different requirements.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">
            Complete our short eligibility form and our admissions team will
            help identify the most suitable pathway.
          </p>
        </div>
      </section>

      {/* Eligibility Overview */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Overview
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-navy sm:text-4xl">
              Eligibility Overview
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {overview.map((o) => (
              <Reveal key={o.programme}>
                <div className="border-t border-hairline pt-5">
                  <h3 className="font-serif text-xl font-semibold text-navy">
                    {o.programme}
                  </h3>
                  <p className="mt-2 text-sm text-slate">
                    Generally suitable for students with:
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {o.items.map((item) => (
                      <li key={item} className="text-sm text-charcoal">
                        {item}
                      </li>
                    ))}
                  </ul>
                  {o.note && (
                    <p className="mt-3 text-sm text-slate">{o.note}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Form */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Apply
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-navy sm:text-4xl">
              Eligibility Form
            </h2>

            <div className="mt-10 lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start">
            <div className="relative mb-10 aspect-[4/3] overflow-hidden rounded-md shadow-md lg:col-span-4 lg:mb-0">
              <Image
                src="/images/eligibility-signing-form.jpg"
                alt="A student filling in an application form"
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <form className="lg:col-span-8">
              <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="studentName">
                    Student Name
                  </label>
                  <input
                    className={inputClass}
                    type="text"
                    id="studentName"
                    name="studentName"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="mobile">
                    Mobile Number
                  </label>
                  <input
                    className={inputClass}
                    type="tel"
                    id="mobile"
                    name="mobile"
                    autoComplete="tel"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="email">
                    Email
                  </label>
                  <input
                    className={inputClass}
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="dob">
                    Date of Birth
                  </label>
                  <input
                    className={inputClass}
                    type="date"
                    id="dob"
                    name="dob"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="city">
                    City
                  </label>
                  <input
                    className={inputClass}
                    type="text"
                    id="city"
                    name="city"
                    autoComplete="address-level2"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="yearOfPassing">
                    Year of Passing
                  </label>
                  <input
                    className={inputClass}
                    type="text"
                    id="yearOfPassing"
                    name="yearOfPassing"
                    inputMode="numeric"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="board">
                    Board
                  </label>
                  <input
                    className={inputClass}
                    type="text"
                    id="board"
                    name="board"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="preferredProgramme">
                    Preferred Programme
                  </label>
                  <select
                    className={inputClass}
                    id="preferredProgramme"
                    name="preferredProgramme"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a programme
                    </option>
                    <option value="cpl">Commercial Pilot Licence (CPL)</option>
                    <option value="ame">
                      Aircraft Maintenance Engineering (AME)
                    </option>
                    <option value="cabin-crew">Cabin Crew</option>
                    <option value="airport-management">
                      Airport Management &amp; Operations
                    </option>
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="physics">
                    Physics
                  </label>
                  <input
                    className={inputClass}
                    type="text"
                    id="physics"
                    name="physics"
                    placeholder="Marks / percentage"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="mathematics">
                    Mathematics
                  </label>
                  <input
                    className={inputClass}
                    type="text"
                    id="mathematics"
                    name="mathematics"
                    placeholder="Marks / percentage"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="chemistry">
                    Chemistry
                  </label>
                  <input
                    className={inputClass}
                    type="text"
                    id="chemistry"
                    name="chemistry"
                    placeholder="Marks / percentage"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="percentage">
                    Percentage
                  </label>
                  <input
                    className={inputClass}
                    type="text"
                    id="percentage"
                    name="percentage"
                    placeholder="Overall percentage"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group mt-10 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-200 hover:bg-navy-dark"
              >
                Submit
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </button>
            </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <div className="lg:grid lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                  Next
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-navy sm:text-4xl">
                  What Happens Next?
                </h2>
              </div>
              <div className="mt-8 lg:col-span-8 lg:mt-0">
                <ol className="max-w-xl">
                  {nextSteps.map((step, i) => (
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
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
