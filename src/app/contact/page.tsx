import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import KenBurnsImage from "@/components/KenBurnsImage";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have questions about aviation careers or admissions? Get in touch with Wing Tech Aviation in Madhapur, Hyderabad.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-navy-dark">
        <KenBurnsImage
          src="/images/contact-reception.jpg"
          alt="A calm, minimal office reception area"
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
            CONTACT
          </p>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-black uppercase leading-[0.98] tracking-wide text-white sm:text-5xl">
            Contact Wing Tech Aviation
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            Have questions about aviation careers or admissions? Our team is
            here to help.
          </p>
        </div>
      </section>

      {/* Visit Us / Admissions Enquiries / Office Hours */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 sm:grid-cols-3">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                Visit Us
              </p>
              <address className="mt-3 text-lg not-italic leading-relaxed text-charcoal">
                Wing Tech Aviation
                <br />
                Plot No. 17, Ram &amp; Ram Exclusive
                <br />
                Madhapur, Hyderabad
                <br />
                Telangana – 500081
              </address>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                Admissions Enquiries
              </p>
              <dl className="mt-3 space-y-1.5 text-sm text-charcoal">
                <div className="flex gap-2">
                  <dt className="font-medium text-navy">Phone:</dt>
                  <dd>
                    <a href="tel:+919391939914" className="hover:text-navy">
                      +91 93919 39914
                    </a>
                  </dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium text-navy">WhatsApp:</dt>
                  <dd>
                    <a
                      href="https://wa.me/919391939914"
                      className="hover:text-navy"
                    >
                      +91 93919 39914
                    </a>
                  </dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium text-navy">Email:</dt>
                  <dd>
                    <a
                      href="mailto:bobbyazmeera9@gmail.com"
                      className="hover:text-navy"
                    >
                      bobbyazmeera9@gmail.com
                    </a>
                  </dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium text-navy">Website:</dt>
                  <dd>
                    <a
                      href="https://wingtechaviation.com"
                      className="hover:text-navy"
                    >
                      wingtechaviation.com
                    </a>
                  </dd>
                </div>
              </dl>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                Office Hours
              </p>
              <p className="mt-3 text-lg leading-relaxed text-charcoal">
                Monday – Saturday
                <br />
                9:00 AM – 6:00 PM
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Send Us a Message — contained photo pairing, photo left. */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-16">
              <div className="relative h-[280px] sm:h-[360px] lg:col-span-2 lg:h-auto lg:min-h-[400px]">
                <Image
                  src="/images/eligibility-signing-form.jpg"
                  alt="A student filling in an application form"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="lg:col-span-3">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                  Enquiry
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-navy sm:text-4xl">
                  Send Us a Message
                </h2>

                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Book a Career Counselling Session — contained, text-only (odd
          position in the page's photo rhythm; Find Us below carries the
          next photo). */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Counselling
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-navy sm:text-4xl">
              Book a Career Counselling Session
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate">
              If you are unsure which aviation career is right for you, book
              a counselling session with our admissions team.
            </p>
            <p className="mt-6 max-w-2xl text-slate">
              During the session, we can discuss:
            </p>
            <ul className="mt-6 grid max-w-2xl gap-x-8 sm:grid-cols-2">
              {[
                "Your academic background",
                "Career interests",
                "Programme options",
                "Eligibility",
                "Training pathways",
                "Questions from parents",
              ].map((item) => (
                <li
                  key={item}
                  className="border-t border-hairline py-3 text-sm text-charcoal"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/eligibility" variant="primary" className="mt-8">
              Book Counselling
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Find Us — contained photo pairing, photo right. */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Location
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-navy sm:text-4xl">
              Find Us
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-16">
              <div className="h-96 w-full overflow-hidden border border-hairline lg:col-span-3">
                <iframe
                  title="Wing Tech Aviation — Madhapur campus location"
                  src="https://www.google.com/maps?q=Plot+No.+17,+Ram+%26+Ram+Exclusive,+Madhapur,+Hyderabad,+Telangana+500081&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="relative h-[280px] lg:col-span-2 lg:h-auto">
                <Image
                  src="/images/about-office.jpg"
                  alt="Modern glass office building against a pale sky"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  style={{ objectFit: "cover", objectPosition: "center 60%" }}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
