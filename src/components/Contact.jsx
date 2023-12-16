import React from 'react'
import MCBY from '../assets/mcby.png';
import GitHub from '../assets/github.png';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#000000] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Shoot me an email </p>
                <a target="_blank" href="https://github.com/Runster91/" ><img class="sm" src={GitHub} alt="ghlogo"></img>/></a>
                <img className='w-50 mx-auto' src={MCBY} alt="HTML icon" />
                

            </div>
            
              
            
        </form>
    </div>
  )
}

export default Contact