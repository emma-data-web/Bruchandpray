import React from 'react';
import In1 from "../../assets/in1.png"
import In2 from "../../assets/in2.png"
import In3 from "../../assets/in3.png"
import In4 from "../../assets/in4.png"
import In5 from "../../assets/in5.png"

const Instagram = () => {
  return (
    <div className='pt-20 flex flex-col justify-center items-center px-5 lg:px-0'>
      <p className='text-[#d84136] text-xl pb-10'>FOLLOW: @SHESPEAKSFIRECO</p>
      <h1 className='text-7xl lg:text-9xl'>INSTAGRAM</h1>

      <div className='flex gap-4 lg:gap-10 -translate-y-10 lg:-translate-y-15 opacity-80'>
        <img src={In1} className='w-[9rem] md:w-[10rem] lg:w-[12rem] h-[9rem] md:h-[10rem] lg:h-[12rem]' />
        <img src={In2} className='w-[9rem] md:w-[10rem] lg:w-[12rem] h-[9rem] md:h-[10rem] lg:h-[12rem]'  />
        <img src={In3} className='w-[9rem] md:w-[10rem] lg:w-[12rem] h-[9rem] md:h-[10rem] lg:h-[12rem]'  />
        <img src={In4} className='w-[9rem] md:w-[10rem] lg:w-[12rem] h-[9rem] md:h-[10rem] lg:h-[12rem] hidden md:block'  />
        <img src={In5} className='w-[9rem] md:w-[10rem] lg:w-[12rem] h-[9rem] md:h-[10rem] lg:h-[12rem] hidden md:block'  />
      </div>
    
    </div>
  )
}

export default Instagram
