import React from 'react'
import Image from 'next/image'

export default function Card() {
  return (

    <div className="max-w-[350px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
    <div>
        {/* <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" /> */}
        <Image src='/img-1.png' height={200} width={300} alt='img' className='rounded-t-xl w-full object-cover hover:scale-105'/>
        <a href="#">
            <h5 className="mb-2 text-[14px] font-light tracking-tight text-white dark:text-white absolute top-4 left-4">Noteworthy Technology </h5>
        </a>
    </div>
    <div className="p-5">
        {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black  rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:text-white">
            Book Now
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

    // <div className="mx-auto max-container  py-8 rounded-lg">
                
    //                 {/* <!-- Card 1 --> */}
    //                 <div  className=' max-w-[500px] h-full text-black rounded-xl shadow-2xl relative  '>
    //                 <div className='rounded-t-xl flex justify-center items-center'>
                        // <Image src='/img-1.png' height={300} width={300} alt='img' className='rounded-t-xl w-full object-cover'/>
    //                 </div>
    //                 <div className='flex flex-col justify-center items-center gap-4 p-4 bg-slate-200 '>
    //                     <p className='text-white text-center absolute top-5 left-5 '>K-2 Base Camp</p>
    //                     {/* <p className='text-black text-center font-light '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, enim?</p>
    //                     <button className='hover:bg-teal-800 rounded-full mt-6 w-full  text-white bg-black px-6 py-2 font-light '>Booking</button> */}
    //                 </div>
    //             </div>
    //                 {/* <!-- Card 1 Ends -->
    //                 <!-- Card 2 --> */}
                    
                
    // </div>
  )
}
