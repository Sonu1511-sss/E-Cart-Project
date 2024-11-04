import React, { useContext } from "react";
import { ShopContext } from "./Context/ShopContext";
import { Link } from "react-router-dom";

function ProductItems({ id, images, productName, price }) {
  const { Currency } = useContext(ShopContext); // Get currency from context

  return (
    <div className="product-card bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"> {/* Add hover effect */}
      <Link to={`/product/${id}`} className="block">
        <div className="relative group">
          <img
            src={images[0]} // Assuming you want to show the first image
            alt={productName}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" // Image grows on hover
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-500 transition-colors duration-300">
            {productName}
          </h3>
          <p className="text-green-600 font-bold mt-2">
            {Currency} {price}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default ProductItems;


