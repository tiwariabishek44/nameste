import Image from "next/image";
import Reveal from "./Reveal";
import Lotus from "./Lotus";

const intents = [
  { tag: "Unwind", line: "A quiet hour, the world on mute.", img: "/images/ritual.jpg", href: "/treatments/head-spa" },
  { tag: "Relieve", line: "Knots, tension, recovery — hands that know.", img: "/images/massage.jpg", href: "/treatments/massage", pos: "object-top" },
  { tag: "Glow", line: "Skin, scalp and radiance, visibly renewed.", img: "/images/headspa.jpg", href: "/treatments/skin-aesthetics" },
  { tag: "Gift", line: "Give someone you love an hour of calm.", img: "/images/space.jpg", href: "/#packages" },
];

export default function Concierge() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <Reveal className="flex flex-col items-center text-center mb-12">
          <Lotus className="w-10 h-10 text-gold mb-4" />
          <p className="eyebrow mb-3">However you arrived</p>
          <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-tight text-ink max-w-xl">
            What brings you in <span className="flourish">today?</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {intents.map((it, i) => (
            <Reveal key={it.tag} delay={i * 70}>
              <a href={it.href} className="group block relative aspect-[3/4] rounded-[var(--radius-card)] overflow-hidden">
                <Image
                  src={it.img}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className={`object-cover ${it.pos ?? "object-center"} transition-transform duration-700 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,26,22,0.82)] via-[rgba(28,26,22,0.25)] to-transparent transition-opacity duration-500 group-hover:from-[rgba(28,26,22,0.9)]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-[family-name:var(--font-display)] text-2xl text-white leading-none mb-2">{it.tag}</p>
                  <p className="text-[#e7e1d6] text-sm leading-snug opacity-90">{it.line}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[var(--color-gold)] text-xs font-semibold tracking-wide uppercase opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    Explore <span aria-hidden>→</span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
