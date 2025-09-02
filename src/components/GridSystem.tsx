import React from "react";
import { motion } from "framer-motion";

const GridSystem: React.FC = () => {
  return (
    <motion.section
      id="features"
      className="container my-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-center fw-bold mb-4">Our Features</h2>
      <div className="row g-4">
        {[1, 2, 3, 4].map((num) => (
          <motion.div
            key={num}
            className="col-md-3 col-sm-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.6, delay: num * 0.2 }}
          >
            <div className="card h-100 shadow-sm text-center p-3">
              <h5 className="fw-bold">Feature {num}</h5>
              <p>Some description about feature {num}.</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default GridSystem;
