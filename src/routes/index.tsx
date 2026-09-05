import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { LatestLaunch } from "@/components/home/LatestLaunch";
import { Legacy } from "@/components/home/Legacy";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Portfolio } from "@/components/home/Portfolio";
import { WhyDubai } from "@/components/home/WhyDubai";
import { News } from "@/components/home/News";
import { ContactCta } from "@/components/home/ContactCta";

const title = "HRE Development — Luxury Property Developer in Dubai";
const description =
  "Building with Purpose since 1993. HRE Development delivers luxury residences across Dubai, backed by 340+ constructed projects and 12,000 families housed in the UAE.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Legacy />
      <LatestLaunch />
      <FeaturedProjects />
      <Portfolio />
      <WhyDubai />
      <News />
      <ContactCta />
    </>
  );
}
