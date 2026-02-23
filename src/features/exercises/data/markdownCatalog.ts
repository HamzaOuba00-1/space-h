import type { MarkdownCatalog } from "@/shared/lib/markdownCatalog";

export const exercisesMarkdownCatalog: MarkdownCatalog = import.meta.glob<string>(
  "./markdown/*.md",
  { query: "?raw", import: "default" }
);