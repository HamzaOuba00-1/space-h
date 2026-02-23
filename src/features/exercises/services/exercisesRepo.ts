import { exercises } from "@/features/exercises/data/exercises";
import type { Exercise } from "@/features/exercises/models/exercise";

export function getAllExercises(): Exercise[] {
  return [...exercises];
}

export function getExerciseBySlug(slug: string): Exercise | undefined {
  return exercises.find((e) => e.slug === slug);
}