import React from 'react';
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion";
import aboutImg from "../assets/nancyprofile.jpeg";


const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>
        About 
        <span className='text-neutral-500'> Me</span>
      </h1>
      
      <div className='flex flex-wrap lg:flex-nowrap'>
        {/* Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-1/2 flex items-center justify-center lg:p-8'>
          <img src={aboutImg} alt="Nancy Singh's About Image" className='rounded-lg max-w-full h-auto'/>
        </motion.div>

        {/* Text Section */}
        <motion.div
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: 100 }}
         transition={{ duration: 0.5 }}
          className='w-full lg:w-1/2 flex items-center justify-center lg:justify-start lg:px-8'>
          <p className='text-center lg:text-left text-lg leading-relaxed'>
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
