import React, { useState } from "react";
// import "./sidebar.scss";
import { motion } from "framer-motion";
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
  };
  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-white"
      animate={open ? "open" : "closed"}
    >
      <motion.div
        className="fixed top-0 bottom-0 left-0 w-[200px] md:w-[300px] bg-white z-50 h-full"
        variants={variants}
      >
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export const Links = () => {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  const items = [
    { title: "Homepage", id: "/" },
    { title: "Services", id: "#services" },
    { title: "Portfolio", id: "#portfolio" },
    { title: "Contact", id: "#contact" },
  ];
  return (
    <motion.div
      className="absolute flex flex-col items-center justify-center w-full h-full text-base text-black md:text-2xl"
      variants={variants}
    >
      {items.map((item) => (
        <motion.a
          href={`${item.id}`}
          key={item.id}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item.title}
        </motion.a>
      ))}
    </motion.div>
  );
};
export const ToggleButton = ({ setOpen }) => {
  return (
    <button
      onClickCapture={() => setOpen((prev) => !prev)}
      className="z-50 w-[50px] h-[50px] rounded-full fixed top-[25px] left-[38px] bg-transparent cursor-pointer"
    >
      <svg width={23} height={23} viewBox="0 0 23 23">
        <motion.path
          strokeWidth={3}
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          strokeWidth={3}
          stroke="black"
          strokeLinecap="round"
          d={"M 2 9.423 L 20 9.423"}
          variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
        />
        <motion.path
          strokeWidth={3}
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};
export default Sidebar;
