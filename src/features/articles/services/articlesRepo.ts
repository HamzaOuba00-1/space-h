import { articles } from "@/features/articles/data/articles";
import type { Article } from "@/features/articles/models/article";

export function getAllArticles(): Article[] {
  return [...articles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}