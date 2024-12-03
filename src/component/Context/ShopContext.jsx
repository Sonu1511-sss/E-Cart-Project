import { createContext, useEffect, useState } from "react";
import { products } from "../data/Products";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopProvider = (props) => {
  const Currency = "$";
  const delivery_fee = 10;
  const [CartItems, setCartItems] = useState({});
  const [cartTotal, setCartTotal] = useState(0); // Add cartTotal state

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error('Please select product size');
      return;
    }

    let cartData = structuredClone(CartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
    calculateCartTotal(cartData); // Update total when items are added
  };

  const calculateCartTotal = (cartData) => {
    let total = 0;
    for (const itemId in cartData) {
      for (const size in cartData[itemId]) {
        const product = products.find((product) => product.id === Number(itemId));
        if (product) total += product.price * cartData[itemId][size];
      }
    }
    setCartTotal(total); // Update the cartTotal state
  };

  const getCountCart = () => {
    return Object.values(CartItems).reduce((total, sizes) => {
      return total + Object.values(sizes).reduce((sizeTotal, quantity) => sizeTotal + quantity, 0);
    }, 0);
  };

  useEffect(() => {
    calculateCartTotal(CartItems); // Recalculate total whenever CartItems changes
  }, [CartItems]);

  const value = {
    products,
    Currency,
    delivery_fee,
    CartItems,
    addToCart,
    cartTotal, // Provide cartTotal in context
    getCountCart,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
