import React from 'react'
import {logo, payment} from "../assets/index"

export default function Footer() {
  return (
    <div className='bg-gray-800 text-white py-20 '>
        <div className='mx-auto grid grid-cols-3'>
            <div className='flex flex-col gap-7 ml-20'>
                <img className='w-32  flex' src={logo} alt="logo"/>
                <img className='ml-4 w-32  flex' src={payment} alt="payment"/>
            </div>

            <div>
            <h2 className='text-2xl mt-10 font-semibold font- titleFont text-gray-400 mb-4'>
              Locate us
            </h2>
            <div className='text-base text-gray-600 flex flex-col gap-2'>
              <p>ABC,Wellawaththa,Colombo 4</p>
              <p>Mobile: 0774565424</p>
              <p>e-mail: ecom@gmail.com</p>
            </div>
            </div>

            <div className='mr-20'>
            <h1 className='text-2xl mt-10 font-semibold font- titleFont text-gray-400 mb-4'>Online Shopping In Sri Lanka with Free Home Delivery </h1>
            <div className='text-base flex flex-col gap-2 text-gray-600'>
            <p>What was the last time you had an exciting and rewarding online shopping experience? Can’t remember! How about we make it even more convenient, fast and affordable to fulfill all your buying needs? With Sri Lanka's biggest online shopping store, you can choose from hundreds and thousands of endless and ageless collections of chicest and stylish products. Online shopping at Daraz Sri Lanka offers you easy and convenient platform to order your most desired products with comfort of your home. Being the largest online shopping site in Sri Lanka, Daraz is home to endless products featured in consumer electronics, home appliances, fashion and everything in between. </p>
            </div>
            </div>

            {/* <div className='flex flex-col justify-center'>
              <input
                className='bg-transparent border px-4 py-2 text-sm'
                placeholder="e-mail"
                type="text"
              />
              <button>Subscribe</button>
            </div> */}
           
          
        </div>
    </div>
  )
}
