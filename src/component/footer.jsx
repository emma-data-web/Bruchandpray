import React from 'react';

import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
      <footer className="bg-black w-full lg:pt-32 pt-4 pb-4 lg:pb-12 text-white border-t border-white/10">

        <div className="max-w-7xl mx-auto lg:px-10 px-2">

          <div className="flex flex-col lg:grid lg:grid-cols-3 lg:items-center gap-16 mb-24">

            {/* Left Stack */}
            <div className="flex flex-col gap-3 text-sm tracking-[0.2em] items-start">

              <a href="/" className="hover:text-[#F39221] transition-colors">
                HOME
              </a>

              <a href="/mission" className="hover:text-[#F39221] transition-colors">
                MISSION STATEMENT
              </a>

              <a href="/book" className="hover:text-[#F39221] transition-colors">
                BOOKS
              </a>

              <a href="/freebie" className="hover:text-[#F39221] transition-colors lg:hidden flex">
                PURPOSE & OUTREACH
              </a>

              <a href="/shop" className="hover:text-[#F39221] transition-colors lg:hidden flex">
                ABOUT FOUNDER
              </a>

            </div>

            {/* Middle Branding */}
            <div className="flex flex-col lg:items-center lg:border-x border-white/10 lg:px-10 py-4">

              <img
                src="/src/assets/logo2.png"
                className="w-30 filter"
              />

              <div className="flex items-center gap-6 text-2xl">

                <FaFacebookF className="cursor-pointer hover:text-[#F39221] transition-all hover:-translate-y-1" />

                <a href="https://instagram.com/brunchandpray">
                  <FaInstagram className="cursor-pointer hover:text-[#F39221] transition-all hover:-translate-y-1" />
                </a>

                <FaPinterestP className="cursor-pointer hover:text-[#F39221] transition-all hover:-translate-y-1" />

                <IoMailOutline className="cursor-pointer hover:text-[#F39221] transition-all hover:-translate-y-1" />

              </div>

            </div>

            {/* Right Stack */}
            <div className="lg:flex hidden flex-col gap-3 text-sm tracking-[0.2em] items-center lg:items-end text-right">

              <a href="/freebie" className="hover:text-[#F39221] transition-colors">
                PURPOSE & OUTREACH
              </a>

              <a href="/shop" className="hover:text-[#F39221] transition-colors">
                ABOUT FOUNDER
              </a>

            </div>

          </div>

          {/* Divider & Copyright */}
          <div className="pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.4em] uppercase opacity-60">

            <p>&copy; 2026 BRUNCH AND PRAY</p>

            <p>DESIGNED FOR PURPOSE</p>

          </div>

        </div>

      </footer>
  );
};

export default Footer;