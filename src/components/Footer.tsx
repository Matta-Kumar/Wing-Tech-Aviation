import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/cpl", label: "CPL" },
  { href: "/ame", label: "AME" },
  { href: "/cabin-crew", label: "Cabin Crew" },
  { href: "/airport-management", label: "Airport Management" },
  { href: "/eligibility", label: "Eligibility" },
  { href: "/admissions", label: "Admissions" },
  { href: "/campus", label: "Campus" },
  { href: "/career-pathways", label: "Career Pathways" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/70">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <Image src="/images/logo-icon.png" alt="" width={32} height={32} className="h-8 w-8" />
            <span className="font-heading text-lg font-black uppercase tracking-wide text-white">
              Wing Tech Aviation
            </span>
          </div>
          <p className="mt-4 max-w-xs font-serif text-lg leading-snug text-white/60">
            Career-focused aviation education and counselling in Madhapur,
            Hyderabad.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-gold-bright">
            Quick Links
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-gold-bright">
            Contact
          </h3>
          <address className="mt-4 text-sm not-italic leading-relaxed">
            Plot No. 17, Ram &amp; Ram Exclusive
            <br />
            Madhapur, Hyderabad, Telangana – 500081
            <br />
            Phone:{" "}
            <a href="tel:+919391939914" className="hover:text-white">
              +91 93919 39914
            </a>
            <br />
            Email:{" "}
            <a
              href="mailto:bobbyazmeera9@gmail.com"
              className="hover:text-white"
            >
              bobbyazmeera9@gmail.com
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-hairline-on-dark px-6 py-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs leading-relaxed text-white/40">
            Information on this website is intended to provide general
            guidance about aviation education and career pathways. Programme
            eligibility, training requirements, medical requirements,
            examinations and career outcomes may depend on applicable
            regulations, training arrangements and employer requirements.
            Wing Tech Aviation does not guarantee employment, licensing,
            medical clearance or career outcomes.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-white/40">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span aria-hidden="true">&middot;</span>
            <span>
              Design &amp; Developed by{" "}
              <a
                href="https://www.pyritedigital.com/website-development/ai-website-development/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Pyrite Digital
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
