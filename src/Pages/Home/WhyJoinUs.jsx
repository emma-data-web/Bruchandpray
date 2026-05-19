import { useState, useEffect, useRef } from "react";

import missionImg1 from "../../../src/assets/mission1.jpeg";
import missionImg2 from "../../../src/assets/mission2.jpeg";
import missionImg3 from "../../../src/assets/mission3.jpeg";
import missionImg4 from "../../../src/assets/mission4.jpeg";

import { FaCheck } from "react-icons/fa";

const WhyJoinUs = () => {
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section className="w-full bg-white flex items-stretch justify-center">

      <div
        ref={ref}
        className={`w-full flex flex-col lg:flex-row items-stretch transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >

        {/* LEFT */}
        <div className="flex-1 bg-white flex flex-col justify-center px-6 sm:px-10 lg:px-16">

          {/* BIG TITLE (UPDATED) */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-left">
            Why Join{" "}
            <span className="text-[#F39221] italic">Us</span>
          </h2>

          {/* REASONS */}
          <div className="flex gap-3 rotate-[-2deg] mb-4">
            <FaCheck className="text-[#F39221] mt-1" />
            <p className="text-sm leading-[1.6] text-[#333]">
              Grow spiritually through prayer, worship, and Christ-centered gatherings.
            </p>
          </div>

          <div className="flex justify-between gap-3 rotate-[2deg] mb-4">
            <p className="text-sm leading-[1.6] text-[#333]">
              Experience a safe sisterhood where women are supported and valued.
            </p>
            <FaCheck className="text-[#F39221] mt-1" />
          </div>

          <div className="flex gap-3 rotate-[-2deg] mb-4">
            <FaCheck className="text-[#F39221] mt-1" />
            <p className="text-sm leading-[1.6] text-[#333]">
              Build purpose, clarity, and confidence in your God-given calling.
            </p>
          </div>

          {/* INPUT */}
          <div className="flex flex-col sm:flex-row gap-2 mt-2">

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border border-gray-300 rounded-full px-4 py-3 text-sm outline-none focus:border-[#F39221]"
            />

            <button className="bg-[#F39221] text-white px-6 py-3 rounded-full uppercase text-[11px] tracking-[0.2em]">
              Join the Community
            </button>

          </div>

        </div>

        {/* RIGHT */}
        <div className="flex-1 bg-[#FFF3E6] flex items-center justify-center">

          <div className="grid grid-cols-2 gap-2 scale-[0.8]">

            <img src={missionImg1} className="w-[150px] h-[150px] object-cover animate-float1" style={{ borderRadius: "70% 30% 60% 40% / 60% 40% 60% 40%" }} />

            <img src={missionImg2} className="w-[150px] h-[150px] object-cover animate-float2" style={{ borderRadius: "30% 70% 40% 60% / 40% 60% 40% 60%" }} />

            <img src={missionImg3} className="w-[150px] h-[150px] object-cover animate-float3" style={{ borderRadius: "40% 60% 70% 30% / 60% 40% 60% 40%" }} />

            <img src={missionImg4} className="w-[150px] h-[150px] object-cover animate-float4" style={{ borderRadius: "60% 40% 30% 70% / 40% 60% 40% 60%" }} />

          </div>

        </div>

      </div>

      {/* FLOAT ANIMATION */}
      <style>{`
        @keyframes float1 {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float2 {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(10px); }
        }
        @keyframes float3 {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes float4 {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(8px); }
        }

        .animate-float1 { animation: float1 6s ease-in-out infinite; }
        .animate-float2 { animation: float2 7s ease-in-out infinite; }
        .animate-float3 { animation: float3 5.5s ease-in-out infinite; }
        .animate-float4 { animation: float4 6.5s ease-in-out infinite; }
      `}</style>

    </section>
  );
};

export default WhyJoinUs;