import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

import { Container } from "@/shared/layout/Container";
import { Logo } from "@/shared/components/Logo/Logo";
import { ThemeToggle } from "@/shared/components/ThemeToggle";

type NavItem = {
  label: string;
  to: string;
  end?: boolean;
};

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const items: NavItem[] = useMemo(
    () => [
      { label: "Home", to: "/", end: true },
      { label: "Articles", to: "/articles" },
      { label: "Exercises", to: "/exercises" },
      { label: "About", to: "/about" },
    ],
    []
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    if (menuOpen) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="
          fixed top-0 w-full z-50
          backdrop-blur-lg
          bg-[rgb(var(--bg-soft))]
          border-b border-[rgb(var(--border))]
        "
      >
        <Container>
          <div className="h-16 hidden md:flex items-center justify-between">
            <Logo />

            {/* Nav */}
            <ul className="flex items-center gap-8">
              {items.map((item) => (
                <li key={item.to} className="relative group">
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      [
                        "transition-colors",
                        isActive
                          ? "text-[rgb(var(--fg))]"
                          : "text-[rgb(var(--fg-muted))] group-hover:text-[rgb(var(--fg))]",
                      ].join(" ")
                    }
                  >
                    {item.label}
                  </NavLink>

                  <span
                    className="
                      absolute -bottom-1 left-0 h-[2px]
                      bg-indigo-400
                      transition-all duration-300
                      w-0 group-hover:w-full
                    "
                  />
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <ThemeToggle />
            </div>
          </div>
        </Container>
      </motion.header>

      {/* ================= MOBILE ================= */}
      <header
        className="
          fixed top-0 w-full z-50 md:hidden
          backdrop-blur-lg
          bg-[rgb(var(--bg-soft))]
          border-b border-[rgb(var(--border))]
        "
      >
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Logo />

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="text-[rgb(var(--fg))]"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              {menuOpen ? <IoCloseSharp size={26} /> : <AiOutlineMenu size={26} />}
            </button>
          </div>
        </Container>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* overlay */}
              <motion.button
                type="button"
                className="fixed inset-0 z-40 bg-black/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
              />

              {/* menu */}
              <motion.nav
                id="mobile-nav"
                className="
                  relative z-50 px-6 py-8 space-y-6
                  border-t border-[rgb(var(--border))]
                  bg-[rgb(var(--bg))]
                "
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {items.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      [
                        "block text-lg transition",
                        isActive
                          ? "text-[rgb(var(--fg))]"
                          : "text-[rgb(var(--fg-muted))] hover:text-[rgb(var(--fg))]",
                      ].join(" ")
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}

                <div className="pt-4">
                  <ThemeToggle />
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}