import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { IoMailOutline, IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#dcd3ca] min-h-screen font-sans text-[#2e2c2b] w-full">
      {/* --- DESKTOP SIDE NAVIGATION (STUCK TO RIGHT) --- */}
      <nav className="fixed bg-white border border-gray-100 py-4 rounded-full backdrop:blur-lg left-1/2 -translate-x-1/2 my-4 shadow-2xl px-9 hidden lg:flex gap-16 text-[11px] tracking-[0.1em] text-[#d84136] z-40 font-bold transition-opacity hover:opacity-100 opacity-90 items-center w-[70%] justify-center">
        <a href="/" className="hover:text-[#2e2c2b] transition-colors overflow-y-hidden">
          <img src="/logo-white.jpeg" alt="logo" className="w-16 h-16"/>
        </a>
        <a href="/mission" className="hover:text-[#2e2c2b] transition-colors whitespace-nowrap">MISSION STATEMENT</a>
        <a href="/purpose" className="hover:text-[#2e2c2b] transition-colors whitespace-nowrap">PURPOSE & OUTREACH</a>
        <a href="/book" className="hover:text-[#2e2c2b] transition-colors">BOOK</a>
        <a href="/about" className="hover:text-[#2e2c2b] transition-colors whitespace-nowrap">ABOUT FOUNDER</a>
      </nav>

      {/* --- MOBILE HAMBURGER --- */}
      <div
        className="fixed top-3 px-4 text-4xl text-[#d84136] md:hidden z-50 bg-white/20 backdrop-blur-md p-2 rounded-full flex items-center justify-between w-full"
      >
        <a href="/" className="hover:text-[#2e2c2b] transition-colors">
          <img src="/logo-white.jpeg" alt="logo" className="w-12 h-12"/>
        </a>
        <IoMenu 
        onClick={() => setMenuOpen(true)} />
      </div>

      {/* --- MOBILE OVERLAY MENU --- */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#2e2c2b]/95 backdrop-blur-xl text-white flex items-center justify-center z-[100] transition-all">
          <button
            className="absolute top-8 right-8 text-4xl text-[#d84136]"
            onClick={() => setMenuOpen(false)}
          >
            <IoClose />
          </button>
          
          <div className="flex flex-col gap-6 text-center">
            <h2 className="text-[#d84136] text-3xl mb-4 tracking-widest">MENU</h2>
            {["HOME", "ABOUT", "MISSION", "PURPOSE", "BOOK"].map((link) => (
              <a
                key={link}
                href={`/${link.toLowerCase()}`}
                className="text-xl hover:text-[#d84136] transition-all tracking-wider"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* --- MAIN PAGE CONTENT --- */}
      <main className="relative">{children}</main>

      {/* --- REFINED FOOTER --- */}
      <footer className="bg-black w-full lg:pt-32 pt-4 pb-4 lg:pb-12 text-[#dcd3ca] border-t border-[#d84136]/20">
        <div className="max-w-7xl mx-auto lg:px-10 px-2">
          
          <div className="flex flex-col lg:grid lg:grid-cols-3 lg:items-center gap-16 mb-24">
            
            {/* Left Stack */}
            <div className="flex flex-col gap-3 text-sm tracking-[0.2em] items-start">
              <a href="/" className="hover:text-[#d84136] transition-colors">HOME</a>
              <a href="/mission" className="hover:text-[#d84136] transition-colors">MISSION STATEMENT</a>
              <a href="/book" className="hover:text-[#d84136] transition-colors">BOOKS</a><a href="/freebie" className="hover:text-[#d84136] transition-colors lg:hidden flex">PURPOSE & OUTREACH</a>
              <a href="/shop" className="hover:text-[#d84136] transition-colors lg:hidden flex">ABOUT FOUNDER</a>
            </div>

            {/* Middle Branding */}
            <div className="flex flex-col lg:items-center lg:border-x border-[#dcd3ca] lg:px-10 py-4">
              <img src="/logo-black.jpeg" className="w-30"/>
              <div className="flex items-center gap-6 text-2xl">
                <FaFacebookF className="cursor-pointer hover:text-white transition-all hover:-translate-y-1" />
                <a href="https://instagram.com/brunchandpray"><FaInstagram className="cursor-pointer hover:text-white transition-all hover:-translate-y-1" /></a>
                <FaPinterestP className="cursor-pointer hover:text-white transition-all hover:-translate-y-1" />
                <IoMailOutline className="cursor-pointer hover:text-white transition-all hover:-translate-y-1" />
              </div>
            </div>

            {/* Right Stack */}
            <div className="lg:flex hidden flex-col gap-3 text-sm tracking-[0.2em] items-center lg:items-end text-right">
              <a href="/freebie" className="hover:text-[#d84136] transition-colors">PURPOSE & OUTREACH</a>
              <a href="/shop" className="hover:text-[#d84136] transition-colors">ABOUT FOUNDER</a>
              {/* <a href="/contact" className="hover:text-[#d84136] transition-colors">CONTACT</a> */}
            </div>
          </div>

          {/* Divider & Copyright */}
          <div className="pt-4 border-t border-[#dcd3ca] flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.4em] uppercase opacity-40">
            <p>&copy; 2026 BRUNCH AND PRAY</p>
            {/* <div className="flex gap-4">
              <a href="#" className="hover:text-white">TERMS</a>
              <span>|</span>
              <a href="#" className="hover:text-white">PRIVACY</a>
            </div> */}
            <p>DESIGNED FOR PURPOSE</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;