import { generateFaqSchema, type FAQItem } from "@/lib/faqSchema";

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export default function FAQSchema({ faqs }: FAQSchemaProps) {
  if (faqs.length === 0) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateFaqSchema(faqs)),
      }}
    />
  );
}
