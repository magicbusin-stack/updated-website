// Converts a page's existing FAQ data (from components/Home/faqItems.jsx) into
// FAQPage structured data (schema.org), so Google and AI answer engines can
// read the same Q&A content that's already visible on the page.
//
// Reuses the exact same `faqs` array each page already renders for display —
// single source of truth, so the schema can never drift out of sync with
// what a visitor actually sees (a hard requirement for Google's structured
// data guidelines).

function extractText(node) {
  if (node === null || node === undefined || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join(" ");
  if (node.props && node.props.children !== undefined) return extractText(node.props.children);
  return "";
}

function cleanText(text) {
  return text.replace(/\s+/g, " ").trim();
}

export default function FaqSchema({ faqs }) {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: cleanText(item.question),
      acceptedAnswer: {
        "@type": "Answer",
        text: cleanText(extractText(item.answer)),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
