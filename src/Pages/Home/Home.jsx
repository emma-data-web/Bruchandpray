// import React from "react";
import Layout from "../../component/layout";
import Voice from "./Voice";
import Mariela from "./Mariela";
import Download from "./Download";
import Bust from "./Bust";
import Instagram from "./Instagram";

const Home = () => {
  return (
    <Layout>
      <div className="bg-[#dfc2b0] w-full overflow-x-hidden">
        {/* HERO SECTION */}
        <div className="relative min-h-screen flex flex-col lg:flex-row items-center pt-10 lg:pt-0">
          
          {/* Main Large Image */}
          <div className="relative w-[90%] lg:w-[55%] h-[60vh] lg:h-[100vh] z-10">
            <img
              src="/people.jpeg"
              className="w-full h-full object-cover grayscale-[20%] contrast-110 shadow-2xl"
              alt="Community"
            />
            {/* Overlay Text for Hero */}
            {/* <div className="absolute -bottom-10 lg:bottom-20 -right-5 lg:-right-32 z-20">
              <h1 className="text-7xl md:text-9xl lg:text-[12rem] text-[#d84136] leading-none select-none">
                IGNITING<br />PURPOSE
              </h1>
            </div> */}
          </div>

          {/* Secondary Elements */}
          <div className="mt-24 lg:mt-0 lg:ml-20 flex flex-col gap-8 px-6 lg:px-0">
            <div className="text-2xl md:text-3xl tracking-[0.2em] text-[#2e2c2b] border-l-4 border-[#d84136] pl-6">
              <p>GOSPEL-CENTERED MOVEMENT</p>
              <p className="opacity-70">COMMUNITY + MINISTRY</p>
            </div>

            <div className="relative">
              <img
                src="/bannerImage.jpeg"
                className="w-full lg:w-[400px] h-[300px] object-cover rounded-sm shadow-xl"
                alt="Banner"
              />
              <p className="mt-4 font-['Bebas_Neue'] text-lg lg:absolute lg:left-[-150px] lg:bottom-[-20px] lg:rotate-[-90deg] origin-bottom-left text-[#2e2c2b]">
                WITH AUTHOR & COACH COMFORT ASUBIKE
              </p>
            </div>
          </div>
        </div>

        <Voice />
        <Mariela />
        <Download />
        <Bust />
        <Instagram />
      </div>
    </Layout>
  );
};

export default Home;