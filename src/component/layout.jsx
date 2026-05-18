import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { IoMailOutline, IoClose } from "react-icons/io5";
import { useState } from "react";
import Nav from "./Nav";
import Footer from "./footer";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-[#2a0f2e] via-[#3a1a3e] to-[#4a233e] min-h-screen font-sans text-[#f8e8f0] w-full">

      {/* --- NAV COMPONENT --- */}
      <Nav setMenuOpen={setMenuOpen} />

      {/* --- MOBILE OVERLAY MENU --- */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#2a0f2e]/95 backdrop-blur-xl text-[#f8e8f0] flex items-center justify-center z-[100] transition-all">

          <button
            className="absolute top-8 right-8 text-4xl text-[#e8b8d8]"
            onClick={() => setMenuOpen(false)}
          >
            <IoClose />
          </button>

          <div className="flex flex-col gap-6 text-center">
            <h2 className="text-[#e8b8d8] text-xl mb-4 tracking-widest">MENU</h2>

            {["HOME", "ABOUT", "MISSION", "EVENTS", "BOOK", "GET E-TICKET"].map((link) => (
              <a
                key={link}
                href={`/${link.toLowerCase()}`}
                className="text-sm hover:text-[#e8b8d8] transition-all tracking-wider"
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

      <Footer />

    </div>
  );
};

export default Layout;