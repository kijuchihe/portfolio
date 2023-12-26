import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const services = [
  {
    id: 1,
    title: "Branding",
    desc: "Lorem ipsum dolor sit amet consectetu dadipisicing elit. Harum velit ipsa quasi explicabo expedita mollitia, impedit repellat quo omnis animi.",
    btnText: "Go",
  },
  { id: 2, title: "Branding", desc: "lorem20", btnText: "Go" },
  { id: 3, title: "Branding", desc: "lorem20", btnText: "Go" },
  { id: 4, title: "Branding", desc: "lorem20", btnText: "Go" },
];
const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate"
      //   animate={isInView && "animate"}
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your </motion.b>Ideas
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        {services.map((service) => (
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
            key={service.id}
          >
            <h2>{service.title}</h2>
            <p>{service.desc}</p>
            <button>{service.btnText}</button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
