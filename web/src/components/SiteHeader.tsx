"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const restore = [
  ["Massage Therapy", "/treatments/massage"],
  ["Head Spa Ritual", "/treatments/head-spa"],
  ["Ayurveda & Shirodhara", "/treatments/ayurveda"],
  ["Wellness", "/treatments/wellness"],
];
const renew = [
  ["Skin & Aesthetics", "/treatments/skin-aesthetics"],
  ["Body Contouring", "/treatments/body-contouring"],
  ["Qi Beauty", "/treatments/qi-beauty"],
];
const more = [
  ["The Space", "/the-space"],
  ["About", "/about"],
  ["Specials", "/#packages"],
  ["Locations", "/contact"],
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      {/* Utility bar */}
      <div className="hidden md:block bg-sage-deep text-[#eef0ea] text-[0.78rem]">
        <div className="container-x flex items-center justify-between py-2">
          <p>Sherwood Park &amp; Calgary, Alberta</p>
          <p className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
            We direct-bill your benefits — Blue&nbsp;Cross, Manulife, Sunlife &amp; more
          </p>
          <a href="tel:7804679809" className="font-semibold tracking-wide">(780) 467-9809</a>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-surface/95 backdrop-blur shadow-[0_1px_0_var(--color-line),0_8px_24px_-18px_rgba(0,0,0,0.35)]" : "bg-base/80 backdrop-blur-sm"
        }`}
      >
        <div className="container-x flex items-center justify-between gap-4 py-3.5">
          {/* Brand */}
          <a href="/" className="flex items-center" aria-label="Namaste Spa & Wellness — home">
            <Image src="/images/logo.png" alt="Namaste Spa & Wellness" width={200} height={84} priority className="h-12 md:h-14 w-auto object-contain" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:block" aria-label="Primary">
            <ul className="flex items-center gap-8 text-[0.95rem] font-medium text-ink">
              <li className="group relative">
                <a href="/treatments" className="flex items-center gap-1.5 py-2">
                  Treatments
                  <span className="text-muted transition-transform duration-300 group-hover:rotate-180">⌄</span>
                </a>
                {/* Mega menu */}
                <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 absolute left-1/2 -translate-x-1/2 top-full pt-3">
                  <div className="w-[640px] grid grid-cols-3 gap-8 bg-surface border border-line rounded-[var(--radius-card)] shadow-[0_24px_60px_-30px_rgba(0,0,0,0.4)] p-7">
                    <div>
                      <p className="eyebrow mb-3">Restore</p>
                      <ul className="space-y-2.5">
                        {restore.map(([label, href]) => (
                          <li key={label}><a href={href} className="text-[0.92rem] text-ink hover:text-sage-deep transition-colors">{label}</a></li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="eyebrow mb-3">Renew</p>
                      <ul className="space-y-2.5">
                        {renew.map(([label, href]) => (
                          <li key={label}><a href={href} className="text-[0.92rem] text-ink hover:text-sage-deep transition-colors">{label}</a></li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-sage-tint rounded-xl p-5 flex flex-col">
                      <p className="eyebrow mb-2">New &amp; loved</p>
                      <p className="font-[family-name:var(--font-display)] text-[1.15rem] text-ink leading-tight mb-1">The Head Spa Ritual</p>
                      <p className="text-[0.85rem] text-muted leading-snug mb-4">A multi-sensory journey for the hair, the scalp, and the soul.</p>
                      <a href="/treatments/head-spa" className="link-arrow mt-auto">Discover</a>
                    </div>
                  </div>
                </div>
              </li>
              {more.map(([label, href]) => (
                <li key={label}><a href={href} className="py-2 hover:text-sage-deep transition-colors">{label}</a></li>
              ))}
            </ul>
          </nav>

          <a href="/book" className="btn btn--primary hidden sm:inline-flex">Book your peace</a>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2 -mr-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`block w-6 h-[2px] bg-ink transition-all ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block w-6 h-[2px] bg-ink transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[2px] bg-ink transition-all ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-base pt-24 px-6 overflow-y-auto" onClick={() => setMenuOpen(false)}>
          <nav className="flex flex-col" aria-label="Mobile">
            <p className="eyebrow mt-2 mb-3">Restore</p>
            {restore.map(([label, href]) => (
              <a key={label} href={href} className="py-2.5 text-lg border-b border-line">{label}</a>
            ))}
            <p className="eyebrow mt-6 mb-3">Renew</p>
            {renew.map(([label, href]) => (
              <a key={label} href={href} className="py-2.5 text-lg border-b border-line">{label}</a>
            ))}
            <p className="eyebrow mt-6 mb-3">More</p>
            {more.map(([label, href]) => (
              <a key={label} href={href} className="py-2.5 text-lg border-b border-line">{label}</a>
            ))}
            <a href="/book" className="btn btn--primary btn--block mt-8 mb-16">Book your peace</a>
          </nav>
        </div>
      )}
    </>
  );
}
