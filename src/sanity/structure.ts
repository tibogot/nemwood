import type { StructureResolver } from "sanity/structure";

const languages = [
  { id: "fr", title: "🇫🇷 Français", listTitle: "French Content" },
  { id: "nl", title: "🇳🇱 Nederlands", listTitle: "Dutch Content" },
  { id: "en", title: "🇬🇧 English", listTitle: "English Content" },
];

const translatedTypes = [
  { type: "post", title: "Posts" },
  { type: "author", title: "Authors" },
  { type: "category", title: "Categories" },
];

/** Service pages, then the blog: one folder per language as in the former standalone studio. */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // Service pages, grouped like the site navigation
      S.listItem()
        .title("Pages services")
        .child(
          S.list()
            .title("Pages services")
            .items(
              [
                { id: "interieurs", title: "Intérieurs" },
                { id: "evenements", title: "Événements" },
              ].map((branch) =>
                S.listItem()
                  .title(branch.title)
                  .child(
                    S.documentTypeList("service")
                      .title(branch.title)
                      .apiVersion("v2025-02-19")
                      .filter(`_type == "service" && branch == "${branch.id}"`)
                      .defaultOrdering([{ field: "order", direction: "asc" }]),
                  ),
              ),
            ),
        ),
      S.divider(),

      ...languages.map((language) =>
        S.listItem()
          .title(language.title)
          .child(
            S.list()
              .title(language.listTitle)
              .items(
                translatedTypes.map(({ type, title }) =>
                  S.listItem()
                    .title(title)
                    .child(
                      S.documentTypeList(type)
                        .apiVersion("v2025-02-19")
                        .filter(`language == "${language.id}"`),
                    ),
                ),
              ),
          ),
      ),

      // Translation Management
      S.divider(),
      S.listItem()
        .title("All Content (No Filter)")
        .child(S.documentTypeList("post")),
    ]);
