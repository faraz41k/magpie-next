import { getProducts } from '@/sanity/schemas/sanity-utils'
import React from 'react'
import Image from 'next/image'
import Card from '@/components/Card'



const Trekking =  () => {
    
    
    
    
  return (

      <div  className="focus:outline-none mt-4 w-full font-bold  bg-gradient-to-r from-white via-slate-100 to-blue-100 pb-4 ">

      <div className="h-64  overflow-hidden bg-cover bg-center bg-bg-climb w-full  ">
                <div className="bg-gray-900 bg-opacity-50 flex items-center justify-center h-full ">
                    <div className="px-10 max-w-xl ">
                        <h2 className="text-4xl text-gray-300 font-semibold text-center">Trekking Experiences</h2>
                        <p className="mt-2 text-white text-center ">Lorem ipsum dolor, sit amet consectetur adipisicing elit..</p>
                        {/* <button className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            <span>Shop Now</span>
                            <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </button> */}
                    </div>
                </div>
            </div>

        {/* <div className='max-container m-auto mb-20 py-5 bg-bg-img-1 rounded-xl'>
            <h1 className='uppercase  text-3xl font-bold text-center text-gray-100 '>Trekking Destinations</h1>
            
        </div> */}
            
            <div className="max-container m-auto  flex flex-wrap items-center lg:justify-between justify-around mt-40 gap-4 ">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            
            
        </div>
    
    // 

    // 
  )
}

export default Trekking