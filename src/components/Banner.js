import React, { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export default function Banner() {
  const data = [
    "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg",
    "https://icms-image.slatic.net/images/ims-web/a7811eee-2a08-48ab-8e76-265b8ac855d4.webp?scm=1003.4.icms-zebra-100031632-2885430.OTHER_6502442207_7719953_1200x1200.jpg"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : currentSlide + 1);
  };

  return (
    <div className='w-full h-auto overflow-x-hidden'>
      <div className='w-screen h-[650px] relative'>
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className='w-[400vw] h-full flex transition-transform duration-1000'
        >
          {data.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              className='w-screen h-full object-cover'
              alt={`Image ${index + 1}`}
              loading='priority'
            />
          ))}
        </div>
        <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-10 md:bottom-44'>
          <div
            onClick={prevSlide}
            className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center
            hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'
          >
            <BsChevronLeft />
          </div>
          <div
            onClick={nextSlide}
            className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center
            hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'
          >
            <BsChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
}
