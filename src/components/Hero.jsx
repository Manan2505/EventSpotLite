import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div data-scroll-container data-scroll data-scroll-section data-scroll-speed="-.2" className='min-h-screen pt-16 md:pt-20 px-4 relative'>
      <div className='max-w-[1080px] mx-auto'>  
        {/* Animated heading with overflow hidden to prevent horizontal scroll */}
        <div className='overflow-hidden mb-4'>
          <motion.h1 
            initial={{ x: "100%" }} 
            animate={{ x: "-100%" }} 
            transition={{ ease: "linear", duration: 10, repeat: Infinity }}
            className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap font-["Neue_Montreal"]'
          >
            "Discover What's Happening Now"
          </motion.h1>
        </div>
        
        {/* Main heading */}
        <span className='block font-bold text-3xl sm:text-4xl md:text-5xl text-red-600 animate-pulse mb-4'>
          Find Your Next Adventure
        </span>

        {/* Subheading */}
        <p className='font-medium tracking-wide text-base sm:text-lg md:text-xl max-w-2xl mx-auto'>
          Never miss out on what your city has to offer – discover, plan, and create memories that last a lifetime.
        </p>
      </div>
    
      {/* Features section */}
      <div className='mt-16 md:mt-32'>
        <div className='border-t-2 border-red-500'></div>
        <ul className='flex flex-col sm:flex-row justify-between gap-4 py-6 px-4 md:px-9 text-base md:text-xl font-medium italic'>
          <li className='text-center sm:text-left'>"Curated Local Experiences"</li>
          <li className='text-center sm:text-left'>Real-time Updates</li>
          <li className='text-center sm:text-left'>Personalized Discovery</li>
        </ul>
      </div>

     
    </div>
  );
};

export default Hero;