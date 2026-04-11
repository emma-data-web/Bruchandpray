import Layout from "../../component/layout";
import Hero from "./Hero";
import Voice from "./Voice";
import Mariela from "./Mariela";
import Download from "./Download";
import Bust from "./Bust";
import Instagram from "./Instagram";


const Home = () => {
  return (
    <Layout>
      <div className="bg-[#ffffff] w-full overflow-x-hidden font-sans text-[#2e2c2b]">
        <Hero />
      


        <Voice />
        <Mariela />
        <Download />
        
        
        {/* Dark Mode Break for Bust a Move */}
        <div className="rounded-t-[100px]">
          <Bust />
          <Instagram />
        </div>
      </div>
    </Layout>
  );
};


export default Home;