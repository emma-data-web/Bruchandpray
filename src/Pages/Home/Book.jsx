import { useNavigate } from "react-router-dom";
import bookImg from "../../assets/book.png";

const Book = () => {

  const navigate = useNavigate();

  return (
    <section className="w-full bg-black py-20 px-5 md:px-10">

      {/* WRAPPER */}
      <div
        className="
          w-full
          max-w-[1200px]
          mx-auto
          flex
          flex-col
          lg:flex-row
          items-center
          gap-12
        "
      >

        {/* LEFT IMAGE */}
        <div
          className="
            w-full
            lg:w-[42%]
            flex
            items-center
            justify-center
          "
        >

          <img
  src={bookImg}
  alt="book"
  className="
    w-[260px]
    sm:w-[320px]
    md:w-[360px]
    object-contain
    rounded-[24px]
    shadow-none
    bg-transparent
  "
/>

        </div>

        {/* RIGHT CONTENT */}
        <div
          className="
            w-full
            lg:w-[58%]
            text-center
            lg:text-left
          "
        >

          {/* GET BOOK */}
          <h2
            className="
              text-[#F39221]
              text-[2.3rem]
              sm:text-[2.7rem]
              md:text-5xl
              font-semibold
              italic
              mb-5
            "
          >
            Get Book
          </h2>

          {/* BOOK TITLE */}
          <h3
            className="
              text-white
              text-2xl
              md:text-4xl
              font-bold
              leading-[1.2]
              mb-6
            "
          >
            I Know Who I Am
          </h3>

          {/* DESCRIPTION */}
          <p
            className="
              text-white/70
              text-sm
              md:text-[15px]
              leading-[1.9]
              max-w-[650px]
              mx-auto
              lg:mx-0
              mb-8
            "
          >
            Explore faith-filled books designed to encourage,
            strengthen, and empower women in every season
            of life from biblical concepts, identity,
            purpose, spiritual growth, and Christ-centered
            teachings.
          </p>

          {/* BUTTON */}
          <button
            onClick={() => navigate("/get-book")}
            className="
              bg-[#F39221]
              text-white
              px-8
              py-4
              rounded-full
              uppercase
              text-[11px]
              tracking-[0.22em]
              hover:bg-[#DD7F12]
              transition-all
              duration-300
            "
          >
            Order Book
          </button>

        </div>

      </div>

    </section>
  );
};

export default Book;