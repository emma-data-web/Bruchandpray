const AnimatedLogo = () => {
  return (
    <svg
      viewBox="0 0 1200 820"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[340px] sm:w-[250px] md:w-[460px]"
    >
      <defs>
        <linearGradient id="rayGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F7B046" />
          <stop offset="100%" stopColor="#E56A00" />
        </linearGradient>

        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F7B046" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>

      <style>{`

        .ray-line {
          stroke: url(#rayGradient);
          stroke-width: 18;
          stroke-linecap: round;
          fill: none;

          stroke-dasharray: 300;
          stroke-dashoffset: 300;

          animation: drawLine 6s ease-in-out infinite;
        }

        /* slight offsets so it feels alive but still loops clean */
        .ray1a { animation-delay: 0s; }
        .ray1b { animation-delay: 0.1s; }
        .ray2a { animation-delay: 0.2s; }
        .ray2b { animation-delay: 0.3s; }
        .ray3a { animation-delay: 0.4s; }
        .ray3b { animation-delay: 0.5s; }
        .ray4a { animation-delay: 0.6s; }
        .ray4b { animation-delay: 0.7s; }
        .ray5a { animation-delay: 0.8s; }
        .ray5b { animation-delay: 0.9s; }
        .ray6a { animation-delay: 1s; }
        .ray6b { animation-delay: 1.1s; }
        .ray7a { animation-delay: 1.2s; }
        .ray7b { animation-delay: 1.3s; }

        .arc {
          fill: none;
          stroke: #E56A00;
          stroke-width: 18;
          stroke-linecap: round;

          stroke-dasharray: 1600;
          stroke-dashoffset: 1600;

          animation: drawArc 6s ease-in-out infinite;
        }

        .logo-text {
          fill: url(#textGradient);

          font-family: serif;
          font-size: 82px;
          letter-spacing: 8px;
          font-weight: 300;

          animation: revealText 6s ease-in-out infinite;
        }

        .underline {
          stroke: #E56A00;
          stroke-width: 14;
          stroke-linecap: round;

          stroke-dasharray: 300;
          stroke-dashoffset: 300;

          animation: drawUnderline 6s ease-in-out infinite;
        }

        /* ================= ANIMATIONS ================= */

        @keyframes drawLine {
          0% {
            stroke-dashoffset: 300;
            opacity: 0;
          }

          30% {
            opacity: 1;
          }

          60% {
            stroke-dashoffset: 0;
            opacity: 1;
          }

          100% {
            stroke-dashoffset: 300;
            opacity: 0;
          }
        }

        @keyframes drawArc {
          0% {
            stroke-dashoffset: 1600;
            opacity: 0;
          }

          30% {
            opacity: 1;
          }

          60% {
            stroke-dashoffset: 0;
            opacity: 1;
          }

          100% {
            stroke-dashoffset: 1600;
            opacity: 0;
          }
        }

        @keyframes revealText {
          0% {
            opacity: 0.2;
            letter-spacing: 24px;
          }

          50% {
            opacity: 1;
            letter-spacing: 8px;
          }

          100% {
            opacity: 0.2;
            letter-spacing: 24px;
          }
        }

        @keyframes drawUnderline {
          0% {
            stroke-dashoffset: 300;
            opacity: 0;
          }

          50% {
            opacity: 1;
          }

          70% {
            stroke-dashoffset: 0;
            opacity: 1;
          }

          100% {
            stroke-dashoffset: 300;
            opacity: 0;
          }
        }

      `}</style>

      {/* RAYS */}
      <line className="ray-line ray1a" x1="90" y1="430" x2="250" y2="470" />
      <line className="ray-line ray1b" x1="130" y1="350" x2="250" y2="470" />

      <line className="ray-line ray2a" x1="210" y1="270" x2="360" y2="430" />
      <line className="ray-line ray2b" x1="280" y1="210" x2="360" y2="430" />

      <line className="ray-line ray3a" x1="380" y1="170" x2="500" y2="390" />
      <line className="ray-line ray3b" x1="450" y1="130" x2="500" y2="390" />

      <line className="ray-line ray4a" x1="590" y1="110" x2="600" y2="360" />
      <line className="ray-line ray4b" x1="650" y1="110" x2="600" y2="360" />

      <line className="ray-line ray5a" x1="760" y1="130" x2="700" y2="390" />
      <line className="ray-line ray5b" x1="840" y1="170" x2="700" y2="390" />

      <line className="ray-line ray6a" x1="920" y1="210" x2="840" y2="430" />
      <line className="ray-line ray6b" x1="1010" y1="270" x2="840" y2="430" />

      <line className="ray-line ray7a" x1="1060" y1="350" x2="950" y2="470" />
      <line className="ray-line ray7b" x1="1120" y1="430" x2="950" y2="470" />

      {/* ARC */}
      <path
        className="arc"
        d="M250 610 A460 460 0 0 1 950 610"
      />

      {/* TEXT */}
      <text
        x="600"
        y="730"
        textAnchor="middle"
        className="logo-text"
      >
        BRUNCH & PRAY
      </text>

      {/* UNDERLINE */}
      <line
        className="underline"
        x1="470"
        y1="790"
        x2="730"
        y2="790"
      />
    </svg>
  );
};

export default AnimatedLogo;

//white colored

// const AnimatedLogo = () => {
//   return (
//     <svg
//       viewBox="0 0 1200 820"
//       xmlns="http://www.w3.org/2000/svg"
//       className="w-[340px] sm:w-[250px] md:w-[460px]"
//     >
//       <defs>

//         {/* WHITE GRADIENTS */}
//         <linearGradient id="rayGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//           <stop offset="0%" stopColor="#FFFFFF" />
//           <stop offset="100%" stopColor="#EAEAEA" />
//         </linearGradient>

//         <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//           <stop offset="0%" stopColor="#FFFFFF" />
//           <stop offset="100%" stopColor="#F5F5F5" />
//         </linearGradient>

//       </defs>

//       <style>{`

//         .ray-line {
//           stroke: url(#rayGradient);
//           stroke-width: 18;
//           stroke-linecap: round;
//           fill: none;

//           stroke-dasharray: 300;
//           stroke-dashoffset: 300;

//           animation: drawLine 6s ease-in-out infinite;
//         }

//         /* slight offsets so it feels alive but still loops clean */
//         .ray1a { animation-delay: 0s; }
//         .ray1b { animation-delay: 0.1s; }
//         .ray2a { animation-delay: 0.2s; }
//         .ray2b { animation-delay: 0.3s; }
//         .ray3a { animation-delay: 0.4s; }
//         .ray3b { animation-delay: 0.5s; }
//         .ray4a { animation-delay: 0.6s; }
//         .ray4b { animation-delay: 0.7s; }
//         .ray5a { animation-delay: 0.8s; }
//         .ray5b { animation-delay: 0.9s; }
//         .ray6a { animation-delay: 1s; }
//         .ray6b { animation-delay: 1.1s; }
//         .ray7a { animation-delay: 1.2s; }
//         .ray7b { animation-delay: 1.3s; }

//         .arc {
//           fill: none;
//           stroke: #FFFFFF;
//           stroke-width: 18;
//           stroke-linecap: round;

//           stroke-dasharray: 1600;
//           stroke-dashoffset: 1600;

//           animation: drawArc 6s ease-in-out infinite;
//         }

//         .logo-text {
//           fill: url(#textGradient);

//           font-family: serif;
//           font-size: 82px;
//           letter-spacing: 8px;
//           font-weight: 300;

//           animation: revealText 6s ease-in-out infinite;
//         }

//         .underline {
//           stroke: #FFFFFF;
//           stroke-width: 14;
//           stroke-linecap: round;

//           stroke-dasharray: 300;
//           stroke-dashoffset: 300;

//           animation: drawUnderline 6s ease-in-out infinite;
//         }

//         /* ================= ANIMATIONS ================= */

//         @keyframes drawLine {
//           0% {
//             stroke-dashoffset: 300;
//             opacity: 0;
//           }

//           30% {
//             opacity: 1;
//           }

//           60% {
//             stroke-dashoffset: 0;
//             opacity: 1;
//           }

//           100% {
//             stroke-dashoffset: 300;
//             opacity: 0;
//           }
//         }

//         @keyframes drawArc {
//           0% {
//             stroke-dashoffset: 1600;
//             opacity: 0;
//           }

//           30% {
//             opacity: 1;
//           }

//           60% {
//             stroke-dashoffset: 0;
//             opacity: 1;
//           }

//           100% {
//             stroke-dashoffset: 1600;
//             opacity: 0;
//           }
//         }

//         @keyframes revealText {
//           0% {
//             opacity: 0.2;
//             letter-spacing: 24px;
//           }

//           50% {
//             opacity: 1;
//             letter-spacing: 8px;
//           }

//           100% {
//             opacity: 0.2;
//             letter-spacing: 24px;
//           }
//         }

//         @keyframes drawUnderline {
//           0% {
//             stroke-dashoffset: 300;
//             opacity: 0;
//           }

//           50% {
//             opacity: 1;
//           }

//           70% {
//             stroke-dashoffset: 0;
//             opacity: 1;
//           }

//           100% {
//             stroke-dashoffset: 300;
//             opacity: 0;
//           }
//         }

//       `}</style>

//       {/* RAYS */}
//       <line className="ray-line ray1a" x1="90" y1="430" x2="250" y2="470" />
//       <line className="ray-line ray1b" x1="130" y1="350" x2="250" y2="470" />

//       <line className="ray-line ray2a" x1="210" y1="270" x2="360" y2="430" />
//       <line className="ray-line ray2b" x1="280" y1="210" x2="360" y2="430" />

//       <line className="ray-line ray3a" x1="380" y1="170" x2="500" y2="390" />
//       <line className="ray-line ray3b" x1="450" y1="130" x2="500" y2="390" />

//       <line className="ray-line ray4a" x1="590" y1="110" x2="600" y2="360" />
//       <line className="ray-line ray4b" x1="650" y1="110" x2="600" y2="360" />

//       <line className="ray-line ray5a" x1="760" y1="130" x2="700" y2="390" />
//       <line className="ray-line ray5b" x1="840" y1="170" x2="700" y2="390" />

//       <line className="ray-line ray6a" x1="920" y1="210" x2="840" y2="430" />
//       <line className="ray-line ray6b" x1="1010" y1="270" x2="840" y2="430" />

//       <line className="ray-line ray7a" x1="1060" y1="350" x2="950" y2="470" />
//       <line className="ray-line ray7b" x1="1120" y1="430" x2="950" y2="470" />

//       {/* ARC */}
//       <path
//         className="arc"
//         d="M250 610 A460 460 0 0 1 950 610"
//       />

//       {/* TEXT */}
//       <text
//         x="600"
//         y="730"
//         textAnchor="middle"
//         className="logo-text"
//       >
//         BRUNCH & PRAY
//       </text>

//       {/* UNDERLINE */}
//       <line
//         className="underline"
//         x1="470"
//         y1="790"
//         x2="730"
//         y2="790"
//       />
//     </svg>
//   );
// };

// export default AnimatedLogo;