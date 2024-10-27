import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='lg:mx-9 mx-2 flex justify-between'>
      <div className=''>
        <Link to="/"><img src="https://pnghq.com/wp-content/uploads/spot-logo-png-transparent-svg-vector-png-photo-2048x2048.png" alt="" width="80px" /></Link>
      </div>
      <ul className='flex gap-7 items-center text-lg font-medium group'>
        <li className='hover:text-red-500 cursor-pointer'>Our work</li>
        <li className='hover:text-red-500 cursor-pointer'>About us</li>
        <li className='hover:text-red-500 cursor-pointer'>Insights</li>
      </ul>
    </div>
  )
}

export default Navbar
