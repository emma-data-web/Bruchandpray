import React from "react";
import Computer from "../../assets/computer.png";
import Angela from "../../assets/angela.png";
import Bible from "../../assets/bible.png";

const Download = () => {
  return (
    <div className="pt-20 px-5 md:px-0">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center text-[#d84136] translate-y-5 md:translate-y-15">
          <h1 className="text-6xl md:text-8xl">FREE</h1>
          <h1 className="text-6xl md:text-8xl">DOWNLOAD</h1>
        </div>

        <img src={Computer} className="w-[85%] md:w-[65%] h-[20rem] md:h-[30rem] object-cover" />

        <div className="pt-15 flex flex-col items-center justify-center space-y-5 text-[#2e2c35]">
          <h1 className="text-xl ">30 BIBLICAL AFFIRMATIONS</h1>
          <p className="lg:w-[50rem] md:w-[30rem] text-center">
            Grab your 13 page guide and renew your mind to the truth of God's
            word through biblical affirmations. Learn to see yourself the way
            God does so you can live an empowered life and activate your
            God-given purpose.
          </p>
          <button className="bg-[#d84136] py-3 w-60 rounded-lg text-white text-sm mb-20">
            DOWNLOAD NOW
          </button>
        </div>
      </div>

      <div className="relative pt-20 flex items-center justify-center pb-20">
        <img
          src={Angela}
          className="absolute top-0 right-0 lg:right-[8rem] h-[10rem] md:h-[10rem] lg:h-[15rem] w-[50%] md:w-[30%] lg:w-[20%] object-cover rounded-lg z-0 opacity-80"
        />

        <p className='font-["Playfair Display"] text-3xl md:text-4xl lg:text-5xl text-center lg:max-w-[70%] text-[#2e2c2b] leading-snug z-10 relative'>
          "The Atmosphere Completely Shifted As She Allowed The Holy Spirit To
          Use Her And Resonate In The Hearts Of Every Woman"
        </p>

        <img
          src={Bible}
          className="absolute bottom-15 left-0 lg:left-[8rem] h-[7rem] w-[40%] md:w-[20%] lg:w-[13%] object-cover rounded-2xl z-0 opacity-80"
        />

        <p className="absolute bottom-7 text-lg md:text-xl text-[#2e2c2b] text-center">— ANGELA, FOUNDER OF SHE.IS</p>
      </div>
    </div>
  );
};

export default Download;
