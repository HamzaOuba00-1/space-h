import type { PropsWithChildren } from "react";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/app/providers/ThemeProvider";

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <HelmetProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </HelmetProvider>
  );
}