import React from 'react'
import {logo, cart} from "../assets/index"

export default function Header() {
  return (
    <div className='w-full h-15 bg-gray-800 border-b-[1px] border-b-gray-800 sticky top-0 z-50'>
       <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
        <div>
            <img className='w-20' src={logo} alt="logo"/>
        </div>
        <div className='flex items-center gap-10'>
        <ul className='flex items-center gap-10'>
        <li className='text-base text-white font-bold hover:text-orange-900
        hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
            Home
        </li>
        <li className='text-base text-white font-bold hover:text-orange-900
        hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
            pages
        </li>
        <li className='text-base text-white font-bold hover:text-orange-900
        hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
            shop
        </li>
        <li className='text-base text-white font-bold hover:text-orange-900
        hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
            element
        </li>
       </ul>
        </div>
       
       <div className='relative'>
        <img className='w-10'src={cart} alt="cart"/> 
        <span className='absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold'>
            0
        </span>
       </div>
       </div>
     
    </div>
  )
}
