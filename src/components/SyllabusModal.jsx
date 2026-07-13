import { useEffect } from "react";
import { motion } from "framer-motion";

export function SyllabusModal({ course, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="case-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div
        className="case-modal" // Reusing styles
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="case-modal-close" // Reusing styles
          aria-label="Close course syllabus"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Header */}
        <div className="case-modal-header">
          <div className="case-modal-badge">
            <span className="case-modal-num">{course.id}</span>
            <span className="case-modal-divider" />
            <span>Course Syllabus</span>
          </div>
          <h2 className="case-modal-title">{course.title}</h2>
        </div>

        {/* Content */}
        <div className="case-modal-body">
          <div className="case-modal-section">
            {course.syllabus?.map((section, idx) => (
              <div key={idx} style={{ marginBottom: "1.5rem" }}>
                <h3
                  style={{
                    // fontFamily: "var(--font-mono)",
                    fontSize: "0.88rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {section.module}
                </h3>
                <ul
                  style={{
                    listStyle: "disc",
                    paddingLeft: "1.2rem",
                    color: "var(--dim)",
                  }}
                >
                  {section.topics.map((topic, topicIdx) => (
                    <li key={topicIdx} style={{ marginBottom: "0.4rem" }}>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
