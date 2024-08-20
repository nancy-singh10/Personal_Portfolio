import React from 'react';
import { SiCplusplus, SiPython, SiJavascript } from 'react-icons/si';

const Language = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-4xl'>Languages</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        {/* C++ Icon */}
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiCplusplus className="text-7xl text-[#00599C]" />  {/* C++ icon color */}
        </div>
        {/* Python Icon */}
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiPython className="text-7xl text-[#3776AB]" />  {/* Python icon color */}
        </div>
        {/* JavaScript Icon */}
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiJavascript className="text-7xl text-[#F7DF1E]" />  {/* JavaScript icon color */}
        </div>
      </div>
    </div>
  );
}

export default Language;
