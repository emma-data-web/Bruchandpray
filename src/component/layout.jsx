import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { IoMailOutline, IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#dcd3ca] min-h-screen font-sans text-[#2e2c2b]">
      {/* --- DESKTOP SIDE NAVIGATION (STUCK TO RIGHT) --- */}
      <nav className="fixed bottom-4 right-5 hidden lg:flex gap-8 text-[11px] tracking-[0.4em] text-[#d84136] z-40 rotate-90 origin-top-right font-bold transition-opacity hover:opacity-100 opacity-70">
        <a href="/" className="hover:text-[#2e2c2b] transition-colors">HOME</a>
        <a href="/mission" className="hover:text-[#2e2c2b] transition-colors whitespace-nowrap">MISSION STATEMENT</a>
        <a href="/purpose" className="hover:text-[#2e2c2b] transition-colors whitespace-nowrap">PURPOSE & OUTREACH</a>
        <a href="/book" className="hover:text-[#2e2c2b] transition-colors">BOOK</a>
        <a href="/about" className="hover:text-[#2e2c2b] transition-colors whitespace-nowrap">ABOUT FOUNDER</a>
      </nav>

      {/* --- MOBILE HAMBURGER --- */}
      <button
        className="fixed top-8 right-6 text-4xl text-[#d84136] md:hidden z-50 bg-white/20 backdrop-blur-md p-2 rounded-full"
        onClick={() => setMenuOpen(true)}
      >
        <IoMenu />
      </button>

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
            {["HOME", "ABOUT", "VOICE", "BOOK", "SHOP", "CONTACT"].map((link) => (
              <a
                key={link}
                href={`/${link.toLowerCase()}`}
                className="text-5xl hover:text-[#d84136] transition-all tracking-wider"
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
      <footer className="bg-black w-full pt-32 pb-12 text-[#dcd3ca] mt-20 border-t border-[#d84136]/20">
        <div className="max-w-7xl mx-auto px-10">
          
          <div className="flex flex-col lg:grid lg:grid-cols-3 items-center gap-16 mb-24">
            
            {/* Left Stack */}
            <div className="flex flex-col gap-3 text-2xl tracking-[0.2em] items-center lg:items-start">
              <a href="/" className="hover:text-[#d84136] transition-colors">HOME</a>
              <a href="/mission" className="hover:text-[#d84136] transition-colors">MISSION STATEMENT</a>
              <a href="/book" className="hover:text-[#d84136] transition-colors">BOOKS</a>
              {/* <a href="/about" className="hover:text-[#d84136] transition-colors">ABOUT</a> */}
            </div>

            {/* Middle Branding */}
            <div className="flex flex-col items-center lg:border-x border-[#dcd3ca] px-10 py-4">
              {/* <h1 className="text-[#d84136] text-5xl md:text-6xl tracking-[0.1em] text-center leading-none mb-6">
                BRUNCH AND PRAY
              </h1> */}
              <img src="/logo-black.jpeg" />
              <div className="flex items-center gap-6 text-2xl">
                <FaFacebookF className="cursor-pointer hover:text-white transition-all hover:-translate-y-1" />
                <FaInstagram className="cursor-pointer hover:text-white transition-all hover:-translate-y-1" />
                <FaPinterestP className="cursor-pointer hover:text-white transition-all hover:-translate-y-1" />
                <IoMailOutline className="cursor-pointer hover:text-white transition-all hover:-translate-y-1" />
              </div>
            </div>

            {/* Right Stack */}
            <div className="flex flex-col gap-3 text-2xl tracking-[0.2em] items-center lg:items-end text-right">
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