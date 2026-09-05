import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/site/ComingSoonPage";

const title = "News & Press — HRE Development Dubai";
const description = "Handovers, press coverage and community initiatives from HRE Development, the Dubai property developer building with purpose since 1993.";

export const Route = createFileRoute("/news")({
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
      index="06"
      eyebrow="Events, PR and news"
      title="The newsroom."
      body="Handovers, press coverage and community initiatives from HRE Development will be archived here."
    />
  );
}
