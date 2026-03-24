const Voice = () => {
  return (
    <div className='py-32 flex flex-col items-center max-w-5xl mx-auto px-6 text-[#2e2c2b]'>
      <div className="w-20 h-1 bg-[#d84136] mb-10"></div>
      <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl text-center tracking-wider'>
        FIND YOUR VOICE & ACTIVATE YOUR PURPOSE
      </h1>
      <h2 className='mt-8 mb-4 tracking-[0.3em] font-bold text-xl uppercase'>Coaching for the Soul</h2>
      <p className='text-center text-lg lg:text-xl leading-relaxed max-w-3xl opacity-90'>
        If you’ve been feeling the tension of being called by God, but held back by fear, shame, or the weight of everyone else’s expectations, you’re not alone. This is soul work.
      </p>
      <button className='mt-12 group relative px-12 py-4 overflow-hidden bg-[#d84136] text-white font-bold tracking-widest rounded-full transition-all hover:scale-105 shadow-lg'>
        WORK WITH ME
      </button>
    </div>
  )
}

export default Voice;