import { useNavigate, useLocation } from "react-router-dom";
import logoBlack from "../assets/logo1.png";
import { IoMenu, IoClose } from "react-icons/io5";

const Nav = ({ setMenuOpen, menuOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <>
      {/* DESKTOP NAV */}
      <nav className="fixed bg-white/100 backdrop-blur-xl border border-orange-200/30 py-4 rounded-full left-1/2 -translate-x-1/2 my-4 shadow-2xl px-9 hidden lg:flex gap-12 text-[11px] text-black z-40 font-bold items-center w-[80%] justify-center">

        <a href="/" className="mr-6">
          <img src={logoBlack} className="w-12 h-10" />
        </a>

        <button onClick={() => scrollToSection("mission")}>MISSION</button>

        <a href="/get-book">BOOK</a>

        <button onClick={() => scrollToSection("founder")}>
          ABOUT FOUNDER
        </button>

        <a href="/past-events">PAST EVENTS</a>

        <a href="/upcoming-events">UPCOMING EVENTS</a>

      </nav>

      {/* MOBILE TOP BAR */}
      <div className="fixed top-3 px-4 text-4xl md:hidden z-50 bg-white/95 backdrop-blur-xl py-2 rounded-full flex items-center justify-between w-[95%] left-1/2 -translate-x-1/2 shadow-xl">

        <a href="/">
          <img src={logoBlack} className="w-12 h-12" />
        </a>

        <IoMenu onClick={() => setMenuOpen(true)} />
      </div>

      {/* MOBILE SIDEBAR */}
      <div className={`fixed top-0 left-0 h-screen w-[70%] bg-[#F39221] z-[100] shadow-2xl flex flex-col px-6 py-8 transition-transform duration-500 ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      }`}>

        <div className="flex justify-between mb-10">
          <img src={logoBlack} className="w-14 h-14" />
          <IoClose className="text-4xl text-white" onClick={() => setMenuOpen(false)} />
        </div>

        <div className="flex flex-col gap-6 text-white font-semibold text-sm">

          <button onClick={() => scrollToSection("mission")}>MISSION</button>

          <a href="/get-book" onClick={() => setMenuOpen(false)}>BOOK</a>

          <button onClick={() => scrollToSection("founder")}>
            ABOUT FOUNDER
          </button>

          <a href="/past-events" onClick={() => setMenuOpen(false)}>
            PAST EVENTS
          </a>

          <a href="/upcoming-events" onClick={() => setMenuOpen(false)}>
            UPCOMING EVENTS
          </a>

        </div>
      </div>

      {/* BACKDROP ALWAYS WORKS */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90]"
        />
      )}
    </>
  );
};

export default Nav;