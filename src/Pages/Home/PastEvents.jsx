import past1 from "../../../src/assets/mission2.jpeg";
import past2 from "../../../src/assets/mission1.jpeg";
import past3 from "../../../src/assets/mission3.jpeg";
import past4 from "../../../src/assets/mission4.jpeg";

const pastEvents = [
  {
    img: past1,
    date: "JAN 2025",
    title: "Women in Prayer Night",
  },
  {
    img: past2,
    date: "DEC 2024",
    title: "Sisterhood Brunch Gathering",
  },
  {
    img: past3,
    date: "OCT 2024",
    title: "Faith & Identity Workshop",
  },
  {
    img: past4,
    date: "AUG 2024",
    title: "Worship & Healing Experience",
  },
];

const PastEvents = () => {
  return (
    <section
      className="
      w-full
      bg-white

      py-16
      md:py-20

      px-6
      md:px-16

      flex
      items-center
    "
    >

      <div
        className="
        max-w-[1300px]
        mx-auto

        flex
        flex-col
        lg:flex-row

        gap-12

        items-center

        w-full
      "
      >

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">

          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A]">
            Past{" "}
            <span className="text-[#F39221] italic">Events</span>
          </h2>

          <p className="text-[#444] text-sm md:text-base mt-2 mb-6">
            A reflection of what God has done through our sisterhood.
          </p>

          {/* EVENTS GRID */}
          <div className="grid grid-cols-2 gap-4">

            {pastEvents.slice(0, 2).map((event, i) => (
              <div
                key={i}
                className="bg-[#F7F7F7] rounded-xl overflow-hidden shadow-sm"
              >

                <div className="relative aspect-square">

                  <img
                    src={event.img}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-2 left-2 bg-black text-white text-[9px] px-2 py-1 rounded-full tracking-widest">
                    {event.date}
                  </div>

                </div>

                <div className="p-3">

                  <h3 className="text-[12px] font-semibold text-[#1A1A1A] leading-[1.5]">
                    {event.title}
                  </h3>

                </div>

              </div>
            ))}

          </div>

          {/* BUTTON */}
          <div className="mt-6">

            <button className="bg-[#F39221] text-white px-6 py-3 rounded-full uppercase text-[11px] tracking-[0.2em] hover:opacity-90 transition">
              View All Past Events
            </button>

          </div>

        </div>

        {/* RIGHT SIDE - INSTAGRAM VIDEO */}
        <div className="w-full lg:w-1/2 flex justify-center">

          <div className="relative w-full sm:w-[85%] h-[55vh] md:h-[70vh] rounded-3xl overflow-hidden bg-black flex flex-col">

            {/* INSTAGRAM IFRAME */}
            <iframe
              src="https://www.instagram.com/p/BqstxS5FmX6/embed"
              className="w-full h-full border-0"
              allowFullScreen
              scrolling="no"
              title="Instagram Video"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

          </div>

        </div>

      </div>

    </section>
  );
};

export default PastEvents;