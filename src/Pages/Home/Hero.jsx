import bgPhoto from "../../../src/assets/bg-image.jpeg";
import bgMobPhoto from "../../../src/assets/bg-img.jpeg";

import AnimatedLogo from "../../components/AnimatedLogo.jsx";

const Hero = () => {
  return (
    <section
      className="
      relative
      min-h-screen
      w-full
      flex
      items-center
      justify-center
      overflow-hidden
      bg-cover
      bg-center
      bg-no-repeat
      font-sans
    "
      style={{
        backgroundImage: `url(${bgPhoto})`,
      }}
    >

      {/* MOBILE BACKGROUND */}
      <div
        className="
        absolute
        inset-0
        block
        md:hidden
        bg-cover
        bg-center
        bg-no-repeat
      "
        style={{
          backgroundImage: `url(${bgMobPhoto})`,
        }}
      />

      {/* DESKTOP BACKGROUND */}
      <div
        className="
        absolute
        inset-0
        hidden
        md:block
        bg-cover
        bg-center
        bg-no-repeat
      "
        style={{
          backgroundImage: `url(${bgPhoto})`,
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/40 to-black/20 z-[1]" />

      {/* CONTENT */}
      <div
        className="
        relative
        z-10
        flex
        flex-col
        items-center
        justify-center
        text-center
        w-full
        max-w-[850px]
        px-6
        sm:px-8
        md:px-10
        py-10
      "
      >

        {/* LOGO */}
        <div className="mt-14 sm:mt-16 md:mt-12">
          <AnimatedLogo />
        </div>

        {/* HERO TEXT (UPDATED STRUCTURE) */}
       <p
  className="
  text-white
  text-[0.95rem]
  sm:text-[1.05rem]
  md:text-[1.4rem]
  leading-[1.4]
  font-semibold
  max-w-[800px]
  mb-10
  px-2
  "
>
  Bringing women together to grow in faith,
    <br />
  purpose, and practical Christian{" "}

  <span
    className="
    text-[#F39221]
    font-normal
    text-[4rem]
    sm:text-[2.5rem]
    md:text-[3.5rem]
    align-middle
    "
    style={{
      fontFamily: "'Rouge Script', cursive",
    }}
  >
    living
  </span>
</p>
        {/* BUTTONS */}
        <div
          className="
          flex
          items-center
          justify-center
          gap-4
          flex-col
          sm:flex-row
          w-full
          sm:w-auto
        "
        >

          {/* PRIMARY BUTTON */}
          <button
            className="
            bg-[#D97706]
            text-white
            px-8
            py-4
            rounded-full
            uppercase
            cursor-pointer
            text-[11px]
            tracking-[0.22em]
            transition-all
            duration-300
            ease-in-out
            hover:bg-[#B45309]
            hover:-translate-y-[2px]
            hover:shadow-lg
            w-full
            sm:w-auto
          "
          >
            Join the Table
          </button>

          {/* SECONDARY BUTTON */}
          <button
            className="
            bg-transparent
            border
            border-white
            text-white
            px-8
            py-4
            rounded-full
            uppercase
            cursor-pointer
            text-[11px]
            tracking-[0.22em]
            transition-all
            duration-300
            ease-in-out
            hover:bg-white
            hover:text-black
            w-full
            sm:w-auto
          "
          >
            Upcoming Events
          </button>

        </div>

      </div>

      {/* FONT IMPORT */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Qwitcher+Grypen:wght@400;700&family=Rouge+Script&display=swap');
      `}</style>

    </section>
  );
};

export default Hero;