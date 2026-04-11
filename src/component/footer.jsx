import HeroBg from "../../assets/herobg.jpg";

const Hero = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        .bp-hero {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        /* LEFT */
        .bp-left {
          background: #fff5ee;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 60px 48px 60px 60px;
          position: relative;
          z-index: 2;
        }
        .bp-arc-deco {
          position: absolute;
          width: 320px; height: 320px;
          border-radius: 50%;
          border: 60px solid rgba(243,146,33,0.07);
          top: -80px; right: -100px;
          pointer-events: none;
          z-index: 0;
        }

        .bp-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #6A2B73;
          color: #fff;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 999px;
          margin-bottom: 40px;
          width: fit-content;
          animation: bpUp .8s ease both;
        }
        .bp-tag-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #F39221;
          flex-shrink: 0;
        }

        .bp-brunch {
          display: block;
          font-family: 'DM Serif Display', serif;
          font-style: italic;
          font-weight: 400;
          font-size: clamp(3.6rem, 8vw, 7.5rem);
          color: #1a0a1e;
          line-height: 0.9;
          animation: bpUp .8s ease .12s both;
        }
        .bp-and {
          display: block;
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: clamp(0.85rem, 1.8vw, 1.1rem);
          letter-spacing: 0.45em;
          color: #C06090;
          text-transform: uppercase;
          margin: 12px 0 6px;
          animation: bpUp .8s ease .22s both;
        }
        .bp-pray {
          display: block;
          font-family: 'DM Serif Display', serif;
          font-weight: 400;
          font-size: clamp(3.6rem, 8vw, 7.5rem);
          color: #6A2B73;
          line-height: 0.9;
          animation: bpUp .8s ease .3s both;
        }

        .bp-divider {
          display: flex;
          align-items: center;
          gap: 14px;
          margin: 32px 0;
          animation: bpUp .8s ease .42s both;
        }
        .bp-div-line { flex: 1; height: 1px; background: rgba(106,43,115,0.15); }
        .bp-div-diamond {
          width: 7px; height: 7px;
          background: #F39221;
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        .bp-tagline {
          font-size: clamp(0.92rem, 1.6vw, 1.05rem);
          font-weight: 300;
          color: #5a3a3a;
          line-height: 1.75;
          max-width: 340px;
          margin-bottom: 44px;
          animation: bpUp .8s ease .52s both;
        }

        .bp-btns {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          animation: bpUp .8s ease .62s both;
        }
        .bp-btn-primary {
          background: #B21E29;
          color: #fff;
          border: none;
          padding: 14px 34px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 999px;
          transition: background .25s, transform .2s;
        }
        .bp-btn-primary:hover { background: #F39221; transform: translateY(-2px); }
        .bp-btn-ghost {
          background: transparent;
          color: #6A2B73;
          border: 1.5px solid #6A2B73;
          padding: 14px 34px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 999px;
          transition: background .25s, color .25s, transform .2s;
        }
        .bp-btn-ghost:hover { background: #6A2B73; color: #fff; transform: translateY(-2px); }

        .bp-proof {
          position: absolute;
          bottom: 36px; left: 60px;
          display: flex;
          align-items: center;
          gap: 14px;
          animation: bpUp .8s ease .75s both;
          z-index: 2;
        }
        .bp-proof-faces { display: flex; }
        .bp-proof-face {
          width: 32px; height: 32px;
          border-radius: 50%;
          border: 2px solid #fff5ee;
          margin-left: -8px;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 500;
        }
        .bp-proof-face:first-child { margin-left: 0; }
        .bp-proof-text { font-size: 12px; color: #9a7090; font-weight: 300; line-height: 1.4; }
        .bp-proof-text strong { color: #6A2B73; font-weight: 500; }

        /* RIGHT */
        .bp-right {
          background: #6A2B73;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bp-blob-orange {
          position: absolute;
          width: 220px; height: 220px;
          border-radius: 50%;
          background: #F39221;
          opacity: 0.18;
          top: -60px; right: -40px;
          z-index: 1;
        }
        .bp-blob-cyan {
          position: absolute;
          width: 160px; height: 160px;
          border-radius: 50%;
          background: #00A5BC;
          opacity: 0.2;
          bottom: -40px; left: 10%;
          z-index: 1;
        }
        .bp-arch {
          position: absolute;
          left: -80px; top: 50%;
          transform: translateY(-50%);
          width: 320px; height: 420px;
          border-radius: 999px 999px 0 0;
          background: #fff5ee;
          z-index: 1;
        }
        .bp-people-wrap {
          position: absolute;
          inset: 0;
          z-index: 2;
          overflow: hidden;
        }
        .bp-people-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center 15%;
          mix-blend-mode: luminosity;
          opacity: 0.45;
        }
        .bp-circles {
          position: absolute;
          inset: 0;
          z-index: 4;
        }
        .bp-circ {
          position: absolute;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid rgba(255,255,255,0.18);
        }
        .bp-circ-inner {
          width: 100%; height: 100%;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
        }
        .bp-watermark {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          z-index: 6;
          font-family: 'DM Serif Display', serif;
          font-style: italic;
          font-size: clamp(5rem, 12vw, 10rem);
          color: rgba(255,255,255,0.06);
          line-height: 1;
          user-select: none;
          pointer-events: none;
          white-space: nowrap;
        }
        .bp-color-bar {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 6px;
          display: flex;
          z-index: 10;
        }
        .bp-right-label {
          position: absolute;
          z-index: 5;
          bottom: 48px; right: 28px;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          font-family: 'DM Serif Display', serif;
          font-style: italic;
          font-size: 13px;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.3);
          text-transform: uppercase;
        }

        @keyframes bpUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .bp-hero { grid-template-columns: 1fr; grid-template-rows: auto 55vw; }
          .bp-left { padding: 40px 28px 80px; }
          .bp-proof { left: 28px; bottom: 20px; }
          .bp-right-label { display: none; }
        }
      `}</style>

      <section className="bp-hero">

        {/* ── LEFT PANEL ── */}
        <div className="bp-left">
          <div className="bp-arc-deco" />

          <div className="bp-tag">
            <span className="bp-tag-dot" />
            A women's faith community
          </div>

          <h1>
            <span className="bp-brunch">Brunch</span>
            <span className="bp-and">& &nbsp;&nbsp;</span>
            <span className="bp-pray">Pray</span>
          </h1>

          <div className="bp-divider">
            <span className="bp-div-line" />
            <span className="bp-div-diamond" />
            <span className="bp-div-line" />
          </div>

          <p className="bp-tagline">
            Where women gather around a table, share life honestly,
            and encounter God in the middle of it all.
          </p>

          <div className="bp-btns">
            <button className="bp-btn-primary">Join the Table</button>
            <button className="bp-btn-ghost">Our Mission</button>
          </div>

          <div className="bp-proof">
            <div className="bp-proof-faces">
              <div className="bp-proof-face" style={{ background: "#d4a0d4", color: "#6A2B73" }}>A</div>
              <div className="bp-proof-face" style={{ background: "#b0d4e8", color: "#185FA5" }}>B</div>
              <div className="bp-proof-face" style={{ background: "#f5c4b3", color: "#993C1D" }}>C</div>
              <div className="bp-proof-face" style={{ background: "#c0dd97", color: "#3B6D11" }}>D</div>
            </div>
            <div className="bp-proof-text">
              <strong>200+ women</strong><br />gathered at the table
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="bp-right">
          <div className="bp-blob-orange" />
          <div className="bp-blob-cyan" />
          <div className="bp-arch" />

          <div className="bp-people-wrap">
            <img src="/people.jpeg" alt="Women gathered at Brunch & Pray" />
          </div>

          {/* Scattered face circles */}
          <div className="bp-circles">
            <div className="bp-circ" style={{ width: 90, height: 90, top: "8%", left: "18%", borderColor: "rgba(243,146,33,0.4)" }}>
              <div className="bp-circ-inner" />
            </div>
            <div className="bp-circ" style={{ width: 60, height: 60, top: "20%", right: "12%", borderColor: "rgba(255,255,255,0.15)" }}>
              <div className="bp-circ-inner" />
            </div>
            <div className="bp-circ" style={{ width: 110, height: 110, top: "38%", right: "8%", borderColor: "rgba(0,165,188,0.35)" }}>
              <div className="bp-circ-inner" />
            </div>
            <div className="bp-circ" style={{ width: 70, height: 70, bottom: "28%", left: "10%", borderColor: "rgba(255,255,255,0.12)" }}>
              <div className="bp-circ-inner" />
            </div>
            <div className="bp-circ" style={{ width: 50, height: 50, bottom: "14%", right: "20%", borderColor: "rgba(243,146,33,0.3)" }}>
              <div className="bp-circ-inner" />
            </div>
          </div>

          <div className="bp-watermark">B&amp;P</div>

          {/* 4-color brand stripe */}
          <div className="bp-color-bar">
            <div style={{ flex: 1, background: "#F39221" }} />
            <div style={{ flex: 1, background: "#B21E29" }} />
            <div style={{ flex: 1, background: "#00A5BC" }} />
            <div style={{ flex: 1, background: "#6A2B73" }} />
          </div>

          <div className="bp-right-label">Faith · Food · Fellowship</div>
        </div>

      </section>
    </>
  );
};

export default Hero;