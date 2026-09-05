import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/site/ComingSoonPage";

const title = "Contact HRE Development — Dubai Property Enquiries";
const description = "Speak with the HRE Development team about availability, payment plans and handover timelines for our Dubai residences.";

export const Route = createFileRoute("/contact")({
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
      index="07"
      eyebrow="Contact"
      title="Speak with our team."
      body="A full enquiry desk with office details, direct lines and appointment booking is on its way. Until then, use the enquiry form on the home page."
    />
  );
}
