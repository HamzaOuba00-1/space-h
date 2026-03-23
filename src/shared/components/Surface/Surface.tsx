import type { PropsWithChildren } from "react";

type SurfaceProps = PropsWithChildren<{
  className?: string;
}>;

export function Surface({ children, className = "" }: SurfaceProps) {
  return (
    <div
      className={[
        "rounded-2xl backdrop-blur-xl transition-colors",

        // base
        "border border-[rgb(var(--border))]",
        "bg-[rgb(var(--bg-soft))]",
        "text-[rgb(var(--fg))]",

        // elevation
        "shadow-[0_20px_60px_rgba(0,0,0,0.12)]",

        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}