import Layout from "../../components/layout";
import Hero from "./Hero";
import Voice from "./Voice";
import Mariela from "./Mariela";
import Download from "./Download";
import Bust from "./Bust";
import Instagram from "./Instagram";
import Mission from "./Mision"; 
import Testimonials from "./Testimonials";
import UpcomingEvents from "./UpcomingEvents";
import PastEvents from "./PastEvents";


const Home = () => {
  return (
    <Layout>
      <div className="bg-[#ffffff] w-full overflow-x-hidden font-sans text-[#2e2c2b]">
        <Hero />
        <Mission />   
        <Mariela />
         <Testimonials />
         <UpcomingEvents />
         <PastEvents />
      
        </div>
      
    </Layout>
  );
};


export default Home;