import React, { useContext, useState } from "react";
import Title from "./Title";
import { ShopContext } from "./Context/ShopContext";
import toast, { Toaster } from "react-hot-toast";

const PlaceOrder = () => {
  const { cartTotal, delivery_fee, Currency } = useContext(ShopContext);
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePlaceOrder = () => {
    if (!paymentMethod) {
      toast.error("Please select a payment method!");
      return;
    }
    toast.success("Order placed successfully!");
  };


  return (
    <div className="flex flex-col md:flex-row justify-around p-4 md:p-10">
      <Toaster /> {/* Toast container for notifications */}

      {/* Delivery Information Section */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <Title className="text-1xl" text1={"DELIVERY"} text2={"INFORMATION"} />
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="border p-2" type="text" placeholder="First name" />
          <input className="border p-2" type="text" placeholder="Last name" />
          <input className="border p-2 col-span-1 md:col-span-2" type="email" placeholder="Email address" />
          <input className="border p-2 col-span-1 md:col-span-2" type="text" placeholder="Street" />
          <input className="border p-2" type="text" placeholder="City" />
          <input className="border p-2" type="text" placeholder="State" />
          <input className="border p-2" type="text" placeholder="Zipcode" />
          <input className="border p-2" type="text" placeholder="Country" />
          <input className="border p-2 col-span-1 md:col-span-2" type="text" placeholder="Phone" />
        </form>
      </div>

      {/* Cart Totals and Payment Section */}
      <div className="w-full md:w-1/3">
        <Title className="text-1xl" text1={"CART"} text2={"TOTALS"} />

        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>{`${Currency}${cartTotal.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping Fee</span>
          <span>{`${Currency}${delivery_fee.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between font-semibold mb-4">
          <span>Total</span>
          <span>{`${Currency}${(cartTotal + delivery_fee).toFixed(2)}`}</span>
        </div>

        <h2 className="text-xl font-semibold mb-2">PAYMENT METHOD</h2>
        <div className="flex flex-col md:flex-row gap-2 mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="stripe"
              onChange={() => setPaymentMethod("stripe")}
              checked={paymentMethod === "stripe"}
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGZVxQZ2UYa4aZMO1u_hgQPt-OVvqLq5MnoA&s"
              alt="Stripe"
              className="h-8 w-12"
            />
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="razorpay"
              onChange={() => setPaymentMethod("razorpay")}
              checked={paymentMethod === "razorpay"}
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCXvYRSwlYwdLPS-a2ra2KQcuvqupr1VqXIQ&s"
              alt="Razorpay"
              className="h-8 w-12"
            />
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="cash"
              onChange={() => setPaymentMethod("cash")}
              checked={paymentMethod === "cash"}
            />
            <span className="text-gray-600 text-[1rem]">Cash on Delivery</span>
          </label>
        </div>

        <button
          className="w-full bg-black text-white py-2 text-lg"
          onClick={handlePlaceOrder}
        >
          <a href="/AllOrders">PLACE ORDER</a>
        
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
