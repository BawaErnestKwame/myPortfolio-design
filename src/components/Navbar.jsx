import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='bg-gray-300 flex px-4 md:px-8 lg:px-24 p-4 h-20 items-center justify-between '>
      {/* logo */}
      <div className="">
        <img src={logo} alt="" className='w-20' />

      </div>

      {/* navlinks */}
      <ul className='flex gap-4 items-center'>
  <li>
    <NavLink to="/">Home</NavLink>
  </li>
  <li>
    <NavLink to="/about">About</NavLink>
  </li>
  <li>
    <NavLink to="/services">Services</NavLink>
  </li>
  <li>
    <NavLink to="/contact">Contact</NavLink>
  </li>
</ul>


      {/* contact */}

      <div className="">
        <button>
          Find Me
        </button>
      </div>
    </div>
  )
}

export default Navbar