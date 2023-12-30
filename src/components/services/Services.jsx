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
    title: "Full-Stack Development",
    desc: "I provide comprehensive end-to-end development services, proficiently handling both front-end and back-end aspects of software systems. My expertise lies in designing, building, and maintaining entire software architectures, ensuring seamless integration between components, databases, servers, and user interfaces.",
    btnText: "Go",
  },
  {
    id: 2,
    title: "Technical Problem-Solving",
    desc: "As a full-stack engineer, I excel in resolving complex technical issues that arise within the software or applications I work on. My analytical thinking and debugging skills enable me to quickly identify and solve problems, ensuring smooth operation and minimizing any downtime.",
    btnText: "Go",
  },
  {
    id: 3,
    title: "Optimising Performance and Scalability",
    desc: "I specialize in optimizing application performance and scalability. I meticulously optimize code, fine-tune database structures, and configure servers to enhance speed, efficiency, and responsiveness. My strategies focus on ensuring that the system efficiently handles increased user loads or data volumes.",
    btnText: "Go",
  },
  {
    id: 4,
    title: "Collaboration and Communication",
    desc: "I am adept at collaborating with diverse teams, stakeholders, and clients. I effectively communicate technical concepts to non-technical stakeholders, gather requirements, and collaborate seamlessly with designers, front-end developers, and other team members. My goal is to ensure alignment and successful project execution.",
    btnText: "Go",
  },
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
      // animate={"animate"}
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
