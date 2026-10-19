import type { Metadata } from "next";

import { Capabilities } from "@/components/sections/Capabilities";
import { FeaturedCase } from "@/components/sections/FeaturedCase";
import { FinalCta } from "@/components/sections/FinalCta";
import { Founder } from "@/components/sections/Founder";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { InsightsPreview } from "@/components/sections/InsightsPreview";
import { LocalPresence } from "@/components/sections/LocalPresence";
import { MarqueeBand } from "@/components/sections/MarqueeBand";
import { PointOfView } from "@/components/sections/PointOfView";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Proof } from "@/components/sections/Proof";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Brand, digital and performance studio in Zirakpur",
  description:
    "The Brand Hoods builds brands, websites and marketing systems for ambitious businesses in Zirakpur, Chandigarh and beyond — strategy, creative and performance in one team.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <SelectedWork />
      <Capabilities />
      <PointOfView />
      <FeaturedCase />
      <ProcessTimeline />
      <Industries />
      <Proof />
      <LocalPresence />
      <Founder />
      <InsightsPreview />
      <FinalCta />
    </>
  );
}
