import { Container } from "@/shared/layout/Container";

export function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--border))] py-10">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Left */}
          <div className="space-y-1">
            <div className="text-sm font-medium text-[rgb(var(--fg))/0.85]">
              © {new Date().getFullYear()} space-H
            </div>

            <div className="text-xs text-[rgb(var(--fg-muted))]">
              By{" "}
              <a
                href="https://hamzaouba.space"
                className="underline transition-colors hover:text-[rgb(var(--fg))]"
              >
                Hamza Ouba
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="text-xs text-[rgb(var(--fg))/0.6]">
            Built with Vite + React + Tailwind
          </div>
        </div>
      </Container>
    </footer>
  );
}