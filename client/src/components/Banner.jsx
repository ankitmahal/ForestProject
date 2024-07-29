import React from 'react';
import img from '../imagebg/newbanner.jpg'

function Banner() {
  return (
    <div className='bg-pink-600 min-h-screen flex justify-center items-center'>
      <div className='flex flex-col gap-3'>

      <input className='bg-black placeholder:text-red' type='text' placeholder='Enter Name' />
      <input className='bg-black placeholder:text-red' type='password' placeholder='Enter Password' />
      
     
    </div>
      </div>
  )
}

export default Banner