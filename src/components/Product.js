import React from "react";
import PrroductCard from "./PrroductCard";
import jsonData from "../api/data.json";

export default function Product() {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          Shopping everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          temporibus, at consequatur placeat esse vero dignissimos in
          exercitationem aliquam molestiae vitae nemo beatae soluta fugiat
          laborum facere repudiandae amet consectetur.
        </p>
      </div>

      {/* individual products from json */}
      <div className=" max-w screen-xl mx-auto py-10 grid grid-cols-4 gap-10 ml-10 mr-10">
        {jsonData.products.map((product) => (
          <div className="relative">
            <div
              key={product._id}
              className=" group relative w-full h-96 cursor-pointer overflow-hidden "
            >
              <img
                className="w-full h-full  object-cover group-hover:scale-110 duration-500 "
                src={product.image}
                alt={product.title}
              />
            </div>

            <div className="w-full border-[1px] ">
              <div className="flex justify-between items-center  px-2 py-4  text-base font-bold">
                <div>
                  <h2>{product.title}</h2>
                </div>
                <div className="flex gap-2">
                  <p className="line-through text-gray-500">
                    ${product.oldPrice}
                  </p>
                  <p className="font-semibold">${product.price}</p>
                </div>
              </div>
              {/* add to cart button */}
              <div className="flex items-center justify-center mb-3">
                <a
                  href="#_"
                  class="relative inline-flex items-center justify-center p-2  h-10 px-10 py-3 overflow-hidden font-medium text-white-600 transition duration-300 ease-out border-2 border-gray-800 rounded-full shadow-md group"
                >
                  <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gray-800 group-hover:translate-x-0 ease">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span class="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
                    Add to cart
                  </span>
                  <span class="relative invisible">Add to cart</span>
                </a>
              </div>
              <div className="absolute top-4 right-0">
                {product.isNew && (
                  <p className="bg-black w-12 h-7 text-white text-center">sale</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
