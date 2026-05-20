import { useState } from "react";
import bookImg from "../src/assets/book.png";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

const GetBook = () => {
  const [open, setOpen] = useState(false);
  const [qty, setQty] = useState(1);

  const pricePerBook = 10;
  const total = qty * pricePerBook;

  return (
    <>
      <Nav />

      <section className="w-full py-20 px-6 md:px-16 bg-white">

        {/* MAIN WRAPPER */}
        <div className="max-w-[1100px] mx-auto  py-20 flex flex-col md:flex-row gap-10 items-start">

          {/* BOOK CARD */}
          <div
            className={`
              bg-black text-white rounded-2xl p-6 shadow-2xl
              flex flex-col md:flex-row gap-8 items-center
              transition-all duration-500 ease-in-out
              ${open ? "md:w-[45%] scale-[0.95]" : "md:w-[100%]"}
            `}
          >

            {/* BOOK IMAGE */}
            <img
              src={bookImg}
              alt="book"
              className="
                w-[220px] h-[300px]
                object-cover rounded-xl shadow-lg
                transition-all duration-500
              "
            />

            {/* BOOK DETAILS */}
            <div className="flex-1">

              <h2 className="text-3xl md:text-4xl font-semibold">
                I Know Who I Am
              </h2>

              <p className="text-white/70 mt-2">
                By Uwa Comfort Azubuike
              </p>

              {/* PRICE */}
              <div className="mt-6 flex items-center gap-3">
                <span className="text-[#F39221] text-2xl font-bold">
                  ${pricePerBook}
                </span>
                <span className="text-white/50 text-sm">
                  per book
                </span>
              </div>

              {/* BUTTON */}
              <button
                onClick={() => setOpen(true)}
                className="mt-6 bg-[#F39221] text-black px-6 py-3 rounded-full uppercase text-[11px] tracking-[0.2em] hover:opacity-90 transition"
              >
                Place Order Book
              </button>

            </div>

          </div>

          {/* FORM SECTION */}
          <div
            className={`
              bg-white text-black rounded-2xl shadow-2xl p-6
              w-full md:w-[55%]

              transition-all duration-700 ease-in-out

              ${open
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10 pointer-events-none"
              }
            `}
          >

            {/* HEADER */}
            <div className="flex justify-between items-center mb-6">

              <h3 className="text-2xl font-semibold">
                Order Your Book
              </h3>

              <button
                onClick={() => setOpen(false)}
                className="text-black text-xl font-bold"
              >
                ✕
              </button>

            </div>

            {/* FORM */}
            <form className="flex flex-col gap-5">

              {/* NAME */}
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="border p-3 rounded-lg outline-none focus:border-[#F39221]"
                  required
                />
              </div>

              {/* EMAIL */}
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500 uppercase tracking-wider">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="border p-3 rounded-lg outline-none focus:border-[#F39221]"
                  required
                />
              </div>

              {/* ADDRESS */}
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500 uppercase tracking-wider">
                  Delivery Address
                </label>
                <input
                  type="text"
                  placeholder="Enter your delivery address"
                  className="border p-3 rounded-lg outline-none focus:border-[#F39221]"
                  required
                />
              </div>

              {/* PHONE */}
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500 uppercase tracking-wider">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="border p-3 rounded-lg outline-none focus:border-[#F39221]"
                />
              </div>

              {/* QUANTITY */}
              <div className="flex items-center justify-between border p-3 rounded-lg">

                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-3 text-xl"
                >
                  -
                </button>

                <span className="font-semibold">
                  Quantity: {qty}
                </span>

                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  className="px-3 text-xl"
                >
                  +
                </button>

              </div>

              {/* TOTAL */}
              <div className="text-[#F39221] font-bold text-lg">
                Total: ${total}
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="bg-[#F39221] text-white py-3 rounded-full uppercase text-[11px] tracking-[0.2em] hover:opacity-90 transition font-semibold"
              >
                Place Order
              </button>

            </form>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default GetBook;