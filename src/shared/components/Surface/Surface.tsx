import type { PropsWithChildren } from "react";

type SurfaceProps = PropsWithChildren<{
  className?: string;
}>;

export function Surface({ children, className = "" }: SurfaceProps) {
  return (
    <div
      className={[
        "rounded-2xl border backdrop-blur-xl",
        "border-black/10 bg-white/60 shadow-[0_20px_60px_rgba(0,0,0,0.10)]",
        "dark:border-white/10 dark:bg-white/5 dark:shadow-[0_20px_60px_rgba(0,0,0,0.18)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}