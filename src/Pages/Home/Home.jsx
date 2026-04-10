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
      <div className="bg-[#e8d5c4] w-full overflow-x-hidden font-sans text-[#2e2c2b]">
        <Hero />
        
        {/* Simple elegant divider */}
        <div className="flex justify-center py-10">
          <div className="h-20 w-[1px] bg-[#d84136]/30"></div>
        </div>

        <Voice />
        <Mariela />
        <Download />
        
        {/* Dark Mode Break for Bust a Move */}
        <div className="rounded-t-[100px] mt-20">
          <Bust />
          <Instagram />
        </div>
      </div>
    </Layout>
  );
};

export default Home;