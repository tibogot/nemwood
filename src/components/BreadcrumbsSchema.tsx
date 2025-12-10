import { generateBreadcrumbsSchema } from "@/lib/breadcrumbsSchema";

interface BreadcrumbsSchemaProps {
  items: { name: string; url: string }[];
}

/**
 * Component to add BreadcrumbList Schema.org JSON-LD to page head
 * Usage: <BreadcrumbsSchema items={[{name: "Accueil", url: "/"}, {name: "Services", url: "/services"}]} />
 */
export default function BreadcrumbsSchema({
  items,
}: BreadcrumbsSchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: generateBreadcrumbsSchema(items),
      }}
    />
  );
}

