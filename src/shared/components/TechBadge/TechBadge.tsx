type TechBadgeProps = {
  label: string;
};

function normalize(label: string) {
  return label.trim().toLowerCase();
}

const techStyles: Record<string, string> = {
  html: "border-yellow-300/30 bg-yellow-300/10 text-yellow-200",
  css: "border-fuchsia-300/30 bg-fuchsia-300/10 text-fuchsia-200",
  javascript: "border-amber-300/30 bg-amber-300/10 text-amber-200",
  js: "border-amber-300/30 bg-amber-300/10 text-amber-200",
  react: "border-cyan-300/30 bg-cyan-300/10 text-cyan-200",
  angular: "border-rose-300/30 bg-rose-300/10 text-rose-200",
  spring: "border-emerald-300/30 bg-emerald-300/10 text-emerald-200",
  java: "border-orange-300/30 bg-orange-300/10 text-orange-200",
  typescript: "border-sky-300/30 bg-sky-300/10 text-sky-200",
};

export function TechBadge({ label }: TechBadgeProps) {
  const key = normalize(label);
  const cls =
    techStyles[key] ?? "border-white/15 bg-white/5 text-white/80";

  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${cls}`}>
      {label}
    </span>
  );
}