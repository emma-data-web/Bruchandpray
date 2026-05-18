import "./Hero.css";
import {circle1} from "../../assets/circle-1.png";
import {circle2} from "../../assets/circle-2.png";
import {circle3} from "../../assets/circle-3.png";
import {circle4} from "../../assets/circle-4.png";
import {circle5} from "../../assets/circle-5.png";

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
            <span><img src={circle1} alt="one"/></span>
            <span><img src={circle2} alt="two"/></span>
            <span><img src={circle3} alt="three"/></span>
            <span><img src={circle4} alt="four"/></span>
            <span><img src={circle5} alt="five"/></span>
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