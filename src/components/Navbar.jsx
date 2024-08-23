import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import logo from '../assets/nlogo.jpg';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6 px-4'>
      <div className='flex flex-shrink-0 items-center'>
        <img className="mx-2 h-20 w-20" src={logo} alt='logo' />
      </div>
      <div className='flex space-x-4 m-8 justify-center gap-4 py-6 text-2xl'>
        <a href="https://www.linkedin.com/in/nancy-singh-594b6421b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='text-white h-6 w-6' />
        </a>
        <a href="https://github.com/nancy-singh10" target="_blank" rel="noopener noreferrer">
          <FaGithub className='text-white h-6 w-6' />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className='text-white h-6 w-6' />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
