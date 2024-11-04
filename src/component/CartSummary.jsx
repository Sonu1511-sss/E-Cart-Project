import React, { useContext } from 'react';
import { ShopContext } from './Context/ShopContext';
import { products } from './data/Products';


const CartSummary = () => {
  const { CartItems, delivery_fee, Currency } = useContext(ShopContext);

  const calculateItemTotal = (itemId, size) => {
    const product = products.find(product => product.id === Number(itemId));
    return product ? product.price * CartItems[itemId][size] : 0;
  };

  const calculateCartTotal = () => {
    let total = 0;
    for (const itemId in CartItems) {
      for (const size in CartItems[itemId]) {
        total += calculateItemTotal(itemId, size);
      }
    }
    return total + delivery_fee; // Include delivery fee in total
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold">Cart Summary</h2>
      <ul>
        {Object.keys(CartItems).map(itemId => (
          <li key={itemId} className="flex justify-between">
            <span>{products.find(product => product.id === Number(itemId)).productName}</span>
            <span>{Currency}{calculateItemTotal(itemId).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <h3 className="font-bold">Total: {Currency}{calculateCartTotal().toFixed(2)}</h3>
    </div>
  );
};

export default CartSummary;
