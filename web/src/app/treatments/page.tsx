import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import Lotus from "@/components/Lotus";
import { treatments, type Treatment } from "@/data/treatments";

export const metadata: Metadata = {
  title: "Treatments — Namaste Spa & Wellness",
  description:
    "Restore and Renew at Namaste Spa — massage, head spa, Ayurveda, wellness, skin & aesthetics, body contouring and Qi Beauty in Sherwood Park, Alberta.",
};

function PillarGroup({ title, blurb, items }: { title: string; blurb: string; items: Treatment[] }) {
  return (
    <section className="py-16 md:py-24 [&:nth-of-type(even)]:bg-sand [&:nth-of-type(even)]:grain">
      <div className="container-x">
        <Reveal className="max-w-2xl mb-12">
          <div className="flex items-center gap-3 mb-3">
            <Lotus className="w-7 h-7 text-gold" />
            <p className="eyebrow">{title}</p>
          </div>
          <p className="font-[family-name:var(--font-display)] text-[length:var(--text-h3)] text-ink leading-snug">{blurb}</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Reveal key={t.slug} delay={i * 70} className="group">
              <a href={`/treatments/${t.slug}`} className="block bg-surface border border-line rounded-[var(--radius-card)] overflow-hidden h-full flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-sage-deep">
                  {t.cardImage ? (
                    <Image src={t.cardImage} alt={t.name} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center"><Lotus className="w-14 h-14 text-white/30" /></span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="eyebrow mb-2">{t.pillar}</p>
                  <h3 className="font-[family-name:var(--font-display)] text-[length:var(--text-h3)] text-ink mb-2">{t.name}</h3>
                  <p className="text-muted text-[0.93rem] leading-relaxed mb-5">{t.tagline}</p>
                  <span className="link-arrow mt-auto">Explore</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function TreatmentsHub() {
  const restore = treatments.filter((t) => t.pillar === "Restore");
  const renew = treatments.filter((t) => t.pillar === "Renew");

  return (
    <>
      <SiteHeader />

      <section className="grain bg-sage-deep text-white pt-36 pb-20 md:pb-24 text-center">
        <div className="container-x max-w-2xl mx-auto flex flex-col items-center">
          <Lotus className="w-11 h-11 text-[var(--color-gold)] mb-5" />
          <p className="eyebrow eyebrow--light mb-4">Our treatments</p>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.05] text-white font-light tracking-[-0.02em]">
            Two ways home to <span className="flourish">yourself.</span>
          </h1>
          <p className="mt-5 text-lg text-[#dfe5dc]">
            Sink into the calm of <em>Restore</em>, or step into the results of <em>Renew</em>.
            Same sanctuary — both kinds of care.
          </p>
        </div>
      </section>

      <PillarGroup title="Restore" blurb="The ritual, the calm, the experience — care that brings you back to yourself." items={restore} />
      <PillarGroup title="Renew" blurb="The science, the glow, the results — advanced treatments, delivered with care." items={renew} />

      <section className="grain bg-sage-deep text-white py-20 text-center">
        <div className="container-x max-w-2xl">
          <Reveal className="flex flex-col items-center">
            <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)] text-white mb-6">Not sure where to start?</h2>
            <p className="text-[#dfe5dc] mb-7 max-w-lg">Tell us what brings you in and we&rsquo;ll guide you to the right ritual.</p>
            <a href="/book" className="btn btn--ghost-light btn--lg">Book your peace</a>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
