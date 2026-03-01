import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

import { Container } from "@/shared/layout/Container";
import { Logo } from "@/shared/components/Logo/Logo";

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
      {/* ===== Desktop Navbar ===== */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-white/5"
      >
        <Container>
          <div className="h-16 hidden md:flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Logo />
            </div>

            <ul className="flex items-center gap-8 text-gray-300">
              {items.map((item) => (
                <li key={item.to} className="relative group">
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      [
                        "transition-colors",
                        isActive ? "text-white" : "text-gray-300 group-hover:text-white",
                      ].join(" ")
                    }
                  >
                    {item.label}
                  </NavLink>

                  <span
                    className={[
                      "absolute -bottom-1 left-0 h-[2px] bg-blue-400 transition-all duration-300",
                      "w-0 group-hover:w-full",
                    ].join(" ")}
                  />
                </li>
              ))}
            </ul>

          </div>
        </Container>
      </motion.header>

      {/* ===== Mobile Navbar ===== */}
      <header className="fixed top-0 w-full z-50 md:hidden backdrop-blur-lg bg-black/50 border-b border-white/5">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <Logo />
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="text-white"
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
              <motion.button
                type="button"
                aria-label="Close menu overlay"
                className="fixed inset-0 z-40 bg-black/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
              />

              <motion.nav
                id="mobile-nav"
                aria-label="Mobile"
                className="relative z-50 bg-[#0e0c1e] px-6 py-8 space-y-6 border-t border-white/5"
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
                        isActive ? "text-white" : "text-gray-300 hover:text-purple-400",
                      ].join(" ")
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}

                
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer pour éviter que le contenu passe sous la navbar fixed */}
      <div className="h-16" />
    </>
  );
}