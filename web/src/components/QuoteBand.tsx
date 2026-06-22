import Image from "next/image";
import Reveal from "./Reveal";
import Lotus from "./Lotus";

export default function QuoteBand() {
  return (
    <section className="grain relative py-24 md:py-32 overflow-hidden">
      <Image
        src="/images/ritual.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[rgba(35,32,26,0.7)]" />
      <div className="container-x relative text-center max-w-3xl mx-auto">
        <Reveal>
          <Lotus className="w-10 h-10 text-[var(--color-gold)] mx-auto mb-6" />
          <p className="eyebrow eyebrow--light mb-6">The wisdom we&rsquo;re built on</p>
          <blockquote className="font-[family-name:var(--font-display)] italic font-light text-[clamp(1.6rem,3.5vw,2.6rem)] leading-snug text-white">
            &ldquo;It tells us which substances, qualities and actions are life-enhancing — and which are not.&rdquo;
          </blockquote>
          <p className="mt-6 text-[#e9e2d6] text-sm tracking-wide">— Charaka Samhita, on Ayurveda · c. 150 BCE</p>
        </Reveal>
      </div>
    </section>
  );
}
