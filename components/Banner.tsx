const Banner = () => {
    return (
      <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-semibold px-10 py-5 mb-10'>
        <div>
          <h1 className='text-5xl sm:text-7xl font-bold'>HAMAD BLOG</h1>
          {/* <h2 className='mt-5 md:mt-1'>
            Witamy na{' '}
            <span className='underline decoration-2 decoration-accent'>
              najciekawszym
            </span>{' '}
            blogu technologicznym (i nie tylko)
          </h2> */}
        </div>
  
        {/* <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
          Recenzje | Ciekawostki z życia młodego fullstack developera | Testy oraz
          inne ciekawe posty
        </p> */}
      </div>
    );
  };
  
  export default Banner;