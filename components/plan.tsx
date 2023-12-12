import React from 'react'
import Image from 'next/image'



const Plan = () => {
  return (
    <div className='max-container m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 border-t-[3px] border-white'>
      {/* Left Side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh] rounded-lg'>
        <Image
          height={300}
          width={400}
          className=' row-span-3 object-cover w-full h-full p-2'
          src='/girls.jpg'
          alt='/'
        />
        <Image
          height={300}
          width={400}
          className='row-span-2 object-cover w-full h-full p-2'
          src='/img-1.png'
          alt='/'
        />
        <Image
          height={300}
          width={400}
          className='row-span-2 object-cover w-full h-full p-2'
          src='/img-2.png'
          alt='/'
        />
        <Image
          height={300}
          width={400}
          className='row-span-3 object-cover w-full h-full p-2'
          src='/img-1.png'
          alt='/'
        />
        <Image
          height={300}
          width={400}
          className='row-span-2 object-cover w-full h-full p-2'
          src='/girls.jpg'
          alt='/'
        />
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold text-gray-900'>Plan Your Next Trip</h3>
        <p className='text-2xl py-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          nam?
        </p>
        <p className='pb-6 regular-14 '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          voluptates nostrum dolorum reprehenderit error! Doloribus est illo
          eius saepe? Molestias sapiente perspiciatis doloribus consectetur
          nihil facilis aliquid eaque vel quisquam.
        </p>
        <div>
          <button className='border-black border mr-4 hover:shadow-xl rounded-full py-2 px-4 '>
            Learn More
          </button>
          <button className='bg-black  text-white border-black hover:shadow-xl rounded-full py-2 px-4'>Book Your Trip</button>
        </div>
      </div>
    </div>
  );
};

export default Plan
