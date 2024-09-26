"use client"; // Ensure this component is client-side only

import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import RoundIcon from "./ui/RoundIcon";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import BoxIcon from "./ui/BoxIcon";
import { SiChessdotcom, SiLeetcode } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import { Spotlight } from "./ui/spotlight";

const Primary = () => {
  return (
    <div className="pb-20 pt-36 relative">
      {" "}
      {/* Added relative positioning for child elements */}
      {/* Spotlights with fixed positioning */}
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen fixed" // Use fixed positioning
        fill="white"
      />
      <Spotlight
        className="top-10 left-full h-[80vh] w-[50vw] fixed" // Use fixed positioning
        fill="purple"
      />
      <Spotlight
        className="top-28 left-80 h-[80vh] w-[50vw] fixed"
        fill="blue"
      />
      {/* Fade-in effect added to the content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex justify-center relative my-20 z-10"
      >
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Hi, I'm Sayam"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Student at Missouri University of Science and Technology and an
            aspiring software developer
          </p>

          <div className="flex space-x-2">
            <a href="https://github.com/XDTerminated" target="_blank">
              <RoundIcon position="center" icon={<FaGithub />} />
            </a>
            <a
              href="https://www.linkedin.com/in/sayam-gupta-a4a8011b3/"
              target="_blank"
            >
              <BoxIcon position="center" icon={<FaLinkedin />} />
            </a>
            <a href="https://leetcode.com/XDTerminated/" target="_blank">
              <RoundIcon position="center" icon={<SiLeetcode />} />
            </a>
            <a
              href="https://www.chess.com/member/xd_terminated"
              target="_blank"
            >
              <RoundIcon position="center" icon={<SiChessdotcom />} />
            </a>
            <a href="mailto:gupta.sayam2006@gmail.com" target="_blank">
              <BoxIcon position="center" icon={<IoMdMail />} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Primary;
