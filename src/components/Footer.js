import React from 'react';
import { logo, payment } from "../assets/index";

export default function Footer() {
  return (
    <div className='bg-gray-800 text-white py-10 md:py-20'>
      <div className='mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10'>
        <div className='flex flex-col md:gap-7 items-center md:items-start ml-5 md:ml-20'>
          <img className='w-32 flex' src={logo} alt='logo' />
          <img className='ml-4 w-32 flex' src={payment} alt='payment' />
        </div>

        <div>
          <h2 className='text-xl md:text-2xl mt-5 md:mt-10 font-semibold font-titleFont text-gray-400 mb-4'>
            Locate us
          </h2>
          <div className='text-base text-gray-600 flex flex-col gap-2'>
            <p>ABC, Wellawaththa, Colombo 4</p>
            <p>Mobile: 0774565424</p>
            <p>e-mail: ecom@gmail.com</p>
          </div>
        </div>

        <div>
          <h1 className='text-xl md:text-2xl mt-5 md:mt-10 font-semibold font-titleFont text-gray-400 mb-4'>
            Online Shopping In Sri Lanka with Free Home Delivery
          </h1>
          <div className='text-base text-gray-600'>
            <p>What was the last time you had an exciting and rewarding online shopping experience? Can’t remember! How about we make it even more convenient, fast, and affordable to fulfill all your buying needs? With Sri Lanka's biggest online shopping store, you can choose from hundreds and thousands of endless and ageless collections of the chicest and stylish products. Online shopping at Daraz Sri Lanka offers you an easy and convenient platform to order your most desired products from the comfort of your home. Being the largest online shopping site in Sri Lanka, Daraz is home to endless products featured in consumer electronics, home appliances, fashion, and everything in between.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
