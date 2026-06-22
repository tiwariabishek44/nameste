import Image from "next/image";
import Reveal from "./Reveal";
import Lotus from "./Lotus";

const twoUp = [
  {
    href: "/treatments/massage",
    img: "/images/massage.jpg",
    alt: "A guest relaxing during a restorative massage at Namaste Spa",
    eyebrow: "Restore",
    title: "Massage Therapy",
    copy: "Therapeutic, relaxation, hot stone and prenatal — your therapist, your pressure, your way. We direct-bill most benefits.",
    pos: "object-top",
  },
  {
    href: "/treatments/ayurveda",
    img: "/images/ayurveda.jpg",
    alt: "Warm oil poured during a traditional Ayurvedic Shirodhara treatment",
    eyebrow: "Restore",
    title: "Ayurveda & Shirodhara",
    copy: "The art of living wisely — a 5,000-year-old practice nurturing mind, body and spirit, recognised by the World Health Organization.",
    pos: "object-center",
  },
];

const renew = [
  { n: "01", href: "/treatments/skin-aesthetics", title: "Skin & Aesthetics", copy: "Microneedling, dermaplaning and microdermabrasion — advanced, results-driven skin treatments tailored to you." },
  { n: "02", href: "/treatments/body-contouring", title: "Body Contouring", copy: "Non-invasive Slimwave technology to tone, firm and sculpt — relaxing sessions with a visible difference." },
  { n: "03", href: "/treatments/qi-beauty", title: "Qi Beauty", copy: "A natural, non-surgical approach to renewing the skin's vitality — energy and radiance, restored." },
];

function RowLabel({ label }: { label: string }) {
  return (
    <Reveal className="flex items-center gap-4 mb-7">
      <Lotus className="w-7 h-7 text-gold shrink-0" />
      <span className="eyebrow">{label}</span>
      <i className="h-px flex-1 bg-line" />
    </Reveal>
  );
}

export default function Treatments() {
  return (
    <section id="treatments" className="grain relative py-20 md:py-28 bg-sand overflow-hidden">
      <span className="edge-index pointer-events-none absolute -right-4 top-10 text-[12rem] md:text-[18rem] select-none hidden sm:block">02</span>

      <div className="container-x relative">
        <Reveal className="max-w-2xl mb-14">
          <p className="eyebrow mb-3">Signature treatments</p>
          <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-tight text-ink">
            Rituals worth <span className="flourish">returning</span> for.
          </h2>
        </Reveal>

        {/* Restore */}
        <RowLabel label="Restore" />

        {/* Featured — editorial horizontal card */}
        <Reveal className="mb-6">
          <article className="group grid md:grid-cols-2 bg-surface border border-line rounded-[var(--radius-card)] overflow-hidden">
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[420px] overflow-hidden">
              <Image
                src="/images/headspa.jpg"
                alt="A guest receiving the Namaste Head Spa Ritual under soft light therapy"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <span className="absolute top-4 left-4 text-[0.7rem] uppercase tracking-[0.18em] bg-gold text-white px-3 py-1 rounded-full">New &amp; loved</span>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <p className="eyebrow mb-3">Restore · The signature</p>
              <h3 className="font-[family-name:var(--font-display)] text-[clamp(2rem,3.5vw,3rem)] leading-none text-ink mb-4">
                The Head Spa Ritual
              </h3>
              <p className="text-muted text-lg leading-relaxed mb-3 max-w-md">
                An unforgettable, multi-sensory experience that transcends traditional scalp
                care — a journey that engages the hair, the scalp, and the soul.
              </p>
              <p className="text-ink/70 text-[0.95rem] mb-7 max-w-md">
                Purifying cleanse · scalp &amp; shoulder massage · steam · nourishing treatment ·
                from a 40-minute express to the full ritual.
              </p>
              <a href="/treatments/head-spa" className="link-arrow">Discover the ritual</a>
            </div>
          </article>
        </Reveal>

        {/* Two-up */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {twoUp.map((c, i) => (
            <Reveal key={c.title} delay={i * 80} className="group">
              <article className="bg-surface border border-line rounded-[var(--radius-card)] overflow-hidden h-full flex flex-col sm:flex-row">
                <div className="relative aspect-[4/3] sm:aspect-auto sm:w-2/5 sm:min-h-[240px] overflow-hidden">
                  <Image src={c.img} alt={c.alt} fill sizes="(max-width: 768px) 100vw, 25vw" className={`object-cover ${c.pos} transition-transform duration-500 group-hover:scale-[1.04]`} />
                </div>
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <p className="eyebrow mb-2">{c.eyebrow}</p>
                  <h3 className="font-[family-name:var(--font-display)] text-[length:var(--text-h3)] text-ink mb-2">{c.title}</h3>
                  <p className="text-muted text-[0.92rem] leading-relaxed mb-5">{c.copy}</p>
                  <a href={c.href} className="link-arrow mt-auto">Explore</a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Renew */}
        <RowLabel label="Renew" />
        <div className="grid md:grid-cols-3 gap-6">
          {renew.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <article className="relative h-full rounded-[var(--radius-card)] overflow-hidden p-7 pt-8 flex flex-col text-white bg-sage-deep">
                <span className="absolute right-5 top-4 font-[family-name:var(--font-display)] text-5xl text-white/10 leading-none select-none">{c.n}</span>
                <Lotus className="w-8 h-8 text-[var(--color-gold)] mb-4" />
                <h3 className="font-[family-name:var(--font-display)] text-[length:var(--text-h3)] text-white mb-2">{c.title}</h3>
                <p className="text-[#dfe5dc] text-[0.93rem] leading-relaxed mb-6">{c.copy}</p>
                <a href={c.href} className="link-arrow link-arrow--light mt-auto">Explore</a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
