import { motion } from "motion/react";

import React from "react";

const MotionButton = () => {
  return (
    <div className="mt-6">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.56 }}
        onHoverStart={() => console.log("hover started!")}
        className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 px-4 py-2 sm:px-6 sm:py-3 rounded-lg cursor-pointer transition-all duration-300"
      >
        contact Me?
      </motion.button>
    </div>
  );
};

export { MotionButton };
