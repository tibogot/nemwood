import { defineType, defineArrayMember, defineField } from "sanity";
import { TablePreview } from "../components/TablePreview";

export default defineType({
  title: "Table",
  name: "table",
  type: "object",
  icon: () => "📋",
  components: {
    preview: TablePreview,
  },
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      description:
        'Optional title above the table (e.g. "Grille tarifaire par type de table")',
    }),
    defineField({
      title: "Rows",
      name: "rows",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "tableRow",
          fields: [
            {
              name: "cells",
              type: "array",
              title: "Cells",
              of: [{ type: "string" }],
              validation: (Rule) => Rule.required().min(1),
            },
          ],
          preview: {
            select: { cells: "cells" },
            prepare({ cells }: { cells?: string[] }) {
              const text = (cells || []).join(" | ");
              return { title: text || "Empty row" };
            },
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: { title: "title", rows: "rows" },
    prepare({ title, rows }: { title?: string; rows?: unknown[] }) {
      const rowCount = rows?.length ?? 0;
      return {
        title: title || "Table",
        subtitle: `${rowCount} row${rowCount !== 1 ? "s" : ""}`,
      };
    },
  },
});
