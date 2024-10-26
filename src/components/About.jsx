import React from 'react'
import Approach from './Approach'

const About = () => {
  return (
    <div data-scroll-container data-scroll data-scroll-section data-scroll-speed="-.4" className='rounded-3xl bg-[#e3e7d6]'>
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
            <div className='font-bold text-5xl pt-20'>
                Our approach:
            </div>

            <div className='rounded-lg'>
                <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" className='py-20 rounded-2xl' alt="" />
            </div>
        </div>
    </div>
  )
}

export default About
