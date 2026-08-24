import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — THE GOAT by GO AI Academy" },
      {
        name: "description",
        content:
          "Terms of Service for THE GOAT, the financial markets education program by GO AI Academy.",
      },
      { property: "og:title", content: "Terms of Service — THE GOAT by GO AI Academy" },
      {
        property: "og:description",
        content: "Terms governing enrollment and use of THE GOAT program by GO AI Academy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="Last updated: placeholder date — final legal text pending"
      sections={[
        {
          heading: "1. Acceptance of terms",
          body: "Placeholder. This section will describe how enrolling in or using THE GOAT program and GO AI Academy services constitutes agreement to these terms.",
        },
        {
          heading: "2. Eligibility and accounts",
          body: "Placeholder. Requirements for creating an account, minimum age, accuracy of registration information, and responsibility for account credentials.",
        },
        {
          heading: "3. Program access and licences",
          body: "Placeholder. Scope of access granted per plan (Connect, Create, Complete), duration of access, and limits on sharing or reselling program materials.",
        },
        {
          heading: "4. Payments, renewals and refunds",
          body: "Placeholder. Pricing, billing cycles, currency, taxes, renewal handling, and the refund policy window.",
        },
        {
          heading: "5. Educational purpose — no financial advice",
          body: "Placeholder. All content, recommendations, signals and AI outputs are educational. Nothing is investment advice, and trading financial markets carries risk of loss.",
        },
        {
          heading: "6. Acceptable use and community conduct",
          body: "Placeholder. Rules for community spaces, prohibited conduct, and consequences of violations.",
        },
        {
          heading: "7. Intellectual property",
          body: "Placeholder. Ownership of courses, systems (Go Hunter, Go Maestro, GO OS), trademarks and materials.",
        },
        {
          heading: "8. Limitation of liability",
          body: "Placeholder. Limits of liability for trading losses, service interruptions and third-party tools.",
        },
        {
          heading: "9. Termination",
          body: "Placeholder. Conditions under which access may be suspended or terminated by either party.",
        },
        {
          heading: "10. Governing law and contact",
          body: "Placeholder. Applicable jurisdiction, dispute resolution, and the contact address for legal notices.",
        },
      ]}
    />
  );
}
