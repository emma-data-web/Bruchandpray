const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 bg-[linear-gradient(135deg,#f8efe9_0%,#f6ddd5_45%,#fbeee8_100%)] flex flex-col items-center overflow-hidden bg-[#e8d5c4]">
      {/* Floating Pill Badges */}
      {/* <div className="absolute top-[7%] left-[7%] bg-gray-200 backdrop-blur-md border border-white/60 px-6 py-2 rounded-full text-xs tracking-[0.3em] font-bold animate-bounce-slow">
        SISTERHOOD
      </div> */}
      {/* <div className="absolute top-[25%] right-[20%] bg-[#d84136] text-white px-6 py-2 rounded-full text-xs tracking-[0.3em] font-bold lg:flex hidden">
        PRAYER MOVEMENT
      </div> */}


      <div className="text-center w-full z-10">
        <h1 className="uppercase font-[400] lg:text-9xl text-4xl tracking-wide text-[#2e2c2b] lg:leading-32 mb-6 lg:mt-0 mt-6 font-[Dancing_Script]">
          Brunch & Pray
        </h1>
        <p className="max-w-xl mx-auto text-lg text-[#2e2c2b]/70 tracking-wide leading-relaxed">
          A gospel-centered movement where we break bread, share stories, and ignite the fire of purpose through the power of prayer.
        </p>
        
        <div className="mt-10 flex gap-4 justify-center lg:flex-row flex-col">
          <button className="bg-[#2e2c2b] text-white px-10 py-4 rounded-full tracking-widest hover:bg-[#d84136] transition-all">
            JOIN THE TABLE
          </button>
          <button className="border border-gray-100 text-[#2e2c2b] px-10 py-4 rounded-full tracking-widest hover:bg-white/50 transition-all bg-white">
            OUR MISSION
          </button>
        </div>
      </div>


      {/* The Central Arch Image (Quran.co Style) */}
      <div className="mt-20 relative w-full max-w-5xl h-[500px] overflow-hidden lg:rounded-0 rounded-t-[200px] rounded-4xl shadow-2xl border-x-[16px] border-[16px] border-white/30">
        <img src="/people.jpeg" className="w-full h-full object-cover grayscale-[10%] brightness-90" />
      </div>
    </section>
  );
};


export default Hero;