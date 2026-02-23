import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getAllArticles } from "@/features/articles/services/articlesRepo";
import { Seo } from "@/shared/components/Seo/Seo";
import { Card } from "@/shared/components/Card/Card";
import { TechBadge } from "@/shared/components/TechBadge/TechBadge";
import { FilterBar } from "@/shared/components/FilterBar/FilterBar";
import { collectArticleTags, sortArticlesLatestFirst } from "@/shared/lib/contentSort";

function includesQuery(text: string, q: string) {
  return text.toLowerCase().includes(q.toLowerCase());
}

export function ArticlesPage() {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const all = useMemo(() => sortArticlesLatestFirst(getAllArticles()), []);
  const tags = useMemo(() => collectArticleTags(all), [all]);

  const filtered = useMemo(() => {
    return all.filter((a) => {
      const matchesTag = selectedTag ? a.tags.includes(selectedTag) : true;
      const matchesQuery =
        query.trim().length === 0 ||
        includesQuery(a.title, query) ||
        includesQuery(a.summary, query) ||
        a.tags.some((t) => includesQuery(t, query));
      return matchesTag && matchesQuery;
    });
  }, [all, query, selectedTag]);

  return (
    <div className="space-y-6">
      <Seo title="space-H — Articles" description="Articles and notes about web development." />

      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Articles</h1>
        <p className="text-black/65 dark:text-white/65">What I learn, I share.</p>
      </div>

      <FilterBar
        query={query}
        onQueryChange={setQuery}
        tags={tags}
        selectedTag={selectedTag}
        onTagChange={setSelectedTag}
        placeholder="Search..."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((a) => (
          <Link key={a.slug} to={`/articles/${a.slug}`} className="block">
            <Card className="h-full">
              <div className="flex h-full flex-col gap-3">
                <div className="flex flex-wrap gap-2">
                  {a.tags.map((t) => (
                    <TechBadge key={t} label={t} />
                  ))}
                </div>

                <div className="space-y-1">
                  <h2 className="text-lg font-semibold">{a.title}</h2>
                  <p className="text-sm text-black/65 dark:text-white/65">{a.summary}</p>
                </div>

                <div className="mt-auto text-xs text-black/50 dark:text-white/50">
                  {a.publishedAt}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-black/10 bg-white/60 p-6 text-sm text-black/70 dark:border-white/10 dark:bg-white/5 dark:text-white/70">
          No articles match your search.
        </div>
      ) : null}
    </div>
  );
}