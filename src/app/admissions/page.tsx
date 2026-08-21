import Image from "next/image";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import KenBurnsImage from "@/components/KenBurnsImage";
import InfoSection from "@/components/InfoSection";

type Step = {
  title: string;
  body?: string;
  itemsIntro?: string;
  items?: string[];
};

const steps: Step[] = [
  {
    title: "Step 1 — Enquiry",
    body: "Submit your details online or contact our admissions team.",
  },
  {
    title: "Step 2 — Career Counselling",
    itemsIntro: "Discuss:",
    items: [
      "Career interests",
      "Academic background",
      "Programme options",
      "Training pathways",
    ],
  },
  {
    title: "Step 3 — Eligibility Review",
    body: "We review your academic qualifications and any programme-specific requirements.",
  },
  {
    title: "Step 4 — Assessment",
    itemsIntro: "Depending on the programme, this may include:",
    items: [
      "Technical aptitude",
      "Communication assessment",
      "Career-fit discussion",
      "Medical pathway information where applicable",
    ],
  },
  {
    title: "Step 5 — Application",
    body: "Complete the application form and submit the required documents.",
  },
  {
    title: "Step 6 — Document Verification",
    itemsIntro: "Documents may include:",
    items: [
      "10th certificate",
      "10+2 marksheet",
      "10+2 certificate",
      "Identity proof",
      "Photographs",
      "Additional programme-specific documents where applicable",
    ],
  },
  {
    title: "Step 7 — Admission Confirmation",
    body: "Once the application process is completed, the admissions team explains the next steps for enrolment and onboarding.",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-navy-dark">
        <KenBurnsImage
          src="/images/admissions-welcome-handshake.jpg"
          alt="An admissions advisor welcoming a student with a handshake"
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
            ADMISSIONS
          </p>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-black uppercase leading-[0.98] tracking-wide text-white sm:text-5xl">
            Admissions Process
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            Our admissions process is designed to help students and parents
            make informed decisions.
          </p>
        </div>
      </section>

      {/* 7-step process */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <ol className="divide-y divide-hairline">
            {steps.map((s, i) => (
              <Reveal key={s.title}>
                <li className="grid gap-3 py-10 sm:grid-cols-12 sm:gap-8">
                  <div className="sm:col-span-1">
                    <span className="font-mono text-sm text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="sm:col-span-3">
                    <h3 className="font-serif text-xl font-semibold text-navy">
                      {s.title.replace(/^Step \d+ — /, "")}
                    </h3>
                  </div>
                  <div className="sm:col-span-8">
                    {s.body && (
                      <p className="max-w-xl text-sm leading-relaxed text-charcoal">
                        {s.body}
                      </p>
                    )}
                    {s.items && (
                      <>
                        <p className="text-sm text-slate">{s.itemsIntro}</p>
                        <ul className="mt-3 max-w-xl space-y-1.5">
                          {s.items.map((item) => (
                            <li
                              key={item}
                              className="text-sm text-charcoal"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <InfoSection
        tone="ivory"
        eyebrow="Before You Apply"
        heading="Documents Checklist"
        intro="Common Documents:"
        columns={2}
        items={[
          "10th Certificate",
          "10+2 Marksheet",
          "10+2 Certificate",
          "Identity Proof",
          "Passport-size Photographs",
        ]}
        note="Additional documents may be required depending on the programme."
        cta={{ href: "/eligibility", label: "Apply Now" }}
        photo={{
          src: "/images/eligibility-signing-form.jpg",
          alt: "A student filling in an application form",
          side: "left",
          size: "inset",
        }}
      />

      {/* Parents Welcome */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-12">
              <div className="lg:col-span-7">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                  Families
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-navy sm:text-4xl">
                  Parents Welcome
                </h2>
                <p className="mt-4 max-w-xl text-charcoal">
                  Parents are encouraged to attend counselling sessions before
                  finalising admission.
                </p>
                <Button href="/eligibility" variant="primary" className="mt-8">
                  Apply Now
                </Button>
              </div>
              <div className="mt-10 lg:col-span-5 lg:mt-0">
                <div className="relative aspect-[4/3] overflow-hidden rounded-md shadow-md">
                  <Image
                    src="/images/parent-counselling.jpg"
                    alt="Parents in a counselling conversation with an admissions advisor"
                    fill
                    sizes="(min-width: 1024px) 35vw, 100vw"
                    style={{ objectFit: "cover", objectPosition: "65% center" }}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
