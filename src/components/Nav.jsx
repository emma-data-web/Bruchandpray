import logoBlack from "../assets/logo1.png";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

 const goToSection = (id) => {
  closeMenu();

  const cleanId = id.replace("#", "");

  const scrollToElement = () => {
    const el = document.getElementById(cleanId);
    if (!el) return;

    const yOffset = -90; // fixes fixed navbar overlap
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  if (location.pathname !== "/") {
    navigate("/", { state: { scrollTo: cleanId } });

    // wait for page load then scroll
    setTimeout(scrollToElement, 300);
  } else {
    scrollToElement();
  }
};

  const goToPage = (path) => {
    closeMenu();
    navigate(path);
  };

  return (
    <>
      <div className="fixed top-3 z-50 w-[95%] left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-full shadow-xl px-6 py-3">

  <div className="flex items-center justify-between">

    {/* LOGO LEFT */}
    <img src={logoBlack} className="w-12 h-12" />

    {/* CENTER LINKS */}
    <div className="hidden md:flex gap-10 text-[11px] font-bold tracking-[0.15em] mx-auto">

      <button onClick={() => goToSection("mission")}>
        MISSION
      </button>

      <button onClick={() => goToPage("/get-book")}>
        BOOK
      </button>

      <button onClick={() => goToSection("founder")}>
        ABOUT FOUNDER
      </button>

      <button onClick={() => goToPage("/past-events")}>
        PAST EVENTS
      </button>

      <button onClick={() => goToPage("/upcoming-events")}>
        UPCOMING EVENTS
      </button>

    </div>

    {/* RIGHT SPACE (balances layout) */}
    <div className="w-12 md:w-12" />

    {/* MOBILE MENU ICON */}
    <IoMenu
      className="text-3xl cursor-pointer md:hidden"
      onClick={() => setMenuOpen(true)}
    />

  </div>
      </div>

      {/* BACKDROP */}
      <div
        onClick={closeMenu}
        className={`
          fixed inset-0 bg-black/50 backdrop-blur-sm z-[90]
          transition-all duration-300
          ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* MOBILE SIDEBAR */}
      <div
        className={`
          fixed top-0 left-0 h-screen w-[70%]
          bg-black text-white z-[100]
          transition-transform duration-500
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >

        {/* CLOSE */}
        <IoClose
          className="absolute top-6 right-6 text-4xl cursor-pointer"
          onClick={closeMenu}
        />

        {/* LOGO */}
        <img src={logoBlack} className="w-16 h-16 m-6" />

        {/* LINKS */}
        <div className="flex flex-col gap-6 px-6 mt-10 text-sm tracking-[0.15em]">

          <button onClick={() => goToSection("#mission")}>
            MISSION
          </button>

          <button onClick={() => goToPage("/get-book")}>
            BOOK
          </button>

          <button onClick={() => goToSection("#founder")}>
            ABOUT FOUNDER
          </button>

          <button onClick={() => goToPage("/past-events")}>
            PAST EVENTS
          </button>

          <button onClick={() => goToPage("/upcoming-events")}>
            UPCOMING EVENTS
          </button>

        </div>

      </div>
    </>
  );
};

export default Nav;