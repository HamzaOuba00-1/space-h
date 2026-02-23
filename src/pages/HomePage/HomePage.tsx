import { Link } from "react-router-dom";
import { Seo } from "@/shared/components/Seo/Seo";
import { Card } from "@/shared/components/Card/Card";
import { TechBadge } from "@/shared/components/TechBadge/TechBadge";
import { getAllArticles } from "@/features/articles/services/articlesRepo";
import { getAllExercises } from "@/features/exercises/services/exercisesRepo";
import { sortArticlesLatestFirst, takeFirst } from "@/shared/lib/contentSort";

export function HomePage() {
  const latestArticles = takeFirst(sortArticlesLatestFirst(getAllArticles()), 3);
  const latestExercises = takeFirst(getAllExercises(), 3);

  return (
    <div className="space-y-10">
      <Seo title="space-H" description="Static portfolio: articles, exercises, downloadable solutions." />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/60 p-6 backdrop-blur-xl sm:p-10 dark:border-white/10 dark:bg-white/5">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -inset-24 bg-gradient-to-r from-indigo-500/15 via-cyan-400/15 to-fuchsia-500/15 blur-3xl" />
        </div>

        <div className="relative space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-black/70 dark:border-white/10 dark:bg-white/5 dark:text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
            Welcome to my dev lab
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-indigo-200 via-cyan-200 to-fuchsia-200 bg-clip-text text-transparent">
              space-H
            </span>
            <span className="text-black/80 dark:text-white/85"> — My Dev Lab</span>
          </h1>

          <p className="max-w-2xl text-base text-black/70 dark:text-white/70">
            Here I turn what I learn into clear articles and exercises with solutions.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/articles"
              className="rounded-2xl border border-black/10 bg-black/5 px-4 py-2 text-sm font-medium text-black transition hover:bg-black/10 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
            >
              Explore articles
            </Link>
            <Link
              to="/exercises"
              className="rounded-2xl border border-black/10 bg-white/60 px-4 py-2 text-sm font-medium text-black/85 transition hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-white/85 dark:hover:bg-white/10"
            >
              Practice exercises
            </Link>
          </div>
        </div>
      </section>

      {/* Latest */}
      <section className="grid gap-6 lg:grid-cols-2">
        {/* Latest Articles */}
        <div className="space-y-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Latest Articles</h2>
              <p className="text-sm text-black/60 dark:text-white/60">My latest topics.</p>
            </div>

            <Link
              to="/articles"
              className="text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
            >
              View all →
            </Link>
          </div>

          <div className="grid gap-4">
            {latestArticles.map((a) => (
              <Link key={a.slug} to={`/articles/${a.slug}`} className="block">
                <Card>
                  <div className="space-y-2">
                    <div>
                      <div className="text-base font-semibold">{a.title}</div>
                      <div className="text-sm text-black/65 dark:text-white/65">{a.summary}</div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {a.tags.map((t) => (
                        <TechBadge key={t} label={t} />
                      ))}
                    </div>

                    <div className="text-xs text-black/50 dark:text-white/50">{a.publishedAt}</div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Latest Exercises */}
        <div className="space-y-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Latest Exercises</h2>
              <p className="text-sm text-black/60 dark:text-white/60">Statements + solutions.</p>
            </div>

            <Link
              to="/exercises"
              className="text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
            >
              View all →
            </Link>
          </div>

          <div className="grid gap-4">
            {latestExercises.map((e) => (
              <Link key={e.slug} to={`/exercises/${e.slug}`} className="block">
                <Card>
                  <div className="space-y-2">
                    <div>
                      <div className="text-base font-semibold">{e.title}</div>
                      <div className="text-sm text-black/65 dark:text-white/65">{e.slug}</div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {e.tags.map((t) => (
                        <TechBadge key={t} label={t} />
                      ))}
                    </div>

                    <div className="text-xs text-black/50 dark:text-white/50">Open →</div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}