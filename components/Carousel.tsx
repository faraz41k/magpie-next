"use client"

import React from 'react'
import Image from 'next/image'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",   }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",  }}
      onClick={onClick}
    />
  );
}

const data = [
    {
        id: '11',
        title: 'K-2 Base Camp',
        desc: 'Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink',
        image: '/img-2.png'
    },

    {
        id: '12',
        title: 'Hunza Tour',
        desc: 'Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink',
        image: '/img-1.png'
    },

    {
        id: '15',
        title: 'Gojal tours',
        desc: 'Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink',
        image: '/img-2.png'
    },


    {
        id: '13',
        title: 'Rakaposhi Base camp',
        desc: 'Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink',
        image: '/img-1.png'
    }
]

type headings = {
    title: string
}

export default function Carousel({title}: headings) {
    const settings = {
        dots: true,
        infinite: true,
        
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <div className='max-container m-auto mb-20 py-5 text-center'>
        
        <div className='mt-20 text-center' >
        <h1 className='mb-14  text-3xl md:text-4xl font-light text-gray-900  border-b-2 pb-4 border-white'>{title} </h1>
        <Slider {...settings}>
            {data.map((card)=>(
                

                <div key={card.id} className="max-w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
                <div >
                    {/* <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" /> */}
                    <Image src='/img-1.png' height={200} width={300} alt='img' className='rounded-t-xl w-full object-cover hover:scale-105'/>
                    <a href="#">
                        <h5 className="mb-2 text-[14px] font-light tracking-tight text-white dark:text-white absolute top-4 left-4">Noteworthy Technology </h5>
                  </a>
                </div>
                <div className="p-5">
                    {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black  rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:text-white">
                        Read more
                         <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
            ))}
        </Slider>   
        </div>

    </div>
  )
}
