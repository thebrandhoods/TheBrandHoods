/**
 * Business facts. Everything here comes from the existing Brand Hoods
 * website / spec and is safe to publish. Anything unverified is marked
 * with `placeholder: true` so it can be found and replaced in one place.
 */

export const site = {
  name: "The Brand Hoods",
  legalName: "THE BRAND HOODS",
  wordmark: { mark: "TBH", sub: "THE BRAND HOODS" },
  url: "https://thebrandhoods.com",
  tagline: "Brands, digital experiences and marketing that move.",
  description:
    "The Brand Hoods is a creative growth studio in Zirakpur. We build brands, websites and marketing systems that turn attention into action.",
  founded: "Zirakpur, Punjab",
  contact: {
    street: "SCO 144 & 145, Triple C Metro",
    locality: "VIP Road, Zirakpur",
    region: "Punjab",
    postalCode: "140603",
    country: "India",
    countryCode: "IN",
    phoneDisplay: "+91 62848 40965",
    phone: "+916284840965",
    whatsapp: "916284840965",
    email: "thebrandhoods@gmail.com",
    hours: "Mon–Fri · 9:00–18:00",
    geo: { latitude: 30.6425, longitude: 76.8173 },
  },
} as const;

export const address = [
  site.contact.street,
  site.contact.locality,
  `${site.contact.region} ${site.contact.postalCode}`,
] as const;

export const whatsappHref = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
  "Hi Brand Hoods — I'd like to talk about a project.",
)}`;

export const telHref = `tel:+${site.contact.phone}`;
export const mailHref = `mailto:${site.contact.email}`;

export const navigation = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNavigation = [
  { label: "Home", href: "/" },
  ...navigation,
] as const;

export const locationLabel = "Zirakpur / Chandigarh Tricity";

/**
 * Social profiles are not published on the current site, so they are
 * listed without links until verified. `href` empty → rendered as a
 * pending label rather than a dead link.
 */
export const socials: { label: string; href?: string }[] = [
  { label: "Instagram" },
  { label: "LinkedIn" },
  { label: "Facebook" },
];

export const serviceAreas = [
  "Zirakpur",
  "Chandigarh",
  "Mohali",
  "Panchkula",
  "Punjab",
  "Clients beyond India",
] as const;

export const marqueeWords = [
  "Strategy",
  "Brand",
  "Digital",
  "Content",
  "Performance",
  "Growth",
] as const;
