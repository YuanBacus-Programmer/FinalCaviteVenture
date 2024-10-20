"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { HTMLAttributes } from "react";

// Extend HTMLAttributes with MotionProps to ensure proper typing for div and span
type MotionDivProps = HTMLAttributes<HTMLDivElement> & HTMLMotionProps<"div">;
type MotionSpanProps = HTMLAttributes<HTMLSpanElement> & HTMLMotionProps<"span">;

export default function LoadingAnimation() {
  const containerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const dotVariants = {
    start: {
      y: "0%",
    },
    end: {
      y: "100%",
    },
  };

  const dotTransition = {
    duration: 0.5,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut" as const,
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        className="flex space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5"
        variants={containerVariants}
        initial="start"
        animate="end"
        // Explicitly cast props using MotionDivProps
        {...({} as MotionDivProps)}
      >
        {[...Array(3)].map((_, index) => (
          <motion.span
            key={index}
            className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-blue-500 rounded-full"
            style={{ display: "inline-block" }}
            variants={dotVariants}
            transition={dotTransition}
            // Explicitly cast props using MotionSpanProps
            {...({} as MotionSpanProps)}
          />
        ))}
      </motion.div>
    </div>
  );
}
