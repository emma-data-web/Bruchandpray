import { useState } from "react";
import founderImg from "../../../src/assets/founder-pic.jpeg";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const eventsData = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: `Brunch & Pray Event ${i + 1}`,
  description:
    "A powerful gathering of women in worship, prayer, and fellowship. The atmosphere was filled with healing, joy, and divine encounters.",
  images: [founderImg, founderImg, founderImg, founderImg],
  video: "https://www.instagram.com/p/BqstxS5FmX6/embed",
}));

const PastEventsAccordion = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
    <Nav/>
    <section className="w-full bg-white py-20 px-6 md:px-16">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-10 mt-20">
        <h2 className="text-3xl md:text-5xl font-semibold text-[#111]">
          Past <span className="text-[#F39221] italic">Events</span>
        </h2>
        <p className="text-sm text-[#333] mt-2">
          Click an event to explore moments, memories, and encounters.
        </p>
      </div>

      {/* ACCORDION LIST */}
      <div className="max-w-6xl mx-auto space-y-4">
        {eventsData.map((event) => {
          const isOpen = openId === event.id;

          return (
            <div
              key={event.id}
              className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
            >
              {/* HEADER */}
              <button
                onClick={() => toggle(event.id)}
                className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[#F39221] font-bold text-lg">
                    {event.id}
                  </span>

                  <h3 className="text-[#111] font-semibold text-base md:text-lg">
                    {event.title}
                  </h3>
                </div>

                <span className="text-[#F39221] text-xl">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {/* EXPANDED CONTENT */}
              <div
                className={`grid md:grid-cols-12 gap-6 px-5 pb-6 transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "max-h-[2000px] opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {/* LEFT NUMBER COLUMN */}
                <div className="md:col-span-1 flex md:flex-col gap-3 md:gap-2 text-center">
                  {eventsData.map((e) => (
                    <span
                      key={e.id}
                      className={`text-sm font-bold ${
                        e.id === event.id
                          ? "text-[#F39221] scale-125"
                          : "text-black/30"
                      }`}
                      style={{ fontFamily: "cursive" }}
                    >
                      {e.id}
                    </span>
                  ))}
                </div>

                {/* CENTER CONTENT */}
                <div className="md:col-span-7">
                  <p className="text-sm text-[#444] leading-relaxed mb-4">
                    {event.description}
                  </p>

                  {/* IMAGES */}
                  <div className="grid grid-cols-2 gap-3">
                    {event.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt=""
                        className="h-28 md:h-32 w-full object-cover rounded-lg hover:scale-105 transition"
                      />
                    ))}
                  </div>
                </div>

                {/* RIGHT VIDEO */}
                <div className="md:col-span-4">
                  <div className="text-[#F39221] text-xs tracking-[0.2em] mb-2">
                    INSTAGRAM HIGHLIGHT
                  </div>

                  <div className="rounded-xl overflow-hidden h-64 md:h-full min-h-[250px]">
                    <iframe
                      src={event.video}
                      className="w-full h-full border-0"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
    <Footer/>
    </>
  );

};

export default PastEventsAccordion;