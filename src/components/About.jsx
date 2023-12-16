import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#2e2929] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-red-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Guillermo Casillas. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about learning  new  technologies, lenguages and  skills to 
                be  valueable  team member in any company or enviroment.I ve been  involved in IT
                industry since 2015  and  ive been developing my skills since then.Always  giving my  best</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
