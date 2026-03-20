import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const layout = ({ children }) => {
 
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div>
        <nav className="absolute bottom-12 right-6 md:flex gap-5 mb-10 text-[12px] text-[#d84136] hidden z-20 rotate-90 origin-top-right">
          <a href="/" className="cursor-pointer">HOME</a>
          <a href="/mission" className="cursor-pointer">MISSION STATEMENT</a>
          <a href="/purpose" className="cursor-pointer">PURPOSE AND OUTREACH</a>
          <a href="/book" className="cursor-pointer">BOOK</a>
          <a href="/events" className="cursor-pointer">EVENTS</a>
          <a href="/about" className="cursor-pointer">ABOUT FOUNDER</a>
        </nav>

        <button
          className="absolute top-8 right-6 text-3xl text-[#d84136] md:hidden z-50"
          onClick={() => setMenuOpen(true)}
        >
          <IoMenu />
        </button>

        {menuOpen && (
          <div className="fixed inset-0 bg-black/90 text-white flex items-center justify-center z-50">
            <div
              className="absolute right-0 top-0 h-full w-64 bg-[#0e0e0e] p-10 
                    flex flex-col gap-8 text-lg transform transition-all duration-500 
                    translate-x-0"
            >
              <button
                className="absolute top-6 right-6 text-3xl"
                onClick={() => setMenuOpen(false)}
              >
                <IoClose />
              </button>

              <a
                className="hover:text-[#d84136]"
                onClick={() => setMenuOpen(false)}
              >
                HOME
              </a>
              <a
                className="hover:text-[#d84136]"
                onClick={() => setMenuOpen(false)}
              >
                ABOUT
              </a>
              <a
                className="hover:text-[#d84136]"
                onClick={() => setMenuOpen(false)}
              >
                VOICE
              </a>
              <a
                className="hover:text-[#d84136]"
                onClick={() => setMenuOpen(false)}
              >
                BOOK
              </a>
              <a
                className="hover:text-[#d84136]"
                onClick={() => setMenuOpen(false)}
              >
                SHOP
              </a>
              <a
                className="hover:text-[#d84136]"
                onClick={() => setMenuOpen(false)}
              >
                CONTACT
              </a>
            </div>
          </div>
        )}
      </div>
      <main>{children}</main>

      <div className="bg-[#0e0e0e] w-full py-20 text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-14 lg:gap-10 px-10">
          <div className="text-sm space-y-3 uppercase tracking-wider text-center lg:text-left">
            <a className="block hover:text-[#d84136]">Home</a>
            <a className="block hover:text-[#d84136]">Voice</a>
            <a className="block hover:text-[#d84136]">Book</a>
            <a className="block hover:text-[#d84136]">About</a>
          </div>

          <div className="hidden lg:block border-r border-white h-40"></div>

          <div className="text-center flex flex-col items-center gap-5">
            <h1 className="text-[#d84136] font-bold text-3xl tracking-[0.2em]">
              SHE SPEAKS FIRE
            </h1>

            <div className="flex items-center gap-5 text-lg">
              <FaFacebookF className="cursor-pointer hover:text-[#d84136]" />
              <FaInstagram className="cursor-pointer hover:text-[#d84136]" />
              <FaPinterestP className="cursor-pointer hover:text-[#d84136]" />
              <IoMailOutline className="cursor-pointer hover:text-[#d84136]" />
            </div>

            <p className="text-xs tracking-wide text-gray-300 text-center">
              ALL RIGHTS RESERVED — COMFORT ASUBIKE
              <span className="px-2">|</span>
              SITE CREDIT & TERMS
            </p>
          </div>

          <div className="hidden lg:block border-l border-white h-40"></div>

          <div className="text-sm space-y-3 uppercase tracking-wider text-center lg:text-right">
            <a className="block hover:text-[#d84136]">Freebie</a>
            <a className="block hover:text-[#d84136]">Shop</a>
            <a className="block hover:text-[#d84136]">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
