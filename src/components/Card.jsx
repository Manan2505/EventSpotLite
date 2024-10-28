import { desc, div } from 'framer-motion/client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';
import Details from './Details';

const Card = ({ id, name, description, image, date, location }) => {
  return (
    <div className='inline-block w-[90%] md:w-[70%] lg:w-[45%] xl:w-[30%] h-auto rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-gray-300 hover:scale-95 m-4 p-4'>
      <div className="relative w-full pt-[56.25%]">
        <img
          src={image}
          alt={name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h1 className='text-xl md:text-2xl font-bold mb-2'>{name}</h1>

        <div className="flex items-center space-x-2 text-sm md:text-base px-2 py-1">
          <Calendar size={18} />
          <span>{date}</span>
        </div>

        <div className="flex items-center space-x-2 text-sm md:text-base px-2 py-1">
          <MapPin size={18} />
          <span>{location}</span>
        </div>

        <p className="text-sm md:text-base mt-2">{description}</p>
      </div>

      <div className="px-4">
        <Link to={`event/${id}`}>
          <button 
            onClick={() => window.scroll(0, 0)} 
            className='w-full bg-blue-600 text-white py-2 px-6 rounded-xl hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold mt-4'
          >
            More Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
