"use client"

import React , {useState} from 'react'
import {FaBars , FaFacebook, FaTwitter , FaInstagram, FaGoogle} from 'react-icons/fa'
import {BsChatSquareDots} from 'react-icons/bs'
import Link from 'next/link'

const Menu = () => {
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }
  return (
    
    <div className='w-full min-h-[50px] flex justify-end items-center  z-10 text-white bg-gradient-to-r from-[var(---primary-dark)] to-[var(---primary-light)]'>
        <ul className='hidden  sm:flex px-4 mr-[30px]'>
              <li className='hover:bg-black cursor-pointer uppercase'>
                <Link href='/'>Home</Link>
              </li>

              <li className='hover:bg-black cursor-pointer uppercase'>
                <Link href='/'>culture-heritage</Link>
              </li>

              <li className='hover:bg-black cursor-pointer uppercase'>
                <Link href='/site-seeing'>Site seeing</Link>
              </li>

              <li className='hover:bg-black cursor-pointer uppercase'>
                <Link href='/climbing'>Climbing</Link>
              </li>

              <li className='hover:bg-black cursor-pointer uppercase'>
                <Link href='/'>Trekking</Link>
              </li>

              {/* <li className='hover:bg-black cursor-pointer uppercase'>
                <Link href='/'>Contacts</Link>
              </li>

              <li className='hover:bg-black cursor-pointer uppercase'>
                <Link href='/'>our team</Link>
              </li> */}

        </ul>

        {/* <div className='flex justify-between'>
          <FaFacebook className='mx-4'/>
          <FaInstagram className='mx-4'/>
          <FaTwitter className='mx-4'/>
          <FaGoogle className='mx-4'/>
        </div> */}
    {/* hambrgr icon */}

      <div className='sm:hidden z-10' onClick={toggleMenu}>
        <FaBars size={20} className='mr-7 cursor-pointer' />
      </div>

    {/* Mobile Menu */}

        <div 
        onClick={toggleMenu}
        className={menu ?  'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 h-screen w-full bg-black/90 flex flex-col px-4 py-7' : 'absolute top-0 h-screen left-[-100%] ease-in duration-700'}>
              <ul className='h-full w-full text-center pt-12 '>
                        <li className='text-2xl py-8 hover: bg-[var(---primary-dark) ]'>
                          <Link href='/'>Home</Link>
                        </li>

                        <li className='text-2xl py-8 hover: bg-[var(---primary-dark) ]'>
                          <Link href='/'>Tours</Link>
                        </li>

                        <li className='text-2xl py-8 hover: bg-[var(---primary-dark) ]'>
                          <Link href='/'>About</Link>
                        </li>

                        <li className='text-2xl py-8 hover: bg-[var(---primary-dark) ]'>
                          <Link href='/'>Gallery</Link>
                        </li>

                        <li className='text-2xl py-8 hover: bg-[var(---primary-dark) ]'>
                          <Link href='/'>Contacts</Link>
                        </li>

              </ul>
        </div>
    </div>


  )
}

export default Menu