import event1 from "../../../src/assets/mission1.jpeg";
// import { useNavigate } from "react-router-dom";
// import event2 from "../../../src/assets/mission2.jpeg";
// import event3 from "../../../src/assets/mission3.jpeg";
// import event4 from "../../../src/assets/mission4.jpeg";

import { Link } from "react-router-dom";

const events = [
  {
    img: event1,
    date: "12 JAN",
    title: "Prayer & Brunch Gathering",
  },
// {
//     img: event2,
//     date: "25 FEB",
//     title: "Worship Night Experience",
//   },
//   {
//     img: event3,
//     date: "14 MAR",
//     title: "Sisterhood Empowerment Talk",
//   },
//   {
//     img: event4,
//     date: "30 APR",
//     title: "Faith & Purpose Retreat",
//   },
];

const UpcomingEvents = () => {
  // const navigate = useNavigate();
  return (
    <section className="w-full bg-white py-20 px-5 md:px-10 lg:px-16">
  
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">

          <div>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A]">
              Upcoming{" "}
              <span className="text-[#F39221] italic">
                Events
              </span>
            </h2>

            <p className="text-[#555] mt-3 text-sm md:text-base max-w-[600px] leading-[1.7]">
              Join us for inspiring gatherings filled with worship,
              prayer, fellowship, and meaningful connection.
            </p>
          </div>

          <Link to="/past-events">
            <button
              className="
                bg-[#F39221]
                text-white

                px-6
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

        {/* EVENTS */}
        <div className="flex flex-col gap-6">

          {events.map((event, i) => (
            <div
              key={i}
              className="
                w-full

                bg-[#F8F8F8]

                rounded-3xl

                overflow-hidden

                flex
                flex-col
                md:flex-row

                items-start
                md:items-center

                gap-6

                p-4
                md:p-5

                hover:shadow-xl
                transition
                duration-500
              "
            >

              {/* IMAGE */}
              <div
                className="
                  relative

                  w-full
                  md:w-[260px]

                  h-[220px]
                  md:h-[180px]

                  overflow-hidden

                  rounded-2xl

                  flex-shrink-0
                "
              >

                <img
                  src={event.img}
                  alt={event.title}
                  className="
                    w-full
                    h-full
                    object-cover

                    hover:scale-105
                    transition
                    duration-500
                  "
                />

                {/* DATE */}
                <div
                  className="
                    absolute
                    top-4
                    left-4

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

              {/* CONTENT */}
              <div className="flex-1 w-full">

                <h3
                  className="
                    text-[#1A1A1A]

                    text-[1.2rem]
                    md:text-2xl

                    font-semibold

                    leading-[1.5]
                  "
                >
                  {event.title}
                </h3>

                <p
                  className="
                    text-[#555]

                    text-sm
                    md:text-base

                    leading-[1.7]

                    mt-3

                    max-w-[700px]
                  "
                >
                  Experience uplifting moments of prayer, worship,
                  encouragement, and sisterhood in a warm and faith-filled atmosphere.
                </p>

                {/* BUTTON */}
                <Link
                  to="/get-tickets"
                  className="inline-block mt-5"
                >
                  <button
                    className="
                      bg-[#F39221]
                      text-white

                      px-6
                      py-3

                      rounded-full

                      uppercase

                      text-[11px]
                      tracking-[0.2em]

                      hover:opacity-90
                      transition
                    "
                  >
                    Get Ticket
                  </button>
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default UpcomingEvents;