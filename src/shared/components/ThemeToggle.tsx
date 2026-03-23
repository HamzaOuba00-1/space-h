import { useTheme } from "@/app/providers/useTheme";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";
  const next = isDark ? "light" : "dark";

  const Icon = isDark ? Moon : Sun;
  const label = isDark ? "Dark" : "Light";

  return (
    <button
      onClick={() => setTheme(next)}
      title={`Theme: ${label}`}
      className="
        inline-flex items-center gap-2
        rounded-xl border px-3 py-1.5 text-xs
        border-[rgb(var(--border))]
        bg-[rgb(var(--bg-soft))]
        text-[rgb(var(--fg))]
        transition-colors
        hover:bg-[rgb(var(--bg-hover))]
      "
    >
      <Icon size={14} strokeWidth={2} />
      {label}
    </button>
  );
}