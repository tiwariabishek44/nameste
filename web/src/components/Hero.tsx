import Image from "next/image";
import Reveal from "./Reveal";
import Lotus from "./Lotus";

export default function Hero() {
  return (
    <section id="top" className="grain relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="A serene stone figure resting in warm candlelight at Namaste Spa"
          fill
          priority
          sizes="100vw"
          className="hero-breathe object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(26,24,20,0.82)] via-[rgba(26,24,20,0.45)] to-[rgba(26,24,20,0.12)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,16,13,0.6)] to-transparent" />
      </div>

      <div className="container-x relative py-28 md:py-36">
        <div className="max-w-2xl">
          <p className="eyebrow eyebrow--light mb-6 flex items-center gap-3">
            <Lotus className="w-7 h-7" /> Wellness · Beauty · Balance
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(3rem,8.5vw,6.5rem)] leading-[1.0] text-white font-light tracking-[-0.025em]">
            <span className="word" style={{ animationDelay: "0.05s" }}>Book</span>{" "}
            <span className="word" style={{ animationDelay: "0.22s" }}>your</span>{" "}
            <span className="word flourish" style={{ animationDelay: "0.4s" }}>peace.</span>
          </h1>
          <Reveal delay={120}>
            <p className="mt-7 text-lg md:text-xl text-[#efe9df] max-w-xl leading-relaxed">
              Sherwood Park&rsquo;s sanctuary for self-care and healing — where ancient
              ritual meets advanced skincare.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="/book" className="btn btn--primary btn--lg">Book an appointment</a>
              <a href="#treatments" className="btn btn--ghost-light btn--lg">Explore treatments</a>
            </div>
          </Reveal>
        </div>
      </div>

      <a
        href="#concierge"
        aria-label="Scroll to explore"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
      >
        <span className="text-[0.7rem] uppercase tracking-[0.2em]">Discover</span>
        <span className="block w-px h-10 bg-gradient-to-b from-white/60 to-transparent" />
      </a>
    </section>
  );
}
