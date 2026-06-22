import Reveal from "./Reveal";
import Lotus from "./Lotus";

const stats = [
  ["13K+", "community who trust us"],
  ["2", "locations · Sherwood Park & Calgary"],
  ["10+", "years caring for our city"],
  ["Direct", "insurance billing on the spot"],
];

// Representative of the kind of reviews Namaste receives. In the full build these
// pull live from Google / Yelp / Instagram with real names and verified badges.
const reviews = [
  "The head spa ritual was the most relaxed I've felt in years. I walked out lighter than I walked in.",
  "They direct-billed my benefits, my therapist was wonderful, and the space is just beautiful. My new regular.",
  "Equal parts pampering and real results. The skin treatments are excellent and it never feels clinical.",
];

export default function Proof() {
  return (
    <section className="py-20 md:py-28 bg-sand">
      <div className="container-x">
        {/* Trust stats */}
        <Reveal className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line rounded-[var(--radius-card)] overflow-hidden border border-line">
          {stats.map(([num, label]) => (
            <div key={label} className="bg-sand px-6 py-8 text-center">
              <p className="font-[family-name:var(--font-display)] text-4xl text-sage-deep mb-1">{num}</p>
              <p className="text-muted text-sm leading-snug">{label}</p>
            </div>
          ))}
        </Reveal>

        {/* Reviews */}
        <Reveal className="flex flex-col items-center text-center max-w-2xl mx-auto mt-20 mb-12">
          <Lotus className="w-9 h-9 text-gold mb-4" />
          <p className="eyebrow mb-3">In their words</p>
          <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-tight text-ink">
            Loved across <span className="flourish">Sherwood Park.</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((quote, i) => (
            <Reveal key={i} delay={i * 80}>
              <figure className="bg-surface border border-line rounded-[var(--radius-card)] p-7 h-full flex flex-col">
                <div className="text-[var(--color-gold)] tracking-[0.15em] mb-4" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote className="font-[family-name:var(--font-display)] text-lg leading-snug text-ink italic flex-1">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-xs text-muted italic">
                  Representative guest review
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-10">
          <a href="https://www.yelp.ca/biz/namaste-wellness-and-spa-sherwood-park-2" className="link-arrow">Read real reviews on Yelp</a>
        </Reveal>
      </div>
    </section>
  );
}
