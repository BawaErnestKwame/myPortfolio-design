import React from 'react'
import { Phone, Mail } from 'lucide-react'
import logo from '../assets/logo.png'


const Navbar = () => {
  return (
    <div className='bg-gradient-to-r from-gray-100 to-gray-200 flex px-4 md:px-8 lg:px-24 py-4 h-20 items-center justify-between shadow-md'>
      {/* logo */}
      <div className="flex-shrink-0">
        <div className='w-20 h-12  flex items-center justify-center text-white font-bold'>
          <img src={logo} alt="" />
        </div>
      </div>

      {/* navlinks */}
      <nav className='hidden md:flex'>
        <ul className='flex gap-8 items-center'>
          <li>
            <a
              href="/" 
              className='text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200'
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="/about"
              className='text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200'
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="/services"
              className='text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200'
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="/contact"
              className='text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200'
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* contact info and button */}
      <div className="hidden lg:flex items-center gap-6">
        {/* Find Me button */}
        <button className='bg-gradient-to-r from-[#7D0571] to-[#FA7F05]  text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg'>
          Find Me
        </button>

        {/* Contact details */}
        <div className='flex flex-col gap-1 text-sm'>
          <div className='flex items-center gap-2 text-gray-700'>
            <Mail size={16} className='text-blue-600' />
            <span className='font-medium'>bawaernest926@gmail.com</span>
          </div>
          <div className='flex items-center gap-2 text-gray-700'>
            <Phone size={16} className='text-blue-600' />
            <span className='font-semibold'>+233 599 316 218</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar