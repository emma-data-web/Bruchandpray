const Voice = () => {
  return (
    <section className="py-24 bg-white/30 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="bg-[#dcd3ca] p-10 rounded-[40px] border border-white/50 shadow-sm hover:shadow-xl transition-all">
          <div className="w-16 h-16 bg-[#d84136] rounded-2xl flex items-center justify-center mb-8 rotate-3">
             <span className="text-white font-bold">01</span>
          </div>
          <h3 className="font-['Playfair_Display'] text-3xl text-[#2e2c2b] mb-4">Find Your Voice</h3>
          <p className="text-[#2e2c2b]/60 leading-relaxed">
            Stop being held back by fear or shame. We invite the Holy Spirit in to uncover the fire God placed inside you.
          </p>
        </div>

        {/* Card 2 - Center Focus */}
        <div className="bg-[#2e2c2b] p-10 rounded-[40px] text-[#dcd3ca] transform md:scale-105 shadow-2xl">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 -rotate-3 border border-white/20">
             <span className="text-[#d84136] font-bold">02</span>
          </div>
          <h3 className="font-['Playfair_Display'] text-3xl mb-4">Coaching for the Soul</h3>
          <p className="opacity-70 leading-relaxed">
            Personalized guidance to help you walk in your God-given purpose and lead with authority.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#dcd3ca] p-10 rounded-[40px] border border-white/50 shadow-sm hover:shadow-xl transition-all">
          <div className="w-16 h-16 bg-[#d84136] rounded-2xl flex items-center justify-center mb-8 rotate-6">
             <span className="text-white font-bold">03</span>
          </div>
          <h3 className="font-['Playfair_Display'] text-3xl text-[#2e2c2b] mb-4">Activate Purpose</h3>
          <p className="text-[#2e2c2b]/60 leading-relaxed">
            It’s time to get your voice back and step into the room as the woman you were created to be.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Voice;