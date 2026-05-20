import { useState } from "react";

import missionImg1 from "../../../src/assets/mission1.jpeg";
import missionImg2 from "../../../src/assets/mission2.jpeg";
import missionImg3 from "../../../src/assets/mission3.jpeg";
import missionImg4 from "../../../src/assets/mission4.jpeg";

const MissionSection = () => {

  const [showFullText, setShowFullText] = useState(false);

  return (
    <section className="w-full bg-[#FFF7F0] py-8 px-5 md:px-10 lg:px-16 flex items-center justify-center overflow-hidden">

      <div className="max-w-[1100px] w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">

        {/* LEFT SIDE */}
        <div className="flex-1 flex flex-col justify-center text-center lg:text-left">

          <h2 className="text-[#111] text-[1.9rem] sm:text-[2.2rem] md:text-3xl font-semibold mb-3">
            Our{" "}
            <span className="text-[#F39221] italic">Mission</span>
          </h2>

          <p
            className={`text-[#333] leading-[1.7] text-[0.92rem] sm:text-[0.95rem] md:text-[1rem] max-w-[580px] mx-auto lg:mx-0 transition-all duration-300 ${
              !showFullText ? "line-clamp-5 overflow-hidden" : ""
            }`}
          >
            Brunch & Pray exists to gather women for God’s glory.
            What began in 2018 has grown into a vibrant community
            of women seeking deeper relationship with Christ and
            meaningful connection with others.

            <br /><br />

            We exist to uplift, empower, and inspire women through
            prayer, fellowship, creative experiences, and intentional
            conversations rooted in faith.

            <br /><br />

            Our heart is to remind women that life in Christ is joyful,
            practical, and full of purpose.
          </p>

          <div className="mt-5 flex justify-center lg:justify-start gap-3">

            <button
              onClick={() => setShowFullText(!showFullText)}
              className="bg-[#D97706] text-white px-5 py-2 rounded-full uppercase text-[10px] tracking-[0.2em] hover:bg-[#B45309] transition"
            >
              {showFullText ? "Show Less" : "Read More"}
            </button>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex items-center justify-center w-full">

          <div className="grid grid-cols-2 gap-3 sm:gap-4 scale-[0.9] sm:scale-[1] md:scale-[1.1] lg:scale-[1.15] origin-center">

            <img
              src={missionImg1}
              alt="mission"
              className="w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] md:w-[190px] md:h-[190px] object-cover animate-float1"
              style={{ borderRadius: "70% 30% 60% 40% / 60% 40% 60% 40%" }}
            />

            <img
              src={missionImg2}
              alt="mission"
              className="w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] md:w-[190px] md:h-[190px] object-cover animate-float2"
              style={{ borderRadius: "30% 70% 40% 60% / 40% 60% 40% 60%" }}
            />

            <img
              src={missionImg3}
              alt="mission"
              className="w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] md:w-[190px] md:h-[190px] object-cover animate-float3"
              style={{ borderRadius: "40% 60% 70% 30% / 60% 40% 60% 40%" }}
            />

            <img
              src={missionImg4}
              alt="mission"
              className="w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] md:w-[190px] md:h-[190px] object-cover animate-float4"
              style={{ borderRadius: "60% 40% 30% 70% / 40% 60% 40% 60%" }}
            />

          </div>

        </div>

      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes float1 {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes float2 {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(12px); }
        }

        @keyframes float3 {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes float4 {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(10px); }
        }

        .animate-float1 { animation: float1 6s ease-in-out infinite; }
        .animate-float2 { animation: float2 7s ease-in-out infinite; }
        .animate-float3 { animation: float3 5.5s ease-in-out infinite; }
        .animate-float4 { animation: float4 6.5s ease-in-out infinite; }
      `}</style>

    </section>
  );
};

export default MissionSection;