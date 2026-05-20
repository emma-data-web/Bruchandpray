import flower from "../../assets/flower.jpg";
import { useNavigate } from "react-router-dom";

export default function DonationSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#E7D2B8] px-5 py-10 md:px-10 lg:px-16 flex items-center justify-center overflow-hidden">

      {/* OUTER CONTAINER */}
      <div className="w-full max-w-[1050px] rounded-[30px] bg-[#E7D2B8] min-h-[38vh] px-6 py-8 sm:px-10 md:px-12 flex items-center justify-center relative overflow-hidden">

        {/* INNER WHITE CARD */}
        <div className="w-full bg-white rounded-[25px] px-6 py-10 sm:px-10 md:px-12 text-left max-w-[800px] relative overflow-hidden flex items-stretch">

          {/* FLOWER IMAGE (FULL HEIGHT MATCH) */}
          <img
            src={flower}
            alt="flower"
            className="
              absolute
              right-0
              top-0
              bottom-0
              h-full
              w-auto
              object-cover
              opacity-100
              pointer-events-none
              z-0
            "
          />

          {/* SOFT GLOW */}
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#F39221]/10 blur-3xl rounded-full z-0" />

          {/* CONTENT WRAPPER */}
          <div className="relative z-10 w-full">

            {/* TAG */}
            <div className="inline-flex items-center bg-[#F39221]/10 text-[#F39221] px-4 py-2 rounded-full text-[11px] tracking-[0.22em] uppercase mb-5">
              Support The Vision
            </div>

            {/* HEADING */}
            <h2 className="text-black text-2xl sm:text-3xl md:text-[2.3rem] font-bold leading-[1.2] mb-4">

              <span className="rouge-script-regular">
                Help us continue creating spaces where women encounter God.
              </span>

            </h2>

            {/* DESCRIPTION */}
            <p className="text-[#333] text-sm md:text-[15px] leading-[1.8] max-w-[650px] mb-7">
              Your donation supports gatherings, worship experiences,
              outreach, and faith-centered programs that impact women’s lives.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4">

              <button
                onClick={() => navigate("/donate-anonymously")}
                className="
                  bg-[#F39221]
                  text-white
                  hover:bg-[#DD7F12]
                  transition-all
                  duration-300

                  px-7
                  py-3.5
                  rounded-full

                  uppercase
                  text-[11px]
                  tracking-[0.22em]

                  hover:-translate-y-[2px]

                  w-full
                  sm:w-auto
                "
              >
                Donate Anonymously
              </button>

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

                  px-7
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

      </div>

    </section>
  );
}