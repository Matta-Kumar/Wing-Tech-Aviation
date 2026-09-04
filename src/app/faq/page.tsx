import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import KenBurnsImage from "@/components/KenBurnsImage";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about aviation careers, eligibility, admissions and training at Wing Tech Aviation.",
};

const faqs = [
  {
    q: "Who can apply?",
    a: "Most programmes are designed for students who have completed 10+2. Specific requirements vary by programme.",
  },
  {
    q: "Which course should I choose?",
    a: "It depends on your academic background and career interests. Our admissions team can help you identify the most suitable pathway.",
  },
  {
    q: "Do I need Physics and Mathematics?",
    a: "Physics and Mathematics are generally important for the CPL pathway. AME generally requires a science background including Physics, Chemistry and Mathematics. Cabin Crew and Airport Management have different entry considerations.",
  },
  {
    q: "Is medical fitness required?",
    a: "Medical fitness is an important consideration for certain aviation careers, particularly pilot training. The applicable process depends on the career pathway.",
  },
  {
    q: "Does the centre guarantee a job?",
    a: "No. Career outcomes depend on individual performance, qualifications, employer requirements and market conditions. We focus on education, career guidance and preparation.",
  },
  {
    q: "Can parents attend counselling?",
    a: "Yes. Parents are encouraged to participate in counselling sessions.",
  },
  {
    q: "Can I visit the campus?",
    a: "Yes. Campus visits can be booked through the admissions team.",
  },
  {
    q: "How do I apply?",
    a: "You can complete the online application form or contact our admissions office.",
  },
  {
    q: "Are there assessments before admission?",
    a: "Depending on the programme, we may recommend an aptitude, communication or career-fit assessment to help guide the admissions process.",
  },
  {
    q: "Where is the centre located?",
    a: "Plot No. 17, Ram & Ram Exclusive, Madhapur, Hyderabad, Telangana – 500081.",
  },
];

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[55vh] items-end overflow-hidden bg-navy-dark">
        <KenBurnsImage
          src="/images/counselling-session.jpg"
          alt="A counsellor talking through career options with a student"
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
            FAQ
          </p>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-black uppercase leading-[0.98] tracking-wide text-white sm:text-5xl">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <dl className="divide-y divide-hairline">
              {faqs.slice(0, 5).map((f) => (
                <div key={f.q} className="py-8">
                  <dt className="font-serif text-xl font-semibold text-navy">
                    {f.q}
                  </dt>
                  <dd className="mt-3 max-w-2xl text-sm leading-relaxed text-charcoal">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Second half of the Q&A list — contained photo pairing so a long
          text-only stretch doesn't run the whole length of the page. */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-16">
              <div className="relative h-[280px] sm:h-[360px] lg:col-span-2 lg:h-auto lg:min-h-[400px]">
                <Image
                  src="/images/admissions-welcome-handshake.jpg"
                  alt="An admissions advisor welcoming a student with a handshake"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  style={{ objectFit: "cover", objectPosition: "center 30%" }}
                />
              </div>
              <dl className="divide-y divide-hairline lg:col-span-3">
                {faqs.slice(5).map((f) => (
                  <div key={f.q} className="py-8 first:pt-0">
                    <dt className="font-serif text-xl font-semibold text-navy">
                      {f.q}
                    </dt>
                    <dd className="mt-3 max-w-2xl text-sm leading-relaxed text-charcoal">
                      {f.a}
                    </dd>
                  </div>
                ))}
              </dl>
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
