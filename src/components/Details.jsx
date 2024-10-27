import React from 'react'
import { useParams } from 'react-router-dom'
import {events} from './data/events'
import { motion } from 'framer-motion';
const Details = () => {
  const {eventId}=useParams();
  const filterEvent=events.find((e)=>e.id===Number(eventId));
  return (
    <div className='flex lg:flex-row flex-col justify-evenly lg:mt-32 mt-16 gap-10'>
      <div>
        <motion.img initial={{y:"-40%"}} animate={{y:"0"}} transition={{ease:"easeOut",duration:2}} src={filterEvent.image} className='inline-block rounded-lg lg:w-[500px] w-[300px] shadow-2xl'  alt="" />
      </div>

      <motion.div initial={{y:"40%"}} animate={{y:"0"}} transition={{ease:"easeOut",duration:2}} className='lg:max-w-[40%] space-y-6'>
        <h1 className='text-4xl font-bold'>{filterEvent.name}</h1>
        
        <p className='font-["Neue_Montreal"] text-xl'>{filterEvent.name} is Happening at {filterEvent.location} and is being attended by top sharks of the field. It's going to be a wonderful day. The event is happening on {filterEvent.date}. Interested ones can buy the tickets at lower prices only on EventSpotLite.</p>

        <button className='lg:w-full bg-blue-600 text-white py-2 px-6 rounded-xl hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold mt-6'>Buy Tickets</button>
      </motion.div>
    </div>
  )
}

export default Details
