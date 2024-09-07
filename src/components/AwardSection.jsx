import React from 'react';
import { motion } from 'framer-motion';
import { Award } from "../constants";

const AwardSection = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'
      >
        Awards
      </motion.h1>
      <div>
        {Award.map((award, index) => (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            key={index}
            className='mb-8 flex flex-wrap lg:justify-center'
          >
            <div className='w-full lg:w-1/4'>
              <motion.img
                src={award.image}
                alt={award.title}
                width={150}
                height={150}
                className='mb-6 rounded'
                whileInView={{ scale: 1 }}
                initial={{ scale: 0.8 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className='w-full max-w-xl lg:w-3/4'>
              <motion.h6
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className='mb-2 font-semibold'
              >
                {award.title}
              </motion.h6>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className='mb-4 text-neutral-400'
              >
                {award.description}
              </motion.p>
              {award.technologies.map((tech, index) => (
                <span
                  key={index}
                  className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AwardSection;
