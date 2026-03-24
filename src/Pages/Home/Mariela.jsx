// import React from "react";
import Img1 from "../../assets/img1.png";
import Img2 from "../../assets/img2.png";

const Mariela = () => {
  return (
    <section className="py-20 bg-[#dcd3ca]">
      <div className="relative h-[500px] md:h-[700px] flex justify-center items-center">
        {/* The "Backdrop" Text */}
        <h1 className="absolute font-['Bebas_Neue'] text-[12rem] md:text-[25rem] text-white/40 leading-none select-none">
          BRUNCH
        </h1>
        
        {/* Floating Images */}
        <div className="relative z-10 flex items-center justify-center w-full">
           <img src={Img2} className="w-[250px] md:w-[450px] shadow-2xl z-10" alt="Comfort 1" />
           <img src={Img1} className="w-[150px] md:w-[250px] absolute -bottom-10 right-[10%] md:right-[25%] shadow-2xl z-20 border-8 border-[#dcd3ca]" alt="Comfort 2" />
        </div>
      </div>

      <div className="max-w-xl mx-auto text-center px-6 mt-20">
        <h3 className="text-4xl mb-4">WHAT&apos;S UP? I&apos;M COMFORT</h3>
        <p className="text-lg leading-relaxed mb-8">
           I&apos;m an author, coach, preacher and spoken word artist who is dedicated to helping you be the best version of yourself and walk in your God-given purpose.
        </p>
        <button className="border-2 border-[#2e2c2b] px-10 py-3 font-bold hover:bg-[#2e2c2b] hover:text-white transition-colors">
          LEARN MORE
        </button>
      </div>
    </section>
  );
};

export default Mariela;
