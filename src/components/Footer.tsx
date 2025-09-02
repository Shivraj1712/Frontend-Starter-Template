import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <motion.footer
      id="contact"
      className="bg-dark text-light text-center py-4 mt-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <p>© 2025 MySite. All Rights Reserved.</p>
      <a href="#hero" className="text-light">Back to top ↑</a>
    </motion.footer>
  );
};

export default Footer;
