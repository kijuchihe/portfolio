import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
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
    <div className="parallax" style={{ background: bg(type) }} id={type}>
      <motion.h1 style={{ y: yText }}>{h1Text(type)}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
