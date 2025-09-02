import React from "react";
import { motion } from "framer-motion";

const FlexBox: React.FC = () => {
  return (
    <motion.section
      className="container my-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-4">
        <div className="p-4 shadow-sm border rounded text-center flex-fill">
          <h3>Fast</h3>
          <p>Optimized and blazing fast load times.</p>
        </div>
        <div className="p-4 shadow-sm border rounded text-center flex-fill">
          <h3>Responsive</h3>
          <p>Looks perfect on mobile, tablet, and desktop.</p>
        </div>
        <div className="p-4 shadow-sm border rounded text-center flex-fill">
          <h3>Modern</h3>
          <p>Using the latest frontend technologies.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default FlexBox;
