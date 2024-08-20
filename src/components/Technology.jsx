import React from 'react';
import { RiReactjsFill } from 'react-icons/ri';
import { SiTailwindcss, SiOpencv, SiHtml5, SiCss3 } from 'react-icons/si';

const Technology = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-4xl'>Technologies</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        {/* React Icon */}
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsFill className="text-7xl text-[#61DAFB]" /> {/* React original color */}
        </div>
        {/* Tailwind CSS Icon */}
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiTailwindcss className="text-7xl text-[#06B6D4]" /> {/* Tailwind CSS original color */}
        </div>
        {/* OpenCV Icon */}
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiOpencv className="text-7xl text-[#5C3EE8]" /> {/* OpenCV original color */}
        </div>
        {/* HTML5 Icon */}
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiHtml5 className="text-7xl text-[#E34F26]" /> {/* HTML5 original color */}
        </div>
        {/* CSS3 Icon */}
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiCss3 className="text-7xl text-[#1572B6]" /> {/* CSS3 original color */}
        </div>
      </div>
    </div>
  );
}

export default Technology;
