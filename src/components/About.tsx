"use client"; // Ensure the component is client-side only

import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const About = () => {
  return (
    <div className="relative pb-12 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex justify-center relative z-10 my-16"
      >
        <div className="max-w-[85vw] md:max-w-3xl lg:max-w-[60vw] flex flex-col items-center justify-center space-y-6">
          <TextGenerateEffect
            className="text-center text-[38px] md:text-5xl lg:text-6xl font-semibold tracking-tight"
            words="About Me"
          />
          <p className="text-center leading-relaxed text-base md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300">
            I’m a student at Missouri University of Science and Technology,
            aspiring to be a software developer with a passion for building
            innovative solutions.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
