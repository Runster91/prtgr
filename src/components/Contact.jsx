import React from 'react'
import MCBY from '../assets/mcby.png';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#000000] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Shoot me an email </p>
            </div>
            <div className='shadow-md shadow-[#000000] bg-[#bf0d0d] hover:scale-110 duration-500'>
                  <img className='w-50 mx-auto' src={MCBY} alt="HTML icon" />
                  
              </div>
              <div className='shadow-md shadow-[#ca1414] bg-[#bf0d0d] hover:scale-110 duration-500'>
              <a href="rolldamon1906@outlook">
  <button className='text-white border-2 hover:bg-red-600 hover:border-red-600 px-4 py-3 my-8 mx-auto flex items-center ' mailto="rolldamon1906@outlook.com">
    Let's Collaborate
  </button>
</a>    
                  
              </div>
            
            
        </form>
    </div>
  )
}

export default Contact