import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import book1 from "../../assets/book3.png";
import book4 from "../../assets/book4.png";
import bgImage from "../../assets/bg-img.jpeg";

const books = [
  { title: "I know who I am", author: "Azubuike Comfort", image: book1, price: 10 },
  { title: "Becoming Her", author: "Ann Wilson", image: book4, price: 12 },
];

const DESKTOP_ITEMS = 3;

const Book = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const totalPages = isMobile ? books.length : Math.ceil(books.length / DESKTOP_ITEMS);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    setPageVisible(false);

    const fadeOut = setTimeout(() => {
      setAnimate(false);

      const fadeIn = setTimeout(() => {
        setPageVisible(true);
        setAnimate(true);
      }, 120);

      return () => clearTimeout(fadeIn);
    }, 150);

    return () => clearTimeout(fadeOut);
  }, [page]);

  const currentBooks = isMobile
    ? books.slice(page, page + 1)
    : books.slice(page * DESKTOP_ITEMS, page * DESKTOP_ITEMS + DESKTOP_ITEMS);

  const nextPage = () =>
    setPage((p) => (p === totalPages - 1 ? 0 : p + 1));

  const prevPage = () =>
    setPage((p) => (p === 0 ? totalPages - 1 : p - 1));

  const handleCheckout = (book) => {
    navigate("/get-book", {
      state: {
        title: book.title,
        author: book.author,
        image: book.image,
        price: book.price,
      },
    });
  };

  return (
    <section className="relative w-full overflow-hidden min-h-[100vh]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="absolute inset-0 bg-black/75 z-10" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-20 overflow-hidden">
        <h1 className="text-[10rem] md:text-[16rem] lg:text-[22rem] font-black uppercase text-white/[0.10]">
          BOOKS
        </h1>
      </div>

      <div className="relative z-30 max-w-[1400px] mx-auto px-5 md:px-10 py-20 flex flex-col items-center min-h-[100vh]">
        <h2 className="text-white text-3xl md:text-5xl font-bold text-center whitespace-nowrap">
          Books & <span className="text-[#F39221] italic">Authors We Love</span>
        </h2>

        <div
          className={`
            w-full mt-14 flex flex-row flex-nowrap justify-center items-end gap-10 overflow-hidden
            transition-all duration-300
            ${pageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          {currentBooks.map((book, index) => (
            <div
              key={index}
              className={`
                flex items-center gap-5 shrink-0
                transition-all duration-[1000ms]
                ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-[240px] md:w-[170px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.65)]"
              />

              <div className="flex flex-col w-[160px] md:w-[180px]">
                <h3 className="text-white text-sm md:text-lg font-bold leading-snug">
                  {book.title}
                </h3>

                <p className="text-[#F39221] text-xs uppercase tracking-[0.12em] mt-1">
                  {book.author}
                </p>

                <button
                  onClick={() => handleCheckout(book)}
                  className="
                    mt-4 w-fit
                    bg-white text-black
                    px-4 py-2 rounded-full
                    uppercase text-[10px]
                    tracking-[0.2em]
                    transition-all duration-300
                    hover:bg-[#F39221] hover:text-white
                  "
                >
                  Get Book
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6 mt-14">
          <button onClick={prevPage} className="text-white text-2xl hover:text-[#F39221]">
            ‹
          </button>

          <div className="flex gap-3">
            {Array.from({ length: typeof window !== "undefined" && window.innerWidth < 768 ? 2 : 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setPage(index)}
                className={`
                  w-3 h-3 rounded-full transition-all
                  ${page === index
                    ? "bg-[#F39221]"
                    : "border border-[#F39221]/60"
                  }
                `}
              />
            ))}
          </div>

          <button onClick={nextPage} className="text-white text-2xl hover:text-[#F39221]">
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Book;