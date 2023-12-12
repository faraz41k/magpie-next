import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import Button from './Button'




export default function Navbar () {
  return (


    <header className="w-4/5 mx-auto  sticky flex justify-between items-center backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border-white/80 ">
      <Link href='/'>
            <Image src="/logo.svg" width={90} height={90} alt='logo'/>
        </Link>
  {/* <!-- menu --> */}
  <div>
  <ul className='hidden h-full gap-12 lg:flex '>
            {NAV_LINKS.map((link)=>(
                <Link href={link.href}  key={link.key} className=' regular-16 font-bold text-gray-700 flextCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-blue-300'>
                     {link.label}</Link>
             ))}
        </ul>
  </div>
        <div className='lg:flexCenter hidden'>
          <Link href='/contact' >
             <button className='border-[1px] border-black px-4 py-1 rounded-full hover:bg-black hover:text-white'>Contact</button>
             </Link>
        </div>

        <Image
        src='/menu.svg'
        alt='menu'
        height={32}
        width={32}
        className='inline-block cursor-pointer lg:hidden'
        />
</header>
    // <nav className='flexBetween w-full padding-container relative z-30 py-5 shadow-lg   '>
    //     <Link href='/'>
    //         <Image src="/logo.svg" width={120} height={120} alt='logo'/>
    //     </Link>
    //     <ul className='hidden h-full gap-12 lg:flex '>
    //         {NAV_LINKS.map((link)=>(
    //             <Link href={link.href}  key={link.key} className=' regular-16 font-bold text-gray-700 flextCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-blue-300'>
    //                  {link.label}</Link>
    //          ))}
    //     </ul>

    //     <div className='lg:flexCenter hidden'>
    //       <Link href='/contact' >
    //         <button className='border-[1px] border-black px-4 py-1 rounded-full hover:bg-black hover:text-white'>Contact</button>
    //         </Link>
    //     </div>

        // <Image
        // src='/menu.svg'
        // alt='menu'
        // height={32}
        // width={32}
        // className='inline-block cursor-pointer lg:hidden'
        // />
    // </nav>
    
  )
}
