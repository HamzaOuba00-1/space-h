import { NavLink } from "react-router-dom";
import { Container } from "@/shared/layout/Container";
import { Logo } from "@/shared/components/Logo/Logo";


function navClass({ isActive }: { isActive: boolean }) {
  return [
    "rounded-xl px-3 py-2 text-sm transition-colors",
    isActive
      ? "bg-black/5 text-black dark:bg-white/10 dark:text-white"
      : "text-black/70 hover:text-black hover:bg-black/5 dark:text-white/70 dark:hover:text-white dark:hover:bg-white/5",
  ].join(" ");
}

export function Navbar() {

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/50 backdrop-blur-xl dark:border-white/10 dark:bg-black/20">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="flex items-center gap-1">
            <NavLink to="/" className={navClass} end>
              Home
            </NavLink>
            <NavLink to="/articles" className={navClass}>
              Articles
            </NavLink>
            <NavLink to="/exercises" className={navClass}>
              Exercises
            </NavLink>
            <NavLink to="/about" className={navClass}>
              About
            </NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
}