import React from 'react'

import Admin from '../assets/admin.jpg';
import Class from '../assets/classes.jpg';
import Girls from '../assets/girls.jpg';
import Trees from '../assets/trees.png';
import Principal from '../assets/principal.png';

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-24 px-4 bg-black text-center'>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Principal} alt="/" />
            <img className='w-full h-full object-cover' src={Trees} alt="/" />
            <img className='w-full h-full object-cover' src={Class} alt="/" />
            <img className='w-full h-full object-cover' src={Admin} alt="/" />
            <img className='w-full h-full object-cover' src={Girls} alt="/" />
        </div>
    </div>
  )
} 

export default Destinations