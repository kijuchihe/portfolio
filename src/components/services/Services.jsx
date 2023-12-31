import { useRef } from "react";
// import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -100,
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
      className="h-screen bg-gradient-to-r from-[#0c0c1d] to-[#111132] flex flex-col justify-between px-4"
      variants={variants}
      initial="initial"
      whileInView="animate"
      // animate={"animate"}
      ref={ref}
    >
      <motion.div
        className="flex self-center flex-1 gap-5 text-center lg:self-end center"
        variants={variants}
      >
        <p className="text-xl text-right text-gray-500 font-extralight">
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr className="w-[300px] md:w-[400px] lg:w-[500px] border-t-[0.5px] border-t-gray-500" />
      </motion.div>
      <motion.div className="flex-[2] flex flex-col items-center w-full md:w-auto">
        <div className="flex flex-col items-center gap-10 text-center lg:gap-12 lg:flex-row">
          <img
            src="/people.webp"
            alt=""
            className="w-[200px] md:w-[250px] lg:w-[300px] h-[100px] rounded-full object-cover"
          />
          <h1 className="text-3xl font-thin md:text-4xl lg:text-5xl">
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="flex flex-col items-center gap-10 text-center lg:gap-12 lg:flex-row">
          <h1 className="text-3xl font-thin md:text-4xl lg:text-5xl">
            <motion.b whileHover={{ color: "orange" }}>For Your </motion.b>Ideas
          </h1>
          <button className="w-[200px] h-[60px] md:w-[300px] md:h-[100px] rounded-full bg-orange-500 border-none text-2xl cursor-pointer">
            WHAT I DO?
          </button>
        </div>
      </motion.div>
      <motion.div className="flex-[2] flex max-w-[1366px] mx-auto gap-2 w-full overflow-x-scroll my-2">
        {services.map((service) => (
          <motion.div
            className="p-12 border-[0.5px] border-gray-500 flex flex-col justify-between min-w-[350px] max-w-[350px] rounded-lg h-fit gap-4 text-center items-center"
            whileHover={{ background: "lightgray", color: "black" }}
            key={service.id}
          >
            <h2 className="text-3xl font-bold text-orange-500">
              {service.title}
            </h2>
            <p>{service.desc}</p>
            <button className="lg:p-2 lg:bg-orange-500 lg:border-none cursor-pointer bg-transparent border border-orange-500 rounded-md text-orange-500 w-1/2 p-[5px] lg:text-white">
              {service.btnText}
            </button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
