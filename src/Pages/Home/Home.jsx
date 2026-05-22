import Layout from "../../components/layout";
import Hero from "./Hero";
import Mariela from "./Mariela";
import Mission from "./Mision";
import Testimonials from "./Testimonials";
import UpcomingEvents from "./UpcomingEvents";
import PastEvents from "./PastEvents";
import MovingWords from "./MovingWords";
import Donate from "./Donate";
import Footer from "../../components/Footer";
import WhyJoinUs from "./WhyJoinUs";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Book from "./Book";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const id = location.state?.scrollTo;

    if (id) {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 300);
    }
  }, [location]);

  return (
    <Layout>
      <div className="bg-[#ffffff] w-full overflow-x-hidden font-sans text-[#2e2c2b]">
        <Hero />

        <MovingWords />

        <div id="mission">
          <Mission />
        </div>

        <div id="founder">
          <Mariela />
        </div>
        <div id="book">
          <Book />
        </div>
        <Testimonials />

        <PastEvents />

        <UpcomingEvents />

        <div id="join-us">
          <WhyJoinUs />
        </div>

        <Donate />
        <Footer />
      </div>
    </Layout>
  );
};

export default Home;
