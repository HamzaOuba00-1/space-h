import type { PropsWithChildren } from "react";
import { useEffect, useMemo, useState } from "react";
import {
  ThemeContext,
  THEME_STORAGE_KEY,
  type Theme,
  type ThemeContextValue,
  getInitialTheme,
} from "@/app/providers/theme-context";

function applyThemeToRoot(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Important: avoid SSR issues + make sure we read once
    return getInitialTheme(THEME_STORAGE_KEY);
  });

  useEffect(() => {
    applyThemeToRoot(theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      toggleTheme: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}