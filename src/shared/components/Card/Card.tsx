import type { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{
  className?: string;
}>;

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-300",

        "border border-[rgb(var(--border))]",
        "bg-[rgb(var(--card))]",
        "text-[rgb(var(--fg))/0.9]",

        "hover:-translate-y-1",
        "hover:border-[rgb(var(--fg))/0.2]",
        "hover:bg-[rgb(var(--card-hover))]",
        "hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)]",

        className,
      ].join(" ")}
    >
      {/* gradient hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-24 bg-gradient-to-r from-indigo-500/10 via-cyan-400/10 to-fuchsia-500/10 blur-2xl" />
      </div>

      {/* content */}
      <div className="relative p-5 sm:p-6">{children}</div>
    </div>
  );
}