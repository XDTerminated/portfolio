// "use client"; // Ensure the component is client-side only

// import React from "react";
// import { motion } from "framer-motion";
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";

// const About = () => {
//   return (
//     <div className="relative pb-8 pt-20">
//       {" "}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         viewport={{ once: true }}
//         className="flex justify-center relative z-10 my-12"
//       >
//         <div className="max-w-[85vw] md:max-w-3xl lg:max-w-[60vw] flex flex-col items-center justify-center space-y-4">
//           {" "}
//           <TextGenerateEffect
//             className="text-center text-[36px] md:text-4xl lg:text-5xl font-semibold tracking-tight" // Slightly reduced font size for balance
//             words="About Me"
//           />
//           <p className="text-center leading-relaxed text-sm md:text-lg lg:text-xl text-gray-700 dark:text-gray-300">
//             {" "}
//             I’m a student at Missouri University of Science and Technology,
//             aspiring to be a software developer with a passion for building
//             innovative solutions.
//           </p>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default About;

"use client"; // Ensure the component is client-side only

import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const About = () => {
  return (
    <div className="relative pb-8 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex justify-center relative z-10 my-12"
      >
        <div className="max-w-[85vw] md:max-w-3xl lg:max-w-[60vw] flex flex-col items-center justify-center space-y-6">
          {/* Enhanced Title with Background and Border */}
          <div className="bg-gradient-to-r from-purple-400 to-blue-500 p-4 rounded-lg shadow-md">
            <TextGenerateEffect
              className="text-center text-[36px] md:text-4xl lg:text-5xl font-semibold tracking-tight text-white"
              words="About Me"
            />
          </div>

          <p className="text-center leading-relaxed text-sm md:text-lg lg:text-xl text-gray-700 dark:text-gray-300">
            I am a student at Missouri University of Science and Technology
            majoring in Computer Science. I am Passionate about web, app
            development and machine learning.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
