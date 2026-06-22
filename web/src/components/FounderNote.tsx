import Image from "next/image";
import Reveal from "./Reveal";
import Lotus from "./Lotus";

// PLACEHOLDER: founder portrait + words. Replace `/images/founder.jpg`, the
// quote, and the name with the real owner's photo and her own words.
export default function FounderNote() {
  return (
    <section id="founder" className="grain bg-sand py-20 md:py-28 scroll-mt-24">
      <div className="container-x grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <Reveal className="md:col-span-5">
          <div className="relative max-w-sm md:ml-auto">
            <div className="relative aspect-[4/5] rounded-[var(--radius-card)] overflow-hidden border border-line">
              <Image
                src="/images/founder.jpg"
                alt="The founder of Namaste Spa & Wellness"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top"
              />
            </div>
            <span className="absolute -bottom-4 -left-4 bg-surface border border-line rounded-full px-4 py-2 text-xs font-semibold tracking-wide text-sage-deep">
              Family owned &amp; operated
            </span>
          </div>
        </Reveal>

        <Reveal className="md:col-span-7">
          <Lotus className="w-10 h-10 text-gold mb-6" />
          <p className="eyebrow mb-4">A note from our founder</p>
          <blockquote className="font-[family-name:var(--font-display)] text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.25] text-ink">
            &ldquo;I built Namaste as the place I always wished existed — somewhere you&rsquo;re
            cared for like family, and leave feeling more like <span className="flourish">yourself.</span>&rdquo;
          </blockquote>
          <p className="mt-6 text-muted">
            <span className="font-[family-name:var(--font-display)] text-xl text-ink">— Your name here</span>
            <span className="block text-sm mt-1">Founder &amp; owner · Sherwood Park</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
