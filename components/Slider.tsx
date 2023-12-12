"use client"

import { useState } from "react";

function Slider() {

    const sliderImages = [
      {
        url:'https://images.unsplash.com/photo-1632133915653-8ded5c72e329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
      },
  
      {
        url:'https://images.unsplash.com/photo-1581593462117-9119dd3e8765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80'
      },
  
      {
        url:'https://images.unsplash.com/photo-1562913346-61ae3ab9277e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
      },
  
      {
        url:'https://images.unsplash.com/photo-1633596518282-2c49184577fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80'
      }
  
     
    ]
  
    const [index, setIndex]= useState(0);
  
    const prevSlide = ()=> {
      const   isFirstSlide = index === 0;
      const   newIndex = isFirstSlide ? sliderImages.length - 1 : index -1
      setIndex(newIndex)
    }
  
    const nextSlide = ()=> {
      const   isLastSlide = index === sliderImages.length -1;
      const   newIndex = isLastSlide ? 0 : index +1
      setIndex(newIndex)
    }
  
    const goToSlide = (slideIndex: any) => {
        setIndex(slideIndex)
    }
  
    return (
      <div>
        <h1 className="bold-40 lg:bold-64 text-center">Gallery</h1>
      <div className="max-w-[1400px] h-[650px] w-full m-auto py-16 px-4 relative group mb-3  rounded-xl">

        {/* <h1 className="mt-5 font-bold text-gray-700 text-3xl sm: mx-4 py-5 uppercase">Our Offers</h1> */}

        <div style={{backgroundImage: `url(${sliderImages[index].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
        <div  onClick={prevSlide}  className="hidden group-hover:block absolute bottom-[20%] -translate-x-0 translate-y-[-50%] left-5 text-2xl p-2 bg-black/20 text-white cursor-pointer" >
          L
        </div>
        <div onClick={nextSlide} className="hidden group-hover:block absolute bottom-[20%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-2 bg-black/20 text-white cursor-pointer" >
          R
        </div>
  
        <div className="flex top-4 justify-center py-2">
            {
              sliderImages.map((slide, slideIndex)=>(
                <div 
                
                  onClick={()=> goToSlide(slideIndex)} 
                  key={slideIndex} 
                  className="text-2xl cursor-pointer">
                    
                </div>
              ))
            }
        </div>
      </div>

      </div>
    );
  }
  
  export default Slider;