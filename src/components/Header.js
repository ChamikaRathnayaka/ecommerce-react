import React from "react";
import { logo, cart } from "../assets/index";

export default function Header() {
  return (
    <div className="w-full h-16 md:h-20 bg-gray-800 border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between px-5 md:px-10">
        <div>
          <img className="w-16 md:w-20" src={logo} alt="logo" />
        </div>
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-10">
            <li className="text-sm md:text-base text-white font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-sm md:text-base text-white font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-sm md:text-base text-white font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-sm md:text-base text-white font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
          </ul>
        </div>

        <div className="relative">
          <img className="w-8 md:w-10" src={cart} alt="cart" />
          <span className="absolute w-6 h-6 top-0 -right-2 md:-right-1 text-xs md:text-sm flex items-center justify-center font-semibold bg-red-600 rounded-full text-white">
            0
          </span>
        </div>
      </div>
    </div>
  );
}
