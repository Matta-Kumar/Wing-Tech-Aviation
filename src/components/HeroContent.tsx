import Button from "./Button";

/**
 * Layout mirrors the reference spec exactly: heading centred at top-[14%],
 * a short caption bottom-left, description+CTAs bottom-right — reskinned
 * with our fonts/colors/copy. Plain CSS keyframe animations (`.hero-anim`
 * classes in globals.css), not Framer Motion — matches the reference's
 * own approach and needs no client-side JS for the entrance choreography.
 *
 * Mobile: the eyebrow coordinate line and bottom-left caption are hidden
 * (too cramped at that width, and duplicate what the heading already
 * says); the bottom-right block sizes/paddings down so the two CTAs
 * comfortably fit above the viewport edge instead of being clipped.
 */
export default function HeroContent() {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 top-[16%] z-50 flex flex-col items-center px-5 text-center sm:top-[14%]">
        <p
          className="hero-anim hero-reveal hidden font-mono text-xs tracking-[0.2em] text-gold-bright sm:block"
          style={{ animationDelay: "0.1s" }}
        >
          WING TECH INSTITUTE OF AVIATION &nbsp;·&nbsp; 17.44°N 78.39°E &nbsp;·&nbsp; MADHAPUR, HYDERABAD
        </p>
        <h1 className="mt-1 leading-[0.95] text-white sm:mt-4">
          <span
            className="hero-anim hero-reveal block font-heading text-4xl font-black uppercase tracking-wide sm:text-7xl md:text-8xl"
            style={{ animationDelay: "0.25s" }}
          >
            Your Aviation Career
          </span>
          <span
            className="hero-anim hero-reveal -mt-1 block font-heading text-4xl font-black uppercase tracking-wide sm:text-7xl md:text-8xl"
            style={{ animationDelay: "0.42s" }}
          >
            Starts Here
          </span>
        </h1>
      </div>

      <div
        className="hero-anim hero-fade pointer-events-none absolute bottom-14 left-10 z-50 hidden max-w-[260px] sm:block"
        style={{ animationDelay: "0.7s" }}
      >
        <p className="text-sm leading-relaxed text-white/80">
          Build the knowledge, skills and confidence to explore a future in
          the aviation industry.
        </p>
      </div>

      <div
        className="hero-anim hero-fade pointer-events-auto absolute inset-x-4 bottom-4 z-50 flex flex-col items-start gap-3 sm:inset-x-auto sm:bottom-16 sm:right-10 sm:max-w-[340px] sm:gap-5 md:right-14"
        style={{ animationDelay: "0.85s" }}
      >
        <p className="hidden text-sm leading-relaxed text-white/80 sm:block">
          Wing Tech Aviation is a career-focused aviation training centre
          located in Madhapur, Hyderabad. We provide structured learning
          pathways for students who aspire to build careers in commercial
          flying, aircraft maintenance, cabin crew services and airport
          operations.
        </p>
        <p className="text-sm leading-relaxed text-white/80 sm:hidden">
          Build the knowledge, skills and confidence to explore a future in
          the aviation industry.
        </p>
        <div className="flex w-full flex-wrap items-center gap-3 sm:w-auto sm:gap-4">
          <Button href="/eligibility" variant="primary" className="!py-2 sm:!py-3">
            Check Your Eligibility
          </Button>
          <Button href="/contact" variant="link-light">
            Book a Career Counselling Session
          </Button>
        </div>
      </div>
    </>
  );
}
