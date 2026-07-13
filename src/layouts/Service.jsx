import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "../hooks/useResponsive";
import { rows } from "../data";
import { SyllabusModal } from "../components/SyllabusModal";

function ArrowBtn({ dir, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      data-hover
      aria-label={dir < 0 ? "Previous service" : "Next service"}
      className={`
        w-11 h-11
        border
        text-base
        leading-none
        flex items-center justify-center
        bg-transparent
        transition-colors duration-200
        ${
          !disabled
            ? "cursor-default border-black text-black"
            : "cursor-pointer border-black/30 text-black  hover:border-black hover:text-black"
        }
      `}
    >
      {dir < 0 ? "<" : ">"}
    </button>
  );
}

function ServicePanel({ item, isMobile, onViewCourse }) {
  const [imgError, setImgError] = useState(false);

  const handleAction = () => {
    if (item.actionType === "Contact") {
      document
        .getElementById("Contact")
        ?.scrollIntoView({ behavior: "smooth" });
    } else if (item.actionType === "course" && onViewCourse) {
      onViewCourse(item);
    }
  };

  return (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: isMobile ? 0 : -14 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        background: "var(--bg2)",
        overflow: isMobile ? "auto" : "hidden",
      }}
    >
      {/* Image column */}
      {!isMobile ? (
        <div
          style={{
            width: "45%",
            flexShrink: 0,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {item.imgUrl && !imgError ? (
            <img
              src={item.imgUrl}
              alt={item.title}
              onError={() => setImgError(true)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg, var(--bg), var(--rule))",
              }}
            />
          )}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, transparent 70%, var(--bg2) 100%)",
              pointerEvents: "none",
            }}
          />
        </div>
      ) : (
        <img
          src={item.imgUrl}
          alt={item.title}
          onError={() => setImgError(true)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      )}

      {/* Content column */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: isMobile ? "flex-start" : "space-between",
          gap: isMobile ? "2rem" : 0,
          padding: isMobile
            ? "2rem 1.5rem"
            : "clamp(3rem, 4.5vw, 5.5rem) clamp(2.5rem, 4vw, 5rem)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ position: "relative", zIndex: 1 }}>
          <motion.h2
            initial={{ clipPath: "inset(0 0 100% 0)", y: "8%" }}
            animate={{ clipPath: "inset(0 0 0% 0)", y: "0%" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: isMobile
                ? "clamp(2.2rem, 10vw, 3.5rem)"
                : "clamp(2.5rem, 4.5vw, 5.5rem)",
              lineHeight: 0.92,
              textTransform: "uppercase",
              color: "var(--white)",
              marginBottom: isMobile ? "1.2rem" : "1.8rem",
              overflow: "hidden",
            }}
          >
            {item.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.22, duration: 0.45 }}
            style={{
              //   fontFamily: "var(--font-mono)",
              fontSize: isMobile ? "0.88rem" : "0.98rem",
              lineHeight: 1.85,
              color: "var(--dim)",
              maxWidth: 460,
            }}
          >
            {item.subtitle}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative", zIndex: 1 }} // Removed className="mb-60" to fix potential automatic scroll issues
        >
          <div
            style={{ borderTop: "1px solid var(--rule)", paddingTop: "1.5rem" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-[1.6rem] pt-4 border-t border-white/50 flex justify-between items-start relative z-20"
            >
              <button
                onClick={() => handleAction(item.actionType)}
                className="text-xs tracking-widest uppercase py-3 px-8
                               border border-blue-500 text-white bg-blue-500
                               transition-colors duration-200 hover:bg-transparent hover:text-blue-500"
              >
                {item.action}
              </button>
              <div />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeSyllabus, setActiveSyllabus] = useState(null); // State for syllabus modal
  const n = rows.length;
  const isMobile = useMediaQuery("(max-width: 768px)");

  const goTo = (i) => setActiveIdx(Math.max(0, Math.min(n - 1, i)));
  const handleViewCourse = (course) => setActiveSyllabus(course);

  useEffect(() => {
    if (activeSyllabus) {
      return;
    }
    const interval = setInterval(() => {
      setActiveIdx((prevIdx) => (prevIdx + 1) % n);
    }, 10000);
    return () => clearInterval(interval);
  }, [n, activeSyllabus]);

  return (
    <section
      id="services"
      style={{
        // width: "100vw",
        height: "100svh",
        // background: "var(--bg2)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        borderTop: "1px solid var(--rule)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: "0.8rem",
          margin: "18px auto",
          width: "50%",
        }}
      >
        <ArrowBtn
          dir={-1}
          onClick={() => goTo(activeIdx - 1)}
          disabled={activeIdx === 0}
        />
        <span style={{ minWidth: "3.5rem", textAlign: "center" }}>
          {String(activeIdx + 1).padStart(2, "0")} / {rows.length}
        </span>
        <ArrowBtn
          dir={1}
          onClick={() => goTo(activeIdx + 1)}
          disabled={activeIdx === n - 1}
        />
      </div>

      {/* Body */}
      <div
        style={{
          flex: 1,
          position: "relative",
          overflow: "hidden",
          minHeight: 0,
        }}
      >
        <AnimatePresence mode="sync">
          <ServicePanel
            key={activeIdx}
            item={rows[activeIdx]}
            isMobile={isMobile}
            onViewCourse={handleViewCourse} // Pass the handler to ServicePanel
          />
        </AnimatePresence>
      </div>

      {/* Syllabus Modal */}
      <AnimatePresence>
        {activeSyllabus && (
          <SyllabusModal
            course={activeSyllabus}
            onClose={() => setActiveSyllabus(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
