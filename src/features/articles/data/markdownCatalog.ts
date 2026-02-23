import type { MarkdownCatalog } from "@/shared/lib/markdownCatalog";

export const articlesMarkdownCatalog: MarkdownCatalog = import.meta.glob<string>(
  "./markdown/*.md",
  { query: "?raw", import: "default" }
);