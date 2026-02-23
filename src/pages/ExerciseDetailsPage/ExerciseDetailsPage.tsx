import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getExerciseBySlug } from "@/features/exercises/services/exercisesRepo";
import { Markdown } from "@/shared/components/Markdown/Markdown";
import { Seo } from "@/shared/components/Seo/Seo";
import { exercisesMarkdownCatalog } from "@/features/exercises/data/markdownCatalog";
import { loadMarkdownByPath } from "@/shared/lib/markdownCatalog";

export function ExerciseDetailsPage() {
  const { slug } = useParams();
  const exercise = useMemo(() => (slug ? getExerciseBySlug(slug) : undefined), [slug]);

  const [statement, setStatement] = useState<string>("");
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      if (!exercise) return;
      try {
        const text = await loadMarkdownByPath(exercisesMarkdownCatalog, exercise.statementMarkdownPath);
        if (!cancelled) setStatement(text);
      } catch (e) {
        if (!cancelled) setLoadError(e instanceof Error ? e.message : "Markdown load failed");
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [exercise]);

  if (!exercise) {
    return (
      <main style={{ padding: "1rem", maxWidth: 900, margin: "0 auto" }}>
        <Seo title="Hamza Space — Exercice introuvable" />
        <h1>Exercice introuvable</h1>
        <Link to="/exercices">← Retour</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: "1rem", maxWidth: 900, margin: "0 auto" }}>
      <Seo title={`Hamza Space — ${exercise.title}`} description={`Exercice (${exercise.difficulty})`} />
      <Link to="/exercices">← Retour</Link>
      <h1>{exercise.title}</h1>

      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", flexWrap: "wrap" }}>

        <small>{exercise.tags.join(", ")}</small>
      </div>

      <hr style={{ margin: "1rem 0" }} />

      {loadError ? <p>Impossible de charger l’énoncé: {loadError}</p> : <Markdown markdown={statement} />}

      <hr style={{ margin: "1rem 0" }} />

      <a
        href={exercise.solutionDownloadPath}
        download
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "0.6rem 1rem",
          borderRadius: 12,
          border: "1px solid #ddd",
          textDecoration: "none",
        }}
      >
        Télécharger la solution (zip)
      </a>
    </main>
  );
}