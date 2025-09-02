import React from "react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  return (
    <motion.nav
      className="navbar navbar-expand-lg fixed-top bg-primary"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", backdropFilter: "blur(8px)" }}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <a className="navbar-brand fw-bold text-white" href="#">MySite</a>
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link text-white" href="#hero">Home</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#features">Features</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#contact">Contact</a></li>
          </ul>
          <a href="#" className="btn btn-outline-light ms-3">Login</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
