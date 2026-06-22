import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import Lotus from "@/components/Lotus";
import { rooms } from "@/data/rooms";

export const metadata: Metadata = {
  title: "The Space — A Tour of Namaste Spa & Wellness",
  description:
    "Step inside Namaste Spa in Sherwood Park — from the boutique and massage rooms to the Head Spa room, Ayurveda suite, aesthetics studio and relaxation lounge.",
};

export default function TheSpacePage() {
  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="grain relative min-h-[60vh] flex items-end overflow-hidden">
        <Image src="/images/space.jpg" alt="Inside Namaste Spa & Wellness" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(22,20,16,0.85)] via-[rgba(22,20,16,0.4)] to-[rgba(22,20,16,0.2)]" />
        <div className="container-x relative pb-14 pt-36">
          <p className="eyebrow eyebrow--light mb-3 flex items-center gap-3"><Lotus className="w-7 h-7" /> The space</p>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,7vw,5rem)] leading-[1.02] text-white font-light tracking-[-0.02em]">
            Step inside, and the city <span className="flourish">goes quiet.</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-[#efe9df] max-w-xl">
            Warm wood, soft light, copper and stone — a room-by-room wander through your sanctuary in Sherwood Park.
          </p>
        </div>
      </section>

      {/* Rooms — alternating editorial */}
      <div className="py-12 md:py-20">
        {rooms.map((room, i) => (
          <section key={room.name} className="py-10 md:py-14">
            <div className="container-x grid md:grid-cols-12 gap-8 md:gap-14 items-center">
              <Reveal className={`md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
                <div className="relative aspect-[16/10] rounded-[var(--radius-card)] overflow-hidden border border-line">
                  <Image src={room.img} alt={room.name} fill sizes="(max-width: 768px) 100vw, 58vw" className={`object-cover ${room.pos ?? "object-center"}`} />
                </div>
              </Reveal>
              <Reveal className={`md:col-span-5 ${i % 2 ? "md:order-1" : ""}`}>
                <p className="font-[family-name:var(--font-display)] text-5xl text-sage/25 leading-none mb-4 tabular-nums">{String(i + 1).padStart(2, "0")}</p>
                <p className="eyebrow mb-2">{room.real ? "Namaste" : "The space"}</p>
                <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-tight text-ink mb-4">{room.name}</h2>
                <p className="text-muted text-lg leading-relaxed">{room.line}</p>
                {!room.real && (
                  <p className="mt-3 text-xs text-muted italic">Sample image — your space here.</p>
                )}
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="grain bg-sage-deep text-white py-20 md:py-24 text-center">
        <div className="container-x max-w-2xl">
          <Reveal className="flex flex-col items-center">
            <Lotus className="w-10 h-10 text-[var(--color-gold)] mb-5" />
            <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-tight text-white mb-6">
              Come experience it in person.
            </h2>
            <a href="/book" className="btn btn--ghost-light btn--lg">Book your peace</a>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
