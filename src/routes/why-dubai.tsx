import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/site/ComingSoonPage";

const title = "Why Invest in Dubai — HRE Development Investor Guide";
const description = "Rental yields of 5-9%, no annual property tax, Golden Visa eligibility and world-class infrastructure: why Dubai property attracts global capital.";

export const Route = createFileRoute("/why-dubai")({
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
      index="05"
      eyebrow="Why Dubai"
      title="The case for the city."
      body="Yields, ownership, visas and long-term planning — expanded into a full investor guide for the Emirate."
    />
  );
}
