import React from 'react'
import image from '../assets/main-image.svg'
import blur from '../assets/blur-circle.svg'

const AboutMe = ({ title }) => {
  return (
    <section className='py-12 md:py-16 lg:py-20'>
      <div className='container px-4 md:px-8 lg:px-24'>
        <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-16'>
          
          {/* Left Side - Image */}
          <div className="flex-shrink-0 w-full lg:w-1/2 relative transition-shadow duration-300">

          {/* blur bg-color */}
          <img src={blur} alt="" className="absolute top-0 -left-30 w-50 h-50 object-cover opacity-20" />

            <img 
              src={image} 
              alt="Bawa Ernest" 
              className='w-full h-auto rounded-lg transform transition-transform duration-500 hover:scale-105'
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full space-y-6">
            <h1 className='bg-gradient-to-r from-[#7D0571] via-[#FA7F05] to-[#FA7F05] bg-clip-text text-transparent font-bold text-4xl md:text-5xl lg:text-6xl leading-tight animate-gradient-x'>
              {title}
            </h1>
            
            <p className='text-base md:text-lg leading-relaxed text-gray-700'>
              I'm Bawa Ernest, a multidisciplinary creative with expertise in UI/UX design, frontend development, graphic design, and data analysis. My work blends modern interface design with functional and responsive code. I love turning ideas into polished digital products, backed by data-driven decisions and clean visual design. I'm constantly improving my skills and exploring new technologies to build meaningful user experiences.
            </p>

            <button className='mt-4 px-6 py-3 bg-gradient-to-r from-[#7D0571] via-[#FA7F05] to-[#FA7F05] text-white font-semibold rounded-lg hover:opacity-90 hover:scale-105 transition-transform duration-300'>
              Connect With Me
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutMe
