import Image from "next/image";
import Reveal from "./Reveal";

// Tiles use real Namaste imagery; swap for a live feed embed before launch.
const tiles = [
  { img: "/images/headspa.jpg", pos: "object-center" },
  { img: "/images/space.jpg", pos: "object-center" },
  { img: "/images/ayurveda.jpg", pos: "object-center" },
  { img: "/images/ritual.jpg", pos: "object-center" },
  { img: "/images/massage.jpg", pos: "object-top" },
  { img: "/images/hero.jpg", pos: "object-center" },
];

export default function InstagramStrip() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-x">
        <Reveal className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <p className="eyebrow mb-2">The sanctuary, daily</p>
            <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-tight text-ink">
              Follow the ritual.
            </h2>
          </div>
          <a href="https://instagram.com/namastedayspa/" className="link-arrow">@namastedayspa · 13K</a>
        </Reveal>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
          {tiles.map((t, i) => (
            <Reveal key={i} delay={i * 50}>
              <a
                href="https://instagram.com/namastedayspa/"
                aria-label="View on Instagram"
                className="group block relative aspect-square rounded-lg overflow-hidden"
              >
                <Image
                  src={t.img}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  className={`object-cover ${t.pos} transition-transform duration-500 group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-sage-deep/0 group-hover:bg-sage-deep/30 transition-colors duration-300" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
