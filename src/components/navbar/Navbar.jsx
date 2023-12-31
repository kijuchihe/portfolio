import React from "react";
import { motion } from "framer-motion";
// import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <nav className="h-[100px]">
      <Sidebar />
      <div className="w-full max-w-[1366px] flex items-center justify-end h-full">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden font-bold lg:inline-block"
        >
          Kingsley Ihemelandu
        </motion.span>
        <div className="flex gap-x-[20px]">
          <a href="https://twitter.com/kijuchihe">
            <img src="/twitter.png" alt="" className="w-[20px] h-[20px]" />
          </a>
          <a href="https://linkedin.com/in/kijuchihe">
            <img
              src="/linkedin.png"
              alt="LinkedIn Icon"
              className="w-[20px] h-[20px]"
            />
          </a>
          <a href="https://github.com/kijuchihe">
            <img src="/github.png" alt="" className="w-[20px] h-[20px]" />
          </a>
          <a href="https://instagram.com/kijuchihe">
            <img src="/instagram.png" alt="" className="w-[20px] h-[20px]" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
