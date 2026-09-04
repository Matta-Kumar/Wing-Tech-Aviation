import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Wing Tech Aviation collects, uses and protects the personal information submitted through our eligibility, admissions and contact forms.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-navy">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-40">
          <p className="font-mono text-xs tracking-[0.2em] text-gold-bright">
            LEGAL
          </p>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-black uppercase leading-[0.98] tracking-wide text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            This policy explains what personal information Wing Tech Aviation
            collects, why we collect it, and how it is used.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <Reveal className="space-y-12">
            <div>
              <p className="text-sm text-slate">Last updated: September 2026</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy">
                Information We Collect
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-charcoal">
                When you use our Eligibility, Admissions enquiry or Contact
                forms, we may collect:
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-charcoal">
                <li className="border-t border-hairline py-2">
                  Name, mobile number, email address and city
                </li>
                <li className="border-t border-hairline py-2">
                  Date of birth, academic board, year of passing and subject
                  marks (Eligibility form only)
                </li>
                <li className="border-t border-hairline py-2">
                  Preferred aviation programme and any message or question you
                  submit
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy">
                How We Use Your Information
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-charcoal">
                We use the information you provide to respond to enquiries,
                assess programme eligibility, arrange career counselling
                sessions, and guide you through the admissions process. We do
                not use your information for any purpose unrelated to these
                aviation career-counselling and admissions services.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy">
                How We Share Your Information
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-charcoal">
                We do not sell your personal information. It is accessible
                only to Wing Tech Aviation staff involved in counselling and
                admissions, and to service providers (such as messaging or
                email platforms) that help us communicate with you.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy">
                Data Retention
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-charcoal">
                We retain enquiry and admissions information for as long as
                needed to support your application and follow-up counselling,
                and as required to meet our administrative and legal
                obligations.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy">
                Cookies
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-charcoal">
                This website may use cookies or similar technologies to
                understand how visitors use our site and to improve its
                performance. Where analytics tools are used, they are
                configured to avoid collecting information that directly
                identifies you.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy">
                Your Rights
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-charcoal">
                You may ask us to access, correct or delete the personal
                information you have submitted to us at any time by
                contacting us using the details below.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy">
                Contact Us
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-charcoal">
                For any questions about this Privacy Policy or how your
                information is handled, contact us at{" "}
                <a
                  href="mailto:bobbyazmeera9@gmail.com"
                  className="text-navy hover:underline"
                >
                  bobbyazmeera9@gmail.com
                </a>{" "}
                or{" "}
                <a
                  href="tel:+919515075140"
                  className="text-navy hover:underline"
                >
                  +91 95150 75140
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
