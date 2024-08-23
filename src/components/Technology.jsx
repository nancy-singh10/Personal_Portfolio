import React from 'react';
import { RiReactjsFill } from 'react-icons/ri';
import { SiTailwindcss, SiOpencv, SiHtml5, SiCss3 } from 'react-icons/si';
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  }
});

const Technology = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5}}
       className='my-20 text-center text-4xl'>Technologies</motion.h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        {/* React Icon */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsFill className="text-7xl text-[#61DAFB]" />
        </motion.div>
        {/* Tailwind CSS Icon */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiTailwindcss className="text-7xl text-[#06B6D4]" />
        </motion.div>
        {/* OpenCV Icon */}
        <motion.div
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiOpencv className="text-7xl text-[#5C3EE8]" />
        </motion.div>
        {/* HTML5 Icon */}
        <motion.div
          variants={iconVariants(2.3)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiHtml5 className="text-7xl text-[#E34F26]" />
        </motion.div>
        {/* CSS3 Icon */}
        <motion.div
          variants={iconVariants(2.6)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiCss3 className="text-7xl text-[#1572B6]" />
        </motion.div>
      </div>
    </div>
  );
}

export default Technology;
