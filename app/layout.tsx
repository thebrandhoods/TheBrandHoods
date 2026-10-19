import type { Metadata, Viewport } from "next";

import { Footer } from "@/components/layout/Footer";
import { FloatingCta } from "@/components/layout/FloatingCta";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { fontVariables } from "@/lib/fonts";
import { site } from "@/lib/content/site";
import {
  baseUrl,
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${site.name} — Creative growth studio in Zirakpur`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "digital marketing agency in Zirakpur",
    "branding agency in Zirakpur",
    "SEO agency in Zirakpur",
    "website development company in Zirakpur",
    "digital marketing agency Chandigarh",
    "social media marketing agency in Zirakpur",
  ],
  authors: [{ name: site.name, url: baseUrl }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: baseUrl },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: baseUrl,
    siteName: site.name,
    title: `${site.name} — Creative growth studio in Zirakpur`,
    description: site.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Creative growth studio in Zirakpur`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  category: "Marketing",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${fontVariables} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-ink text-bone">
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <FloatingCta />
        <Footer />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={websiteSchema()} />
      </body>
    </html>
  );
}
