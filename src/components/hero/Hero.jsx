import React from "react";
// import "./hero.scss";
import { motion } from "framer-motion";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",

    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};
const Hero = () => {
  return (
    <div className="h-[calc(100vh - 100px)] overflow-hidden bg-gradient-to-r from-[#0c0c1d]  to-[#111132] px-2">
      <div className="h-full max-w-[1366px] mx-auto flex flex-col items-center lg:flex-row gap-8">
        <motion.div
          className="flex flex-col justify-center w-full gap-5 text-center lg:w-1/2 h-1/2 lg:h-full lg:gap-10 "
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            variants={textVariants}
            className="text-3xl md:text-4xl lg:text-5xl text-[#663399] tracking-[10px]"
          >
            KINGSLEY IHEMELANDU
          </motion.h2>
          <motion.h1
            variants={textVariants}
            className="text-xl md:text-3xl lg:text-5xl"
          >
            Full-stack & Software Engineer
          </motion.h1>
          <motion.div
            className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center"
            variants={textVariants}
          >
            <motion.a
              className="z-10 p-5 font-light text-white bg-transparent border border-white cursor-pointer rounded-xl"
              href="#portfolio"
              variants={textVariants}
            >
              See My Latest Work
            </motion.a>
            <motion.a
              className="z-10 p-5 font-light text-white bg-transparent border border-white cursor-pointer rounded-xl"
              href="#contact"
              variants={textVariants}
            >
              Contact Me
            </motion.a>
          </motion.div>
          <motion.img
            src="/scroll.png"
            className="w-[40px] sm:w-[50px]"
            alt=""
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
        <motion.div
          className="absolute text-[50vh] bottom-[-120px]  max-w-[700px] w-1/2 font-bold whitespace-nowrap text-[#ffffff09] select-none overflow-x-hidden"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Writer Content Creator Influencer
        </motion.div>
        <div className="w-full sm:w-3/4 md:w-1/2">
          <img src="/hero.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
