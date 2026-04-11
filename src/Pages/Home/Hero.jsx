import "./Hero.css";

const ArrowPointer = () => (
  <svg
    className="bp-arrow-pointer"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M5 12H17M17 12L12 7M17 12L12 17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Hero = () => {
  return (
    <section className="bp-hero">

      {/* BIG ANIMATED BACKGROUND RINGS */}
      <div className="bp-rings">
        <span className="bp-ring" />
        <span className="bp-ring" />
        <span className="bp-ring" />
      </div>

      {/* CENTER CONTENT WRAPPER */}
      <div className="bp-center">

        <div className="bp-tag">
          <span className="bp-tag-dot" />
          COMMUNITY · FAITH · GROWTH
        </div>

        <h1 className="bp-title">
          Brunch <span>&amp;</span> Pray
        </h1>

        <p className="bp-tagline">
          Where women gather around a table, share life honestly,
          and encounter God in the middle of it all.
        </p>

        <div className="bp-btns">
          <button className="bp-btn-primary">Join the Table</button>
          <button className="bp-btn-ghost">Our Mission</button>
        </div>

        <div className="bp-proof">
          <div className="bp-avatars">
            <span>A</span>
            <span>B</span>
            <span>C</span>
            <span>D</span>
            <span>E</span>
          </div>
          <div className="bp-proof-text">
            <strong>200+ women</strong>
            gathered together
          </div>
        </div>

      </div>

    </section>
  );
};

export default Hero;