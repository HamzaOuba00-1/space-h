import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticleBySlug } from "@/features/articles/services/articlesRepo";
import { Markdown } from "@/shared/components/Markdown/Markdown";
import { Seo } from "@/shared/components/Seo/Seo";
import { articlesMarkdownCatalog } from "@/features/articles/data/markdownCatalog";
import { loadMarkdownByPath } from "@/shared/lib/markdownCatalog";

export function ArticleDetailsPage() {
  const { slug } = useParams();
  const article = useMemo(() => (slug ? getArticleBySlug(slug) : undefined), [slug]);

  const [markdown, setMarkdown] = useState<string>("");
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      if (!article) return;
      try {
        const text = await loadMarkdownByPath(articlesMarkdownCatalog, article.markdownPath);
        if (!cancelled) setMarkdown(text);
      } catch (e) {
        if (!cancelled) setLoadError(e instanceof Error ? e.message : "Markdown load failed");
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [article]);

  if (!article) {
    return (
      <main style={{ padding: "1rem", maxWidth: 900, margin: "0 auto" }}>
        <Seo title="Hamza Space — Article introuvable" />
        <h1>Article introuvable</h1>
        <Link to="/articles">← Retour</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: "1rem", maxWidth: 900, margin: "0 auto" }}>
      <Seo title={`Hamza Space — ${article.title}`} description={article.summary} />
      <Link to="/articles">← Retour</Link>
      <h1>{article.title}</h1>
      <small>{article.publishedAt} • {article.tags.join(", ")}</small>

      <hr style={{ margin: "1rem 0" }} />

      {loadError ? (
        <p>Impossible de charger le contenu: {loadError}</p>
      ) : (
        <Markdown markdown={markdown} />
      )}
    </main>
  );
}