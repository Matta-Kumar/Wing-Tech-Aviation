import Image from "next/image";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import KenBurnsImage from "@/components/KenBurnsImage";
import InfoSection from "@/components/InfoSection";

const leaders = [
  {
    name: "Bhaskara Babu Ethamukkala",
    title: "Chief Executive Officer",
    photo: "/images/leadership-bhaskar.jpg",
    bio: "Bhaskara Babu Ethamukkala brings more than 25 years of aviation maintenance, regulatory compliance and technical training leadership to Wing Tech Aviation. He has held senior training and quality roles at Rolls-Royce Civil Aerospace and Air Service Training (UK), and has led EASA Part-147 and DGCA CAR-147 approved training organisations, examination systems and Maintenance Training Organisation Expositions. He holds an EASA Part-66 B1 Aircraft Maintenance Licence and a BSc in Aircraft Maintenance Engineering from the University of the Highlands & Islands, UK.",
  },
  {
    name: "Bobby Azmeera",
    title: "Chairman",
    photo: "/images/leadership-bobby.jpg",
    bio: "Bobby Azmeera is India's first tribal woman commercial pilot, holding a CPL (USA), an MBA, and an MS (UK). Her aviation career spans Deputy Chief – Cabin Services at Air India, charter pilot operations, and senior programme management for aviation and aerospace training at the Telangana Academy for Skill and Knowledge. A TEDx speaker and recognised mentor for youth development programmes, she brings a rare combination of flight operations experience and training-programme leadership to Wing Tech Aviation.",
  },
];

const approach = [
  {
    heading: "Career First",
    body: "We begin with career counselling before recommending a programme.",
  },
  {
    heading: "Student-Centred",
    body: "Each student's academic background and career interests are considered individually.",
  },
  {
    heading: "Parent Involvement",
    body: "Parents are encouraged to participate in counselling sessions.",
  },
  {
    heading: "Professionalism",
    body: "We emphasise discipline, communication, safety awareness and professional conduct.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-navy-dark">
        <KenBurnsImage
          src="/images/about-office.jpg"
          alt="Modern glass office building against a pale sky"
          priority
          objectPosition="center 60%"
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
            ABOUT US
          </p>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-black uppercase leading-[0.98] tracking-wide text-white sm:text-5xl md:text-6xl">
            About Wing Tech Aviation
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            Wing Tech Aviation is an aviation-focused training centre
            established to help aspiring students explore structured career
            pathways in the aviation industry.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <div className="lg:grid lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                  Who We Are
                </p>
              </div>
              <div className="max-w-2xl space-y-5 text-charcoal lg:col-span-8">
                <p>
                  Located in Madhapur, Hyderabad, the centre brings together
                  aviation education, career counselling and student support
                  in one place.
                </p>
                <p>
                  Our focus is to help students make informed decisions about
                  aviation careers by providing clear information about
                  academic requirements, training pathways and career
                  expectations.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision — pull-quote style statement */}
      <section className="bg-ivory">
        <Reveal className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Our Vision
          </p>
          <p className="mt-4 max-w-3xl font-serif text-3xl font-semibold leading-snug text-navy sm:text-4xl">
            To become a trusted aviation education and career-development
            centre that prepares students with the knowledge, discipline and
            professional mindset needed to pursue opportunities across the
            aviation sector.
          </p>
        </Reveal>
      </section>

      <InfoSection
        tone="white"
        eyebrow="Purpose"
        heading="Our Mission"
        columns={1}
        items={[
          "To provide career-focused aviation education.",
          "To help students identify the aviation pathway best suited to their interests and academic background.",
          "To promote safety, professionalism and discipline as core values.",
          "To create a supportive learning environment for students and parents.",
          "To develop long-term relationships with educational and aviation stakeholders.",
        ]}
        cta={{ href: "/eligibility", label: "Check Your Eligibility" }}
      />

      {/* Leadership */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Who We Are Led By
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-navy sm:text-4xl">
              Leadership
            </h2>
            <div className="mt-12 grid gap-12 sm:grid-cols-2">
              {leaders.map((leader) => (
                <div key={leader.name} className="flex flex-col items-start">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full bg-white">
                    <Image
                      src={leader.photo}
                      alt={leader.name}
                      fill
                      sizes="160px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-semibold text-navy">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                    {leader.title}
                  </p>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-slate">
                    {leader.bio}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* What We Believe — Aviation Is More Than Flying — contained,
          matching every other section's max-w-6xl column (was previously
          full-bleed; true edge-to-edge is now reserved for the hero and
          the home page's ParallaxRow pathway rows only). */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative h-[280px] sm:h-[360px] lg:h-auto lg:min-h-[480px]">
                <Image
                  src="/images/pathway-cabin-crew.jpg"
                  alt="Cabin crew member at aircraft door"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex flex-col justify-center bg-navy px-8 py-16 text-white sm:px-14 lg:px-16">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-bright">
                  What We Believe
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-white sm:text-4xl">
                  Aviation Is More Than Flying
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
                  The aviation industry includes many professional roles,
                  including:
                </p>
                <ul className="mt-6 max-w-sm">
                  {[
                    "Pilots",
                    "Aircraft maintenance professionals",
                    "Cabin crew",
                    "Airport operations personnel",
                    "Ground handling professionals",
                    "Passenger service teams",
                    "Aviation management professionals",
                  ].map((item) => (
                    <li
                      key={item}
                      className="border-t border-hairline-on-dark py-2.5 text-sm text-white/90"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
                  Our role is to help students understand these pathways and
                  prepare for the journey ahead.
                </p>
                <Button
                  href="/career-pathways"
                  variant="link-light"
                  className="mt-6"
                >
                  Take the Career Assessment
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <div className="lg:grid lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                  How We Work
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-navy sm:text-4xl">
                  Our Approach
                </h2>
              </div>
              <div className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:col-span-8 lg:mt-0">
                {approach.map((a) => (
                  <div key={a.heading} className="border-t border-hairline pt-4">
                    <h3 className="font-serif text-xl font-semibold text-navy">
                      {a.heading}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">
                      {a.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Locations */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Where We Are
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-navy sm:text-4xl">
              Our Locations
            </h2>
            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              <div className="border-t border-hairline pt-6">
                <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-md shadow-md">
                  <Image
                    src="/images/about-office.jpg"
                    alt="Modern glass office building against a pale sky"
                    fill
                    sizes="(min-width: 640px) 45vw, 100vw"
                    style={{ objectFit: "cover", objectPosition: "center 60%" }}
                  />
                </div>
                <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                  Corporate Office
                </h3>
                <address className="mt-3 text-lg not-italic leading-relaxed text-charcoal">
                  Wing Tech Aviation
                  <br />
                  Plot No. 17, Ram &amp; Ram Exclusive
                  <br />
                  Madhapur, Hyderabad
                  <br />
                  Telangana – 500081
                </address>
              </div>
              <div className="border-t border-hairline pt-6">
                <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-md shadow-md">
                  <Image
                    src="/images/campus-seminar-room.jpg"
                    alt="Training seminar room with students and an instructor"
                    fill
                    sizes="(min-width: 640px) 45vw, 100vw"
                    style={{ objectFit: "cover", objectPosition: "center 35%" }}
                  />
                </div>
                <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                  Classes Conducted at
                </h3>
                <address className="mt-3 text-lg not-italic leading-relaxed text-charcoal">
                  Engineering Staff College of India
                  <br />
                  ESCI Road, Lake, beside Khajaguda,
                  <br />
                  Gachibowli, Hyderabad,
                  <br />
                  Telangana 500032
                </address>
              </div>
            </div>
            <p className="mt-10 max-w-2xl text-sm text-slate">
              Our location provides convenient access for students from
              Hyderabad and surrounding areas.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
