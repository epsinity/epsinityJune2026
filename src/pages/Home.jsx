import { motion } from "framer-motion";
import Image from "../assets/video.mov";
import HeroWord from "../components/HeroWord";
import { useMediaQuery } from "../hooks/useResponsive";
import { GetButton } from "../components/GetButton";

const Home = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section
      id="Intro"
      className="relative w-full min-h-screen flex justify-end video-shadow"
    >
      <video
        src={Image}
        alt="background"
        autoPlay={true}
        muted
        playsInline
        loop
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-15 flex justify-between md:flex-row flex-col px-10 mt-auto w-full items-center pb-25">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.11, delayChildren: 0.3 }}
          className="flex flex-col gap-[0.35em] leading-none p-5"
        >
          {["ENGINEERING", "PRECISION"].map((w) => (
            <HeroWord
              key={w}
              word={w}
              baseColor="#fff"
              fontWeight={700}
              fontSize={
                isMobile
                  ? "clamp(2.6rem, 12vw, 4rem)"
                  : "clamp(0.9rem, 3.8vw, 5.5rem)"
              }
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            />
          ))}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.3em",
              overflow: "visible",
              lineHeight: 1,
              marginTop: "0.05em",
            }}
          >
            {["THROUGH", "CFD", "&", "CAE", "SIMULATION"].map((w, i) => (
              <HeroWord
                key={i}
                word={w}
                baseColor="#fff"
                fontWeight={300}
                fontSize={
                  isMobile
                    ? "clamp(1.4rem, 3vw, 2.5rem)"
                    : "clamp(1.3rem, 1.6vw, 4rem)"
                }
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              />
            ))}
          </motion.div>
        </motion.div>
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              marginTop: "0.6rem",
              fontFamily: "var(--font-display)",
              fontSize: "15px",
              lineHeight: 1,
              color: "#000",
              maxWidth: 460,
            }}
          >
            We empower automotive, aerospace, and energy industries with
            advanced computational software consultancy — enhancing operational
            efficiency and driving technical innovation worldwide.
          </motion.p>
          <GetButton />
        </div>
      </div>
    </section>
  );
};

export default Home;
