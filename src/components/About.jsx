import React from 'react'
import Approach from './Approach'
import {motion} from 'framer-motion'
const About = () => {
  return (
    <div  data-scroll data-scroll-section data-scroll-speed="-.2" className='rounded-3xl bg-[#e3e7d6]'>
      <div className='font-bold lg:text-5xl text-3xl'>
      Dive into a world of endless possibilities with EventSpot Lite. From electrifying concerts to intimate art galleries.
      </div>
      <div className='w-full h-1 bg-gray-600 mt-20'></div>
      <div className='flex lg:flex-row flex-col gap-9 justify-evenly mx-20 items-center'>
        <div className='font-["Neue_Montreal"] text-xl'>
        What you can expect:
        </div>
        <div className='flex flex-col gap-10 lg:max-w-[30%] font-["Neue_Montreal"] text-xl'>
            <p>
            We provide detailed event information with rich media content.Direct connection with event organizers.</p>
            <p className='hidden lg:block'>We provide perfect event locations with just few simple taps.Also provide transparent pricing and availability deals.</p>
        </div>
      </div>

      <div className='w-full h-1 bg-gray-600 mt-20'></div>
        <div className='flex lg:flex-row flex-col items-center justify-between mx-32'>
            <div className='font-bold lg:text-5xl text-3xl'>
                Our approach:
            </div>

            <div className=''>
              <iframe src="https://www.youtube.com/embed/aHomAnMezME?autoplay=1&mute=1&controls=0" width="560" height="315" frameborder="0" className='hidden lg:block my-28'></iframe>
                <img src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/3.jpg" className='py-20 inline-block lg:hidden h-auto w-full' alt="" />
            </div>
        </div>
    </div>
  )
}

export default About
