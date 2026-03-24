// import React from 'react';
import In1 from "../../assets/in1.png";
import In2 from "../../assets/in2.png";
import In3 from "../../assets/in3.png";
import In4 from "../../assets/in4.png";
import In5 from "../../assets/in5.png";

const Instagram = () => {
  const images = [In1, In2, In3, In4, In5];

  return (
    <div className='relative pt-32 pb-20 flex flex-col justify-center items-center px-5 overflow-hidden'>
      {/* BACKGROUND TEXT - Large & Subtle */}
      <h1 className='absolute top-20 text-[10rem] md:text-[18rem] lg:text-[22rem] text-[#2e2c2b] opacity-[0.03] select-none leading-none'>
        SOCIALS
      </h1>

      <div className='relative z-10 text-center mb-12'>
        <p className='text-[#d84136] font-bold lg:tracking-[0.4em] tracking-[0.1em] text-sm md:text-base uppercase pb-2'>
          Follow the Journey
        </p>
        <h2 className='text-3xl lg:text-5xl text-[#2e2c2b] font-semibold leading-tight'>
          @BRUNCHANDPRAY
        </h2>
      </div>

      {/* IMAGE GRID - Staggered & Overlapping */}
      <div className='flex flex-wrap justify-center gap-4 lg:gap-8 max-w-7xl mx-auto'>
        {images.map((img, index) => (
          <div 
            key={index} 
            className={`
              relative group cursor-pointer overflow-hidden rounded-full shadow-xl transition-all duration-500 hover:-translate-y-4
              w-[140px] h-[140px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px]
              ${index % 2 === 0 ? 'mt-0' : 'mt-8 lg:mt-12'}
              ${index > 2 ? 'hidden md:block' : ''}
            `}
          >
            {/* Hover Overlay */}
            <div className='absolute inset-0 bg-[#d84136]/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center'>
              <span className='text-white font-bold tracking-widest text-xs uppercase border border-white p-2'>
                View Post
              </span>
            </div>
            
            <img 
              src={img} 
              className='w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110' 
              alt={`Instagram post ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* VIEW ALL BUTTON */}
      <a 
        href="https://instagram.com/brunchandpray" 
        target="_blank" 
        rel="noopener noreferrer"
        className='mt-20 border-b-2 border-[#d84136] text-[#2e2c2b] font-bold lg:tracking-[0.3em] pb-1 hover:text-[#d84136] transition-colors uppercase lg:text-sm text-xs'
      >
        View Instagram Gallery
      </a>
    </div>
  );
};

export default Instagram;