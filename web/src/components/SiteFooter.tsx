const footerNav = [
  ["Treatments", "/treatments"],
  ["The Space", "/the-space"],
  ["About", "/about"],
  ["Contact & Locations", "/contact"],
  ["Book", "/book"],
  ["(780) 467-9809", "tel:7804679809"],
];

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-[#cdd0c9]">
      <div className="container-x grid md:grid-cols-3 gap-10 py-14 items-start">
        <div>
          <p className="leading-none">
            <span className="block font-[family-name:var(--font-display)] text-2xl text-white">Namaste</span>
            <span className="block text-[0.62rem] uppercase tracking-[0.28em] text-[#9aa093] mt-1">spa &amp; wellness</span>
          </p>
          <p className="mt-4 text-sm max-w-xs leading-relaxed">
            Sherwood Park&rsquo;s sanctuary for self-care &amp; healing.
          </p>
          <div className="mt-4 flex gap-5 text-sm">
            <a href="https://instagram.com/namastedayspa/" className="hover:text-white">Instagram</a>
            <a href="https://www.facebook.com/pages/Namaste-Wellness-and-Day-Spa-Inc/302900363080210" className="hover:text-white">Facebook</a>
          </div>
        </div>

        <nav className="flex flex-col gap-2.5 text-sm md:justify-self-center" aria-label="Footer">
          {footerNav.map(([label, href]) => (
            <a key={label} href={href} className="hover:text-white">{label}</a>
          ))}
        </nav>

        <a href="/book" className="btn btn--ghost-light md:justify-self-end">Book your peace</a>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col sm:flex-row justify-between gap-2 py-5 text-xs text-[#8f9488]">
          <p>&copy; {year} Namaste Wellness &amp; Day Spa. All rights reserved.</p>
          <p>Sherwood Park · Calgary · Alberta</p>
        </div>
      </div>
    </footer>
  );
}
