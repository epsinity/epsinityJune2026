import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="About"
      className="relative overflow-y-hidden min-h-screen md:min-h-130 flex justify-between max-w-screen px-2 md:px-20 text-black"
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full text-black w-full opacity-[0.30]"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M-100 190C190 20 400 360 730 190C1060 20 1190 210 1540 30"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M-100 230C190 60 400 400 730 230C1060 60 1190 250 1540 70"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M-100 270C190 100 400 440 730 270C1060 100 1190 290 1540 110"
          stroke="currentColor"
          strokeWidth="1"
        />

        <circle cx="1180" cy="650" r="230" stroke="currentColor" />
        <circle cx="1180" cy="650" r="170" stroke="currentColor" />
        <circle cx="1180" cy="650" r="110" stroke="currentColor" />

        <path
          d="M950 650H1410M1180 420V880"
          stroke="currentColor"
          strokeDasharray="6 8"
        />
      </svg>

      <div className="relative mx-auto w-full h-full flex flex-col lg:flex-row items-start justify-between gap-10">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 text-lg leading-relaxed text-black/65 md:text-xl mt-10"
        >
          We bridge the critical gap between complex physical phenomena and
          operational reality. Combining decades of technical expertise in CFD
          and CAE, Epsinity builds simulation software that enables automotive
          and aerospace teams to achieve greater technical efficiency and
          accelerate innovation.
        </motion.p>

        <div className="h-full w-full lg:w-2/3">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            <div className="absolute z-10 top-0 left-0 right-0 border-b border-white/30  p-5 text-black ">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <p className="text-xl font-medium tracking-tight">
                    Venkata Ramana Eaga
                  </p>

                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-black/70">
                    Founder & Managing Director
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-full overflow-y-auto bg-gray-200 border border-gray-500/20 pt-15">
              <div
                // src="/images/hero.png"
                className="w-full h-ful text-black/80 p-5 md:p-8 text-sm md:text-lg"
              >
                Has two decades of deep expertise in Computational Fluid
                Dynamics (CFD) and engineering simulation. M.Tech in Fluids &
                Thermal Engineering from IIT-Guwahati. Venkat built his career
                solving some of the most complex fluid dynamics challenges
                across industries and developed intelligent automations for
                CFD/CAE processes. <br />
                <br />
                Before co-founding Epsinity, Venkat worked at ESI-Group (Now
                Keysight) for 17.5 years in the CFD team and worked with almost
                well all known CFD tools including OpenFOAM. As a freelancer he
                collaborated with machine learning teams to build AI-driven CFD
                models
                <br />
                <br />
                At Epsinity, Venkat channels this rare combination of simulation
                depth, automation expertise, and AI fluency into building
                smarter engineering solutions — where physics-based modeling
                meets the power of modern data science.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// <svg
//   className="pointer-events-none absolute inset-0 h-full w-full text-black/40"
//   viewBox="0 0 600 750"
//   fill="none"
// >
//   <path
//     d="M30 30H120M30 30V120"
//     stroke="currentColor"
//     strokeWidth="1"
//   />

//   <path
//     d="M570 630V720H480"
//     stroke="currentColor"
//     strokeWidth="1"
//   />

//   <circle
//     cx="500"
//     cy="100"
//     r="35"
//     stroke="currentColor"
//     strokeDasharray="4 5"
//   />

//   <path
//     d="M465 100H535M500 65V135"
//     stroke="currentColor"
//     strokeWidth="1"
//   />
// </svg>
