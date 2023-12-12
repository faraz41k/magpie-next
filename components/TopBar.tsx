
import React from 'react'
import {AiFillPhone, AiOutlineClockCircle ,AiOutlineMail,AiOutlineWhatsApp} from 'react-icons/ai'
import {BsRCircle} from  'react-icons/bs'
import Link from 'next/link'
import logo from '../app/assets/logo.jpg'
import Image from 'next/image'

const TopBar = () => {
  return (
    <div className='flex justify-end items-center px-4 py-2 shadow-lg relative'>
        <div className='flex items-center text-xl rounded-full absolute top-0 left-5 z-20 bg-none'>
            <Image src={logo} height={135} width={135} alt='logo'  className='bg-none '/>
        </div>

{/* topBar icons */}
    <div className='flex '>
        <div className='hidden md:flex items-center px-6'>
            <AiOutlineWhatsApp size={20} className= 'mr-2 text-[var(---primary-dark)]'/>
            <p className='text-sm text-gray-700'>+92 355 421 2624</p>
        </div>

        <div className='hidden md:flex items-center px-6'>
            <AiOutlineMail size={20} className= 'mr-2 text-[var(---primary-dark)]'/>
            <p className='text-sm text-gray-700'>irfan@magpietours.com.pk</p>
        </div>
        
        <Link href='/'>
        <button className='mr-1 cursor-pointer hover:bg-black '>Contacts</button>
        </Link>
        
    </div>    
    </div>
  )
}

export default TopBar