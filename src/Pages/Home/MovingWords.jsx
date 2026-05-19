const MovingWords = () => {
  const words = [
    "faith",
    "sisterhood",
    "purpose",
    "growth",
    "prayer",
    "impact",
  ];

  return (
    <section className="w-full overflow-hidden py-2 bg-transparent">

      <div className="marquee-wrapper">

        <div className="marquee-track">

          {[...words, ...words].map((word, i) => (
            <div
              key={i}
              className="flex items-center flex-shrink-0"
            >
              <span className="text-lg md:text-xl font-light italic tracking-[0.12em] text-[#8B5E3C]">
                {word}
              </span>

              <span className="mx-10 text-[#F39221]/60 text-sm">
                ✦
              </span>
            </div>
          ))}

        </div>

      </div>

      <style>{`
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
        }

        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: scroll 24s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </section>
  );
};

export default MovingWords;