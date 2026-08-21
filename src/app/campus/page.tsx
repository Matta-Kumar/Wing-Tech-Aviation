import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import KenBurnsImage from "@/components/KenBurnsImage";
import InfoSection from "@/components/InfoSection";

export default function CampusPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-navy-dark">
        <KenBurnsImage
          src="/images/campus-seminar-room.jpg"
          alt="Training seminar room with students and an instructor"
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
            CAMPUS
          </p>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-black uppercase leading-[0.98] tracking-wide text-white sm:text-5xl md:text-6xl">
            Learn in a Professional Aviation Environment
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            Our Madhapur centre is designed to provide students with a
            focused learning environment for aviation education and career
            preparation.
          </p>
        </div>
      </section>

      <InfoSection
        tone="white"
        eyebrow="Facilities"
        heading="Campus Highlights"
        columns={2}
        items={[
          "Classrooms",
          "Seminar spaces",
          "Student counselling areas",
          "Administrative support",
          "Convenient location in Madhapur",
        ]}
        cta={{ href: "/contact", label: "Book a Campus Visit" }}
      />

      <InfoSection
        tone="ivory"
        eyebrow="Culture"
        heading="Learning Environment"
        intro="We believe students learn best in an environment that encourages:"
        columns={2}
        items={[
          "Discipline",
          "Professional communication",
          "Teamwork",
          "Respect",
          "Safety awareness",
          "Continuous learning",
        ]}
        cta={{ href: "/contact", label: "Book a Campus Visit" }}
        photo={{
          src: "/images/faculty-mentoring-student.jpg",
          alt: "A mentor explaining a concept to a student",
          side: "left",
          size: "inset",
        }}
      />

      <InfoSection
        tone="white"
        eyebrow="Visit Us"
        heading="Campus Visits"
        intro="Students and parents are welcome to visit the centre by appointment. During a campus visit, you can:"
        columns={2}
        items={[
          "Meet the admissions team.",
          "Learn about the programmes.",
          "Understand the training pathways.",
          "Ask questions.",
          "Explore the learning environment.",
        ]}
        cta={{ href: "/contact", label: "Book a Campus Visit" }}
      />

      <section className="bg-ivory">
        <Reveal className="mx-auto max-w-6xl px-6 py-20 text-center">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Button href="/contact" variant="primary">
              Book a Campus Visit
            </Button>
            <Button href="/eligibility" variant="link">
              Check Your Eligibility
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
