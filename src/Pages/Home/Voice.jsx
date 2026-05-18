const events = [
  { id: 1, day: "MON", date: "12-02-25", title: "Holy Spirit Night", desc: "Uncovering the fire God placed inside you." },
  { id: 2, day: "WED", date: "14-02-25", title: "Youth Revival", desc: "Breaking chains of fear and stepping into purpose." },
  { id: 3, day: "SUN", date: "18-02-25", title: "Sunday Service", desc: "A powerful time of worship and community." },
];
// #F39221;
const Voice = () => {
  return (
    <section className="py-24 bg-[#ffecd6] px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8">
        
        {/* Card 1 - White */}
        <div className="bg-white p-10 rounded-[40px] border border-[#6A2B73]/20 shadow-sm hover:shadow-xl transition-all">
          <h3 className="text-3xl text-[#2e2c2b] mb-4 font-bold">Previous Events</h3>
          <div className="space-y-8">
            {events.map((event) => (
              <div key={event.id} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-fit px-4 h-16 bg-[#B21E29] rounded-2xl flex flex-col items-center justify-center rotate-3 group-hover:rotate-0 transition-transform">
                  <span className="text-[10px] text-white/80 font-bold leading-none">{event.day}</span>
                  <span className="text-white font-bold text-xl whitespace-nowrap">{event.date}</span>
                </div>
                <div className="flex-1 border-b border-[#2e2c2b]/10 pb-4">
                  <h4 className="text-xl text-[#2e2c2b] font-semibold mb-1">{event.title}</h4>
                  <p className="text-[#2e2c2b]/60 text-sm leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Cards - that is the Responsive Row on Large Screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 2 - Purple */}
          <div className="bg-black p-10 rounded-[40px] text-white transform md:scale-105 shadow-2xl">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 -rotate-3 border border-white/20">
              <span className="text-[#F39221] font-bold">02</span>
            </div>
            <h3 className="text-3xl mb-4">Books we love</h3>
            <p className="opacity-70 leading-relaxed">
              Personalized guidance to help you walk in your God-given purpose and lead with authority.
            </p>
          </div>

          {/* Card 3 - Orange */}
          <div className="bg-[#F39221] p-10 rounded-[40px] text-white shadow-sm hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8 rotate-6 border border-white/30">
              <span className="text-white font-bold">03</span>
            </div>
            <h3 className="text-3xl mb-4 font-bold">Upcoming Events</h3>
            <p className="opacity-80 leading-relaxed">
              It's time to get your voice back and step into the room as the woman you were created to be.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Voice;