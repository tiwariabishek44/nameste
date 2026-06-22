import Reveal from "./Reveal";

export default function Promise() {
  return (
    <section id="promise" className="py-20 md:py-28">
      <div className="container-x max-w-3xl text-center mx-auto">
        <Reveal>
          <p className="eyebrow mb-4">Two ways home to yourself</p>
          <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-tight text-ink">
            A spa for your calm — and a clinic for your glow.
          </h2>
          <p className="mt-6 text-muted text-lg leading-relaxed">
            Most places ask you to choose between an escape and a result. At Namaste you
            don&rsquo;t. Sink into the ritual of massage, head spa and Ayurveda — or step into
            advanced skin and body treatments delivered with real expertise. Same sanctuary.
            Both kinds of care.
          </p>
        </Reveal>

        <Reveal className="mt-12 grid sm:grid-cols-2 gap-4 text-left">
          <div className="rounded-[var(--radius-card)] border border-line bg-surface p-6">
            <p className="eyebrow mb-2">Restore</p>
            <p className="text-ink">Massage · Head Spa Ritual · Ayurveda · Wellness · Boutique</p>
          </div>
          <div className="rounded-[var(--radius-card)] border border-line bg-sage-tint p-6">
            <p className="eyebrow mb-2">Renew</p>
            <p className="text-ink">Skin &amp; Aesthetics · Microneedling · Body Contouring · Qi Beauty</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
