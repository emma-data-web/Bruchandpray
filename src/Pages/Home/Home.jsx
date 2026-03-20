import Woman from "../../assets/woman.png";
import Woman2 from "../../assets/woman2.png";
import Speak from "../../assets/speaks.png";
import Voice from "./Voice";
import Mariela from "./Mariela";
import Download from "./Download";
import Bust from "./Bust";
import Instagram from "./Instagram";
import Layout from "../../component/layout";

const Home = () => {
  return (
    <Layout>
      <div className="bg-[#dcd3ca] w-full">
        <div className="min-h-screen relative lg:pb-50">
          <div className="flex gap-10 lg:gap-0 w-full">
            <div className="relative bg-amber-600">
              {/* <img
                src={Speak}
                className="absolute top-5 md:top-10 w-[30%] md:w-[25%] left-2 md:left-10"
              /> */}
              {/* <p className="absolute text-white text-5xl font-bold text-center [text-shadow:0_4px_10px_rgba(0,0,0,0.8)] top-5 md:top-10 w-[30%] md:w-[25%] left-10 md:left-10">BRUCH & PRAY</p> */}

              <img
                src="/people.jpeg"
                className="w-[60%] md:w-[23rem] lg:w-[38rem] h-[60vh] lg:h-[100vh] object-cover"
              />

              {/* <h1 className="absolute top-[10%] md:top-[20%] lg:top-[40%] left-15 md:left-[15rem] lg:left-100 font-[Bebas Neue] text-[#d84136] text-5xl md:text-6xl lg:text-8xl">
                IGNITING
                <br />
                <span className="inline-block ml-25">PURPOSE</span>
              </h1> */}
            </div>

            <div>
              <div className="absolute top-[15rem] left-[10rem] md:left-[25rem] md:top-25 lg:top-25 lg:left-[50rem] font-[Bebas Neue] md:text-lg text-[#2e2c2b]">
                <h1 className=" md:w-full">GOSPEL-CENTERED MOVEMENT</h1>
                <h1 className="ml-15 mt-5 md:mt-0 md:ml-30">
                  COMMUNITY+MINISTRY
                </h1>
              </div>

              <div className="flex items-center justify-center h-screen">
                <img
                  src="/bannerImage.jpeg"
                  className=" md:w-[13rem] lg:w-full h-[15rem] md:h-[300px] lg:h-[500px] object-cover md:mt-0 lg:ml-[100%] mt-60 md:ml-[8rem] rounded-xl"
                />
              </div>
            </div>
          </div>

          <h1 className="md:transform md:rotate-90 absolute top-[40rem] md:right-[10rem] md:top-[33rem] lg:top-[40rem] lg:right-[30rem] font-[Bebas Neue] md:text-xl text-[#2e2c2b]">
            WITH AUTHOR, SPEAKER AND
            <br />
            <span className="inline-block ml-25">COACH COMFORT ASUBIKE</span>
          </h1>
        </div>

        <Voice />
        <Mariela />
        <Download />
        <Bust />
        <Instagram />
      </div>
    </Layout>
  );
};

export default Home;
