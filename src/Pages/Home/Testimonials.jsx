import { useState } from "react";

import circle1 from "../../../src/assets/circle-1.png";
import circle2 from "../../../src/assets/circle-2.png";
import circle3 from "../../../src/assets/circle-3.png";
import circle4 from "../../../src/assets/circle-4.png";
import circle5 from "../../../src/assets/circle-5.png";

import bookImg from "../../../src/assets/book.png";

const testimonials = [
  {
    img: circle1,
    text: "I came exhausted and left spiritually refreshed. Brunch & Pray restored my peace and reminded me of who I am in God.",
    name: "Sarah M.",
  },
  {
    img: circle2,
    text: "Brunch & Pray helped me reconnect with God and myself. I found healing, clarity, and direction.",
    name: "Angela K.",
  },
  {
    img: circle3,
    text: "This community reminded me that Christian womanhood can be beautiful, powerful, and deeply fulfilling.",
    name: "Grace T.",
  },
  {
    img: circle4,
    text: "I lost my joy, but here I found not just joy again — I found family and spiritual renewal.",
    name: "Esther L.",
  },
  {
    img: circle5,
    text: "Every gathering feels like a divine encounter. My faith has grown stronger and more grounded.",
    name: "Joy O.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const isMobile = window.innerWidth < 768;

  const cardsPerView = isMobile ? 1 : 2;

  const totalPages = Math.ceil(testimonials.length / cardsPerView);

  const next = () => {
    setIndex((prev) => (prev + 1) % totalPages);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="w-full bg-[#FFF3E6] py-20 px-6 md:px-16">

      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-10">

        {/* LEFT - TESTIMONIALS (WHITE PANEL) */}
        <div className="w-full lg:w-1/2 bg-white text-black rounded-2xl p-6 relative shadow-lg">

          {/* HEADER */}
          <div className="mb-6">
            <h2 className="text-3xl md:text-5xl font-semibold text-black">
              Sisterhood <span className="text-[#F39221] italic">Stories</span>
            </h2>

            <p className="text-black/60 mt-2">
              Real women, real stories, real impact.
            </p>
          </div>

          {/* ARROWS */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black text-white rounded-full hover:bg-[#F39221] transition"
          >
            ←
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black text-white rounded-full hover:bg-[#F39221] transition"
          >
            →
          </button>

          {/* VIEWPORT */}
          <div className="overflow-hidden mt-6">

            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${totalPages * 100}%`,
                transform: `translateX(-${index * (100 / totalPages)}%)`,
              }}
            >

              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div
                  key={pageIndex}
                  className="w-full flex gap-6"
                >

                  {testimonials
                    .slice(
                      pageIndex * cardsPerView,
                      pageIndex * cardsPerView + cardsPerView
                    )
                    .map((item, i) => (
                      <div
                        key={i}
                        className={`
                          ${
                            cardsPerView === 1
                              ? "w-full"
                              : "w-1/2"
                          }
                          bg-[#F9F9F9]
                          rounded-xl
                          p-5
                          shadow-sm
                          flex
                          gap-4
                          items-center
                        `}
                      >

                        {/* IMAGE */}
                        <img
                          src={item.img}
                          alt="testimonial"
                          className="w-14 h-14 rounded-full object-cover border border-[#F39221]"
                        />

                        {/* TEXT */}
                        <div>
                          <p className="text-black/80 text-sm leading-[1.5]">
                            “{item.text}”
                          </p>

                          <p className="mt-2 font-semibold text-black text-sm">
                            {item.name}
                          </p>
                        </div>

                      </div>
                    ))}

                </div>
              ))}

            </div>

          </div>
        </div>

        {/* RIGHT - BOOK (BLACK PANEL UPDATED LAYOUT) */}
        <div className="w-full lg:w-1/2 flex justify-center">

          <div className="w-[90%] bg-black text-white rounded-2xl p-6 shadow-lg transform -rotate-3 origin-center transition-all duration-500 ease-in-out hover:rotate-0 hover:scale-[1.02]">

            {/* TOP ROW: BOOK + TEXT */}
            <div className="flex gap-5 items-start">

              {/* BOOK IMAGE */}
              <img
                src={bookImg}
                alt="book"
                className="w-[120px] h-[170px] object-cover rounded-lg"
              />

              {/* TEXT */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">
                  Book
                </h3>

                <p className="text-white/70 leading-[1.6] text-sm">
                  The words in this book are drawn from the Bible. They are specially
                  chosen to build and inspire children to become great leaders and role models.
                </p>
              </div>

            </div>

            {/* BUTTON */}
            <div className="mt-6">
              <button className="w-full bg-[#F39221] text-black py-3 rounded-full uppercase text-[11px] tracking-[0.2em] hover:opacity-90 transition">
                Get Book
              </button>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default Testimonials;