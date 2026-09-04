import type { Metadata } from "next";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import KenBurnsImage from "@/components/KenBurnsImage";
import InfoSection from "@/components/InfoSection";

export const metadata: Metadata = {
  title: "Airport Management & Operations Pathway",
  description:
    "Airports need thousands of professionals across passenger services, ground operations, baggage, customer service and administration. Explore this career pathway.",
};

export default function AirportManagementPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-navy-dark">
        <KenBurnsImage
          src="/images/pathway-airport-ops.jpg"
          alt="Airport ground operations on the tarmac"
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
            AIRPORT MANAGEMENT &amp; OPERATIONS
          </p>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-black uppercase leading-[0.98] tracking-wide text-white sm:text-5xl md:text-6xl">
            Discover Careers That Keep Airports Moving
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            Airports require thousands of professionals working across
            passenger services, ground operations, baggage, customer service
            and administration.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">
            Airport Management &amp; Operations is designed for students who
            want to understand how airport environments function.
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
          "Have completed 10+2.",
          "Are interested in airports and aviation.",
          "Enjoy organisation and coordination.",
          "Have good communication skills.",
          "Are interested in operations rather than flying.",
        ]}
        cta={{ href: "/eligibility", label: "Check Your Eligibility" }}
      />

      <InfoSection
        tone="ivory"
        eyebrow="Curriculum"
        heading="Learning Areas"
        intro="Students are introduced to:"
        columns={2}
        items={[
          "Airport operations",
          "Passenger services",
          "Ground handling concepts",
          "Baggage processes",
          "Customer service",
          "Aviation terminology",
          "Safety awareness",
          "Communication",
          "Team coordination",
        ]}
        cta={{ href: "/eligibility", label: "Check Your Eligibility" }}
        photo={{
          src: "/images/airport-baggage-claim.jpg",
          alt: "An empty airport baggage claim hall",
          side: "left",
          size: "inset",
        }}
      />

      <InfoSection
        tone="white"
        eyebrow="Where It Leads"
        heading="Career Pathways"
        intro="Students may eventually explore opportunities in areas such as:"
        columns={2}
        items={[
          "Airport Operations",
          "Passenger Services",
          "Ground Handling",
          "Baggage Services",
          "Customer Service",
          "Aviation Administration",
        ]}
        note="Actual employment depends on employer requirements and individual qualifications."
        cta={{ href: "/career-pathways", label: "Take the Career Assessment" }}
      />

      <InfoSection
        tone="ivory"
        eyebrow="Next Step"
        heading="Career Counselling"
        intro="Our admissions team helps students understand:"
        columns={2}
        items={[
          "Different airport roles.",
          "Which areas match their interests.",
          "Skills employers commonly value.",
          "The training pathway.",
        ]}
        cta={{ href: "/eligibility", label: "Explore Airport Careers" }}
        photo={{
          src: "/images/airport-ground-handling.jpg",
          alt: "Ground handling equipment and baggage carts on the tarmac",
          side: "right",
          size: "inset",
        }}
      />

      <section className="bg-white">
        <Reveal className="mx-auto max-w-6xl px-6 py-20 text-center">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Button href="/eligibility" variant="primary">
              Explore Airport Careers
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
