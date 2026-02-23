import type { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{
  className?: string;
}>;

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-300",
        "border-black/10 bg-white/60 text-black/90 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_24px_70px_rgba(0,0,0,0.10)]",
        "dark:border-white/10 dark:bg-white/5 dark:text-white/90 dark:hover:border-white/20 dark:hover:shadow-[0_24px_70px_rgba(0,0,0,0.22)]",
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-24 bg-gradient-to-r from-indigo-500/10 via-cyan-400/10 to-fuchsia-500/10 blur-2xl" />
      </div>

      <div className="relative p-5 sm:p-6">{children}</div>
    </div>
  );
}