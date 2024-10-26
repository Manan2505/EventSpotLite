import React from 'react'

const Navbar = () => {
  return (
    <div className='mx-9 flex justify-between'>
      <div>
        <img src="https://pnghq.com/wp-content/uploads/spot-logo-png-transparent-svg-vector-png-photo-2048x2048.png" alt="" width="80px" />
      </div>
      <ul className='flex gap-7 items-center text-lg font-medium'>
        <li>Our work</li>
        <li>About us</li>
        <li>Insights</li>
      </ul>
    </div>
  )
}

export default Navbar
