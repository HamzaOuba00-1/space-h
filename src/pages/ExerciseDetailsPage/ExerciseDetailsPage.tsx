import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getExerciseBySlug } from "@/features/exercises/services/exercisesRepo";
import { Markdown } from "@/shared/components/Markdown/Markdown";
import { Seo } from "@/shared/components/Seo/Seo";
import { exercisesMarkdownCatalog } from "@/features/exercises/data/markdownCatalog";
import { loadMarkdownByPath } from "@/shared/lib/markdownCatalog";

export function ExerciseDetailsPage() {
  const { slug } = useParams();
  const exercise = useMemo(
    () => (slug ? getExerciseBySlug(slug) : undefined),
    [slug]
  );

  const [statement, setStatement] = useState<string>("");
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      if (!exercise) return;

      try {
        const text = await loadMarkdownByPath(
          exercisesMarkdownCatalog,
          exercise.statementMarkdownPath
        );

        if (!cancelled) setStatement(text);
      } catch (e) {
        if (!cancelled)
          setLoadError(e instanceof Error ? e.message : "Markdown load failed");
      }
    }

    run();

    return () => {
      cancelled = true;
    };
  }, [exercise]);

  /* ================= NOT FOUND ================= */
  if (!exercise) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10 text-[rgb(var(--fg))]">
        <Seo title="Hamza Space — Exercise introuvable" />

        <h1 className="text-2xl font-semibold">Exercice introuvable</h1>

        <Link
          to="/exercises"
          className="mt-4 inline-block text-sm text-[rgb(var(--fg-muted))] hover:underline"
        >
          ← Retour
        </Link>
      </main>
    );
  }

  /* ================= PAGE ================= */
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 text-[rgb(var(--fg))]">
      <Seo
        title={`Hamza Space — ${exercise.title}`}
        description={`exercise (${exercise.difficulty})`}
      />

      {/* Back */}
      <Link
        to="/exercises"
        className="inline-block text-sm text-[rgb(var(--fg-muted))] hover:underline"
      >
        ← Retour
      </Link>

      {/* Header */}
      <div className="mt-4 space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          {exercise.title}
        </h1>

        <div className="text-sm text-[rgb(var(--fg-muted))]">
          {exercise.tags.join(", ")}
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 h-px bg-[rgb(var(--border))]" />

      {/* Statement */}
      {loadError ? (
        <p className="text-sm text-[rgb(var(--fg-muted))]">
          Impossible de charger l’énoncé: {loadError}
        </p>
      ) : (
        <Markdown markdown={statement} />
      )}

      {/* Divider */}
      <div className="my-6 h-px bg-[rgb(var(--border))]" />

      {/* Download button */}
      <a
        href={exercise.solutionDownloadPath}
        download
        rel="noopener noreferrer"
        className="
          inline-block rounded-xl border px-4 py-2 text-sm font-medium
          border-[rgb(var(--border))]
          bg-[rgb(var(--bg-soft))]
          text-[rgb(var(--fg))]
          transition-colors
          hover:bg-[rgb(var(--bg-hover))]
        "
      >
        Télécharger la solution (zip)
      </a>
    </main>
  );
}