import React from 'react'

const Hero = () => {
  return (

    <div className="relative flex items-center justify-center h-[600px] mb-12 overflow-hidden object-contain">

<div className="bg-opacity-50 flex items-center  h-full z-20 ">
                    <div className="px-10 max-w-xl bg-opacity-50">
                        <h2 className="text-7xl font-extrabold text-gray-900">Experience Life Afresh !</h2>
                        <p className=" mt-2 regular-16 text-4xl text-black  ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                        <button className="flex items-center mt-4 px-4 py-3 bg-blue-600 text-white text-sm uppercase font-medium rounded-full hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            <h3>Destinations</h3>
                            <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </button>
                    </div>
                </div>
                <video
                  autoPlay
                  loop
                  muted
                  className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
                >
                  <source
                    src="/banner.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
  </div>
  )
}

export default Hero