import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "../hooks/useResponsive";
import { HamburgerIcon, LINKS, NavLink } from "../components/NavLink";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 2.5rem",
          borderBottom: `1px solid ${
            scrolled || menuOpen ? "#000" : "transparent"
          }`,
          background:
            scrolled || menuOpen
              ? "rgba(242,245,249,0.97)"
              : "rgba(242,245,249,1.00)",
          backdropFilter: scrolled || menuOpen ? "blur(16px)" : "none",
          transition: "background 0.4s, border-color 0.4s",
        }}
      >
        {/* logo */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMenuOpen(false);
          }}
          style={{
            display: "flex",
            alignItems: "center",
            lineHeight: 0,
            padding: 0,
          }}
        >
          <img
            src="/logo.svg"
            alt="Epsinity"
            style={{ height: 36, width: "auto" }}
          />
        </button>

        {isMobile ? (
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{ padding: "4px 2px", lineHeight: 0 }}
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        ) : (
          <nav
            style={{ display: "flex", gap: "2rem", alignItems: "center" }}
            className=""
          >
            {LINKS.map(({ label, id }) => (
              <NavLink key={id} label={label} onClick={() => go(id)} />
            ))}
          </nav>
        )}
      </motion.header>

      {/* mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            style={{
              position: "fixed",
              top: 60,
              left: 0,
              right: 0,
              zIndex: 199,
              background: "rgba(242,245,249,0.97)",
              backdropFilter: "blur(16px)",
              borderBottom: "1px solid var(--rule)",
              padding: "1.2rem 2.5rem 1.6rem",
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {LINKS.map(({ label, id }, i) => (
              <motion.button
                key={id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.2 }}
                onClick={() => go(id)}
                style={{
                  // fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--dim)",
                  textAlign: "left",
                  padding: "0.9rem 0",
                  borderBottom:
                    i < LINKS.length - 1 ? "1px solid var(--rule)" : "none",
                  transition: "color 0.2s",
                }}
                onTouchStart={(e) =>
                  (e.currentTarget.style.color = "var(--white)")
                }
                onTouchEnd={(e) => (e.currentTarget.style.color = "var(--dim)")}
              >
                {label}
              </motion.button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
