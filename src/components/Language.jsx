import React from 'react';
import { SiCplusplus, SiPython, SiJavascript } from 'react-icons/si';
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

const Language = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5}}
      className='my-20 text-center text-4xl'>Languages</motion.h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        {/* C++ Icon */}
        <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiCplusplus className="text-7xl text-[#00599C]" />  {/* C++ icon color */}
        </motion.div>
        {/* Python Icon */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiPython className="text-7xl text-[#3776AB]" />  {/* Python icon color */}
        </motion.div>
        {/* JavaScript Icon */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiJavascript className="text-7xl text-[#F7DF1E]" />  {/* JavaScript icon color */}
        </motion.div>
      </div>
    </div>
  );
}

export default Language;
