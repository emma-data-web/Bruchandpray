import "./Hero.css";

const Hero = () => {
  return (
    <section className="bp-hero">

      {/* FIRST TWO MAJOR BIG BACKGROUND RINGS */}
      <div className="bp-rings">
        <span className="bp-ring" />
        <span className="bp-ring" />
      </div>

      {/* THE main CENTER CONTENTS */}
      <div className="bp-center">

        <div style={{ marginTop: "72px" }} />

        <div className="bp-tag">
          <span className="bp-tag-dot" />
          COMMUNITY · FAITH · GROWTH
        </div>

        <h1 className="bp-title">
          Brunch <span>&amp;</span> Pray
        </h1>

        {/* LITTLE CUSTOMIZED ARROW */}
        <div className="bp-arrow-wrap">
          <span className="bp-arrow-line" />
          <span className="bp-arrow-head" />
        </div>

        <p className="bp-tagline">
          Where women gather around a table, share life honestly,
          and encounter God in the middle of it all.
        </p>

        <div className="bp-btns">
          <button className="bp-btn-primary">Join the Table</button>
          <button className="bp-btn-ghost">Our Mission</button>
        </div>

        <div className="bp-people">
          <div className="bp-avatars">
            <span><img src="/src/assets/circle-1.png" alt="one"/></span>
            <span><img src="/src/assets/circle-2.png" alt="two"/></span>
            <span><img src="/src/assets/circle-3.png" alt="three"/></span>
            <span><img src="/src/assets/circle-4.png" alt="four"/></span>
            <span><img src="/src/assets/circle-5.png" alt="five"/></span>
          </div>
          <div className="bp-person-text">
            <p><strong>30+ women</strong> gathered together </p> 
           
          </div>
        </div>

      </div>

    </section>
  );
};

export default Hero;