import type { Article } from "@/features/articles/models/article";
import type { Exercise } from "@/features/exercises/models/exercise";

export function sortArticlesLatestFirst(items: Article[]): Article[] {
  return [...items].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function takeFirst<T>(items: T[], count: number): T[] {
  return items.slice(0, count);
}

export function uniqueTags(tags: string[]): string[] {
  return Array.from(new Set(tags.map((t) => t.trim()).filter(Boolean)));
}

export function collectArticleTags(items: Article[]): string[] {
  return uniqueTags(items.flatMap((a) => a.tags));
}

export function collectExerciseTags(items: Exercise[]): string[] {
  return uniqueTags(items.flatMap((e) => e.tags));
}