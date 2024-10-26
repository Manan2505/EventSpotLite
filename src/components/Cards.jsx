import React,{useState} from 'react'
import { events } from './data/events'
import Card from './Card'
const Cards = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div data-scroll-container data-scroll data-scroll-section data-scroll-speed="0.4" className='bg-stone-400'>
      <h1 className='font-["Neue_Montreal"] text-6xl italic'>ALL  EVENTS</h1>
      <div>
      <input 
        type="text" 
        placeholder="Search by event name or location..." 
        className="w-[60%] mx-auto mb-4 p-2 rounded-lg border border-gray-300 sticky"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
    
    <div className='flex justify-evenly flex-wrap'>
        {
        filteredEvents.map((event)=>{
          return <Card {...event}/>
        })
      }
      </div>
    </div>
  )
}

export default Cards
