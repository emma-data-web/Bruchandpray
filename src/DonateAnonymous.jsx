import Nav from "./components/Nav";
import Footer from "./components/Footer";

import img1 from "../src/assets/mission3.jpeg";
import img2 from "../src/assets/mission4.jpeg";
import img3 from "../src/assets/bg-image.jpeg";
import img4 from "../src/assets/bg-img.jpeg";

const DonateAnonymous = () => {
  return (
    <>
      <Nav />

      <section className="w-full min-h-screen bg-black flex items-center justify-center py-20 px-6">

        <div className="w-full max-w-[1000px] bg-white rounded-2xl p-8 my-20 shadow-2xl">

          {/* HEADER */}
          <h2 className="text-3xl md:text-4xl font-semibold text-black text-center">
            Donate <span className="text-[#F39221] italic">Anonymously</span>
          </h2>

          <p className="text-black/70 mt-4 text-sm md:text-base text-center">
            Account details for anonymous giving
          </p>

          {/* CONTENT WRAPPER */}
          <div className="mt-10 flex flex-col lg:flex-row gap-10 items-center">

            {/* LEFT - BANK DETAILS */}
            <div className="flex-1">

              <div className="bg-[#FFF3E6] rounded-xl p-6 text-left space-y-3">

                <p>
                  <span className="font-semibold text-black">Account Number:</span>{" "}
                  0000000000000000000
                </p>

                <p>
                  <span className="font-semibold text-black">Bank Name:</span>{" "}
                  Any Bank (USD Dollar Account)
                </p>

                <p>
                  <span className="font-semibold text-black">Account Type:</span>{" "}
                  USD Domiciliary Account
                </p>

              </div>

              {/* APPRECIATION */}
              <p className="mt-8 text-black/70 text-sm md:text-base leading-[1.7]">
                We appreciate your kind gestures and generosity in supporting this mission.
              </p>

            </div>

            {/* RIGHT - IMAGE GRID (DESKTOP) / BELOW (MOBILE) */}
            <div className="flex-1 w-full">

              <div className="grid grid-cols-2 gap-3">

                <img
                  src={img1}
                  className="w-full h-40 object-cover rounded-xl"
                />

                <img
                  src={img2}
                  className="w-full h-40 object-cover rounded-xl"
                />

                <img
                  src={img3}
                  className="w-full h-40 object-cover rounded-xl"
                />

                <img
                  src={img4}
                  className="w-full h-40 object-cover rounded-xl"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default DonateAnonymous;