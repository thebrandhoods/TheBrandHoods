import type { Metadata } from "next";

import { site } from "@/lib/content/site";
import type { Post } from "@/lib/content/insights";
import type { Service } from "@/lib/content/services";
import type { CaseStudy } from "@/lib/content/work";

/** Set NEXT_PUBLIC_SITE_URL in production to override the canonical host. */
export const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? site.url
).replace(/\/$/, "");

export const defaultOgImage = "/opengraph-image";

type MetaInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  noIndex,
}: MetaInput): Metadata {
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_IN",
      type,
      images: [{ url: defaultOgImage, width: 1200, height: 630, alt: site.name }],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      ...(authors ? { authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage],
    },
  };
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: `${site.contact.street}, ${site.contact.locality}`,
  addressLocality: site.contact.locality,
  addressRegion: site.contact.region,
  postalCode: site.contact.postalCode,
  addressCountry: site.contact.countryCode,
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: site.legalName,
    url: baseUrl,
    email: site.contact.email,
    telephone: site.contact.phone,
    description: site.description,
    address: postalAddress,
    areaServed: ["Zirakpur", "Chandigarh", "Mohali", "Panchkula", "India"],
    founder: { "@type": "Person", name: "Arjun", jobTitle: "Founder & CEO" },
    sameAs: [] as string[],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${baseUrl}/#localbusiness`,
    name: site.legalName,
    image: `${baseUrl}${defaultOgImage}`,
    url: baseUrl,
    telephone: site.contact.phone,
    email: site.contact.email,
    priceRange: "$$",
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.contact.geo.latitude,
      longitude: site.contact.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: ["Zirakpur", "Chandigarh", "Mohali", "Panchkula"],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: site.legalName,
    description: site.description,
    publisher: { "@id": `${baseUrl}/#organization` },
    inLanguage: "en-IN",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.path}`,
    })),
  };
}

export function articleSchema(post: Post, authorName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    articleSection: post.category,
    author: { "@type": "Person", name: authorName },
    publisher: { "@id": `${baseUrl}/#organization` },
    mainEntityOfPage: `${baseUrl}/insights/${post.slug}`,
    image: `${baseUrl}${defaultOgImage}`,
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.seo.description,
    url: `${baseUrl}/services/${service.slug}`,
    provider: { "@id": `${baseUrl}/#organization` },
    areaServed: ["Zirakpur", "Chandigarh", "Mohali", "Panchkula"],
  };
}

export function caseStudySchema(study: CaseStudy) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.title,
    description: study.seo.description,
    url: `${baseUrl}/work/${study.slug}`,
    about: study.industry,
    creator: { "@id": `${baseUrl}/#organization` },
  };
}

