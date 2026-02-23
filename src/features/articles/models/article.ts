export type Article = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  publishedAt: string; // ISO date
  markdownPath: string; // path vers le .md
};