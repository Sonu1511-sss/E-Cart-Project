import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "./Context/ShopContext";
import { products } from "./data/Products";
import Title from "./Title";
import ProductItems from "./ProductItems";

function BestSeller() {
  const { Products } = useContext(ShopContext);
  const [BestSeller, setBestSeller] = useState([]);
  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0.5));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"Best"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo
          modi, ipsum suscipit commodi, placeat asperiores qui possimus debitis
          maxime sunt ipsa vitae. Repellat deleniti repellendus exercitationem
          voluptatum ad iure!
        </p>
      </div>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6
      "
      >
        {BestSeller.map((item, index) => (
          <ProductItems
            key={index}
            id={item.id}
            images={item.images} // Pass images array
            productName={item.productName}
            price={item.price}
          ></ProductItems>
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
