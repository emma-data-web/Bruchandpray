import event1 from "../../../src/assets/mission1.jpeg";
import event2 from "../../../src/assets/mission2.jpeg";
import event3 from "../../../src/assets/mission3.jpeg";
import event4 from "../../../src/assets/mission4.jpeg";

import { Link } from "react-router-dom";

const events = [
  {
    img: event1,
    date: "12 JAN",
    title: "Prayer & Brunch Gathering",
  },
  {
    img: event2,
    date: "25 FEB",
    title: "Worship Night Experience",
  },
  {
    img: event3,
    date: "14 MAR",
    title: "Sisterhood Empowerment Talk",
  },
  {
    img: event4,
    date: "30 APR",
    title: "Faith & Purpose Retreat",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-16">

      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-10 items-start">

        {/* LEFT - EVENTS GRID */}
        <div className="flex-1 w-full">

          <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A] mb-10">
            Upcoming{" "}
            <span className="text-[#F39221] italic">
              Events
            </span>
          </h2>

          {/* EVENTS ROW */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {events.map((event, i) => (
              <div
                key={i}
                className="
                group

                bg-[#F3F3F3]
                sm:bg-transparent

                rounded-2xl

                p-4
                sm:p-0
              "
              >

                {/* IMAGE BOX */}
                <div
                  className="
                  relative

                  w-full

                  h-[220px]
                  sm:aspect-square

                  overflow-hidden
                  rounded-2xl
                  shadow-md
                "
                >

                  <img
                    src={event.img}
                    alt={event.title}
                    className="
                    w-full
                    h-full
                    object-cover

                    scale-[0.92]
                    sm:scale-100

                    group-hover:scale-105
                    transition
                    duration-500
                  "
                  />

                  {/* DATE BADGE */}
                  <div
                    className="
                    absolute
                    top-3
                    left-3

                    bg-black
                    text-white

                    text-[10px]

                    px-3
                    py-1

                    rounded-full

                    tracking-[0.2em]
                  "
                  >
                    {event.date}
                  </div>

                </div>

                {/* TITLE */}
                <h3
                  className="
                  mt-5

                  text-[#1A1A1A]

                  font-bold

                  text-[1rem]
                  sm:text-sm

                  leading-[1.5]
                "
                >
                  {event.title}
                </h3>

                {/* LINK */}
                <Link
                  to="/events"
                  className="
                  mt-3

                  inline-flex
                  items-center
                  gap-2

                  text-[#F39221]

                  text-[0.9rem]
                  sm:text-xs

                  font-semibold

                  tracking-[0.08em]
                  uppercase

                  hover:gap-3
                  transition
                "
                >
                  Get Ticket <span>→</span>
                </Link>

              </div>
            ))}

          </div>

        </div>

        {/* RIGHT - CTA PANEL */}
        <div className="w-full lg:w-[260px] flex flex-col gap-6">

          <div className="bg-[#FFF3E6] p-6 rounded-2xl border border-[#F39221]/20">

            <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">
              Be part of the{" "}
              <span className="text-[#F39221] italic">
                sisterhood
              </span>
            </h3>

            <p className="text-[#444] text-sm leading-[1.6]">
              Join our gatherings and experience a community
              of faith, growth, and connection.
            </p>

          </div>

          <Link to="/events">

            <button
              className="
              w-full

              bg-[#F39221]
              text-white

              py-3

              rounded-full

              uppercase

              text-[11px]
              tracking-[0.2em]

              hover:opacity-90
              transition
            "
            >
              View All Events
            </button>

          </Link>

        </div>

      </div>

    </section>
  );
};

export default UpcomingEvents;