import React from 'react';
import { Toaster, toast } from 'react-hot-toast';
import Title from '../Title';

const About = () => {
  const handleClick = () => {
    toast.success('Welcome to Our E-Commerce Store!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Toaster />
      <Title className="text-1xl" text1={"About"} text2={"Us"} />
      <p className="mb-4">
        Welcome to our e-commerce store, where we provide the best products for you. 
        Our mission is to offer high-quality items at competitive prices, along with an exceptional shopping experience.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
      <p className="mb-4">
        We strive to deliver products that meet the highest standards of quality and reliability. 
        Our team is dedicated to ensuring your satisfaction with every purchase.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Wide range of products</li>
        <li>Competitive pricing</li>
        <li>Exceptional customer service</li>
        <li>Fast and reliable shipping</li>
      </ul>
      <button
        onClick={handleClick}
        className="bg-black text-white py-2 px-4 rounded hover:bg-gray-600 transition"
      >
        Learn More
      </button>
    </div>
  );
};

export default About;
