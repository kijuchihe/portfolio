import { useRef } from "react";
// import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import images from "../images";
const h1Text = (type) => {
  if (type === "services") {
    return "What I Do";
  } else if (type === "portfolio") {
    return "Some Of My Projects";
  } else {
    return "Here's More About Me";
  }
};

const bg = (type) => {
  if (type === "services") {
    return "linear-gradient(180deg, #111132, #0c0c1d)";
  } else {
    return "linear-gradient(180deg, #111132, #505064)";
  }
};

const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div
      className="relative flex items-center justify-center w-full h-screen overflow-hidden"
      style={{ background: bg(type) }}
      id={type}
      ref={ref}
    >
      <motion.h1
        style={{ y: yText }}
        className="z-40 text-3xl lg:text-8xl md:text-5xl"
      >
        {h1Text(type)}
      </motion.h1>
      <motion.div className="bg-[url('https://res.cloudinary.com/kmavi/image/upload/v1704288713/kijuchihe/images/portfolio/mountains_vhulyr.png')] bg-cover bg-bottom w-full h-full absolute z-30 bg-no-repeat"></motion.div>
      <motion.div
        //
        className={`${
          type === "services"
            ? `bg-[url('https://res.cloudinary.com/kmavi/image/upload/v1704288704/kijuchihe/images/portfolio/planets_okrz8b.png')]`
            : `bg-[url('https://res.cloudinary.com/kmavi/image/upload/v1704288696/kijuchihe/images/portfolio/sun_ettyfe.png')]`
        }  bg-cover bg-bottom w-full h-full absolute z-20`}
        style={{
          y: yBg,
        }}
      ></motion.div>
      <motion.div
        style={{ x: yBg }}
        className={`bg-[url('https://res.cloudinary.com/kmavi/image/upload/v1704288696/kijuchihe/images/portfolio/stars_fbj6yt.png')] bg-cover bg-bottom w-full h-full absolute z-10`}
      ></motion.div>
    </div>
  );
};

export default Parallax;
