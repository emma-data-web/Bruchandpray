import { useState } from "react";

import person1 from "../../assets/circle-1.png";
import person2 from "../../assets/circle-2.png";
import person3 from "../../assets/circle-3.png";
import person4 from "../../assets/circle-4.png";
import person5 from "../../assets/circle-5.png";
import person6 from "../../assets/circle-2.png";

const testimonials = [
  {
    id: 1,
    image: person1,
    name: "Sarah Johnson",
    role: "Community Member",
    text: "Sisterhood helped me rediscover my confidence in God. Every gathering leaves me refreshed, encouraged, and spiritually stronger.",
  },
  {
    id: 2,
    image: person2,
    name: "Deborah Miles",
    role: "Conference Attendee",
    text: "Through these programs, I found healing, purpose, and genuine friendships with women who truly support one another.",
  },
  {
    id: 3,
    image: person3,
    name: "Rachel Williams",
    role: "Retreat Participant",
    text: "I came in feeling lost, but I left with renewed faith, clarity, and a deeper understanding of who God created me to be.",
  },
  {
    id: 4,
    image: person4,
    name: "Grace Coleman",
    role: "Bible Study Member",
    text: "The teachings and worship experiences completely changed my spiritual walk and gave me strength during difficult moments.",
  },
  {
    id: 5,
    image: person5,
    name: "Esther James",
    role: "Volunteer",
    text: "Being part of this community has shown me the beauty of serving God alongside other women filled with faith and compassion.",
  },
  {
    id: 6,
    image: person6,
    name: "Naomi Peters",
    role: "Event Guest",
    text: "I experienced peace, joy, and encouragement that reminded me God still has a purpose and calling for my life.",
  },
];

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const testimonialsPerPage = isMobile ? 1 : 3;

  const totalPages = Math.ceil(
    testimonials.length / testimonialsPerPage
  );

  const nextSlide = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevSlide = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="w-full bg-[#FFF8F1] py-20 px-5 md:px-10 overflow-hidden">

      {/* HEADER */}
      <div className="text-center mb-14">

        <h2
          className="
            text-[#F39221]
            text-[2.3rem]
            sm:text-[2.7rem]
            md:text-5xl
            font-semibold
            italic
            mb-5
          "
        >
          Testimonials
        </h2>

        <p className="text-[#555] text-sm md:text-[15px] leading-[1.9] max-w-[750px] mx-auto">
          Hear from women whose lives have been transformed
          through worship gatherings, mentorship, faith,
          healing, and community experiences.
        </p>

      </div>

      {/* SLIDER WRAPPER */}
      <div className="relative w-full overflow-hidden">

        {/* SLIDER TRACK */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentPage * 100}%)`,
          }}
        >

          {Array.from({ length: totalPages }).map((_, pageIndex) => {

            const start = pageIndex * testimonialsPerPage;

            const pageItems = testimonials.slice(
              start,
              start + testimonialsPerPage
            );

            return (
              <div
                key={pageIndex}
                className="min-w-full grid grid-cols-1 lg:grid-cols-3 gap-8"
              >

                {pageItems.map((item) => (
                  <div
                    key={item.id}
                    className="
                      bg-white
                      rounded-[28px]
                      overflow-hidden
                      shadow-sm
                      border
                      border-[#F39221]/10
                      hover:shadow-xl
                      transition-all
                      duration-300
                    "
                  >

                    <div className="p-8">

                      {/* TOP */}
                      <div className="flex items-center gap-2 mb-2">

                        <div className="w-[65px] h-[65px] rounded-full overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="text-[#F39221] text-5xl leading-none mt-2">
                          ”
                        </div>

                      </div>

                      {/* TEXT */}
                      <p className="text-[#444] leading-[1.8] text-sm md:text-[15px] mb-5">
                        {item.text}
                      </p>

                      <h4 className="font-semibold text-black text-lg">
                        {item.name}
                      </h4>

                      <p className="text-[#777] text-sm mt-[1px]">
                        {item.role}
                      </p>

                    </div>

                  </div>
                ))}

              </div>
            );
          })}

        </div>

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="
            absolute
            left-1
            md:left-2
            top-1/2
            -translate-y-1/2

            w-9
            h-9
            md:w-10
            md:h-10

            rounded-full
            border
            border-black
            bg-white

            text-black
            text-lg

            hover:border-[#F39221]
            hover:text-[#F39221]
            hover:bg-transparent

            transition-all
            duration-300

            z-10
          "
        >
          ←
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="
            absolute
            right-1
            md:right-2
            top-1/2
            -translate-y-1/2

            w-9
            h-9
            md:w-10
            md:h-10

            rounded-full
            bg-black
            text-white
            text-lg

            hover:bg-[#F39221]

            transition-all
            duration-300

            z-10
          "
        >
          →
        </button>

      </div>

    </section>
  );
};

export default Testimonials;