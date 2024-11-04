import React, { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const AllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Function to fetch orders from an API or local data
    const fetchOrders = async () => {
      try {
        // Replace with your API endpoint
        const response = await fetch('/api/orders');
        const data = await response.json();
        setOrders(data);
        toast.success('Orders loaded successfully!'); // Notification on successful fetch
      } catch (error) {
        toast.error('Failed to load orders!'); // Notification on error
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Toaster />
      <h1 className="text-2xl font-bold mb-4">Order Display</h1>
      {orders.length === 0 ? (
        <p>No orders available.</p>
      ) : (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li key={order.id} className="border p-4 rounded-md shadow">
              <h2 className="text-xl font-semibold">Order ID: {order.id}</h2>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
              <p>Status: {order.status}</p>
              <p>Total: ${order.total}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllOrders;
