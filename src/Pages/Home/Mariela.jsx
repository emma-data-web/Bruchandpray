import { Link } from "react-router-dom";
import founderImg from "../../../src/assets/founder-pic.jpeg";

const AboutFounder = () => {
  return (
    <section
      className="
      w-full
      bg-white

      min-h-[50vh]

      py-10
      px-6
      md:px-16

      flex
      items-center

      overflow-hidden
    "
    >

      <div
        className="
        max-w-[1100px]

        mx-auto

        grid
        grid-cols-1
        lg:grid-cols-2

        items-center

        gap-10
      "
      >

        {/* LEFT - IMAGE */}
        <div
          className="
          relative

          flex
          items-center
          justify-center
          lg:justify-start
        "
        >

          {/* glow */}
          <div
            className="
            absolute

            -left-32

            top-1/2
            -translate-y-1/2

            w-[400px]
            h-[400px]

            bg-[#F39221]/10

            blur-[100px]

            rounded-full
          "
          />

          {/* PETAL SHAPE IMAGE */}
          <div
            className="
            relative

            w-[280px]
            h-[360px]

            md:w-[340px]
            md:h-[420px]

            overflow-hidden
          "
            style={{
              borderRadius:
                "55% 45% 60% 40% / 45% 55% 45% 55%",
            }}
          >

            <img
              src={founderImg}
              alt="Founder"
              className="
              w-full
              h-full

              object-cover

              scale-105
            "
            />

          </div>

        </div>

        {/* RIGHT TEXT */}
        <div className="text-[#1A1A1A]">

          <span
            className="
            text-[#F39221]

            tracking-[0.3em]

            uppercase

            text-[10px]
            md:text-xs

            font-medium
          "
          >
            Founder
          </span>

          <h2
            className="
            text-[#111111]

            text-2xl
            md:text-4xl

            font-semibold

            mt-2
            mb-4

            leading-tight
          "
          >
            Meet{" "}
            <span className="text-[#F39221] italic">
              Comfort Azubike
            </span>
          </h2>

          <p
            className="
            text-[#2B2B2B]

            text-sm
            md:text-[0.95rem]

            leading-[1.6]

            mb-3
          "
          >
            I am dedicated to helping women become the best
            version of themselves and walk boldly in their
            God-given purpose.
          </p>

          <p
            className="
            border-l-4
            border-[#F39221]

            pl-4

            italic

            text-[#333333]

            mb-3

            text-sm
          "
          >
            “When women gather to pray, the atmosphere shifts
            and purpose is ignited.”
          </p>

          <p
            className="
            text-[#2B2B2B]

            text-sm
            md:text-[0.95rem]

            leading-[1.6]
          "
          >
            Through Brunch & Pray, I create spaces where women
            encounter God deeply, build authentic relationships,
            and grow into purpose-filled lives.
          </p>

          <div
            className="
            mt-6

            flex
            gap-3
            flex-wrap
          "
          >

            <Link to="/founder">

              <button
                className="
                bg-[#F39221]

                text-white

                px-5
                py-2.5

                rounded-full

                uppercase

                text-[10px]

                tracking-[0.15em]

                hover:opacity-90

                transition
              "
              >
                Learn More
              </button>

            </Link>

            <Link to="/contact">

              <button
                className="
                border
                border-[#F39221]

                text-[#F39221]

                px-5
                py-2.5

                rounded-full

                uppercase

                text-[10px]

                tracking-[0.15em]

                hover:bg-[#F39221]
                hover:text-white

                transition
              "
              >
                Connect
              </button>

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutFounder;