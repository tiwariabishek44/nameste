import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import Lotus from "@/components/Lotus";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Contact & Locations — Namaste Spa & Wellness",
  description:
    "Find Namaste Spa in Sherwood Park (Suite 216, 2016 Sherwood Drive) and Calgary. Hours, directions, phone and email — or send us a message.",
};

const hours = [
  ["Monday", "11am – 7pm"],
  ["Tue – Thu", "10am – 9pm"],
  ["Friday", "10am – 8pm"],
  ["Saturday", "10am – 5pm"],
  ["Sunday", "Closed"],
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="grain bg-sage-deep text-white pt-36 pb-20 text-center">
        <div className="container-x max-w-2xl mx-auto flex flex-col items-center">
          <Lotus className="w-11 h-11 text-[var(--color-gold)] mb-5" />
          <p className="eyebrow eyebrow--light mb-4">Visit us</p>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.05] text-white font-light tracking-[-0.02em]">
            Come find your <span className="flourish">calm.</span>
          </h1>
          <p className="mt-5 text-lg text-[#dfe5dc]">Two locations across Alberta — and online appointments when it suits you.</p>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Sherwood Park */}
          <Reveal>
            <div className="bg-surface border border-line rounded-[var(--radius-card)] overflow-hidden h-full">
              <div className="aspect-[16/9] bg-sand">
                <iframe
                  title="Map to Namaste Spa Sherwood Park"
                  src="https://www.google.com/maps?q=2016+Sherwood+Drive,+Sherwood+Park,+AB+T8A+3X3&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
              <div className="p-7">
                <p className="eyebrow mb-2">Flagship</p>
                <h2 className="font-[family-name:var(--font-display)] text-2xl text-ink mb-3">Sherwood Park</h2>
                <p className="text-muted leading-relaxed mb-2">Suite #216 – 2016 Sherwood Drive<br />Sherwood Park, AB T8A 3X3</p>
                <p className="text-ink mb-4">
                  <a href="tel:7804679809" className="hover:text-sage-deep">(780) 467-9809</a> ·{" "}
                  <a href="mailto:info@namastespa.ca" className="hover:text-sage-deep">info@namastespa.ca</a>
                </p>
                <a href="https://www.google.com/maps?q=2016+Sherwood+Drive,+Sherwood+Park,+AB" className="link-arrow">Get directions</a>
              </div>
            </div>
          </Reveal>

          {/* Calgary */}
          <Reveal>
            <div className="bg-surface border border-line rounded-[var(--radius-card)] overflow-hidden h-full">
              <div className="aspect-[16/9] bg-sage-deep flex items-center justify-center">
                <Lotus className="w-14 h-14 text-white/30" />
              </div>
              <div className="p-7">
                <p className="eyebrow mb-2">Also at</p>
                <h2 className="font-[family-name:var(--font-display)] text-2xl text-ink mb-3">Calgary</h2>
                <p className="text-muted leading-relaxed mb-4">Our Calgary location&rsquo;s full address, map and hours will appear here.</p>
                <span className="text-sm text-gold-deep">Details coming soon.</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Hours + form */}
        <div className="container-x grid lg:grid-cols-2 gap-10 lg:gap-12 mt-12">
          <Reveal>
            <div className="bg-sand rounded-[var(--radius-card)] p-8 h-full">
              <p className="eyebrow mb-3">Hours</p>
              <table className="w-full text-ink">
                <tbody>
                  {hours.map(([d, t]) => (
                    <tr key={d} className="border-b border-line">
                      <td className="py-3">{d}</td>
                      <td className="py-3 text-right tabular-nums text-muted">{t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-5 text-sm text-muted">Same hours at both locations. Online appointments available for your convenience.</p>
            </div>
          </Reveal>
          <Reveal>
            <BookingForm heading="Send us a message" />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
