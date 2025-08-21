export interface HeroSlide {
  id: number
  title: string
  subtitle: string
  image: string
  ctaLabel: string
  ctaHref: string
  overlayOpacity?: number
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Protect What Matters Most",
    subtitle: "Comprehensive insurance solutions for individuals and businesses",
    image: "/images/Hero_Slider/new_Hero1_result.webp",
    ctaLabel: "Get Started",
    ctaHref: "/contact",
    overlayOpacity: 0.3
  },
  {
    id: 2,
    title: "Expert Insurance Solutions",
    subtitle: "Trusted by thousands of satisfied customers across Ghana",
    image: "/images/Hero_Slider/new_Hero2_result.webp",
    ctaLabel: "Learn More",
    ctaHref: "/about",
    overlayOpacity: 0.4
  },
  {
    id: 3,
    title: "24/7 Customer Support",
    subtitle: "We're here when you need us, anytime, anywhere",
    image: "/images/Hero_Slider/new_Hero3_result.webp",
    ctaLabel: "Contact Us",
    ctaHref: "/contact",
    overlayOpacity: 0.35
  },
  {
    id: 4,
    title: "Competitive Rates & Coverage",
    subtitle: "Get the protection you need at prices you can afford",
    image: "/images/Hero_Slider/new_Hero4_result.webp",
    ctaLabel: "Get Quote",
    ctaHref: "/contact",
    overlayOpacity: 0.3
  }
]
