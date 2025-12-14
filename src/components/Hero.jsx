import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import hero from '../assets/heroimg.png';

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-24 py-6 md:h-[80vh] md:py-24 gap-8 dark:bg-gray-900 bg-gray-300">
      
      {/* Left Text Section */}
      <div className="flex-1 flex flex-col gap-4">
      
        <div className="">
          <h2 className="text-xl ml-8 mb-1 md:text-2xl text-gray-600 dark:text-white font-bold">HI, I'M</h2>
          <div className="flex items-center gap-4">
          {/* Decorative Line */}
          <span className="w-1 md:w-2 h-14 md:h-20 bg-gradient-to-b from-[#7D0571] to-[#FA7F05] rounded"></span>
          
          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#7D0571] to-[#FA7F05] bg-clip-text text-transparent">
            BAWA ERNEST KWAME
          </h1>
        </div>
        </div>

        <p className="text-gray-800 dark:text-gray-300 md:text-lg max-w-xl leading-relaxed">
          <span className='dark:text-white font-bold text-gray-600'>Web Developer | Ui/Ux Designer | Graphic Designer.</span><br />
          I’m a dedicated developer with a strong interest in creating responsive and intuitive web applications. I love solving problems, learning new technologies, and turning creative ideas into functional products.
        </p>

        <div className="flex flex-wrap gap-4 mt-4">
          <button className="bg-gradient-to-r from-[#7D0571] to-[#FA7F05] text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-shadow duration-200 hover:shadow-lg">
            <DownloadIcon className="inline-block mr-2" />
            Download CV
          </button>
          <button className="bg-gradient-to-r from-[#7D0571] to-[#FA7F05] text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-shadow duration-200 hover:shadow-lg">
            <ArrowRightIcon className="inline-block " />
            Hire Me
          </button>
        </div>
      </div>

      {/* Right Image Section */}
     <div className="flex-1 flex justify-center md:justify-end relative">
  {/* Gradient shadow behind image */}
  <div className="absolute inset-0 md:inset-x-60 w-80 h-80 inset-y-22 bg-gradient-to-tr from-[#7D0571] to-[#FA7F05] rounded-full blur-3xl opacity-50 z-0"></div>

  {/* Hero image */}
  <img
    src={hero}
    alt="Hero"
    className="relative w-full heroimage max-w-[300px] md:max-w-md object-contain z-10"
  />
</div>

      
    </section>
  );
};

export default Hero;
