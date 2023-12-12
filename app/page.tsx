import BookNow from "@/components/BookNow";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";


import Carousel from "@/components/Carousel";
import Head from "next/head";
import About from "@/components/About";
import Plan from "@/components/plan";
import Booking from "@/components/Booking";


<Head>

</Head>


export default function Home() {

  return ( 
  
        <main className=''>
          <div className="font-bold  bg-gradient-to-r from-gray-300 via-slate-100 to-blue-100 ">
              
            <Hero/>
            <Carousel title='Popular Destinations'/>
            <Plan/>
            <Carousel title='Latest Tours'/>
            <Booking/>
            <About/>
          </div> 
        </main>
    
  )
}

