type TechBadgeProps = {
  label: string;
};

function normalize(label: string) {
  return label.trim().toLowerCase();
}

const techStyles: Record<string, string> = {
  html: "border-yellow-400/40 bg-yellow-400/10 text-yellow-500 dark:text-yellow-300",
  css: "border-fuchsia-400/40 bg-fuchsia-400/10 text-fuchsia-500 dark:text-fuchsia-300",
  javascript: "border-amber-400/40 bg-amber-400/10 text-amber-500 dark:text-amber-300",
  js: "border-amber-400/40 bg-amber-400/10 text-amber-500 dark:text-amber-300",
  react: "border-cyan-400/40 bg-cyan-400/10 text-cyan-500 dark:text-cyan-300",
  angular: "border-rose-400/40 bg-rose-400/10 text-rose-500 dark:text-rose-300",
  spring: "border-emerald-400/40 bg-emerald-400/10 text-emerald-500 dark:text-emerald-300",
  java: "border-orange-400/40 bg-orange-400/10 text-orange-500 dark:text-orange-300",
  typescript: "border-sky-400/40 bg-sky-400/10 text-sky-500 dark:text-sky-300",
  Docker: "border-blue-400/40 bg-blue-400/10 text-blue-500 dark:text-blue-300",
  Git: "border-gray-400/40 bg-gray-400/10 text-gray-500 dark:text-gray-300",
};

export function TechBadge({ label }: TechBadgeProps) {
  const key = normalize(label);

  const cls =
    techStyles[key] ??
    [
      "border-[rgb(var(--border))]",
      "bg-[rgb(var(--bg-soft))]",
      "text-[rgb(var(--fg-muted))]",
    ].join(" ");

  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium",
        cls,
      ].join(" ")}
    >
      {label}
    </span>
  );
}