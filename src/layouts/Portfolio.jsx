import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "../hooks/useResponsive";
import { CASE_STUDIES, PROJECTS } from "../data";
import { AnimatePresence } from "framer-motion";
import { CaseCard } from "../components/CaseCard";
import { CaseStudyModal } from "../components/CaseStudy";

const Portfolio = ({}) => {
  const railRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const scroll = (dir, amount) =>
    railRef.current?.scrollBy({ left: dir * amount, behavior: "smooth" });
  const [activeStudy, setActiveStudy] = useState(null);

  const handleViewStudy = (project) => {
    const study = CASE_STUDIES[project.num];
    if (study) setActiveStudy({ project, study });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (railRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = railRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          railRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scroll(1, 440);
        }
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex w-full justify-evenly gap-3 mx-auto">
        {[-1, 1].map((dir) => (
          <button
            key={dir}
            onClick={() => scroll(dir, 660)}
            data-hover
            aria-label={dir < 0 ? "Previous" : "Next"}
            className="w-13.5 h-13.5 border border-gray-700 text-black
                         font-display text-[1.6rem] transition-colors duration-200
                         hover:bg-white hover:text-black"
          >
            {dir < 0 ? "<" : ">"}
          </button>
        ))}
      </div>

      <div
        ref={railRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-proximity overflow-y-hidden  w-full h-full px-6 md:px-10 pb-4"
      >
        {PROJECTS.map((project, i) => (
          <div key={project.num} className="snap-start ">
            <CaseCard project={project} onViewStudy={handleViewStudy} i={i} />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {activeStudy && (
          <CaseStudyModal
            project={activeStudy.project}
            study={activeStudy.study}
            onClose={() => setActiveStudy(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
