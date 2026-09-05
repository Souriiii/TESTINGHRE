import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/site/ComingSoonPage";

const title = "Projects by HRE Development — Dubai Developments";
const description = "Explore HRE Development's Dubai portfolio: Sakura Gardens, SkyHills Astra, Celeste, Wadi Hills and the Skyhills Residences collection.";

export const Route = createFileRoute("/projects")({
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
  component: Page,
});

function Page() {
  return (
    <ComingSoonPage
      index="02"
      eyebrow="Projects"
      title="Every address, in detail."
      body="Sakura Gardens, SkyHills Astra, Celeste, Wadi Hills and Skyhills Residences will each get a dedicated page with plans, payment terms and handover dates."
    />
  );
}
