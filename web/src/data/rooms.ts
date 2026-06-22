// Spa-tour rooms. Images are a mix of REAL Namaste interiors (space, head spa)
// and graded placeholder stock — swap all for real room photos from Instagram.
export type Room = {
  name: string;
  line: string;
  img: string;
  pos?: string;
  real?: boolean; // genuine Namaste photo (the rest are placeholders)
};

export const rooms: Room[] = [
  {
    name: "Reception & Boutique",
    line: "Where the city falls away — warm wood, soft light, and treasures to take home.",
    img: "/images/space.jpg",
    real: true,
  },
  {
    name: "Massage Sanctuary",
    line: "Quiet, dim and warm — for therapeutic, relaxation, hot stone and prenatal care.",
    img: "/images/treatments/body-contouring.jpg",
    pos: "object-center",
  },
  {
    name: "The Head Spa Room",
    line: "Our signature ritual — water, light and touch, for the hair, the scalp and the soul.",
    img: "/images/headspa.jpg",
    real: true,
  },
  {
    name: "Ayurveda Suite",
    line: "Candlelight and warm oil — home to Shirodhara and the 5,000-year-old rituals.",
    img: "/images/tour/ayurveda.jpg",
  },
  {
    name: "Skin & Aesthetics Studio",
    line: "Clinical-grade skin care that never feels clinical — microneedling, dermaplaning and more.",
    img: "/images/treatments/skin-aesthetics.jpg",
  },
  {
    name: "Relaxation Lounge",
    line: "A soft place to arrive early and linger after — your transition into calm.",
    img: "/images/tour/lounge.jpg",
  },
];
