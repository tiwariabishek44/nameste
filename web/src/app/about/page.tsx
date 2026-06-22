import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import Lotus from "@/components/Lotus";

export const metadata: Metadata = {
  title: "About — Namaste Spa & Wellness",
  description:
    "Family owned and operated, Namaste Spa is Sherwood Park's sanctuary for self-care and healing — where ancient ritual meets advanced skincare.",
};

const values = [
  { t: "Warmth, first", d: "You're cared for like family from the moment you arrive — never rushed, never just a booking." },
  { t: "Real expertise", d: "Registered therapists and trained practitioners, advanced treatments delivered with genuine skill." },
  { t: "Care without barriers", d: "We direct-bill most major benefits, so looking after yourself is simpler than ever." },
  { t: "A true sanctuary", d: "Warm wood, soft light and quiet — a place that lowers your shoulders the moment you step in." },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="grain relative min-h-[58vh] flex items-end overflow-hidden">
        <Image src="/images/space.jpg" alt="Inside Namaste Spa & Wellness" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(22,20,16,0.85)] via-[rgba(22,20,16,0.4)] to-[rgba(22,20,16,0.2)]" />
        <div className="container-x relative pb-14 pt-36">
          <p className="eyebrow eyebrow--light mb-3 flex items-center gap-3"><Lotus className="w-7 h-7" /> Our story</p>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,7vw,5rem)] leading-[1.02] text-white font-light tracking-[-0.02em]">
            Care that feels like <span className="flourish">family.</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container-x grid md:grid-cols-12 gap-10 md:gap-16">
          <Reveal className="md:col-span-5">
            <p className="eyebrow mb-3">Who we are</p>
            <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-tight text-ink">
              A sanctuary, grown by hand.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-7">
            <div className="space-y-5 text-muted text-lg leading-relaxed">
              <p>
                Namaste began as a small, family-owned spa with a simple belief: that everyone deserves
                a place to truly exhale. Years later, we&rsquo;re still family owned and operated — and
                now a beloved fixture of Sherwood Park, with a second home in Calgary and a community
                of thousands who let us care for them.
              </p>
              <p>
                Our modern, ancient-inspired spa blends time-honoured tradition with the latest
                techniques. From Ayurvedic ritual and our signature Head Spa to advanced skin and body
                treatments, we&rsquo;ve grown without ever losing what made us special: warmth, intention,
                and care that feels personal.
              </p>
              <p className="text-ink font-medium">
                Two ways home to yourself — <em>Restore</em> the calm, <em>Renew</em> the glow. Same
                sanctuary, both kinds of care.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Founder */}
      <section className="grain bg-sand py-20 md:py-28">
        <div className="container-x grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <Reveal className="md:col-span-5">
            <div className="relative max-w-sm md:ml-auto">
              <div className="relative aspect-[4/5] rounded-[var(--radius-card)] overflow-hidden border border-line">
                <Image src="/images/founder.jpg" alt="The founder of Namaste Spa & Wellness" fill sizes="(max-width:768px) 100vw, 40vw" className="object-cover object-top" />
              </div>
              <span className="absolute -bottom-4 -left-4 bg-surface border border-line rounded-full px-4 py-2 text-xs font-semibold tracking-wide text-sage-deep">Family owned &amp; operated</span>
            </div>
          </Reveal>
          <Reveal className="md:col-span-7">
            <Lotus className="w-10 h-10 text-gold mb-6" />
            <p className="eyebrow mb-4">A note from our founder</p>
            <blockquote className="font-[family-name:var(--font-display)] text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.25] text-ink">
              &ldquo;I built Namaste as the place I always wished existed — somewhere you&rsquo;re cared
              for like family, and leave feeling more like <span className="flourish">yourself.</span>&rdquo;
            </blockquote>
            <p className="mt-6 font-[family-name:var(--font-display)] text-xl text-ink">— Your name here</p>
            <p className="text-sm text-muted mt-1">Founder &amp; owner · Sherwood Park</p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow mb-3">What we stand for</p>
            <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-tight text-ink">The things we never compromise.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
            {values.map((v) => (
              <Reveal key={v.t} className="flex gap-4 border-t border-line pt-6">
                <Lotus className="w-7 h-7 text-gold shrink-0 mt-1" />
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-ink mb-1.5">{v.t}</h3>
                  <p className="text-muted leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="grain bg-sand py-20 md:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow mb-3">The hands you&rsquo;re in</p>
            <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-tight text-ink">Meet the team.</h2>
            <p className="mt-4 text-muted">Your real therapists and practitioners — with their photos, names and specialties — will live here.</p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[0, 1, 2, 3].map((i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="text-center">
                  <div className="relative aspect-square rounded-full overflow-hidden border border-line bg-sage-deep mb-4 flex items-center justify-center">
                    {i === 0 ? (
                      <Image src="/images/founder.jpg" alt="" fill sizes="200px" className="object-cover object-top" />
                    ) : (
                      <Lotus className="w-12 h-12 text-white/30" />
                    )}
                  </div>
                  <p className="font-[family-name:var(--font-display)] text-lg text-ink">{i === 0 ? "Your founder" : "Your therapist"}</p>
                  <p className="text-sm text-muted">{i === 0 ? "Founder & owner" : "Name & specialty"}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="grain bg-sage-deep text-white py-20 md:py-24 text-center">
        <div className="container-x max-w-2xl">
          <Reveal className="flex flex-col items-center">
            <Lotus className="w-10 h-10 text-[var(--color-gold)] mb-5" />
            <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-tight text-white mb-6">Come be cared for.</h2>
            <a href="/book" className="btn btn--ghost-light btn--lg">Book your peace</a>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
