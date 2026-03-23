import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticleBySlug } from "@/features/articles/services/articlesRepo";
import { Markdown } from "@/shared/components/Markdown/Markdown";
import { Seo } from "@/shared/components/Seo/Seo";
import { articlesMarkdownCatalog } from "@/features/articles/data/markdownCatalog";
import { loadMarkdownByPath } from "@/shared/lib/markdownCatalog";

export function ArticleDetailsPage() {
  const { slug } = useParams();
  const article = useMemo(
    () => (slug ? getArticleBySlug(slug) : undefined),
    [slug]
  );

  const [markdown, setMarkdown] = useState<string>("");
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      if (!article) return;

      try {
        const text = await loadMarkdownByPath(
          articlesMarkdownCatalog,
          article.markdownPath
        );

        if (!cancelled) setMarkdown(text);
      } catch (e) {
        if (!cancelled)
          setLoadError(e instanceof Error ? e.message : "Markdown load failed");
      }
    }

    run();

    return () => {
      cancelled = true;
    };
  }, [article]);

  /* ================= NOT FOUND ================= */
  if (!article) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10 text-[rgb(var(--fg))]">
        <Seo title="Hamza Space — Article introuvable" />

        <h1 className="text-2xl font-semibold">Article introuvable</h1>

        <Link
          to="/articles"
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
        title={`Hamza Space — ${article.title}`}
        description={article.summary}
      />

      {/* Back link */}
      <Link
        to="/articles"
        className="inline-block text-sm text-[rgb(var(--fg-muted))] hover:underline"
      >
        ← Retour
      </Link>

      {/* Header */}
      <div className="mt-4 space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          {article.title}
        </h1>

        <div className="text-sm text-[rgb(var(--fg-muted))]">
          {article.publishedAt} • {article.tags.join(", ")}
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 h-px bg-[rgb(var(--border))]" />

      {/* Content */}
      {loadError ? (
        <p className="text-sm text-[rgb(var(--fg-muted))]">
          Impossible de charger le contenu: {loadError}
        </p>
      ) : (
        <Markdown markdown={markdown} />
      )}
    </main>
  );
}