import React from "react";
import { useParams } from "react-router-dom";
import jsonData from "../api/data.json";

export default function SingleProduct() {
  const { id } = useParams();
  console.log(id);

  const product = jsonData.products.find(
    (product) => product._id === parseInt(id)
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-10">
      {product ? (
        <div className="flex gap-10">
          <div>
            <img
              className="object-cover group-hover:scale-110 duration-500 "
              src={product.image}
              alt={product.title}
            />
          </div>
          <div  >
            <h2 className="uppercase font-bold text-3xl py-2 text-gray-800">{product.title}</h2> 
            <p className="mb-5 text-gray-600 ">{product.description}</p>
            <p className="mb-5">Category : {product.category}</p>
            <div className="flex gap-3">
              <p>Price :</p>
              <p className="line-through text-gray-500">${product.oldPrice}</p>
              <p className="text-2xl text-red-600">${product.price}</p>
            </div>
           
            {/* Add more product details as needed */}
          </div>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
}
