import { useState } from "react";
import { motion } from "framer-motion";

export const LINKS = [
  { label: "Home", id: "Intro" },
  { label: "Portfolio", id: "Portfolio" },
  { label: "Services", id: "Services" },
  { label: "About", id: "About" },
  { label: "Contact", id: "Contact" },
];

export function NavLink({ label, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      data-hover
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        // fontFamily: "var(--font-mono)",
        fontSize: "15px",
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: hovered ? "#030303" : "#000",
        transition: "color 0.2s",
        paddingBottom: "3px",
        fontWeight: 600,
      }}
      // className="bg-black p-2 rounded-2xl"
    >
      {label}
      <motion.span
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1.8px",
          background: "#000",
          transformOrigin: "left",
          display: "block",
          fontWeight: 600,
        }}
        className="font-bold cursor-pointer"
      />
    </button>
  );
}

export function HamburgerIcon({ open }) {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden>
      <motion.line
        x1="0"
        y1="1"
        x2="22"
        y2="1"
        stroke="#000"
        strokeWidth="1.9"
        animate={{ y: open ? 7 : 0, rotate: open ? 45 : 0 }}
        style={{ transformOrigin: "11px 1px" }}
        transition={{ duration: 0.25 }}
      />
      <motion.line
        x1="0"
        y1="8"
        x2="22"
        y2="8"
        stroke="#000"
        strokeWidth="1.9"
        animate={{ opacity: open ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.line
        x1="0"
        y1="15"
        x2="22"
        y2="15"
        stroke="#000"
        strokeWidth="1.9"
        animate={{ y: open ? -7 : 0, rotate: open ? -45 : 0 }}
        style={{ transformOrigin: "11px 15px" }}
        transition={{ duration: 0.25 }}
      />
    </svg>
  );
}
