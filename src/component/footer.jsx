// import React from 'react'
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa"
import { IoMailOutline } from "react-icons/io5"

const Footer = () => {
  return (
    <footer className="bg-[#1a1918] w-full pt-24 pb-12 text-[#dcd3ca] border-t border-[#d84136]/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP SECTION: GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center mb-20">
          
          {/* Left Navigation */}
          <div className="flex flex-col gap-4 font-['Bebas_Neue'] text-2xl tracking-[0.15em] items-center lg:items-start transition-all">
            <a href="/" className="hover:text-[#d84136] transition-colors">HOME</a>
            <a href="/voice" className="hover:text-[#d84136] transition-colors">THE VOICE</a>
            <a href="/book" className="hover:text-[#d84136] transition-colors">THE BOOK</a>
            <a href="/about" className="hover:text-[#d84136] transition-colors">ABOUT COMFORT</a>
          </div>

          {/* Center Brand Identity */}
          <div className="flex flex-col items-center border-y lg:border-y-0 lg:border-x border-[#dcd3ca]/20 py-10 lg:py-0 px-10">
            <h2 className="text-5xl md:text-6xl text-[#d84136] leading-none mb-6 text-center">
              SHE SPEAKS<br/>FIRE
            </h2>
            <div className="flex items-center gap-8 text-xl">
              <FaFacebookF className="cursor-pointer hover:scale-110 hover:text-white transition-all" />
              <FaInstagram className="cursor-pointer hover:scale-110 hover:text-white transition-all" />
              <FaPinterestP className="cursor-pointer hover:scale-110 hover:text-white transition-all" />
              <IoMailOutline className="cursor-pointer hover:scale-110 hover:text-white transition-all" />
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex flex-col gap-4 font-['Bebas_Neue'] text-2xl tracking-[0.15em] items-center lg:items-end transition-all">
            <a href="/freebie" className="hover:text-[#d84136] transition-colors">RESOURCES</a>
            <a href="/shop" className="hover:text-[#d84136] transition-colors">THE SHOP</a>
            <a href="/contact" className="hover:text-[#d84136] transition-colors">CONTACT</a>
            <a href="/terms" className="hover:text-[#d84136] transition-colors text-sm opacity-50 font-sans tracking-normal">TERMS & PRIVACY</a>
          </div>

        </div>

        {/* BOTTOM SECTION: CREDITS */}
        <div className="pt-10 border-t border-[#dcd3ca]/10 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60 text-[10px] tracking-[0.3em] uppercase">
          <p>© 2026 SHE SPEAKS FIRE MOVEMENT</p>
          <p>ESTABLISHED IN PURPOSE — COMFORT ASUBIKE</p>
          <p className="hover:text-[#d84136] cursor-pointer transition-colors">Designed for Impact</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer