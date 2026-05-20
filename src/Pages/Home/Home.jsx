import Layout from "../../components/layout";
import Hero from "./Hero";
import Mariela from "./Mariela";
import Mission from "./Mision"; 
import Testimonials from "./Testimonials";
import UpcomingEvents from "./UpcomingEvents";
import PastEvents from "./PastEvents";
import MovingWords from "./MovingWords";
import Donate from "./Donate";
import WhyJoinUs from "./WhyJoinUs";


const Home = () => {
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

<Testimonials />

<PastEvents />

<UpcomingEvents />

<div id="join-us">
  <WhyJoinUs />
</div>

<Donate />
      
        </div>
      
    </Layout>
  );
};


export default Home;