import past1 from "../../../src/assets/mission2.jpeg";
import past2 from "../../../src/assets/mission1.jpeg";
import past3 from "../../../src/assets/mission3.jpeg";
import past4 from "../../../src/assets/mission4.jpeg";

const pastEvents = [
  { img: past1, date: "JAN 2025", title: "Women in Prayer Night" },
  { img: past2, date: "DEC 2024", title: "Sisterhood Brunch Gathering" },
  { img: past3, date: "OCT 2024", title: "Faith & Identity Workshop" },
  { img: past4, date: "AUG 2024", title: "Worship & Healing Experience" },
];

const PastEvents = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 flex items-center">

      <div className="max-w-[1300px] mx-auto flex gap-10 items-center w-full">

        {/* LEFT - PAST EVENTS (ONLY 2) */}
        <div className="w-1/2 flex flex-col justify-center">

          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A]">
            Past <span className="text-[#8B5E3C] italic">Moments</span>
          </h2>

          <p className="text-[#444] text-sm mt-2 mb-6">
            A reflection of what God has done through our sisterhood.
          </p>

          {/* ONLY 2 EVENTS */}
          <div className="grid grid-cols-2 gap-4">

            {pastEvents.slice(0, 2).map((event, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">

                <div className="relative aspect-square">

                  <img
                    src={event.img}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-2 left-2 bg-black text-white text-[9px] px-2 py-1 rounded-full tracking-widest">
                    {event.date}
                  </div>

                </div>

                <div className="p-2">
                  <h3 className="text-[11px] font-semibold text-[#1A1A1A]">
                    {event.title}
                  </h3>
                </div>

              </div>
            ))}

          </div>

          {/* CTA BUTTON */}
          <div className="mt-6">
            <button className="bg-[#8B5E3C] text-white px-6 py-3 rounded-full uppercase text-[11px] tracking-[0.2em] hover:opacity-90 transition">
              View All Past Events
            </button>
          </div>

        </div>

        {/* RIGHT - REELS (LONGER THAN 50vh) */}
        <div className="w-1/2 flex justify-center">

          <div className="relative w-[85%] h-[70vh] rounded-3xl overflow-hidden shadow-2xl bg-white flex flex-col">

            {/* VIDEO AREA */}
            <div className="flex-1 relative">

              <iframe
                src="PASTE_INSTAGRAM_REEL_LINK_HERE"
                className="w-full h-full object-cover"
                allowFullScreen
              />

              {/* dark aesthetic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-0 h-0 border-l-[10px] border-l-[#8B5E3C] border-y-[7px] border-y-transparent ml-1"></div>
                </div>
              </div>

            </div>

            {/* CAPTION */}
            <div className="p-5 bg-white">

              <p className="text-[#1A1A1A] text-sm leading-relaxed">
                “A glimpse into the heart of our sisterhood — worship, healing,
                laughter, and encounters with God 💛”
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default PastEvents;