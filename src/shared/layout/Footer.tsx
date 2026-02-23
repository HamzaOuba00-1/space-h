import { Container } from "@/shared/layout/Container";

export function Footer() {
  return (
    <footer className="border-t border-black/10 py-10 dark:border-white/10">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="text-sm font-medium text-black/80 dark:text-white/80">
              © {new Date().getFullYear()} space-H
            </div>
            <div className="text-xs text-black/60 dark:text-white/60">
              By <a href="https://hamzaouba.space" className="underline hover:text-black dark:hover:text-purple-400">
                Hamza Ouba
              </a>
            </div>
          </div>

          <div className="text-xs text-black/55 dark:text-white/55">
            Built with Vite + React + Tailwind
          </div>
        </div>
      </Container>
    </footer>
  );
}