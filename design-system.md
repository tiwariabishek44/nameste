# Namaste Spa — Design System

**The single source of truth for the 2026 redesign.**
Every page, component, and (eventually) line of code is built from this file. If a decision isn't here, it isn't decided. If something contradicts this file, this file wins.

**Maintainer:** Marcus Elden — UI/UX Architect
**Created:** 2026-06-22
**Status:** Foundation locked. Ready to build the homepage from.
**Related docs (same folder):** `namaste-spa-audit.md` · `instagram-insights.md` · `redesign-vision-2026.md` · `inspiration-and-assets.md`

Legend: 🔒 locked · ⏳ pending a later decision

---

## 1. Foundation

### 1.1 Brand essence
> **A sanctuary where ancient ritual meets advanced skincare.**

Namaste is not a budget day spa and not a clinical medi-spa. It is the rare blend of both: the warmth and ritual of an Asia-/Ayurveda-inspired sanctuary, delivering real, results-driven treatments. The site must *feel* calm and premium **and** *prove* credibility and results.

### 1.2 The two pillars 🔒
Everything — nav, colour emphasis, imagery, copy — organises under these:

| Pillar | Meaning | Treatments |
|---|---|---|
| **Restore** | The soul. Calm, ritual, the experience. | Massage (incl. prenatal) · Head Spa Ritual · Ayurveda (Shirodhara) · Wellness · Boutique |
| **Renew** | The results. Modern, advanced, credible. | Skin & Aesthetics (Microneedling · Dermaplaning · Microderm) · Body Contouring (Slimwave) · Qi Beauty |

### 1.3 Design principles (we judge every decision against these)
1. **Warmth over clinical.** When in doubt, choose the calmer, warmer, more human option.
2. **Booking is never more than a thumb away.** A persistent, obvious path to book on every screen.
3. **Trust lives in the layout, not the footer.** Reviews, credentials, and the insurance direct-billing advantage are *structural*.
4. **Reveal, don't decorate.** The business is already strong; the design exposes it. No ornament that doesn't carry meaning.
5. **Calm motion only.** Gentle, breathing, optional. Never bounce, never a carousel-as-content.
6. **Nothing wasted.** Every section earns its place by building desire or removing friction. If it does neither, it's cut.
7. **Mobile is the real product.** Designed thumb-first, always — never a shrunk desktop.

### 1.4 What we deliberately leave behind
The 2014 cool-grey theme chrome, the amber badge graphics, the menu-apology banner, the celebrity/stock hero, the 13-flat-link nav, the carousel. None of it is brand equity — it was theme default. We evolve the **real** warmth (wood, copper, amber, lotus, the Ayurveda story), not the accidental theme.

---

## 2. Typography 🔒

Personality chosen: **distinctive & characterful** — a display serif with real voice, paired with a crisp, warm grotesque. Stands out from the beige medi-spa crowd; pairs with the calm palette to read "considered," never loud.

### 2.1 Typefaces

| Role | Typeface | Notes | Fallback stack |
|---|---|---|---|
| **Display / headings** | **Fraunces** (variable, with optical sizing) | Characterful old-style serif; warmth + personality; `opsz` lets large sizes get more expressive. | `"Fraunces", Georgia, "Times New Roman", serif` |
| **Body / UI** | **Hanken Grotesk** (variable) | Crisp, warm grotesque; highly legible at text sizes; neutral enough to carry long copy. | `"Hanken Grotesk", system-ui, -apple-system, "Segoe UI", sans-serif` |

- **Premium upgrade path (⏳ optional):** if a budget for licensed fonts opens up, **Canela** or **Larken** (display) are the paid step-up that the reference set (AIRE) uses. Fraunces is the free, production-ready choice and is genuinely excellent — not a compromise.
- **Two families maximum.** No third face. Utility/labels use Hanken Grotesk (uppercase, tracked), not a separate font.
- `font-display: swap` always. Subset to Latin. Self-host for performance + privacy.

### 2.2 Type scale (modular — Major Third, 1.25)
Sizes are the desktop reference; use fluid `clamp()` between the mobile and desktop value. Body base is **18px desktop / 17px mobile**.

| Token | Desktop size | Weight | Line-height | Tracking | Use |
|---|---|---|---|---|---|
| `display` | 64–88px (fluid) | 340–400 | 1.05 | −0.02em | Hero headline only |
| `h1` | 48px | 400 | 1.1 | −0.015em | Page title |
| `h2` | 36px | 400 | 1.15 | −0.01em | Section thesis |
| `h3` | 26px | 500 | 1.2 | normal | Sub-section / card title |
| `h4` | 20px | 600 | 1.3 | normal | Small headings / labels |
| `body-lg` | 20px | 400 | 1.6 | normal | Lead paragraphs, intros |
| `body` | 18px | 400 | 1.65 | normal | Default body copy |
| `body-sm` | 16px | 400 | 1.6 | normal | Secondary copy, captions |
| `eyebrow` | 13px | 600 | 1.4 | +0.14em, UPPERCASE | Section eyebrow labels |

### 2.3 Rules
- **One weight per heading.** Never mix weights inside a single headline.
- **Line length 60–75 characters** for body — enforce with a content max-width (~68ch).
- Display serif used **sparingly** — hero, section theses, the occasional pull-quote. Not for UI or long copy.
- Numerals: tabular for prices/hours; proportional elsewhere.

---

## 3. Colour 🔒

Direction: **Hybrid — sage green primary + gold micro-accent**, on warm-linen neutrals. Sage carries natural-wellness credibility (Renew); gold carries warm ritual/premium (Restore, pulled from the real spa's copper-and-amber interior). Evolved from Namaste's actual warmth — not the old website's grey.

### 3.1 Core tokens (the 5)

| Token | Hex | RGB | Use |
|---|---|---|---|
| `--color-base` | `#F7F4EE` | 247 244 238 | Page background (warm linen) |
| `--color-surface` | `#FDFBF6` | 253 251 246 | Cards / panels (warm off-white) |
| `--color-text-primary` | `#29302B` | 41 48 43 | Body + headings (green-charcoal) |
| `--color-text-secondary` | `#6B7268` | 107 114 104 | Captions, labels, supporting text |
| `--color-accent` | `#5E7257` | 94 114 87 | The sage — primary brand accent |

### 3.2 Extended tokens (supporting the core)

| Token | Hex | Use |
|---|---|---|
| `--color-accent-deep` | `#3F5139` | Interactive sage that needs contrast — button fills, links (white text passes AA) |
| `--color-accent-soft` | `#7E927A` | Decorative/light sage — dividers, subtle fills |
| `--color-sage-tint` | `#E7EBE2` | Pale sage wash for alternating "breathing" sections |
| `--color-gold` | `#B0894C` | Gold micro-accent — small flourishes, underlines, icon strokes |
| `--color-gold-deep` | `#8F6E38` | Gold that needs contrast — gold text on light backgrounds |
| `--color-sand` | `#EDE7DB` | Deeper warm neutral — alternating section bands |
| `--color-line` | `#E2DCD0` | Hairline borders, dividers |

### 3.3 State / system colours

| Token | Hex | Use |
|---|---|---|
| `--color-focus` | `#5E7257` | Focus ring (sage), 2px, 2px offset |
| `--color-error` | `#B3261E` | Form errors |
| `--color-success` | `#3F5139` | Form success (uses deep sage, on-brand) |

### 3.4 Usage rules
- **Accent discipline:** sage and gold appear only on things that matter — CTAs, active states, key highlights, small flourishes. They are *seasoning*, not the dish. The page is mostly warm neutral + ink.
- **Gold is a micro-accent.** Thin lines, small marks, an underline, an icon stroke — never large fills or body text. It's the premium glint, used at ~5–10% of the accent's footprint.
- **Never pure black (`#000`) or pure white (`#fff`).** Text is `#29302B`; lightest surface is `#FDFBF6`.
- **No gradients** in hero or sections unless a future brand reason demands it.

### 3.5 Accessibility pairings (verified intent — confirm with a checker at build)
| Foreground | Background | Ratio | Verdict |
|---|---|---|---|
| `#29302B` text | `#F7F4EE` base | ~12:1 | ✅ AAA |
| `#6B7268` secondary | `#F7F4EE` base | ~4.6:1 | ✅ AA (use ≥16px) |
| `#FDFBF6` white | `#3F5139` deep sage button | ~7:1 | ✅ AAA |
| `#3F5139` link | `#F7F4EE` base | ~7.5:1 | ✅ AAA |
| `#8F6E38` gold-deep | `#F7F4EE` base | ~4.6:1 | ✅ AA (large/UI) |

> ⚠️ The lighter `--color-accent` `#5E7257` does **not** pass AA for small body text on light — use `--color-accent-deep` for text/links, reserve `#5E7257` for fills, large type, and UI.

---

## 4. Spacing & layout

### 4.1 Spacing scale (4px base — no magic numbers)
`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 160`
Section vertical padding: **96px desktop / 64px mobile** (generous; space *is* the luxury good).

### 4.2 Breakpoints (mobile-first, min-width only)
| Name | Min width |
|---|---|
| `sm` | 480px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |

### 4.3 Containers
- **Page max-width:** 1280px, centred, 24px gutters (16px on mobile).
- **Text/content max-width:** ~68ch (keeps line length in the 60–75 range).
- **Grid:** 12-column on `lg+`. Favour **asymmetric** compositions over centred symmetry — they read as considered.

### 4.4 Section rhythm
Alternate density: **rich → breathing → rich.** Use `--color-base` for default, `--color-sand` or `--color-sage-tint` for the calm breathing bands. Radii: cards/buttons `12px`; large media `20px`.

---

## 5. Components

Each component lists appearance + required states. States are not optional — the old site shipped a form with no labels or error states; that never happens again.

### 5.1 Buttons / CTAs
- **Primary** — fill `--color-accent-deep`, text `--color-surface`, radius 12px, padding 16×28, Hanken Grotesk 600. Label is usually **"Book your peace"**. Hover: darken ~6% + lift 1px. Focus: 2px sage ring, 2px offset.
- **Secondary** — transparent fill, 1px `--color-accent-deep` border, sage text. Hover: faint sage-tint fill.
- **Ghost / text-link** — sage text with a **gold underline** that animates in on hover (180ms). The one place gold and sage meet.
- Min target **48×48px**. Never two primary buttons competing in one view.

### 5.2 Forms & inputs (booking / contact)
- Every field has a **visible `<label>`** (never placeholder-as-label), an optional inline hint, and a graceful inline **error** state (`--color-error` text + border, message below).
- Input: `--color-surface` fill, `--color-line` border, 12px radius, 16–18px text (≥16px to avoid iOS zoom-on-focus). Focus: sage ring.
- Never stack more than ~5 fields without a break. Booking form aims for the *fewest* fields that work.

### 5.3 Treatment card (the services-grid unit)
Image (4:5 or 3:2) → eyebrow (pillar: Restore/Renew) → `h3` name → one evocative line → "Explore →" text-link. Surface card on base, hairline border, 12px radius, gentle hover lift + image scale (1.03, 300ms). Cards are **named like products**, not nav links.

### 5.4 Navigation
- **Header:** logo left; grouped nav centre/right — `Treatments ▾ · About · Boutique · Specials · Locations`; persistent **Book** primary button far right (always visible, sticky on scroll).
- **Treatments mega-menu:** two labelled columns — **Restore** and **Renew** — listing treatments. Calm, generous, photographic if possible.
- **Mobile:** clean hamburger → full-screen overlay, Book pinned. **No "click the three lines" instruction text — ever.**

### 5.5 Trust components
- **Insurance direct-billing badge** — a structural element (e.g. "We direct-bill your benefits — Blue Cross, Manulife, Sunlife & more"). One of our strongest conversion levers; give it real placement, not footer fine print.
- **Reviews block** — real, specific, named reviews surfaced *on* the page (pull from Google/IG), not a link out.
- **Credibility strip** — years in business, 13K community, certifications, two locations.

### 5.6 Header / Footer
- **Footer:** hours (their real schedule), both locations (Sherwood Park + Calgary), phone, email, social, a final **Book your peace** CTA, and *current* copyright (never a frozen year). Warm `--color-text-primary` ground or deep sage, light text.

---

## 6. Imagery & art direction

### 6.1 Style
Warm, candlelit, sensory, real. Natural light; copper/brass, wood, stone, water, linen. Calm and unhurried. Mirrors walking into the actual Namaste.

### 6.2 Rules
- **Real over stock, always.** Real space, real treatments, real team.
- **Aspect ratios:** hero 16:9 / 3:2; treatment cards 4:5; portraits 4:5. Set explicit `width`/`height` to prevent layout shift; `loading="lazy"` below the fold; serve WebP/AVIF with `srcset`.
- **No celebrity imagery, no laughing-at-laptop stock, no carousels as primary content.**

### 6.3 Asset policy (see `inspiration-and-assets.md` + `assets/`)
- **Owned & usable now:** real interior (`Spa1.jpg`, `web-slide-1.jpg`, `spa11.jpg`), real Head Spa (`IMG_8219.jpeg`). Snapshot-grade — fine to launch, plan to reshoot.
- ⚠️ **Verify rights before reuse:** the Shirodhara / massage / ayurveda images are likely licensed stock.
- **Goldmine = Instagram** (1,700+ posts) — manual curation step, organised by pillar.
- **Highest-leverage spend:** a half-day professional shoot of the space, the signature rituals (Head Spa, Shirodhara, Massage), and the team. Photography *is* the spa sell.

### 6.4 Logo
`Namaste-logo-small-no-icon.png` is the current wordmark (lotus/Om mark). Treat with generous clearspace; ⏳ a wordmark refresh is likely warranted but out of scope until the brand owner weighs in.

---

## 7. Motion

- **Entrance reveal:** `opacity 0→1` + `translateY(16px→0)`, **500ms**, ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`). Stagger groups by ~80ms.
- **Hover:** 150–200ms, subtle (1px lift, slight image scale, underline draw).
- **Triggers:** Intersection Observer only — no scroll-event listeners.
- **`prefers-reduced-motion`:** 🔒 non-negotiable. Reduced → no transforms, instant opacity, no parallax. Site must be fully usable and beautiful with motion off.
- **Never:** bounce, elastic, auto-rotating carousels, autoplay video with sound.

---

## 8. Voice & microcopy

- **Tone:** calm, human, a little poetic, confident — the Instagram voice ("Wellness • Beauty • Balance 🌸"). Never clinical, never hype.
- **Primary CTA wording:** **"Book your peace."** (Theirs, from Instagram — own it everywhere.)
- **Treatments named like products**, in their own words. Reuse the real harvested copy:
  - *Head Spa Ritual* — "an unforgettable, multi-sensory experience… engage the hair, the scalp, and the soul."
  - *Ayurveda* — "the art of living wisely… the science of life and longevity," WHO-recognized, 5,000 years.
- **Specifics over filler.** No lorem ipsum, no "thousands of happy clients." Real numbers, real names, real treatments.
- **Language is care:** clear, no euphemism, plain answers to practical questions (price, insurance, first-visit, online vs in-person).

---

## 9. Accessibility standards 🔒

- **WCAG AA is the floor; AAA where feasible.**
- **Pinch-zoom enabled** — viewport has *no* `maximum-scale`/`user-scalable=no` (the old site's failure; never repeat).
- **Visible focus rings** (2px sage, 2px offset) on every interactive element. Full keyboard operability. Skip-to-content link.
- **Touch targets ≥ 48×48px.**
- **Meaningful alt text** on all content images (never "image-placeholder").
- **One `<h1>` per page**; logical heading order.
- Semantic HTML; ARIA only where native semantics fall short.
- `<html lang="en">`, a real meta description, a favicon.

---

## 10. Housekeeping

### 10.1 Token naming
CSS custom properties use the names in §3 (`--color-*`), a `--space-*` scale (§4.1), `--font-display` / `--font-body`, `--text-*` for the type scale (§2.2), `--radius-*`, `--ease-out`. Design and code share this vocabulary so nothing is re-invented.

### 10.2 Folder index (`nameste-welness/`)
- `design-system.md` — **this file (start here)**
- `namaste-spa-audit.md` — teardown of the current site
- `instagram-insights.md` — the brand-reality gap
- `redesign-vision-2026.md` — strategy & narrative
- `inspiration-and-assets.md` — competitive DNA + content + asset inventory
- `inspiration/` — reference screenshots (AIRE, Heyday, SkinSpirit, The NOW)
- `assets/` — real Namaste photography + logo
- `spa-desktop-full.jpeg` / `spa-mobile.jpeg` — the current site, captured

### 10.3 Decision log
| Decision | Status | Date |
|---|---|---|
| Positioning: sanctuary × science; Restore/Renew pillars | 🔒 | 2026-06-22 |
| Accent: hybrid sage + gold micro-accent | 🔒 | 2026-06-22 |
| Type personality: distinctive & characterful (Fraunces + Hanken Grotesk) | 🔒 | 2026-06-22 |
| Exact font licensing / premium serif upgrade (Canela/Larken) | ⏳ | — |
| Logo/wordmark refresh | ⏳ | — |
| Final photography (pro shoot + IG curation) | ⏳ | — |

### 10.4 Open decisions (parked, not blocking)
1. Premium paid display serif vs. Fraunces (Fraunces is the working default).
2. Wordmark refresh — needs brand-owner input.
3. Booking system/integration choice (affects the booking-flow components).

---

*"Premium is not expensive-looking. Premium is nothing wasted."* — This file exists so nothing gets wasted twice.
