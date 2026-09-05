import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/site/ComingSoonPage";

const title = "About HRE Development — Building in the UAE Since 1993";
const description = "From contractor to developer: three decades of construction across the Emirates, now shaping luxury residences in Dubai.";

export const Route = createFileRoute("/about")({
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
      index="01"
      eyebrow="About HRE"
      title="Three decades, one standard."
      body="The full story of HRE — from contractor to developer, 340+ constructed projects and 12,000 families housed — is being written into this page next."
    />
  );
}
