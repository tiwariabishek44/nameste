import Image from "next/image";
import Reveal from "./Reveal";
import Lotus from "./Lotus";

export default function TheSpace() {
  return (
    <section id="space" className="py-20 md:py-28 overflow-hidden">
      <div className="container-x grid md:grid-cols-12 gap-10 md:gap-14 items-center">
        {/* Copy */}
        <Reveal className="md:col-span-5 order-2 md:order-1">
          <Lotus className="w-9 h-9 text-gold mb-5" />
          <p className="eyebrow mb-3">The space</p>
          <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-tight text-ink mb-5">
            Step inside, and the city goes <span className="flourish">quiet.</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-5">
            Warm wood, soft light, the glint of copper and the calm of stone. Our modern,
            ancient-inspired spa blends time-honoured tradition with the latest techniques —
            and the boutique lets you carry a little of that tranquility home with you.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/70 mb-8">
            <span>· Imported treasures</span>
            <span>· Curated wellness</span>
            <span>· A true escape, minutes from home</span>
          </div>
          <a href="/the-space" className="link-arrow">Take the tour</a>
        </Reveal>

        {/* Media with overlapping caption */}
        <Reveal className="md:col-span-7 order-1 md:order-2">
          <div className="relative">
            <div className="relative aspect-[16/10] rounded-[var(--radius-card)] overflow-hidden border border-line">
              <Image
                src="/images/space.jpg"
                alt="The warm, wood-lined Namaste boutique and spa interior"
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 md:-left-8 bg-surface border border-line rounded-xl shadow-[0_24px_50px_-30px_rgba(0,0,0,0.5)] px-6 py-5 max-w-[15rem]">
              <p className="font-[family-name:var(--font-display)] text-3xl text-sage-deep leading-none">216</p>
              <p className="text-muted text-sm mt-1">Sherwood Drive — your door to calm in Sherwood Park.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
