import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand Section */}
        <div className="flex flex-col">
          <h1 className="font-bold text-purple-600 text-4xl cursor-pointer">
            <a href="/">
              <span className="text-indigo-500">E-</span>Cart
            </a>
          </h1>
          <p className="mt-6 text-gray-500 leading-relaxed">
            Discover a wide range of products that meet your daily needs with E-Cart. Your satisfaction is our priority.
          </p>
        </div>

        {/* Company Section */}
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-gray-900">Company</h3>
          <ul className="mt-6 space-y-3">
            <li><a href="/" className="text-gray-600 hover:text-indigo-500">Home</a></li>
            <li><a href="/about" className="text-gray-600 hover:text-indigo-500">About Us</a></li>
            <li><a href="/delivery" className="text-gray-600 hover:text-indigo-500">Delivery Information</a></li>
            <li><a href="/privacy" className="text-gray-600 hover:text-indigo-500">Privacy Policy</a></li>
            <li><a href="/terms" className="text-gray-600 hover:text-indigo-500">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Get In Touch Section */}
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-gray-900">Get In Touch</h3>
          <ul className="mt-6 space-y-3">
            <li className="text-gray-600">Phone: +91 9977413362</li>
            <li><a href="mailto:shubhamuprade@gmail.com" className="text-gray-600 hover:text-indigo-500">Email: shubhamuprade@gmail.com</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-500">Instagram</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-500">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t pt-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} <a href="/" className="hover:text-indigo-500">Shubham Uprade</a> - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
