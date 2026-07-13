import { useState, useRef } from "react";
import { motion } from "framer-motion";

function HeroWord({ word, baseColor, fontWeight, fontSize, transition }) {
  const wordVar = {
    hidden: { clipPath: "inset(0 0 100% 0)", y: "55%" },
    visible: { clipPath: "inset(-45% -22% -45% -22%)", y: "0%" },
  };
  const [hover, setHover] = useState(false);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const spanRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = spanRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.span
      ref={spanRef}
      variants={wordVar}
      transition={transition}
      data-hover
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={handleMouseMove}
      className="relative inline-block font-display leading-[0.9] tracking-[0.02em] uppercase"
      style={{
        cursor: "none", // Custom cursor, no direct Tailwind equivalent
        fontWeight,
        fontSize,
      }}
    >
      <span
        aria-hidden
        className="absolute -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
        style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
      >
        <motion.span
          animate={{ opacity: hover ? 1 : 0 }}
          transition={{ duration: 0.15 }}
          className="block w-[3.8em] h-[2.4em] blur-[18px] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(29,60,102,0.15), rgba(29,60,102,0.05) 55%, transparent 78%)", // Complex gradient, keep inline
          }}
        />
      </span>
      <span className="relative z-10 inline-block text-black">{word}</span>
    </motion.span>
  );
}

export default HeroWord;
