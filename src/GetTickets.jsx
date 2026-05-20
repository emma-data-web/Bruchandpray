import eventImg from "../src/assets/mission1.jpeg"; 
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Testimonials from "./Pages/Home/Testimonials";

const GetTickets = () => {
  return (
    <>
    <Nav/>
    <section className="w-full min-h-screen py-20  bg-black flex items-center justify-center px-6">

      {/* IMAGE CARD */}
      <div className="relative w-full max-w-[900px] h-[500px] rounded-2xl overflow-hidden shadow-2xl">

        {/* BACKGROUND IMAGE */}
        <img
          src={eventImg}
          alt="event"
          className="w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* CENTER CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

          <h2 className="text-[#F39221] text-3xl md:text-5xl font-semibold tracking-wide">
            Anticipate!!!
          </h2>

          <p className="text-white mt-4 text-sm md:text-base max-w-[500px] leading-[1.7]">
            Next event details are loading...
          </p>

          <div className="mt-6 text-white/80 text-sm md:text-base space-y-2">

            <p>
              <span className="text-[#F39221] font-semibold">Event:</span> Coming Soon
            </p>

            <p>
              <span className="text-[#F39221] font-semibold">Date:</span> To be announced
            </p>

            <p>
              <span className="text-[#F39221] font-semibold">Time:</span> To be announced
            </p>

            <p>
              <span className="text-[#F39221] font-semibold">Location:</span> To be announced
            </p>

            <p>
              <span className="text-[#F39221] font-semibold">Price:</span> To be announced
            </p>

          </div>

        </div>

      </div>

    </section>
    <Testimonials/>
    <Footer/>
    </>
  );
};

export default GetTickets;