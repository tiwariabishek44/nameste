import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import Lotus from "@/components/Lotus";
import { getTreatment, treatmentSlugs } from "@/data/treatments";

export function generateStaticParams() {
  return treatmentSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) return { title: "Treatment — Namaste Spa" };
  return { title: `${t.name} — Namaste Spa & Wellness`, description: t.tagline };
}

export default async function TreatmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) notFound();

  const related = t.related.map(getTreatment).filter(Boolean) as NonNullable<ReturnType<typeof getTreatment>>[];

  return (
    <>
      <SiteHeader />

      {/* Hero */}
      {t.image ? (
        <section className="grain relative min-h-[62vh] flex items-end overflow-hidden">
          <Image src={t.image} alt={t.name} fill priority sizes="100vw" className={`object-cover ${t.imagePos ?? "object-center"}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(22,20,16,0.85)] via-[rgba(22,20,16,0.4)] to-[rgba(22,20,16,0.25)]" />
          <div className="container-x relative pb-14 pt-32">
            <Breadcrumb name={t.name} />
            <p className="eyebrow eyebrow--light mt-4 mb-3 flex items-center gap-3"><Lotus className="w-6 h-6" /> {t.pillar}</p>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] text-white font-light tracking-[-0.02em] max-w-3xl">
              <TreatmentName name={t.name} flourish={t.flourish} />
            </h1>
            <p className="mt-5 text-lg md:text-xl text-[#efe9df] max-w-xl">{t.tagline}</p>
          </div>
        </section>
      ) : (
        <section className="grain relative bg-sage-deep text-white overflow-hidden">
          <span className="edge-index pointer-events-none absolute -right-6 -top-10 text-[16rem] text-white/5 select-none hidden md:block">✦</span>
          <div className="container-x relative pb-16 pt-36">
            <Breadcrumb name={t.name} light />
            <p className="eyebrow eyebrow--light mt-4 mb-3 flex items-center gap-3"><Lotus className="w-6 h-6 text-[var(--color-gold)]" /> {t.pillar}</p>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] text-white font-light tracking-[-0.02em] max-w-3xl">
              <TreatmentName name={t.name} flourish={t.flourish} />
            </h1>
            <p className="mt-5 text-lg md:text-xl text-[#dfe5dc] max-w-xl">{t.tagline}</p>
          </div>
        </section>
      )}

      {/* Intro + options */}
      <section className="py-20 md:py-28">
        <div className="container-x grid md:grid-cols-12 gap-10 md:gap-16">
          <Reveal className="md:col-span-7">
            <p className="eyebrow mb-4">What it is</p>
            {t.intro.map((p, i) => (
              <p key={i} className="text-muted text-lg leading-relaxed mb-5">{p}</p>
            ))}
          </Reveal>

          <Reveal className="md:col-span-5">
            <div className="bg-surface border border-line rounded-[var(--radius-card)] p-7 md:sticky md:top-28">
              <p className="eyebrow mb-4">The details</p>
              <ul className="divide-y divide-line">
                {t.options.map((o) => (
                  <li key={o.label + o.detail} className="flex items-baseline justify-between gap-4 py-3">
                    <span>
                      <span className="block text-ink font-medium">{o.label}</span>
                      <span className="block text-muted text-sm">{o.detail}</span>
                    </span>
                    <span className="font-[family-name:var(--font-display)] text-lg text-sage-deep whitespace-nowrap tabular-nums">{o.price}</span>
                  </li>
                ))}
              </ul>
              {t.directBill && (
                <p className="mt-4 flex items-start gap-2 text-sm text-sage-deep bg-sage-tint rounded-lg px-3 py-2.5">
                  <span className="mt-0.5">✓</span> We direct-bill most major benefits — Blue Cross, Manulife, Sunlife &amp; more.
                </p>
              )}
              <a href="/book" className="btn btn--primary btn--block mt-5">Book your peace</a>
              <p className="mt-3 text-xs text-muted text-center">*Indicative pricing — confirmed at booking.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ritual */}
      {t.ritual && (
        <section className="grain py-20 md:py-28 bg-sand">
          <div className="container-x">
            <Reveal className="max-w-2xl mb-12">
              <p className="eyebrow mb-3">The ritual</p>
              <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-tight text-ink">What to expect.</h2>
            </Reveal>
            <ol className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl">
              {t.ritual.map((step, i) => (
                <Reveal key={step.title} delay={i * 70} as="li" className="flex gap-5">
                  <span className="font-[family-name:var(--font-display)] text-3xl text-sage/40 leading-none pt-1 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <h3 className="font-[family-name:var(--font-display)] text-xl text-ink mb-1.5">{step.title}</h3>
                    <p className="text-muted leading-relaxed">{step.body}</p>
                  </span>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Benefits */}
      <section className="py-20 md:py-28">
        <div className="container-x grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <Reveal className="md:col-span-4">
            <Lotus className="w-9 h-9 text-gold mb-4" />
            <p className="eyebrow mb-3">Why you&rsquo;ll love it</p>
            <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-tight text-ink">The good that stays with you.</h2>
          </Reveal>
          <Reveal className="md:col-span-8">
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
              {t.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-lg text-ink border-b border-line pb-4">
                  <Lotus className="w-5 h-5 text-gold shrink-0 mt-1.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      {t.faqs.length > 0 && (
        <section className="py-20 md:py-28 bg-sand">
          <div className="container-x max-w-3xl">
            <Reveal className="mb-10">
              <p className="eyebrow mb-3">Good to know</p>
              <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-tight text-ink">Questions, answered.</h2>
            </Reveal>
            <div className="divide-y divide-line border-y border-line">
              {t.faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                    <span className="font-[family-name:var(--font-display)] text-lg md:text-xl text-ink">{f.q}</span>
                    <span className="text-sage-deep text-2xl leading-none transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-muted leading-relaxed max-w-2xl">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="container-x">
            <Reveal className="mb-10 flex items-end justify-between gap-4">
              <div>
                <p className="eyebrow mb-3">Continue the ritual</p>
                <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-tight text-ink">You may also love.</h2>
              </div>
              <a href="/treatments" className="link-arrow">All treatments</a>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((r) => (
                <Reveal key={r.slug} className="group">
                  <a href={`/treatments/${r.slug}`} className="block bg-surface border border-line rounded-[var(--radius-card)] overflow-hidden h-full">
                    <div className="grid grid-cols-3">
                      <div className="relative col-span-1 aspect-square overflow-hidden bg-sage-deep">
                        {r.cardImage && (
                          <Image src={r.cardImage} alt="" fill sizes="200px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                        )}
                      </div>
                      <div className="col-span-2 p-6 flex flex-col justify-center">
                        <p className="eyebrow mb-1.5">{r.pillar}</p>
                        <h3 className="font-[family-name:var(--font-display)] text-xl text-ink mb-1">{r.name}</h3>
                        <span className="link-arrow mt-2">Explore</span>
                      </div>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Closing CTA */}
      <section className="grain bg-sage-deep text-white py-20 md:py-24 text-center">
        <div className="container-x max-w-2xl">
          <Reveal className="flex flex-col items-center">
            <Lotus className="w-10 h-10 text-[var(--color-gold)] mb-5" />
            <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-tight text-white mb-6">Ready when you are.</h2>
            <a href="/book" className="btn btn--ghost-light btn--lg">Book your peace</a>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

function TreatmentName({ name, flourish }: { name: string; flourish?: string }) {
  if (!flourish || !name.includes(flourish)) return <>{name}</>;
  const [before, after] = name.split(flourish);
  return (
    <>
      {before}
      <span className="flourish">{flourish}</span>
      {after}
    </>
  );
}

function Breadcrumb({ name, light }: { name: string; light?: boolean }) {
  const cls = light ? "text-white/70" : "text-white/80";
  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${cls}`}>
      <a href="/" className="hover:text-white">Home</a>
      <span className="mx-2 opacity-60">/</span>
      <a href="/treatments" className="hover:text-white">Treatments</a>
      <span className="mx-2 opacity-60">/</span>
      <span className="text-white">{name}</span>
    </nav>
  );
}
