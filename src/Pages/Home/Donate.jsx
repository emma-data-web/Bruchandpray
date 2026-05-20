import { useNavigate } from "react-router-dom";

export default function DonationSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#E7D2B8] px-5 py-14 md:px-10 lg:px-16 flex items-center justify-center">

      {/* OUTER CONTAINER */}
      <div className="w-full max-w-[1050px] flex items-center justify-center">

        {/* CENTER WHITE RECTANGLE */}
        <div
          className="
            w-full
            max-w-[850px]
            bg-white
            rounded-[18px]
            px-6
            py-14
            sm:px-10
            md:px-16
            text-center
            shadow-sm
          "
        >

          {/* TAG */}
          <div
            className="
              inline-flex
              items-center
              justify-center
              bg-[#F39221]/10
              text-[#F39221]
              px-4
              py-2
              rounded-full
              text-[11px]
              tracking-[0.22em]
              uppercase
              mb-6
            "
          >
            Support The Vision
          </div>

          {/* HEADING */}
          <h2
            className="
              text-black
              text-2xl
              sm:text-3xl
              md:text-[2.5rem]
              font-bold
              leading-[1.25]
              mb-5
            "
          >
            <span className="rouge-script-regular">
              Help us continue creating spaces where women encounter God.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              text-[#333]
              text-sm
              md:text-[15px]
              leading-[1.9]
              max-w-[650px]
              mx-auto
              mb-8
            "
          >
            Your donation supports gatherings, worship experiences,
            outreach, and faith-centered programs that impact women’s lives.
          </p>

          {/* BUTTONS */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              gap-4
            "
          >

            {/* FILLED ORANGE BUTTON */}
            <button
              onClick={() => navigate("/donate-anonymously")}
              className="
                bg-[#F39221]
                text-white
                hover:bg-[#DD7F12]
                transition-all
                duration-300

                px-8
                py-3.5
                rounded-full

                uppercase
                text-[11px]
                tracking-[0.22em]

                w-full
                sm:w-auto
              "
            >
              Donate Anonymously
            </button>

            {/* ORANGE OUTLINE BUTTON */}
            <button
              onClick={() => navigate("/donate-publicly")}
              className="
                border
                border-[#F39221]

                text-[#F39221]

                hover:bg-[#F39221]
                hover:text-white

                transition-all
                duration-300

                px-8
                py-3.5
                rounded-full

                uppercase
                text-[11px]
                tracking-[0.22em]

                w-full
                sm:w-auto
              "
            >
              Donate Publicly
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}