import React from 'react'
import PrroductCard from './PrroductCard'
import jsonData from '../api/data.json';

export default function Product() {

  return (
    <div className='py-10'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>
                Shopping everyday
            </h1>
            <span className='w-20 h-[3px] bg-black'></span>
            <p className='max-w-[700px] text-gray-600 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda temporibus, 
                at consequatur placeat esse vero dignissimos in exercitationem aliquam 
                molestiae vitae nemo beatae soluta fugiat laborum facere repudiandae amet consectetur.</p>
        </div>

      {/* individual products from json */}
        <div className=' max-w screen-xl mx-auto py-10 grid grid-cols-4 gap-10 ml-10 mr-10'>
        {jsonData.products.map((product) => (
          <div className='group'>

            <div key={product._id} className='w-full h-96 cursor-pointer overflow-hidden '>
              <img className='w-full h-full  object-cover group-hover:scale-110 duration-500 ' src={product.image} alt={product.title} />
           </div>

           <div className='flex justify-between items-center w-full border-[1px] px-2 py-4  text-base font-bold'>
              <div>
                <h2>{product.title}</h2>
              </div>
              <div className='flex gap-2'>
                    <p className='line-through text-gray-500'>${product.oldPrice}</p>
                    <p className='font-semibold'>${product.price}</p>
              </div>
              
           </div>

          </div>
        ))}
      </div>

       
    </div>
  )
} 

