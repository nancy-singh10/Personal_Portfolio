import React from "react";
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import About from "./components/About";
import Technology from './components/Technology';
import Experience from "./components/Experience";
// import { LuLanguages } from "react-icons/lu";
import Language from "./components/Language";
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 min-h-screen relative">
      {/* Background Layer */}
      <div className="fixed top-0 left-0 h-full w-full -z-10">
        <div className="absolute top-0 left-0 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
     
      {/* Content */}
      <div className="container mx-auto px-8">


        <Navbar />
        <Hero />
        <About />
        <Technology/>
        <Language/>
        <Experience/>


      </div>
    </div>
  );
};

export default App;
