import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ReviewTable = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const animation = useAnimation();

  const variants = {
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2 }, // Adjust delay for staggered animation
    }),
    hidden: { opacity: 0, y: 50 },
  };

  const hoverVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [animation, inView]);

  const rows = [
    ["1", "Yohitha", "⭐⭐⭐⭐⭐", "Awesome"],
    ["2", "Subalakshmi", "⭐⭐⭐⭐", "Very Good"],
    ["3", "Lajitha", "⭐⭐⭐", "Not bad"],
  ];

  return (
    <div className="flex flex-col text-textcolor-0 justify-center items-center h-screen font-primary space-y-4 -mt-36">
      <h2 className="text-4xl mb-12">Reviews</h2>
      <motion.table
        className="text-2xl"
        ref={ref}
        initial="hidden"
        animate={animation}
      >
        {rows.map((row, rowIndex) => (
          <motion.tr
            key={rowIndex}
            variants={variants}
            custom={rowIndex}
            className="border-b-[0.5px] border-textcolor-0"
          >
            {row.map((cell, cellIndex) => (
              <motion.td
                key={cellIndex}
                className="py-12 px-20"
                variants={hoverVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {cell}
              </motion.td>
            ))}
          </motion.tr>
        ))}
      </motion.table>
    </div>
  );
};

export default ReviewTable;
