export type Pillar = "Restore" | "Renew";

export type Treatment = {
  slug: string;
  pillar: Pillar;
  name: string;
  flourish?: string; // word in the name to italicise
  tagline: string; // hero one-liner
  intro: string[]; // "what it is" paragraphs
  image?: string; // hero photo; omit for a sage hero (Renew, no photo yet)
  imagePos?: string;
  cardImage?: string; // image used on hub/related cards
  ritual?: { title: string; body: string }[];
  benefits: string[];
  options: { label: string; detail: string; price: string }[];
  directBill?: boolean;
  faqs: { q: string; a: string }[];
  related: string[];
};

// NOTE: prices are INDICATIVE placeholders for layout — confirm real pricing
// before launch (the page shows an "indicative" disclaimer).
export const treatments: Treatment[] = [
  {
    slug: "head-spa",
    pillar: "Restore",
    name: "The Head Spa Ritual",
    flourish: "Ritual",
    tagline: "A multi-sensory journey for the hair, the scalp, and the soul.",
    image: "/images/headspa.jpg",
    cardImage: "/images/headspa.jpg",
    intro: [
      "Namaste's Head Spa Ritual will immerse you in an unforgettable, multi-sensory experience where your comfort and relaxation are our highest priority.",
      "You'll embark on a journey that transcends traditional Ayurvedic scalp care — seamlessly blending luxury with essential care while promoting a healthier scalp for optimal hair growth, a calmer mind, and a rejuvenated sense of self. Inspired by ancient rituals that engage the hair, the scalp, and the soul.",
    ],
    ritual: [
      { title: "Purifying cleanse", body: "A gentle, purifying facial cleanse to begin — the first exhale of the ritual." },
      { title: "Face & scalp massage", body: "A soothing face massage, then calming massage for the scalp, neck and shoulders." },
      { title: "Masks & acupressure", body: "Revitalising face and eye masks, paired with beneficial head acupressure." },
      { title: "Steam & cleanse", body: "Invigorating steam and a hydrating hair wash to renew the scalp." },
      { title: "Nourish & finish", body: "A nourishing hair treatment and blow dry — you leave lighter than you arrived." },
    ],
    benefits: [
      "A healthier scalp for optimal hair growth",
      "Deep release of tension in the head, neck and shoulders",
      "A calmer, quieter mind",
      "A rejuvenated sense of self",
    ],
    options: [
      { label: "Head Spa Ritual · Express", detail: "40–50 minutes", price: "from $89" },
      { label: "Head Spa Ritual · Signature", detail: "75 minutes", price: "from $139" },
    ],
    faqs: [
      { q: "I have long, thick hair — does that change anything?", a: "It may. An additional charge applies for hair mid-back or longer ($10+), depending on length and thickness. We'll confirm at booking." },
      { q: "Is this a haircut or styling service?", a: "No — it's a scalp and wellness ritual. You'll leave with clean, treated, blow-dried hair, but the focus is relaxation and scalp health." },
      { q: "How often should I come?", a: "Many guests enjoy it monthly as part of their self-care rhythm. Your therapist can suggest a cadence for your scalp and hair goals." },
    ],
    related: ["ayurveda", "massage"],
  },
  {
    slug: "massage",
    pillar: "Restore",
    name: "Massage Therapy",
    flourish: "Therapy",
    tagline: "Therapeutic, relaxation, hot stone and prenatal — your therapist, your pressure, your way.",
    image: "/images/massage.jpg",
    imagePos: "object-top",
    cardImage: "/images/massage.jpg",
    intro: [
      "Whether you're carrying tension, recovering, or simply overdue for an hour that's just yours, our registered therapists tailor every session to you.",
      "Prefer a specific therapist, or a male or female therapist? Simply let us know in the notes when you book — and we'll make it happen.",
    ],
    benefits: [
      "Relief from muscular tension and knots",
      "Support for recovery and mobility",
      "Improved circulation and deep relaxation",
      "Gentle, comfortable prenatal care",
    ],
    options: [
      { label: "Relaxation / Therapeutic", detail: "60 minutes", price: "from $99" },
      { label: "Relaxation / Therapeutic", detail: "90 minutes", price: "from $139" },
      { label: "Hot Stone", detail: "75 minutes", price: "from $129" },
    ],
    directBill: true,
    faqs: [
      { q: "Do you direct-bill my insurance?", a: "Yes — we direct-bill most major Canadian providers, including Alberta Blue Cross, Manulife, Sunlife, Canada Life, Greenshield and many more. (Blue Cross: Alberta only.) Direct billing isn't guaranteed, so we'll confirm your coverage." },
      { q: "Can I choose my therapist?", a: "Absolutely. When booking online you can choose a male or female therapist, or request someone specific — just note it in your booking." },
      { q: "Do you offer prenatal massage?", a: "Yes. Our therapists are experienced in prenatal massage for safe, comfortable care through pregnancy." },
    ],
    related: ["head-spa", "ayurveda"],
  },
  {
    slug: "ayurveda",
    pillar: "Restore",
    name: "Ayurveda & Shirodhara",
    flourish: "Shirodhara",
    tagline: "The art of living wisely — 5,000 years of balance, for the modern world.",
    image: "/images/ayurveda.jpg",
    cardImage: "/images/ayurveda.jpg",
    intro: [
      "Discover the ancient wisdom of Ayurveda at Namaste — a holistic approach to health, beauty and wellbeing that nurtures the mind, body and spirit.",
      "Ayurveda literally means “the art of living wisely” or “the science of life and longevity.” Though it originated over 5,000 years ago, it remains timeless — and the World Health Organization recognises it as an effective natural health care system.",
    ],
    ritual: [
      { title: "Consultation", body: "We begin by understanding your needs and constitution, so the treatment is truly yours." },
      { title: "Abhyanga", body: "A warm, rhythmic oil massage that grounds the body and calms the nervous system." },
      { title: "Shirodhara", body: "A continuous, gentle stream of warm oil poured over the forehead — deeply stilling for the mind." },
      { title: "Rest", body: "A quiet moment to let the treatment settle before you return to the world." },
    ],
    benefits: [
      "Deep calm and relief from mental restlessness",
      "Better sleep and a settled nervous system",
      "Balance restored to body and mind",
      "A profound sense of grounding",
    ],
    options: [
      { label: "Shirodhara", detail: "60 minutes", price: "from $129" },
      { label: "Abhyanga + Shirodhara", detail: "90 minutes", price: "from $179" },
    ],
    faqs: [
      { q: "Do I need to do anything to reserve?", a: "A credit card is required to reserve all Ayurvedic services. We'll explain the details when you book." },
      { q: "What is Shirodhara like?", a: "Warm oil flows gently and continuously over the forehead. Most guests describe it as one of the most deeply relaxing experiences they've had." },
      { q: "Will my hair be oily afterwards?", a: "There will be nourishing oil in your hair — many guests plan a quiet evening afterwards and wash it out at home." },
    ],
    related: ["head-spa", "wellness"],
  },
  {
    slug: "wellness",
    pillar: "Restore",
    name: "Wellness",
    tagline: "Holistic care for body, mind and spirit — the everyday practice of feeling well.",
    image: "/images/ritual.jpg",
    cardImage: "/images/ritual.jpg",
    intro: [
      "Wellness at Namaste is the thread running through everything we do — treatments and rituals designed to bring you back into balance and keep you there.",
      "From restorative therapies to the calm of our space and the curated treasures of our boutique, it's care you can return to, not a one-time fix.",
    ],
    benefits: [
      "A regular reset for body and mind",
      "Stress relief that lasts beyond the session",
      "A holistic approach — not a quick fix",
      "A calmer rhythm to everyday life",
    ],
    options: [
      { label: "Wellness consultation", detail: "45 minutes", price: "from $79" },
    ],
    faqs: [
      { q: "Where do I start?", a: "If you're new, a wellness consultation or a relaxation massage is a lovely first step. We'll help you find the right rhythm." },
    ],
    related: ["ayurveda", "head-spa"],
  },
  {
    slug: "skin-aesthetics",
    pillar: "Renew",
    name: "Skin & Aesthetics",
    flourish: "Aesthetics",
    tagline: "Advanced, results-driven skin — microneedling, dermaplaning and microdermabrasion.",
    image: "/images/treatments/skin-aesthetics.jpg",
    cardImage: "/images/treatments/skin-aesthetics.jpg",
    intro: [
      "Real results, delivered with care. Our advanced skin treatments target texture, tone and renewal — tailored to your skin, never one-size-fits-all.",
      "It's clinical-grade skincare that never feels clinical: the calm of a sanctuary, the outcomes of a results-driven clinic.",
    ],
    benefits: [
      "Smoother texture and refined tone",
      "A visible, healthy glow",
      "Treatments tailored to your skin",
      "Expertise, in a calm setting",
    ],
    options: [
      { label: "Microneedling", detail: "60 minutes", price: "from $189" },
      { label: "Dermaplaning", detail: "45 minutes", price: "from $99" },
      { label: "Microdermabrasion", detail: "45 minutes", price: "from $109" },
    ],
    faqs: [
      { q: "Which treatment is right for me?", a: "It depends on your skin and your goals. We recommend starting with a consultation so we can tailor a plan — book one and we'll guide you." },
      { q: "Is there downtime?", a: "It varies by treatment. Dermaplaning has essentially none; microneedling may involve brief redness. We'll walk you through what to expect." },
    ],
    related: ["body-contouring", "qi-beauty"],
  },
  {
    slug: "body-contouring",
    pillar: "Renew",
    name: "Body Contouring",
    flourish: "Contouring",
    tagline: "Non-invasive Slimwave technology to tone, firm and sculpt.",
    image: "/images/treatments/body-contouring.jpg",
    imagePos: "object-center",
    cardImage: "/images/treatments/body-contouring.jpg",
    intro: [
      "A relaxing, non-invasive way to tone, firm and sculpt. Our Slimwave body contouring works with your body — no surgery, no downtime.",
      "Lie back and let the session do the work; many guests treat it as a restful hour with a visible difference.",
    ],
    benefits: [
      "Toning and firming, non-invasively",
      "No surgery and no downtime",
      "A relaxing, restful session",
      "A visible difference over a series",
    ],
    options: [
      { label: "Single session", detail: "60 minutes", price: "from $99" },
      { label: "Series of 6", detail: "best results", price: "from $499" },
    ],
    faqs: [
      { q: "How many sessions will I need?", a: "Results build over a series — many guests choose a course of six. We'll recommend a plan based on your goals at your consultation." },
    ],
    related: ["skin-aesthetics", "qi-beauty"],
  },
  {
    slug: "qi-beauty",
    pillar: "Renew",
    name: "Qi Beauty",
    flourish: "Beauty",
    tagline: "A natural, non-surgical approach to renewing the skin's vitality.",
    image: "/images/treatments/qi-beauty.jpg",
    cardImage: "/images/treatments/qi-beauty.jpg",
    intro: [
      "Qi Beauty is a natural, non-surgical approach to restoring the skin's energy and radiance — working with the body's own vitality rather than against it.",
      "The result is skin that looks renewed and rested, the gentle way.",
    ],
    benefits: [
      "Renewed radiance, naturally",
      "A non-surgical approach",
      "Gentle, restorative sessions",
      "Energy and vitality, restored",
    ],
    options: [
      { label: "Qi Beauty session", detail: "60 minutes", price: "from $149" },
    ],
    faqs: [
      { q: "Is it suitable for sensitive skin?", a: "Qi Beauty is gentle and natural, and is often a good fit for those seeking a non-invasive option. We'll confirm suitability at your consultation." },
    ],
    related: ["skin-aesthetics", "body-contouring"],
  },
];

export const getTreatment = (slug: string) => treatments.find((t) => t.slug === slug);
export const treatmentSlugs = treatments.map((t) => t.slug);
