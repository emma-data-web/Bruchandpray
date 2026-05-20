import { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import img1 from "../src/assets/bg-image.jpeg";
import img2 from "../src/assets/bg-img.jpeg";

const DonatePublicly = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Proceed to payment:", form);
  };

  return (
    <>
      <Nav />

      {/* MAIN SECTION */}
      <section className="w-full min-h-screen bg-white flex items-center justify-center py-20 px-6">

        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-12 items-center">

          {/* LEFT TEXT */}
          <div className="flex-1 flex items-center">
            <div className="text-left my-20">
              <h2 className="text-4xl md:text-5xl font-semibold text-black">
                Donate <span className="text-[#F39221] italic">Publicly</span>
              </h2>

              <p className="text-black/60 mt-4 text-sm md:text-base leading-[1.7] max-w-[420px]">
                Fill in your details to proceed with your donation.
                Your contribution helps support gatherings, outreach,
                and faith-based programs.
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="flex-1 w-full">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 py-20"
            >

              {/* NAME */}
              <div>
                <label className="text-xs text-black/60 uppercase tracking-wider">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  onChange={handleChange}
                  className="w-full mt-1 p-3 border-b outline-none focus:border-[#F39221]"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-xs text-black/60 uppercase tracking-wider">
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  onChange={handleChange}
                  className="w-full mt-1 p-3 border-b outline-none focus:border-[#F39221]"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="text-xs text-black/60 uppercase tracking-wider">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  name="number"
                  placeholder="Enter your phone number"
                  onChange={handleChange}
                  className="w-full mt-1 p-3 border-b outline-none focus:border-[#F39221]"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="mt-4 bg-[#F39221] text-white py-3 rounded-full uppercase text-[11px] tracking-[0.2em] hover:opacity-90 transition"
              >
                Proceed to Payment
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* SCROLLING IMAGE STRIP */}
      <section className="w-full bg-white overflow-hidden pb-20">

        <div className="flex w-[200%] animate-scroll">

          {/* SET 1 */}
          <img src={img1} className="w-1/4 h-[260px] object-cover" />
          <img src={img2} className="w-1/4 h-[260px] object-cover" />
          <img src={img1} className="w-1/4 h-[260px] object-cover" />
          <img src={img2} className="w-1/4 h-[260px] object-cover" />

          {/* DUPLICATE SET FOR LOOP */}
          <img src={img1} className="w-1/4 h-[260px] object-cover" />
          <img src={img2} className="w-1/4 h-[260px] object-cover" />
          <img src={img1} className="w-1/4 h-[260px] object-cover" />
          <img src={img2} className="w-1/4 h-[260px] object-cover" />

        </div>

      </section>

      {/* ANIMATION */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 18s linear infinite;
        }
      `}</style>

      <Footer />
    </>
  );
};

export default DonatePublicly;