import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getAllExercises } from "@/features/exercises/services/exercisesRepo";
import { Seo } from "@/shared/components/Seo/Seo";
import { Card } from "@/shared/components/Card/Card";
import { TechBadge } from "@/shared/components/TechBadge/TechBadge";
import { FilterBar } from "@/shared/components/FilterBar/FilterBar";
import { collectExerciseTags } from "@/shared/lib/contentSort";

function includesQuery(text: string, q: string) {
  return text.toLowerCase().includes(q.toLowerCase());
}

export function ExercisesPage() {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const all = useMemo(() => getAllExercises(), []);
  const tags = useMemo(() => collectExerciseTags(all), [all]);

  const filtered = useMemo(() => {
    return all.filter((e) => {
      const matchesTag = selectedTag ? e.tags.includes(selectedTag) : true;
      const matchesQuery =
        query.trim().length === 0 ||
        includesQuery(e.title, query) ||
        includesQuery(e.difficulty, query) ||
        e.tags.some((t) => includesQuery(t, query));
      return matchesTag && matchesQuery;
    });
  }, [all, query, selectedTag]);

  return (
    <div className="space-y-6">
      <Seo title="space-H — Exercises" description="Filterable exercises + downloadable solutions." />

      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Exercises</h1>
        <p className="text-white/65">Practice makes perfect</p>
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
        {filtered.map((e) => (
          <Link key={e.slug} to={`/exercises/${e.slug}`} className="block">
            <Card className="h-full">
              <div className="flex h-full flex-col gap-3">
                <div className="flex items-center gap-2">
                </div>

                <h2 className="text-lg font-semibold">{e.title}</h2>

                <div className="flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <TechBadge key={t} label={t} />
                  ))}
                </div>

                <div className="mt-auto text-xs text-white/50">Open →</div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
          No exercises match your search.
        </div>
      ) : null}
    </div>
  );
}