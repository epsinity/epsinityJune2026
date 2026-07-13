import React from "react";
import { motion } from "framer-motion";

export const GetButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mt-[1.6rem] pt-4 border-t border-white/50 flex justify-between items-end relative z-20"
    >
      <button
        onClick={() =>
          document
            .getElementById("Contact")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className=" text-xs tracking-widest uppercase py-3 px-8
                   border border-blue-500 text-white bg-blue-500
                   transition-colors duration-200 hover:bg-transparent hover:text-blue-500"
      >
        Get Consultation
      </button>
      <div />
    </motion.div>
  );
};
