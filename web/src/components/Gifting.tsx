import Reveal from "./Reveal";
import Lotus from "./Lotus";

export default function Gifting() {
  return (
    <section id="packages" className="py-20 md:py-28">
      <div className="container-x grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="eyebrow mb-3">Packages &amp; gifting</p>
          <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-tight text-ink mb-5">
            Give the gift of peace.
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-8">
            Spa packages for a half-day of calm, memberships for the ones who make self-care
            a habit, and gift cards for the people you love. Tranquility, ready to give.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/book" className="btn btn--primary">Buy a gift card</a>
            <a href="/contact" className="btn btn--secondary">Ask us how</a>
          </div>
        </Reveal>

        <Reveal className="flex justify-center">
          <div className="relative w-full max-w-sm aspect-[16/10] rounded-2xl bg-sage-deep text-white p-7 flex flex-col justify-between shadow-[0_30px_60px_-30px_rgba(63,81,57,0.7)]">
            <div className="absolute inset-0 rounded-2xl border border-white/10" />
            <div className="flex items-center justify-between">
              <span className="font-[family-name:var(--font-display)] text-2xl">Namaste</span>
              <Lotus className="w-8 h-8 text-[var(--color-gold)]" />
            </div>
            <div>
              <p className="text-[#cdd6ca] text-xs uppercase tracking-[0.22em] mb-1">Gift of peace</p>
              <p className="font-[family-name:var(--font-display)] text-xl">Self-care, given.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
