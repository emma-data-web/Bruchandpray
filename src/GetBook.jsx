import { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

const GetBook = () => {
  const location = useLocation();
  const bookData = location.state;

  const [open, setOpen] = useState(false);
  const [qty, setQty] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    deliveryAddress: "",
    contact: "",
  });

  const title = bookData?.title || "I Know Who I Am";
  const author = bookData?.author || "By Uwa Comfort Azubuike";
  const image = bookData?.image;
  const pricePerBook = bookData?.price || 10;
  const total = qty * pricePerBook;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/stripe/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          author,
          image,
          price: pricePerBook,
          quantity: qty,
          name: formData.name,
          email: formData.email,
          deliveryAddress: formData.deliveryAddress,
          contact: formData.contact,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Unable to start checkout");
      }

      window.location.href = data.url;
    } catch (error) {
      console.error(error);
      alert("Checkout failed. Please try again.");
    }
  };

  return (
    <>
      <Nav />

      <section className="w-full py-20 px-6 md:px-16 bg-white">
        <div className="max-w-[1100px] mx-auto py-20 flex flex-col md:flex-row gap-10 items-start">
          <div
            className={`
              bg-black text-white rounded-2xl p-6 shadow-2xl
              flex flex-col md:flex-row gap-8 items-center
              transition-all duration-500 ease-in-out
              ${open ? "md:w-[45%] scale-[0.95]" : "md:w-[100%]"}
            `}
          >
            <img
              src={image}
              alt={title}
              className="
                w-[220px] h-[300px]
                object-cover rounded-xl shadow-lg
                transition-all duration-500
              "
            />

            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-semibold">
                {title}
              </h2>

              <p className="text-white/70 mt-2">
                {author}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="text-[#F39221] text-2xl font-bold">
                  ${pricePerBook}
                </span>
                <span className="text-white/50 text-sm">
                  per book
                </span>
              </div>

              <button
                onClick={() => setOpen(true)}
                className="mt-6 bg-[#F39221] text-black px-6 py-3 rounded-full uppercase text-[11px] tracking-[0.2em] hover:opacity-90 transition"
              >
                Place Order Book
              </button>
            </div>
          </div>

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

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="border p-3 rounded-lg outline-none focus:border-[#F39221]"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500 uppercase tracking-wider">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="border p-3 rounded-lg outline-none focus:border-[#F39221]"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500 uppercase tracking-wider">
                  Delivery Address
                </label>
                <input
                  type="text"
                  name="deliveryAddress"
                  value={formData.deliveryAddress}
                  onChange={handleChange}
                  placeholder="Enter your delivery address"
                  className="border p-3 rounded-lg outline-none focus:border-[#F39221]"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500 uppercase tracking-wider">
                  Phone Number / Contact
                </label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="border p-3 rounded-lg outline-none focus:border-[#F39221]"
                />
              </div>

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

              <div className="text-[#F39221] font-bold text-lg">
                Total: ${total}
              </div>

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