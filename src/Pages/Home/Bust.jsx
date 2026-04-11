// import React from 'react'
import Phone from "../../assets/phone.png"
import Woman3 from "../../assets/woman3.png"
import Computer from "../../assets/computer.png"

const Bust = () => {
  return (
    <div className='py-32 bg-black text-[#ffffff] overflow-hidden'>
      <div className="container mx-auto px-6">
        <h1 className='text-3xl md:text-8xl lg:text-8xl font-bold text-center leading-none mb-20 opacity-90'>
          <span className="text-cyan">BUST A</span> <span className="text-[#d84136]">MOVE</span>
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 items-start'>
          
          {/* Facebook Card */}
          <div className='group cursor-pointer'>
            <div className="overflow-hidden relative h-[400px]">
              <img 
                src="./facebook.jpeg" 
                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0' 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="mt-6">
              <h4 className="text-2xl text-[#d84136] tracking-wide group-hover:translate-x-2 transition-transform">
                FACEBOOK COMMUNITY &rarr;
              </h4>
              <p className="text-sm opacity-60 uppercase tracking-widest mt-2">Connect with like-minded women</p>
            </div>
          </div>

          {/* YouTube Card - Elevated slightly */}
          <div className='group cursor-pointer md:-mt-12 rounded-3xl'>
            <div className="overflow-hidden relative h-[500px] border-x border-[#d84136]/30 px-4">
              <img 
                src="./subscribe.jpeg"
                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' 
              />
              <div className="absolute bottom-4 left-8 right-8 bg-[#d84136] p-4 text-center">
                 <p className="font-bold text-white tracking-[0.2em]">SUBSCRIBE NOW</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <h4 className="text-2xl text-white tracking-wide">
                YOUTUBE CHANNEL
              </h4>
            </div>
          </div>

          {/* Newsletter Card */}
          <div className='group cursor-pointer'>
            <div className="overflow-hidden relative h-[400px]">
              <img 
                src="./youtube.jpeg" 
                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0' 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="mt-6 text-right">
              <h4 className="text-3xl text-[#d84136] tracking-wide group-hover:-translate-x-2 transition-transform">
                &larr; JOIN THE FIRE
              </h4>
              <p className="text-sm opacity-60 uppercase tracking-widest mt-2">Weekly devotionals in your inbox</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Bust
