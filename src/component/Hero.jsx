import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center h-[34rem] mt-4 bg-pink-200">
      <div className="text-center">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGLypjaRGp6anWXRtr31uDNl0P8Cad7POkyg&s" // Replace with your image URL
          alt="E-commerce Product"
          className="w-full md:w-1/2 mx-auto mb-4 rounded-lg shadow-lg "
        />
        <h1 className=" prata-regular text-4xl font-bold">Welcome to Our Store</h1>
        <p className="mt-2 text-xl">Discover amazing products at unbeatable prices!</p>
        <button className="mt-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
