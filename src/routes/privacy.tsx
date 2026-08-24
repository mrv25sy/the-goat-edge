import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — THE GOAT by GO AI Academy" },
      {
        name: "description",
        content:
          "How GO AI Academy collects, uses and protects personal data for THE GOAT program members.",
      },
      { property: "og:title", content: "Privacy Policy — THE GOAT by GO AI Academy" },
      {
        property: "og:description",
        content: "Data collection, cookies, retention and member rights for THE GOAT program.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="Last updated: placeholder date — final legal text pending"
      sections={[
        {
          heading: "1. Overview",
          body: "Placeholder. Summary of who we are, which services this policy covers, and how to reach our privacy contact.",
        },
        {
          heading: "2. Information we collect",
          body: "Placeholder. Details on account data, contact form submissions (name, email, message), payment metadata, community activity and technical/device data.",
        },
        {
          heading: "3. How we use your information",
          body: "Placeholder. Delivering program access, mentorship and support, processing payments, improving AI tools, and sending service communications.",
        },
        {
          heading: "4. Cookies and similar technologies",
          body: "Placeholder. Categories of cookies used, their purpose, and how members can manage preferences.",
        },
        {
          heading: "5. Sharing and processors",
          body: "Placeholder. Categories of third-party processors (payments, hosting, analytics, messaging) and the safeguards applied.",
        },
        {
          heading: "6. International transfers",
          body: "Placeholder. How data may be transferred between the countries in which GO AI Academy operates.",
        },
        {
          heading: "7. Data retention",
          body: "Placeholder. How long member records, support conversations and billing records are retained.",
        },
        {
          heading: "8. Your rights",
          body: "Placeholder. Access, correction, deletion, portability and objection rights, and how to submit a request.",
        },
        {
          heading: "9. Security",
          body: "Placeholder. Technical and organisational measures used to protect member data.",
        },
        {
          heading: "10. Changes and contact",
          body: "Placeholder. How updates to this policy are communicated, plus the privacy contact address.",
        },
      ]}
    />
  );
}
