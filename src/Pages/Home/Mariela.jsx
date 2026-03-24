// import React from "react";
// import Img1 from "../../assets/img1.png";
import Img2 from "../../assets/img2.png";

const Mariela = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Modern Image Frame */}
        <div className="relative group">
          <div className="absolute -inset-4 border border-[#d84136]/30 lg:rounded-[60px] rounded-2xl group-hover:inset-0 transition-all duration-500" />
          <img 
            src="./founder.jpeg" 
            className="lg:rounded-[60px] rounded-2xl w-full h-[600px] object-cover shadow-2xl relative z-10" 
          />
        </div>

        <div>
          <span className="text-[#d84136] font-bold tracking-[0.4em] uppercase text-sm">Founder</span>
          <h2 className="font-['Playfair_Display'] text-6xl md:text-8xl text-[#2e2c2b] mt-4 mb-8 leading-tight">
            Meet Comfort Azubike
          </h2>
          <div className="space-y-6 text-[#2e2c2b]/80 text-lg leading-relaxed">
            <p>I am dedicated to helping you be the best version of yourself and walk in your God-given purpose.</p>
            <p className="italic border-l-4 border-[#d84136] pl-6 font-serif">
              &quot;When women gather to pray, the atmosphere shifts and purpose is ignited.&quot;
            </p>
          </div>
          <button className="mt-12 bg-[#2e2c2b] hover:bg-[#d84136] text-white px-12 py-4 rounded-full transition-all flex items-center gap-4 group">
            LEARN MORE <span className="group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Mariela;
