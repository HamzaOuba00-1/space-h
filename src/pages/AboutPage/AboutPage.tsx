import { Seo } from "@/shared/components/Seo/Seo";
import { Card } from "@/shared/components/Card/Card";
import { TechBadge } from "@/shared/components/TechBadge/TechBadge";
import { timeline, stack, highlights } from "@/pages/AboutPage/about.data";

export function AboutPage() {
  return (
    <div className="space-y-10">
      <Seo title="space-H — About" description="Profile, stack, learning timeline, and apprenticeship goals." />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/60 p-6 sm:p-10 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -inset-24 bg-gradient-to-r from-indigo-500/12 via-cyan-400/12 to-fuchsia-500/12 blur-3xl" />
        </div>

        <div className="relative space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-black/70 dark:border-white/10 dark:bg-white/5 dark:text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
            Hello there! I'm Hamza
          </p>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-indigo-500 via-cyan-500 to-fuchsia-500 bg-clip-text text-transparent">
              About
            </span>
          </h1>

          <p className="max-w-2xl text-sm text-black/70 dark:text-white/70">
            space-H is my dedicated learning environment, where I document concepts I study and publish
            hands-on exercises with downloadable solutions. The objective is to build a clear progression,
            solid fundamentals, and practical experience through deliberate practice. <br />
            “Focused on clarity and depth rather than breadth or trends.”
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {stack.map((t) => (
              <TechBadge key={t} label={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">What I optimize for</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h) => (
            <Card key={h.title} className="h-full">
              <div className="space-y-2">
                <div className="text-base font-semibold">{h.title}</div>
                <div className="text-sm text-black/65 dark:text-white/65">{h.description}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold tracking-tight">Timeline</h2>
          <p className="text-sm text-black/60 dark:text-white/60">
            What I’ve consolidated, and in what order.
          </p>
        </div>

        <div className="space-y-4">
          {timeline.map((item) => (
            <Card key={item.title}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <div className="text-base font-semibold">{item.title}</div>
                  <div className="text-sm text-black/65 dark:text-white/65">{item.description}</div>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <TechBadge key={t} label={t} />
                    ))}
                  </div>
                </div>

                <div className="shrink-0 text-sm text-black/55 dark:text-white/55">
                  {item.period}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}