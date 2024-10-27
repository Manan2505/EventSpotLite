import React from 'react';
import { motion } from 'framer-motion';
import Approach from './Approach';
import About from './About';
import Cards from './Cards';
const Hero = () => {
  return (
    <div className=''>
    <div  data-scroll data-scroll-section data-scroll-speed="-.3"  className='min-h-screen box-border pt-16 md:pt-20 px-4 '>
    <div className=''>
      <div className='max-w-[1080px] mx-auto overflow-hidden pb-9'>          
          <motion.h1 
            initial={{ x: "100%" }} 
            animate={{ x: "-100%" }} 
            transition={{ ease: "linear", duration: 10, repeat: Infinity }}
            className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap font-["Neue_Montreal"]'
          >
            "Discover What's Happening Now"
          </motion.h1>
        </div>
        
        <div>
        <span className='block font-bold text-3xl sm:text-4xl md:text-5xl text-red-600 animate-pulse lg:pt-8'>
          Find Your Next Adventure
        </span>

        <p className='font-medium tracking-wide text-base sm:text-lg md:text-xl max-w-2xl mx-auto pt-2'>
          Never miss out on what your city has to offer – discover, plan, and create memories that last a lifetime.
        </p>
        </div>
        <div className='lg:mt-32  border-t-2 border-red-500'></div>

        <div className=''>
        <ul className='flex flex-col sm:flex-row justify-between gap-4 py-6 px-4 md:px-9 text-base md:text-xl font-medium italic'>
          <li className='text-center sm:text-left'>"Curated Local Experiences"</li>
          <li className='text-center sm:text-left'>Real-time Updates</li>
          <li className='text-center sm:text-left'>Personalized Discovery</li>
        </ul>
      </div>

        </div>
      
      </div>

       <Approach title="PACK YOUR BAGS" />
       <About/>
       <Cards/>
      </div>
    
  );
};

export default Hero;