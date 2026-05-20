import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { IoMailOutline, IoClose } from "react-icons/io5";
import { useState } from "react";

import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";

import logoBlack from "../assets/logo1.png";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-[#2a0f2e] via-[#3a1a3e] to-[#4a233e] min-h-screen font-sans text-[#f8e8f0] w-full">

      {/* --- NAV COMPONENT --- */}
      <Nav
        setMenuOpen={setMenuOpen}
        menuOpen={menuOpen}
      />

      {/* --- MOBILE OVERLAY MENU --- */}
      <>
        {/* BACKDROP */}
        <div
          className={`
            fixed
            inset-0

            bg-black/50
            backdrop-blur-sm

            z-[90]

            transition-all
            duration-500

            ${
              menuOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            }
          `}
          onClick={() => setMenuOpen(false)}
        />

        {/* SIDEBAR MENU */}
        <div
          className={`
            fixed
            top-0
            left-0

            h-screen

            w-[70%]
            sm:w-[45%]
            md:w-[35%]

            bg-black

            text-white

            z-[100]

            shadow-2xl

            px-6
            py-8

            flex
            flex-col

            transition-transform
            duration-500
            ease-in-out

            ${
              menuOpen
                ? "translate-x-0"
                : "-translate-x-full"
            }
          `}
        >

          {/* CLOSE BUTTON */}
          <button
            className="
              absolute
              top-6
              right-6

              text-4xl

              text-white

              hover:rotate-90

              transition
              duration-300
            "
            onClick={() => setMenuOpen(false)}
          >
            <IoClose />
          </button>

          {/* LOGO */}
          <div className="mb-12 mt-2">

            <img
              src={logoBlack}
              alt="logo"
              className="
                w-20
                h-20

                object-contain
              "
            />

          </div>

          {/* MENU TITLE */}
          <h2
            className="
              text-[#F39221]

              text-xl

              mb-10

              tracking-[0.3em]

              font-semibold
            "
          >
            MENU
          </h2>

          {/* LINKS */}
          <div className="flex flex-col gap-7">

            {[
              "MISSION",
              "BOOK",
              "ABOUT FOUNDER",
              "PAST EVENTS",
              "UPCOMING EVENTS",
            ].map((link) => (
              <a
                key={link}
                href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="
                  text-sm

                  tracking-[0.18em]

                  font-medium

                  hover:text-[#F39221]
                  hover:translate-x-3

                  transition-all
                  duration-300
                "
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}

          </div>

        </div>
      </>

      {/* --- MAIN PAGE CONTENT --- */}
      <main className="relative">
        {children}
      </main>

      <Footer />

    </div>
  );
};

export default Layout;