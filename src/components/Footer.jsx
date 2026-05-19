import React from "react";

import logoBlack from "../assets/logo2.png";

import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer
      className="
      bg-[#FFF3E6]

      w-full

      min-h-[50vh]

      pt-16
      pb-8

      md:pt-20
      md:pb-10

      lg:pt-24
      lg:pb-12

      text-black

      border-t
      border-black/10
    "
    >

      <div
        className="
        max-w-7xl

        mx-auto

        px-6
        md:px-10
        lg:px-12

        h-full

        flex
        flex-col
        justify-between
      "
      >

        {/* TOP CONTENT */}
        <div
          className="
          flex
          flex-col

          lg:grid
          lg:grid-cols-3
          lg:items-center

          gap-12
          lg:gap-16

          flex-1
        "
        >

          {/* LEFT STACK */}
          <div
            className="
            flex
            flex-col

            gap-4

            text-[11px]
            md:text-sm

            tracking-[0.2em]

            items-start
          "
          >

            <a
              href="/"
              className="
              hover:text-[#F39221]
              transition-colors
            "
            >
              HOME
            </a>

            <a
              href="/mission"
              className="
              hover:text-[#F39221]
              transition-colors
            "
            >
              MISSION STATEMENT
            </a>

            <a
              href="/book"
              className="
              hover:text-[#F39221]
              transition-colors
            "
            >
              BOOKS
            </a>

            <a
              href="/freebie"
              className="
              hover:text-[#F39221]
              transition-colors

              lg:hidden

              flex
            "
            >
              PURPOSE & OUTREACH
            </a>

            <a
              href="/shop"
              className="
              hover:text-[#F39221]
              transition-colors

              lg:hidden

              flex
            "
            >
              ABOUT FOUNDER
            </a>

          </div>

          {/* MIDDLE BRANDING */}
          <div
            className="
            flex
            flex-col

            items-start
            lg:items-center

            lg:border-x

            border-black/10

            lg:px-10

            py-4
          "
          >

            <img
              src={logoBlack}
              className="
              w-32
              h-20

              object-contain

              mb-5
            "
              alt="Brunch and Pray Logo"
            />

            {/* SOCIALS */}
            <div
              className="
              flex
              items-center

              gap-6

              text-2xl

              text-black
            "
            >

              <FaFacebookF
                className="
                cursor-pointer

                hover:text-[#F39221]

                transition-all

                hover:-translate-y-1
              "
              />

              <a href="https://instagram.com/brunchandpray">

                <FaInstagram
                  className="
                  cursor-pointer

                  hover:text-[#F39221]

                  transition-all

                  hover:-translate-y-1
                "
                />

              </a>

              <FaPinterestP
                className="
                cursor-pointer

                hover:text-[#F39221]

                transition-all

                hover:-translate-y-1
              "
              />

              <IoMailOutline
                className="
                cursor-pointer

                hover:text-[#F39221]

                transition-all

                hover:-translate-y-1
              "
              />

            </div>

          </div>

          {/* RIGHT STACK */}
          <div
            className="
            lg:flex

            hidden

            flex-col

            gap-4

            text-sm

            tracking-[0.2em]

            items-center
            lg:items-end

            text-right
          "
          >

            <a
              href="/freebie"
              className="
              hover:text-[#F39221]
              transition-colors
            "
            >
              PURPOSE & OUTREACH
            </a>

            <a
              href="/shop"
              className="
              hover:text-[#F39221]
              transition-colors
            "
            >
              ABOUT FOUNDER
            </a>

          </div>

        </div>

        {/* DIVIDER + COPYRIGHT */}
        <div
          className="
          pt-6
          mt-10

          border-t
          border-black/10

          flex
          flex-col
          md:flex-row

          justify-between
          items-center

          gap-4

          text-[9px]
          md:text-[10px]

          tracking-[0.35em]

          uppercase

          text-black/60
        "
        >

          <p>
            &copy; 2026 BRUNCH AND PRAY
          </p>

          <p>
            DESIGNED FOR PURPOSE
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;