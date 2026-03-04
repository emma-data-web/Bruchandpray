import React from "react";
import Img1 from "../../assets/img1.png";
import Img2 from "../../assets/img2.png";

const Mariela = () => {
  return (
    <div className="text-[#2e2c2b] px-5 md:px-0">
      <div className="pt-30 pb-50 relative">
        <div className="flex flex-col justify-center items-center relative">
          <p className="text-5xl md:text-7xl absolute bottom-[5rem] md:bottom-10 md:top-0 ml-40 lg:ml-0 md:right-0 lg:right-[9rem]">MEET</p>
          <h1 className="font-['Playfair Display'] tracking-wider text-7xl md:text-[140px] lg:text-[200px] md:mt-15">
            COMFORT
          </h1>
        </div>

        <div className="flex items-center justify-center absolute top-0 right-10 md:right-[6rem] lg:right-[20rem] lg:ml-0 ml-20">
          <img src={Img2} className="w-[100%] md:w-[50%] lg:w-[70%] h-[25rem] md:h-[25rem] lg:h-[35rem] opacity-80" />
          <img
            src={Img1}
            className="md:w-65 h-[10rem] md:h-[20rem] lg:h-[28rem] object-cover -translate-x-10 opacity-80"
          />
        </div>

        <div>
          <h1 className="text-xl md:text-3xl lg:text-5xl absolute top-[23rem] lg:top-[25rem] md:left-[2rem] lg:left-[5rem]">
            AUTHOR, COACH,
            <br /> PREACHER AND
            <br /> SPOKEN WORD
            <br /> ARTIST
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-10 md:mt-0 space-y-5 py-20">
        <h1 className="text-xl">WHAT'S UP? I'M COMFORT</h1>
        <p className="lg:w-[40%] md:w-[60%] text-center">
          I'm an author, coach, preacher and spoken word artist who is dedicated
          to helping you be the best version of yourself and walk in your
          God-given purpose.
        </p>
        <button className="bg-[#d84136] w-[50%] md:w-[15%] rounded-xl py-3">MEET ME</button>
      </div>
    </div>
  );
};

export default Mariela;
