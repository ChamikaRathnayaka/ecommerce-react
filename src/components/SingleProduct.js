import React from "react";
import { useParams } from "react-router-dom";
import jsonData from "../api/data.json";
import { MdOutlineStar } from "react-icons/md";

export default function SingleProduct() {
  const { id } = useParams();
  console.log(id);

  const product = jsonData.products.find(
    (product) => product._id === parseInt(id)
  );

  return (
    <div className=" bg-white rounded-lg shadow-md p-10">
      {product ? (
        <div className="flex gap-10  px-20 py-10 bg-gray-200">
          <div>
            <img
              className="object-cover group-hover:scale-110 duration-500 "
              src={product.image}
              alt={product.title}
            />
          </div>
          <div>
            <h2 className="uppercase font-bold text-3xl py-2 text-gray-800">
              {product.title}
            </h2>
            <p className="mb-5 text-gray-600 ">{product.description}</p>

            <div className="flex mb-5">
              <div className="flex">
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
              </div>
              <div>
                <p className="text-xs text-gray-500">(1 customer review)</p>
              </div>
            </div>

            <p className="mb-5">Category : {product.category}</p>
            <div className="flex gap-3 mb-5">
              <p>Price :</p>
              <p className="line-through text-gray-500">${product.oldPrice}</p>
              <p className="text-2xl text-red-600">${product.price}</p>
            </div>

            <div className="w-44 p-1 border border-gray-500 flex gap-4 mb-20">
              <p className="text-sm mr-5">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button className="border border-gray-500  h-5 w-5 hover:bg-gray-400 hover:text-white cursor-pointer duration-300 active:bg-black">
                  -
                </button>
                <span>|</span>
                <button className="border border-gray-500  h-5 w-5 hover:bg-gray-400 hover:text-white cursor-pointer duration-300 active:bg-black">
                  +
                </button>
              </div>
            </div>
            <div className="flex gap-4">
            <button className="rounded w-full bg-green-800 text-white py-3 px-6 active:bg-gray-800 duration-500">
                Buy Now
              </button>
              <button className="rounded w-full bg-orange-700 text-white py-3 px-6 active:bg-gray-800 duration-500">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
}
