import type { Article } from "@/features/articles/models/article";

export const articles: Article[] = [
  {
    slug: "html-basics-notes",
    title: "HTML",
    summary: "Notes pratiques sur la structure HTML et la sémantique.",
    tags: ["html"],
    publishedAt: "2026-02-22",
    markdownPath: "./markdown/html-basics-notes.md",
  },
  {
    slug: "css-basics-notes",
    title: "CSS",
    summary: "Guide clair et pratique sur les bases du CSS.",
    tags: ["css"],
    publishedAt: "2026-02-27",
    markdownPath: "./markdown/css-basics-notes.md",
  },
];