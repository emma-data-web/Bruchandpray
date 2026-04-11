import Computer from "../../assets/computer.png";

const Download = () => {
  return (
    <div className="px-6 py-20 bg-[#00A5BC]">
      <div className="max-w-6xl mx-auto bg-[#6A2B73] lg:rounded-[60px] rounded-2xl p-10 md:p-24 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">
        {/* Abstract Background Circle */}
        <div className="absolute top-[-50%] right-[-10%] w-[400px] h-[400px] bg-[#B21E29] rounded-full blur-[100px] opacity-20" />
        
        <div className="md:w-1/2 relative z-10">
          <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl text-white leading-tight">
            Get Your Free <span className="text-[#F39221]">Affirmations</span> Guide
          </h2>
          <p className="text-white/60 mt-6 text-lg">
            13 pages of biblical truth to help you renew your mind and see yourself through God's eyes.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white/10 border border-white/20 px-8 py-4 rounded-full text-white w-full outline-none focus:border-[#00A5BC]"
            />
            <button className="bg-white text-[#2e2c2b] px-10 py-4 rounded-full font-bold whitespace-nowrap hover:bg-[#B21E29] hover:text-white transition-all">
              DOWNLOAD NOW
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 relative z-10 flex justify-center">
          <img src={Computer} className="lg:w-[80%] w-full drop-shadow-2xl animate-float" />
        </div>
      </div>
    </div>
  );
};

export default Download;
