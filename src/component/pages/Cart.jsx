import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { FaTrashAlt } from 'react-icons/fa'; // Trash icon for removing items
import { useNavigate } from 'react-router-dom';
import { products } from '../data/Products';

const Cart = () => {
  const { CartItems, addToCart, setCartItems, delivery_fee, Currency } = useContext(ShopContext);
  const navigate = useNavigate();

  // Calculate total number of items in the cart
  const getCountCart = () => {
    return Object.values(CartItems).reduce((total, sizes) => {
      return total + Object.values(sizes).reduce((sum, count) => sum + count, 0);
    }, 0);
  };

  // Handle quantity change of items
  const handleQuantityChange = (itemId, size, quantity) => {
    if (quantity <= 0) {
      removeItem(itemId, size); // Call remove function if quantity is zero
    } else {
      addToCart(itemId, size, quantity);
    }
  };

  // Function to remove an item from the cart
  const removeItem = (itemId, size) => {
    const updatedCart = { ...CartItems };
    delete updatedCart[itemId][size]; // Remove the specific size of the item
    if (Object.keys(updatedCart[itemId]).length === 0) {
      delete updatedCart[itemId]; // Remove the item entirely if no sizes are left
    }
    setCartItems(updatedCart); // Update the context with the new cart
  };

  // Function to handle checkout navigation
  const handleCheckout = () => {
    navigate('/placeorder'); // Navigate to the checkout page
  };

  // Calculate total price for an individual item
  const calculateItemTotal = (itemId, size) => {
    const product = products.find(product => product.id === Number(itemId));
    return product ? product.price * CartItems[itemId][size] : 0;
  };

  // Calculate the total price of the cart, including delivery fee
  const calculateCartTotal = () => {
    let total = 0;
    for (const itemId in CartItems) {
      for (const size in CartItems[itemId]) {
        total += calculateItemTotal(itemId, size);
      }
    }
    return total; // Do not include delivery fee here
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Your Cart</h1>
      {getCountCart() === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {Object.keys(CartItems).map(itemId => (
              <li key={itemId} className="flex justify-between items-center p-4 border rounded-lg shadow-md">
                <div className="flex items-center">
                  <img
                    src={products.find(product => product.id === Number(itemId)).images[0]}
                    alt="Product"
                    className="h-24 w-24 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h2 className="text-lg font-medium">{products.find(product => product.id === Number(itemId)).productName}</h2>
                    {Object.entries(CartItems[itemId]).map(([size, quantity]) => (
                      <div key={size} className="flex items-center mt-2">
                        <span className="mr-2">{size}:</span>
                        <input
                          type="number"
                          value={quantity}
                          min="0"
                          className="border w-16 text-center rounded-md"
                          onChange={(e) => handleQuantityChange(itemId, size, parseInt(e.target.value))}
                        />
                        {/* Remove icon to delete item from the cart */}
                        <span className="text-gray-500 ml-2 cursor-pointer" onClick={() => removeItem(itemId, size)}>
                          <FaTrashAlt />
                        </span>
                        <span className="ml-4 text-lg font-bold">
                          {`Rs ${calculateItemTotal(itemId, size).toFixed(2)}`} {/* Display total price for this item */}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Display delivery fee */}
          <div className="mt-4 flex justify-between border-t pt-4">
            <h2 className="text-lg font-bold">Delivery Fee:</h2>
            <span className="text-lg font-bold">{`${Currency}${delivery_fee.toFixed(2)}`}</span>
          </div>

          {/* Display total price including delivery fee */}
          <div className="mt-6 flex justify-between">
            <h2 className="text-xl font-bold">
              Total: {Currency}{(calculateCartTotal() + delivery_fee).toFixed(2)} {/* Display total price including delivery fee */}
            </h2>
            <button
              onClick={handleCheckout}
              className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
