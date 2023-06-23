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
    <div>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          {/* Add more product details as needed */}
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
}
