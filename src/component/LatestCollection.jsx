import React, { useContext } from "react";
import { ShopContext } from "./Context/ShopContext";
import ProductItems from "./ProductItems";
import { products } from "./data/Products"; // Assuming you stored the product data in a separate file
import Title from "./Title";

const LatestCollection = () => {
  const { Currency } = useContext(ShopContext); // Get currency from context

  return (
    <div className="mt-12">
      {/* Title and Description */}
      <div className="text-center py-8">
        <Title text1={"Latest"} text2={"COLLECTIONS"}  />
        <p className="w-11/12 sm:w-3/4 lg:w-2/3 mx-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
          veritatis illum error vel perferendis assumenda, deserunt corrupti,
          molestiae rem aperiam delectus maiores vero consequatur. Voluptatem
          sapiente reiciendis rem velit fugiat.
        </p>
      </div>

      {/* Product Grid */}
      <div className="product-list grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 sm:px-6 lg:px-8">
        {/* Limit to 10 products */}
        {products.slice(0, 10).map((product) => (
          <ProductItems
            key={product.id}
            id={product.id}
            images={product.images} // Pass images array
            productName={product.productName}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
