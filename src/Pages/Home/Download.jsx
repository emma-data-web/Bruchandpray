// import React from "react";
import Computer from "../../assets/computer.png";
import Angela from "../../assets/angela.png";
import Bible from "../../assets/bible.png";

const Download = () => {
  return (
    <div className="bg-[#dcd3ca] py-24 px-6 overflow-hidden">
      {/* HEADER STACK */}
      <div className="relative flex flex-col items-center">
        <div className="z-20 text-center pointer-events-none">
          <h1 className="lg:text-5xl text-[#d84136] font-bold">FREE</h1>
          <h1 className="lg:text-5xl text-[#2e2c2b] ml-10 font-bold">DOWNLOAD</h1>
        </div>

        <div className="z-10 w-full max-w-4xl transform hover:scale-[1.02] transition-transform duration-500">
          <img 
            src={Computer} 
            className="w-full h-[400px] md:h-[600px] object-cover shadow-2xl rounded-sm border-8 border-white/20" 
            alt="Guide Mockup"
          />
        </div>

        {/* CONTENT CARD */}
        <div className="mt-16 text-center max-w-2xl bg-white/30 backdrop-blur-sm p-10 rounded-lg shadow-sm border border-white/40">
          <h3 className="text-3xl md:text-4xl text-[#2e2c2b] mb-4 tracking-wider">
            30 BIBLICAL AFFIRMATIONS
          </h3>
          <p className="text-lg text-[#2e2c2b] mb-8 leading-relaxed">
            Grab your 13-page guide and renew your mind to the truth of God&apos;s
            word. Learn to see yourself the way God does so you can live an 
            empowered life and activate your purpose.
          </p>
          <button className="bg-[#d84136] hover:bg-[#b0342b] text-white px-12 py-4 font-bold tracking-[0.2em] rounded-full transition-all shadow-lg uppercase">
            Get the Guide
          </button>
        </div>
      </div>

      {/* TESTIMONIAL PULL-QUOTE */}
      <div className="relative mt-20 max-w-5xl mx-auto py-20 flex flex-col items-center">
        {/* Floating Accent Images */}
        <img src={Angela} className="absolute -top-10 right-0 w-32 md:w-48 h-32 md:h-48 rounded-full object-cover grayscale opacity-40 -rotate-12" />
        <img src={Bible} className="absolute -bottom-10 left-0 w-24 md:w-40 h-24 md:h-40 rounded-lg object-cover opacity-30 rotate-12" />

        <div className="relative z-10 text-center px-4">
          <span className="text-6xl font-serif text-[#d84136] opacity-50 block mb-4">“</span>
          <p className='font-["Playfair_Display"] italic text-2xl md:text-4xl lg:text-5xl text-[#2e2c2b] leading-tight max-w-4xl mx-auto'>
            The atmosphere completely shifted as she allowed the Holy Spirit to
            use her and resonate in the hearts of every woman.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-[#d84136]"></div>
            <p className="text-xl tracking-widest text-[#2e2c2b]">
              ANGELA, FOUNDER OF BRUNCH AND PRAY
            </p>
            <div className="h-[1px] w-12 bg-[#d84136]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;