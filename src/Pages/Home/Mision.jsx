import { Link } from "react-router-dom";

import missionImg1 from "../../../src/assets/mission1.jpeg";
import missionImg2 from "../../../src/assets/mission2.jpeg";
import missionImg3 from "../../../src/assets/mission3.jpeg";
import missionImg4 from "../../../src/assets/mission4.jpeg";

const MissionSection = () => {
  return (
    <section className="w-full bg-[#FFF7F0] h-[50vh] flex items-center justify-center px-6 py-6 md:px-16">

      <div className="max-w-[1100px] w-full flex flex-col lg:flex-row items-center justify-center gap-10">

        {/* LEFT SIDE */}
        <div className="flex-1 flex flex-col justify-center">

          <div>
            <h2 className="text-[#111] text-2xl md:text-3xl font-semibold mb-3">
              Our <span className="text-[#F39221] italic">Mission</span>
            </h2>

            <p className="text-[#333] leading-[1.6] text-[0.9rem] md:text-[1rem] line-clamp-5 overflow-hidden">
              Brunch & Pray exists to gather women for God’s glory. What began in 2018 has grown into a vibrant community of women seeking deeper relationship with Christ and meaningful connection with others.
              <br /><br />
              We exist to uplift, empower, and inspire women through prayer, fellowship, creative experiences, and intentional conversations rooted in faith.
              <br /><br />
              Our heart is to remind women that life in Christ is joyful, practical, and full of purpose.
            </p>
          </div>

          <div className="mt-4">
            <Link to="/mission">
              <button className="bg-[#D97706] text-white px-5 py-2 rounded-full uppercase text-[10px] tracking-[0.2em] hover:bg-[#B45309] transition">
                Read More
              </button>
            </Link>
          </div>

        </div>

        {/* RIGHT SIDE - FLOWER GRID */}
        <div className="flex-1 flex items-center justify-center">

          <div className="grid grid-cols-2 gap-3 scale-50 origin-center">

            <img
              src={missionImg1}
              className="w-full aspect-square object-cover"
              style={{
                borderRadius: "70% 30% 60% 40% / 60% 40% 60% 40%"
              }}
            />

            <img
              src={missionImg2}
              className="w-full aspect-square object-cover"
              style={{
                borderRadius: "30% 70% 40% 60% / 40% 60% 40% 60%"
              }}
            />

            <img
              src={missionImg3}
              className="w-full aspect-square object-cover"
              style={{
                borderRadius: "40% 60% 70% 30% / 60% 40% 60% 40%"
              }}
            />

            <img
              src={missionImg4}
              className="w-full aspect-square object-cover"
              style={{
                borderRadius: "60% 40% 30% 70% / 40% 60% 40% 60%"
              }}
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default MissionSection;