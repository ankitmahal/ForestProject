import React from 'react'
import img from '../image/imgcard.jpg'
function GetAllForestData() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center lg:px-[10px] px-5'>
      <h1 className='text-2xl font-semibold text-center pt-2 pb-10 '>All Forest</h1>
      <div className='flex flex-wrap gap-10 justify-center'>

        <div className='w-full lg:w-1/4 p-5 shadow-[0_3px_8px_rgb(0,0,0,0.24)] rounded-xl'>
          <img className='rounded-md' src={img} alt="img" />

          <div className='space-y-4'>
            <h1 className='font-semibold text-center text-xl pt-6'>Forest</h1>
            <div className='flex flex-row justify-center text-red-800 text-4xl'>
              <h1>*</h1>
              <h1>*</h1>
              <h1>*</h1>
              <h1>*</h1>
            </div>

            <div className='flex flex-row justify-center item-center gap-4'>
              <h1 className='font-serif text-lg'>Rainy forests, often called rainforests, are characterized by high rainfall and are among the most biodiverse ecosystems on Earth.</h1>
              <button className='bg-green-500 text-[#000] rounded-lg w-20 mx-[1px] h-10 my-2 md:my-0 hover:border-2 hover:border-black cursor-pointer'>Click</button>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/4 p-5 shadow-[0_3px_8px_rgb(0,0,0,0.24)] rounded-xl'>
          <img className='rounded-md' src={img} alt="img" />

          <div className='space-y-4'>
            <h1 className='font-semibold text-center text-xl pt-6'>Animals</h1>
            <div className='flex flex-row justify-center text-red-800 text-4xl'>
              <h1>*</h1>
              <h1>*</h1>
              <h1>*</h1>
              <h1>*</h1>
            </div>

            <div className='flex flex-row justify-center item-center gap-4'>
              <h3 className='font-semibold text-lg'>des</h3>
              <button className='bg-green-500 text-[#000] rounded-lg w-20 mx-[1px] h-10 my-2 md:my-0 hover:border-2 hover:border-black cursor-pointer'>Click</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default GetAllForestData;