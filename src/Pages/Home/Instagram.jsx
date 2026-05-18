
const Instagram = () => {
  const images = [
    { src: "./in1.jpeg", size: 'w-40 h-40 lg:w-64 lg:h-64', tilt: '-rotate-3' },
    { src:"./in2.jpeg", size: 'w-32 h-32 lg:w-48 lg:h-48', tilt: 'rotate-6' },
    { src: "./in3.jpeg", size: 'w-48 h-48 lg:w-72 lg:h-72', tilt: '-rotate-2' },
    { src: "./in4.jpeg", size: 'w-36 h-36 lg:w-56 lg:h-56', tilt: 'rotate-3' },
    { src: "./in5.jpeg", size: 'w-40 h-40 lg:w-60 lg:h-60', tilt: '-rotate-6' },
  ];

  return (
    <section className='relative py-32 flex flex-col items-center overflow-hidden rounded-t-[100px]'>
      {/* Background Decorative Text */}
      <h1 className='absolute top-10 font-["Bebas_Neue"] text-[15rem] md:text-[25rem] opacity-[0.02]'>
        COMMUNITY
      </h1>

      <div className='relative z-10 text-center mb-20 px-6'>
        <p className='text-[#d84136] font-bold tracking-[0.5em] text-xs uppercase mb-4'>
          Join the Movement
        </p>
        <h2 className='font-["Playfair_Display"] text-5xl md:text-6xl italic'>
          @brunchandpray
        </h2>
      </div>

      {/* DYNAMIC CLOUD GRID */}
      <div className='flex flex-wrap justify-center items-center gap-6 md:gap-12 max-w-7xl mx-auto px-10'>
        {images.map((item, index) => (
          <div 
            key={index} 
            className={`
              relative group cursor-pointer transition-all duration-700 hover:z-50
              ${item.size} ${item.tilt} hover:rotate-0 hover:scale-110
            `}
          >
            {/* The Quran.co Arched Frame Effect */}
            <div className='w-full h-full overflow-hidden rounded-[30px] md:rounded-[50px] border-[6px] border-white/10 group-hover:border-[#d84136] transition-colors shadow-2xl'>
              <div className='absolute inset-0 group-hover:bg-transparent transition-colors z-10'></div>
              <img 
                src={item.src} 
                className='w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:brightness-110' 
                alt={`Social ${index}`}
              />
            </div>

            {/* Floating Heart Icon on Hover */}
            <div className='absolute -top-4 -right-4 bg-white text-[#d84136] w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg scale-50 group-hover:scale-100'>
              <span className='text-xl'>♥</span>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-24 relative z-10'>
        <a 
          href="https://instagram.com/brunchandpray" 
          target="_blank" 
          rel="noopener noreferrer"
          className='group flex flex-col items-center gap-2'
        >
          <span className='font-bold tracking-[0.4em] uppercase text-xs transition-all group-hover:tracking-[0.6em]'>
            Follow our daily fire
          </span>
          <div className='h-[2px] w-12 bg-[#d84136] group-hover:w-32 transition-all duration-500'></div>
        </a>
      </div>
      
      {/* Abstract Glow Bottom Left */}
      <div className='absolute -bottom-20 -left-20 w-80 h-80 bg-[#d84136] rounded-full blur-[150px] opacity-20'></div>
    </section>
  );
};

export default Instagram;