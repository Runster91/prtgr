import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#000000]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-red-700' >Hello there, here is a brief introduction of me</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Guillermo Casillas
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer on formation.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a computer science engineer on my way to  become a full-stack developer and polyglot in lenguages  like english,portuguese, german and french to  be able to connect and colaborate  globaly.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600'>
            More Information
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
