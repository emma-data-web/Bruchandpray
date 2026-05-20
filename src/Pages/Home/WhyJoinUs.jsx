import { useState, useEffect, useRef } from "react";

import { FaCheck } from "react-icons/fa";

const WhyJoinUs = () => {

  const [email, setEmail] = useState("");

  const [visible, setVisible] = useState(false);

  const ref = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };

  }, []);

  return (
    <section className="w-full bg-white py-20 px-5 md:px-10 flex items-center justify-center">

      <div
        ref={ref}
        className={`
          w-full
          max-w-[850px]
          flex
          flex-col
          items-center
          justify-center
          text-center
          transition-all
          duration-700
          ease-out

          ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }
        `}
      >

        {/* TITLE */}
        <h2
          className="
            text-3xl
            md:text-5xl
            font-bold
            mb-8
            text-black
          "
        >
          Why Join{" "}
          <span className="text-[#F39221] italic">
            Us
          </span>
        </h2>

        {/* REASONS */}
        <div
          className="
            w-full
            flex
            flex-col
            gap-5
            mb-10
          "
        >

          {/* ITEM 1 */}
          <div
            className="
              flex
              items-start
              justify-center
              gap-3
              max-w-[700px]
              mx-auto
            "
          >

            <FaCheck className="text-[#F39221] mt-1 flex-shrink-0" />

            <p
              className="
                text-sm
                md:text-[15px]
                leading-[1.8]
                text-[#333]
                text-left
              "
            >
              Grow spiritually through prayer, worship,
              and Christ-centered gatherings.
            </p>

          </div>

          {/* ITEM 2 */}
          <div
            className="
              flex
              items-start
              justify-center
              gap-3
              max-w-[700px]
              mx-auto
            "
          >

            <FaCheck className="text-[#F39221] mt-1 flex-shrink-0" />

            <p
              className="
                text-sm
                md:text-[15px]
                leading-[1.8]
                text-[#333]
                text-left
              "
            >
              Experience a safe sisterhood where women
              are supported, encouraged, and valued.
            </p>

          </div>

          {/* ITEM 3 */}
          <div
            className="
              flex
              items-start
              justify-center
              gap-3
              max-w-[700px]
              mx-auto
            "
          >

            <FaCheck className="text-[#F39221] mt-1 flex-shrink-0" />

            <p
              className="
                text-sm
                md:text-[15px]
                leading-[1.8]
                text-[#333]
                text-left
              "
            >
              Build purpose, clarity, and confidence
              in your God-given calling.
            </p>

          </div>

        </div>

        {/* INPUT */}
        <div
          className="
            w-full
            max-w-[650px]
            flex
            flex-col
            sm:flex-row
            gap-3
          "
        >

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              flex-1
              border
              border-gray-300
              rounded-full
              px-5
              py-3.5
              text-sm
              outline-none
              focus:border-[#F39221]
            "
          />

          <button
            className="
              bg-[#F39221]
              text-white
              px-7
              py-3.5
              rounded-full
              uppercase
              text-[11px]
              tracking-[0.2em]
              hover:bg-[#DD7F12]
              transition-all
              duration-300
            "
          >
            Join the Community
          </button>

        </div>

      </div>

    </section>
  );
};

export default WhyJoinUs;