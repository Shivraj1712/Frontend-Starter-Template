import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <motion.section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center text-center text-dark"
      style={{
        height: "80vh",
        // backgroundImage: "url('/hero-bg.jpg')",
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="display-3 fw-bold">Welcome to My Site 🚀</h1>
      <p className="lead mt-3 w-75">
        Build modern responsive websites with React, Bootstrap & Framer Motion.
      </p>
      <a href="#features" className="btn btn-success mt-4">Get Started</a>
    </motion.section>
  );
};

export default Hero;
