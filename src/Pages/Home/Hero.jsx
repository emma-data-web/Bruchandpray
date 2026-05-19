import bgPhoto from "../../../src/assets/bg-photo.jpg";
import AnimatedLogo from "../../components/AnimatedLogo.jsx";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat font-sans"
      style={{
        backgroundImage: `url(${bgPhoto})`,
      }}
    >

      {/* dark cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/20 z-[1]" />

      {/* center hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-[850px] px-10 py-10">

        {/* logo */}
        <div className="mt-12">
          <AnimatedLogo />
        </div>

        {/* hero text */}
        <p
          className="text-white text-[1.4rem] md:text-[1.1rem] sm:text-[1rem]
          leading-[1.9] font-semibold max-w-[800px] mb-10"
        >
          Bringing{" "}
          <span className="text-[#F39221] font-normal italic">
            women
          </span>{" "}
          together to grow in faith, purpose, and practical Christian living.
        </p>

        {/* buttons */}
        <div
          className="flex items-center justify-center gap-4 flex-row flex-wrap sm:flex-row sm:w-auto"
        >

          {/* primary button */}
          <button
            className="bg-[#D97706] text-white border-none
            px-8 py-4 rounded-full uppercase cursor-pointer
            text-[11px] tracking-[0.22em]
            transition-all duration-300 ease-in-out
            hover:bg-[#B45309] hover:-translate-y-[2px] hover:shadow-lg"
          >
            Join the Table
          </button>

          {/* ghost button */}
          <button
            className="bg-transparent border border-white text-white
            px-8 py-4 rounded-full uppercase cursor-pointer
            text-[11px] tracking-[0.22em]
            transition-all duration-300 ease-in-out
            hover:bg-white hover:text-black"
          >
            Upcoming Events
          </button>

        </div>

      </div>

    </section>
  );
};

export default Hero;