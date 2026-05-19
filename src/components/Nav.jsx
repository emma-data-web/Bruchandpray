import logoBlack from "../assets/logo1.png";
import { IoMenu } from "react-icons/io5";

const Nav = ({ setMenuOpen }) => {
  return (
    <>
      {/* --- DESKTOP NAVIGATION --- */}
     <nav className="fixed bg-white/100 backdrop-blur-xl border border-orange-200/30 py-4
rounded-full left-1/2 -translate-x-1/2 my-4 shadow-2xl px-9 hidden lg:flex gap-12 text-[11px]
text-black z-40 font-bold transition-opacity hover:opacity-100 opacity-90
items-center w-[80%] justify-center">

        <a href="/" className="hover:text-black mr-6">
          <img src={logoBlack} alt="logo" className="w-12 h-10"/>
        </a>

        <a href="/mission" className="hover:text-[#F39221] whitespace-nowrap">MISSION</a>
        <a href="/book" className="hover:text-[#F39221]">BOOK</a>
        <a href="/about" className="hover:text-[#F39221] whitespace-nowrap">ABOUT FOUNDER</a>
        <a href="/events" className="hover:text-[#F39221] whitespace-nowrap">EVENTS</a>
        <a href="/get-tickets" className="hover:text-[#F39221] whitespace-nowrap">GET TICKETS</a>

      </nav>

      {/* --- MOBILE HAMBURGER --- */}
      <div className="fixed top-3 px-4 text-4xl text-black md:hidden z-50 bg-white/90 backdrop-blur-xl p-2 rounded-full flex
      items-center justify-between w-[95%] left-1/2 -translate-x-1/2 shadow-xl">
        <a href="/" className="hover:text-[#f8e8f0] transition-colors">
          <img src={logoBlack} alt="logo" className="w-12 h-12"/>
        </a>

        <IoMenu onClick={() => setMenuOpen(true)} />
      </div>
    </>
  );
};

export default Nav;