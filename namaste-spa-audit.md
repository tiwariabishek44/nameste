# Namaste Spa & Wellness — Site Audit & Teardown

**Reviewer:** Marcus Elden — Principal Staff Engineer · UI/UX Architect
**URL:** https://namastespa.ca/
**Date:** 2026-06-21
**Method:** Live inspection via headless browser (desktop 1440×900 + mobile 390×844), DOM/CSS/perf/SEO introspection, accessibility pass.
**Sector:** Day spa / wellness — Sherwood Park, AB (second location in Calgary).

Artifacts captured alongside this report:
- `spa-desktop-full.jpeg` — full desktop render
- `spa-mobile.jpeg` — mobile render

---

## 1. The one-sentence verdict

> This is a **real, rich, multi-service spa business** — massage, head spa, esthetics, ayurveda, body contouring, an online store, two locations — wearing a **broken 2014 WordPress fitness theme** that hides every one of its strengths.

This is the opposite problem from a thin brochure site. The *business* has enormous substance. The *website* actively buries it. The single most important sentence I can say: **the engine is excellent; the chassis is rusted through.** Everything below is in service of getting the business it already is onto a site that finally shows it.

---

## 2. The findings that matter most (read these first)

### 2.1 — The site literally apologises for its own navigation 🔴 THE TELL
The homepage's largest piece of body text — a full-width `<h2>` in amber — reads:

> *"If you are viewing our webpage on a mobile device — to see the menu options, click the three dashed lines at the top left side of the page underneath our logo & phone number."*

This is the most damning thing on the site. **You never explain your navigation — you fix it.** The day a business has to write a paragraph teaching visitors how to find the menu, the menu has already failed. On mobile (where most spa bookings happen), this instruction banner *is* the homepage — it occupies the whole first screen below the hero. A potential customer's first impression is a help notice, not the spa.

### 2.2 — WordPress 4.0.35, from 2014 🔴 CRITICAL (security + credibility)
The `<meta generator>` reports **WordPress 4.0.35**; the footer says **"Copyright © 2014."** Current WordPress is 6.x. This means:
- **~10+ years of unpatched security vulnerabilities.** This is not a style problem — it's a live risk. An outdated WP core + old theme/plugins is the single most common way small-business sites get defaced, injected with spam, or used to harvest customer data. For a site that takes appointment info and runs an online store, this is serious.
- The theme is **`fitnesslife-wpl`** — a *gym/fitness* template repurposed for a spa. jQuery 1.11.1, FlexSlider, meanmenu — all 2014-era. The whole stack is frozen.

**This alone justifies a rebuild over a patch.** You cannot safely modernise a decade-stale core by tweaking CSS.

### 2.3 — The homepage sells nothing 🔴 CRITICAL
For a business with **10+ service categories**, the homepage contains: a logo, a carousel, the menu-apology banner, and a footer. That's it. There is:
- No list of services, no pricing, no packages, no "what to expect"
- No reason-to-choose, no reviews surfaced, no signature treatment highlighted
- No real call to action above the fold

A first-time visitor learns almost nothing about what this spa actually offers. The richest part of the business — the services — is entirely hidden behind a 13-item nav.

### 2.4 — A celebrity face in the hero carousel 🟠 HIGH (legal + strategic risk)
The hero rotates through a slider whose images include **Oprah Winfrey's likeness** (`prenoprah2.jpg`, `web-slide-1.jpg`). Two problems:
1. **Legal exposure** — using a celebrity's image/likeness for commercial promotion without a license is a real liability (right of publicity).
2. **Strategically weak** — it implies an endorsement that (almost certainly) doesn't exist, which erodes rather than builds trust. And it's delivered via a **carousel**, which is a poor primary content mechanism — most users never see slides 2 and 3, and auto-rotation fights the reader.

The real photo in the rotation — the **actual spa interior** (warm wood, product shelves, soft lighting) — is genuinely inviting and is the asset that should be doing the work instead.

---

## 3. Information architecture & navigation

The top nav is a flat row of **13 items**:

`Home · About Us · Shop Online · Monthly Specials · Massage · Head Spa · Esthetics · Wellness · Ayurveda · Qi Beauty · Body Contouring · Spa Packages · Namaste Calgary`

Problems:
- **No grouping, no hierarchy.** Seven of these are *treatments* and belong under a single "Treatments / Services" parent. Mixing "Shop Online," "Monthly Specials," a second location, and seven service pages on one flat bar overwhelms the visitor and forces a 13-way decision.
- **No primary action.** "Book" / "Request Appointment" isn't in the nav at all — it's a dated image-badge buried in the footer. Booking should be the loudest, most persistent element on the entire site.
- **"Head Spa" is buried.** The Japanese head-spa treatment is one of the biggest viral wellness trends of 2024–2026. This spa *has it* — and it's item #6 of 13 in an undifferentiated list. That's a headline offering treated as a footnote.

**Recommended structure:** collapse the seven treatments under one **Services** parent (mega-menu or a dedicated services hub), promote **Book Now** to a persistent button, and group Shop / Specials / Locations sensibly. Thirteen flat links should become roughly five considered ones.

---

## 4. Structure & storytelling

Marcus's lens: *the scroll is a narrative.* This homepage has no narrative — it has a carousel and a footer. There's no arc, because there's almost no middle.

What a spa homepage's story should do:
1. **Hero** — evoke the feeling (calm, escape, ritual) with the real interior photography + one clear promise + Book Now.
2. **Tension / desire** — "You're overdue for an hour that's just yours." Speak to why someone seeks a spa.
3. **Signature services** — a curated, visual grid of the 4–6 hero treatments (lead with Head Spa, Massage, Ayurveda), each a beautiful card, not a nav link.
4. **The experience / the space** — photography of the rooms, the ritual, the imported products. This is where a spa wins; it's a sensory sell.
5. **Proof** — real reviews surfaced inline (they already link "Read Our Reviews" — bring those *onto* the page), specific and named.
6. **Packages & gifting** — high-margin, high-intent; give it real estate.
7. **Practical** — hours, location(s), parking, what to expect for a first visit.
8. **CTA** — Book Now, repeated and frictionless.

Right now items 1–8 essentially don't exist on the homepage. The content lives in the business's head and on scattered subpages; it never reaches the front door.

---

## 5. Typography

Pulled from live computed styles:

| Role | Font | Observed |
|---|---|---|
| Body | **Arimo** (a metric Arial clone), 16px, `#494f5c` | Generic, characterless |
| Headings (H1/H2/H3) | **Open Sans**, 22–30px, 400–700 | The most-used "default" web font of the 2010s |

- The pairing is **Arial-clone + Open Sans** — the visual equivalent of beige. There is *zero* spa character: nothing calm, nothing crafted, nothing that evokes "Asia-inspired tranquility" the copy promises.
- A spa's type should carry the brand's serenity and craft — a refined serif or a warm humanist sans, with real attention to spacing and rhythm. Right now the typography is doing none of the emotional work a wellness brand needs from it.
- H1s are 30px white-on-image — undersized for a hero and dependent on whatever photo is behind them for legibility.

---

## 6. Colour & visual design

- Body background `#f3f3f3` (cool grey), text `#494f5c` (slate), accent **amber/gold `#dd9933`**. The amber is the one bit of warmth and it's mostly spent on the *menu-apology banner* and dated badge graphics.
- The footer's blue-grey panels and little **"Request Appointment" / "Read Our Reviews" / "Book Online" image badges** are pure 2014 — low-res raster buttons that look bolted on.
- There's no cohesive palette doing brand work. A spa should own a restorative, sensory palette (warm neutrals, clay, deep greens or soft golds) used with discipline. Currently colour is incidental, not designed.
- **The one genuinely good visual asset** is the real interior photography — warm, atmospheric, inviting. It's underused and buried in a slider.

---

## 7. Accessibility

| Check | Result |
|---|---|
| `<html lang>` | 🟢 `en-US` present |
| **Pinch-zoom** | 🔴 `maximum-scale=1` **disables zoom** — a direct WCAG 1.4.4 failure; hurts low-vision and older users (a core spa demographic) |
| Image alt text | 🔴 **4 of 7 images** have no alt |
| Heading hierarchy | 🟠 **Three `<h1>`s** on one page (carousel slides) — semantically wrong; there should be one |
| Meta description | 🟠 **Missing** — weak SEO + poor social/search snippet |
| Nav as primary content | 🟠 13 flat links, no skip-link, keyboard-heavy |
| Horizontal scroll (mobile) | 🟢 None |
| Carousel | 🟠 Auto-rotating slider — motion with no obvious pause control; problematic for `prefers-reduced-motion` and cognitive load |

The disabled pinch-zoom is the standout accessibility failure here — spas skew toward an older, wellness-seeking demographic who frequently zoom. Never disable it.

---

## 8. Technical / performance

Measured live:

| Metric | Value | Note |
|---|---|---|
| Platform | **WordPress 4.0.35 (2014)** | Critically outdated; security risk (see §2.2) |
| Theme | `fitnesslife-wpl` | A fitness theme repurposed for a spa |
| DOMContentLoaded | ~2.9s | Slow |
| Load complete | ~4.3s | Poor — well past the 2.5s LCP target |
| Total transferred | **~1.08 MB** | Heavy for a near-empty homepage |
| Heaviest assets | `web-slide-1.jpg` **365 KB**, `prenoprah2.jpg` **222 KB**, `Spa1.jpg` **209 KB** | Unoptimised full-size JPEGs, no `srcset`, no next-gen formats |
| YouTube embeds | **2 iframes** | Loaded eagerly on the homepage — heavy, and privacy-leaking (standard youtube.com, not nocookie) |
| Console | **7 errors / 12 warnings** (desktop), 15 errors on mobile | A noisy, partially-broken runtime |
| jQuery | 1.11.1 (2014) | Plus jquery-migrate — legacy debt |

**Headline performance problems:** ~1 MB to deliver a homepage that says almost nothing; three unoptimised hero JPEGs doing most of that weight; two eager YouTube iframes; a 2014 jQuery/FlexSlider stack. A modern rebuild would cut this by 60–80% and load in under a second.

---

## 9. Mobile

The mobile experience is where everything compounds:
- The hero slider sits under the logo, then the **entire first screen is the menu-apology banner** (§2.1). A customer's first scroll is an instruction manual.
- The hamburger works (`meanmenu`), but the business felt the need to *explain* it — which means it isn't discoverable enough on its own.
- Pinch-zoom is disabled (§7).
- Same 1 MB payload on what is often a phone on mobile data.

The good news: the actual spa interior photo that flashes in the slider looks genuinely warm and inviting on a phone. That asset, given room to breathe, is half the redesign already.

---

## 10. Priorities — what I'd do, in order

**🔴 Now (security + credibility — non-negotiable):**
1. **Migrate off WordPress 4.0.35.** This is urgent regardless of design — a decade-stale core handling store + contact data is a liability. Rebuild on a current, maintained stack.
2. **Delete the menu-apology banner.** Fix navigation so it needs no explanation.
3. **Remove the Oprah/celebrity imagery** from the hero (legal + trust). Lead with the real spa interior.
4. Update the 2014 copyright; it signals an abandoned business.

**🟠 Soon (turn the business's substance into a homepage):**
5. **Build a real homepage** with the narrative arc in §4 — hero → signature services → the space → proof → packages → book.
6. **Restructure the 13-item nav** into ~5 grouped items; promote **Book Now** to a persistent primary button.
7. **Surface Head Spa** as a flagship offering — it's a current viral trend this spa already has.
8. Bring real reviews *onto* the page instead of linking out.

**🟢 Then (craft, performance, polish):**
9. **New type + colour system** with actual spa character (warm, restorative, crafted) — retire Arimo/Open Sans/beige.
10. **Optimise media** — responsive `srcset`, WebP/AVIF, lazy-load below-fold, replace eager YouTube iframes with click-to-play facades. Target <1s load, <400 KB initial.
11. Fix accessibility: enable pinch-zoom, one `<h1>` per page, real alt text, add a meta description.
12. Replace the raster "badge" buttons with clean, native CTA components.

---

## 11. Marcus's closing note

> *"A website is a building. Most people treat it like a pamphlet."*

This one is the rarer, more frustrating case: **a genuinely good building with a collapsed façade.** The previous Namaste site I looked at had nothing to say. This one has *everything* to say — a multi-treatment spa, two locations, an online store, a trend-leading head-spa service, warm real photography, a loyal-enough clientele to run reviews — and almost none of it reaches the person standing at the front door. The 2014 theme isn't just dated; it's *actively concealing* the business's strengths and quietly carrying real security risk.

So I wouldn't restyle this. I'd **rebuild it** — not because the business needs reinventing, but because the business is already strong enough to deserve a site that finally shows it. The redesign isn't about adding; it's about *revealing* what's already there. Get the substance out of the nav and onto the page, give the real photography room to breathe, make booking the loudest thing on the site, and move it onto a stack that won't get hacked. The spa is ready. The website just needs to catch up to it.
