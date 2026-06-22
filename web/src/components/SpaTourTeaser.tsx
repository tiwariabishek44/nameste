import Image from "next/image";
import Reveal from "./Reveal";
import Lotus from "./Lotus";
import { rooms } from "@/data/rooms";

export default function SpaTourTeaser() {
  const preview = rooms.slice(0, 4);
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <Lotus className="w-9 h-9 text-gold mb-4" />
            <p className="eyebrow mb-3">Take a look inside</p>
            <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-tight text-ink">
              A wander through <span className="flourish">Namaste.</span>
            </h2>
          </div>
          <a href="/the-space" className="btn btn--secondary shrink-0">Step inside →</a>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {preview.map((room, i) => (
            <Reveal key={room.name} delay={i * 70}>
              <a href="/the-space" className="group block relative aspect-[3/4] rounded-[var(--radius-card)] overflow-hidden">
                <Image
                  src={room.img}
                  alt={room.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className={`object-cover ${room.pos ?? "object-center"} transition-transform duration-700 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,24,20,0.78)] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-[family-name:var(--font-display)] text-white text-lg leading-tight">{room.name}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
