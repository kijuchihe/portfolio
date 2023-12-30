import React from "react";
import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Kingsley Ihemelandu
        </motion.span>
        <div className="social">
          <a href="https://twitter.com/kijuchihe">
            <img src="/twitter.png" alt="" />
          </a>
          <a href="https://linkedin.com/in/kijuchihe">
            <img src="/linkedin.png" alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/kijuchihe">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://instagram.com/kijuchihe">
            <img src="/instagram.png" alt="" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
