import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import Lotus from "@/components/Lotus";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book — Namaste Spa & Wellness",
  description:
    "Book your peace at Namaste Spa in Sherwood Park. Request your appointment and we'll confirm within one business day. We direct-bill most major benefits.",
};

const steps = [
  { n: "01", t: "Tell us what you'd love", d: "Share the treatment you're after and a time that suits you." },
  { n: "02", t: "We confirm your time", d: "We'll reply within one business day to lock in your appointment." },
  { n: "03", t: "Arrive, and exhale", d: "Step in, hand us the rest — and leave feeling more like yourself." },
];

export default function BookPage() {
  return (
    <>
      <SiteHeader />

      <section className="grain bg-sage-deep text-white pt-36 pb-16 text-center">
        <div className="container-x max-w-2xl mx-auto flex flex-col items-center">
          <Lotus className="w-11 h-11 text-[var(--color-gold)] mb-5" />
          <p className="eyebrow eyebrow--light mb-4">Booking</p>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.05] text-white font-light tracking-[-0.02em]">
            Book your <span className="flourish">peace.</span>
          </h1>
          <p className="mt-5 text-lg text-[#dfe5dc]">Request your appointment below — we&rsquo;ll take care of the rest.</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* How it works */}
          <Reveal>
            <p className="eyebrow mb-3">How it works</p>
            <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-tight text-ink mb-8">
              Three steps to calm.
            </h2>
            <ol className="space-y-7">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-5">
                  <span className="font-[family-name:var(--font-display)] text-3xl text-sage/40 leading-none pt-1 tabular-nums">{s.n}</span>
                  <span>
                    <h3 className="font-[family-name:var(--font-display)] text-xl text-ink mb-1">{s.t}</h3>
                    <p className="text-muted leading-relaxed">{s.d}</p>
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-8 flex items-start gap-3 text-sage-deep bg-sage-tint rounded-lg px-4 py-3.5">
              <Lotus className="w-6 h-6 shrink-0 mt-0.5" />
              <p className="text-sm">We direct-bill most major benefits — Blue Cross, Manulife, Sunlife &amp; more. Prefer to talk? Call <a href="tel:7804679809" className="underline">(780) 467-9809</a>.</p>
            </div>

            <p className="mt-6 text-xs text-muted">A real-time online booking system can be connected here in the full build.</p>
          </Reveal>

          {/* Form */}
          <Reveal>
            <BookingForm />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
