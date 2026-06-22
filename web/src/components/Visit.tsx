import Reveal from "./Reveal";
import BookingForm from "./BookingForm";

const hours = [
  ["Monday", "11am – 7pm"],
  ["Tue – Thu", "10am – 9pm"],
  ["Friday", "10am – 8pm"],
  ["Saturday", "10am – 5pm"],
  ["Sunday", "Closed"],
];

export default function Visit() {
  return (
    <section id="visit" className="py-20 md:py-28 bg-sage-deep text-white scroll-mt-24">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Info */}
        <Reveal>
          <p className="eyebrow eyebrow--light mb-3">Visit us</p>
          <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-tight text-white mb-8">
            Your peace is one booking away.
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-xl mb-3">Hours</h3>
              <table className="w-full text-[#d7ddd3] text-[0.95rem]">
                <tbody>
                  {hours.map(([day, time]) => (
                    <tr key={day} className="border-b border-white/10">
                      <td className="py-2">{day}</td>
                      <td className="py-2 text-right tabular-nums">{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-xl mb-3">Find us</h3>
              <p className="text-[#d7ddd3] leading-relaxed mb-3">
                Suite #216 – 2016 Sherwood Dr<br />Sherwood Park, AB
              </p>
              <p className="text-[#d7ddd3] leading-relaxed mb-3">
                <a href="tel:7804679809" className="hover:text-white">(780) 467-9809</a><br />
                <a href="mailto:info@namastespa.ca" className="hover:text-white">info@namastespa.ca</a>
              </p>
              <p className="text-[#aab6a5] text-sm">Also in Calgary · online appointments available</p>
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal>
          <BookingForm />
        </Reveal>
      </div>
    </section>
  );
}
