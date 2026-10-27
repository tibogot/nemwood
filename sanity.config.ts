import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { documentInternationalization } from "@sanity/document-internationalization";
import { schemaTypes } from "@/sanity/schemaTypes";
import { structure } from "@/sanity/structure";
import { sanityDataset, sanityProjectId } from "@/sanity/env";

/** The Studio, mounted by `src/app/studio/[[...tool]]`. */
export default defineConfig({
  name: "default",
  title: "Nemwood",
  basePath: "/studio",

  projectId: sanityProjectId,
  dataset: sanityDataset,

  plugins: [
    structureTool({ structure }),
    visionTool(),
    documentInternationalization({
      supportedLanguages: [
        { id: "fr", title: "Français" },
        { id: "nl", title: "Nederlands" },
        { id: "en", title: "English" },
      ],
      schemaTypes: ["post", "author", "category"],
    }),
  ],

  schema: {
    types: schemaTypes,
    // Service pages are tied to routes in the code: no creating them here
    templates: (templates) =>
      templates.filter((template) => template.schemaType !== "service"),
  },

  document: {
    // ...and no deleting or duplicating them either
    actions: (actions, { schemaType }) =>
      schemaType === "service"
        ? actions.filter(
            ({ action }) =>
              action !== "delete" &&
              action !== "duplicate" &&
              action !== "unpublish",
          )
        : actions,
  },
});
