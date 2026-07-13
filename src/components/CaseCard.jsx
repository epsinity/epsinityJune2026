import { motion } from "framer-motion";

export function CaseCard({ project, onViewStudy, i }) {
  return (
    <motion.article
      // initial={{ opacity: 0, y: 28 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true, amount: 0.25 }}
      // transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
      data-hover
      className="w-sm md:w-md h-95 bg-white border border-black overflow-hidden cursor-grab my-5 relative image-shadow"
    >
      {/* <ScanVisual project={project} /> */}
      <img
        src={project.imgUrl}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover z-10 "
      />
      <div className="py-[1.6rem] px-[1.8rem] pb-[1.8rem] z-12 relative">
        <div className="flex justify-between gap-6 mb-[1.2rem]  text-[0.58rem] tracking-[0.14em] uppercase text-white">
          <span>{project.sector}</span>
          <span>{project.focus}</span>
        </div>
        <h3 className="font-poppins font-bold text-[clamp(2rem,3.5vw,2.9rem)] leading-[0.95] uppercase text-white w-full">
          {project.title}
        </h3>
        {/* <div className="mt-6 flex justify-between items-center border-t border-white pt-4 font-mono text-[0.62rem] tracking-[0.14em] uppercase text-white"> */}
        {/* <span>Case {project.num}</span> */}
        {/* </div> */}
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onViewStudy(project);
        }}
        data-hover
        className="absolute bg-black px-4 uppercase cursor-pointer text-white p-2 right-5 bottom-5 z-15"
      >
        View Study
      </button>
    </motion.article>
  );
}
