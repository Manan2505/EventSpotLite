import React from 'react'
import {motion} from 'framer-motion'
const Approach = ({title}) => {
  return (
    <div  data-scroll data-scroll-section data-scroll-speed=".2" className=' bg-[#CDEA68] rounded-3xl min-h-[200px] mt-[-70px]'>
      <h1 className='lg:text-8xl text-5xl font-bold animate-pulse italic font-["Neue_Montreal"]'>{title}</h1>
      </div>
  )
}

export default Approach;
