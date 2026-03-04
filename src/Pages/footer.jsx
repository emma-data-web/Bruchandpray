import React from 'react'
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa"
import { IoMailOutline } from "react-icons/io5"

const Footer = () => {
  return (
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
  )
}

export default Footer
