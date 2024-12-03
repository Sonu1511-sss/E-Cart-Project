import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import Title from '../Title';  // Assuming you have a custom Title component for styling

const About = () => {
  // Handle toast notification on button click
  const handleClick = () => {
    toast.success('Welcome to Our E-Commerce Store!');
  };

  // State to manage FAQ toggles
  const [faqOpen, setFaqOpen] = useState({});

  // Toggle FAQ item
  const toggleFaq = (index) => {
    setFaqOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Toaster for notifications */}
      <Toaster />

      {/* Title Section */}
      <Title className="text-2xl font-bold text-center mb-6" text1="About" text2="Us" />

      {/* Introduction */}
      <p className="mb-6 text-lg text-gray-700">
        Welcome to our e-commerce store, where we provide the best products for you. Our mission is to offer high-quality items at competitive prices, along with an exceptional shopping experience.
      </p>

      {/* Our Mission */}
      <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
      <p className="mb-6 text-lg text-gray-700">
        We strive to deliver products that meet the highest standards of quality and reliability. Our team is dedicated to ensuring your satisfaction with every purchase.
      </p>

      {/* Why Choose Us Section */}
      <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
      <ul className="list-disc ml-6 mb-6 text-lg text-gray-700">
        <li>Wide range of products</li>
        <li>Competitive pricing</li>
        <li>Exceptional customer service</li>
        <li>Fast and reliable shipping</li>
      </ul>

      {/* Company Partners Section */}
      <h2 className="text-2xl font-semibold mb-4">Our Partners</h2>
      <p className="mb-4 text-lg text-gray-700">
        We are proud to partner with top brands and suppliers to bring you the best products. Our partners play a crucial role in helping us maintain quality and reliability.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {/* Placeholder partner logos */}
        <img src="c" alt="Partner 1" className="w-full h-28 object-contain" />
        <img src="./assids/dharam.jpeg" alt="Partner 2" className="w-full h-28 object-contain" />
        <img src="./assids/samjay.jpeg" alt="Partner 3" className="w-full h-28 object-contain" />
        <img src="./assids/nilkhil.jpeg" alt="Partner 4" className="w-full h-28 object-contain" />
      </div>

      {/* Meet Our Team Section */}
      <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
      
      {/* Large Team Image */}
      <div className="mb-8">
        <img src="./assids/team2.jpeg" alt="Our Team" className="w-full h-[34rem] object-cover rounded-lg" />
      </div>

      {/* Individual Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Team Member 1 */}
        <div className="text-center">
          <img src="./assids/shubha.jpeg" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h3 className="text-lg font-semibold">Shubha</h3>
          <p className="text-gray-600">Chief Executive Officer</p>
          <p className="mt-2 text-sm text-gray-700">Shubha leads our vision and strategy with over 10 years of experience in e-commerce.</p>
        </div>

        {/* Team Member 2 */}
        <div className="text-center">
          <img src="./assids/dharam.jpeg" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h3 className="text-lg font-semibold">Dharam</h3>
          <p className="text-gray-600">Chief Technology Officer</p>
          <p className="mt-2 text-sm text-gray-700">Dharam drives innovation and technical excellence in our platform.</p>
        </div>

        {/* Team Member 3 */}
        <div className="text-center">
          <img src="./assids/samjay.jpeg" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h3 className="text-lg font-semibold">Samjay</h3>
          <p className="text-gray-600">Head of Marketing</p>
          <p className="mt-2 text-sm text-gray-700">Samjay is responsible for our branding and customer outreach efforts.</p>
        </div>

        {/* Team Member 4 */}
        <div className="text-center">
          <img src="./assids/nilkhil.jpeg" alt="Team Member 4" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h3 className="text-lg font-semibold">Nikhil</h3>
          <p className="text-gray-600">Product Manager</p>
          <p className="mt-2 text-sm text-gray-700">Nikhil ensures our products meet your needs with the best quality.</p>
        </div>
      </div>

      {/* FAQ Section */}
      <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="mb-8">
        {[
          { question: "What is your return policy?", answer: "We offer a 30-day return policy on all purchases." },
          { question: "How can I track my order?", answer: "You can track your order by logging into your account and visiting the 'Orders' section." },
          { question: "Do you offer international shipping?", answer: "Yes, we offer international shipping to most countries. Shipping fees may vary." },
          { question: "How can I contact customer support?", answer: "You can reach our customer support team via email or phone, available on our Contact Us page." },
        ].map((faq, index) => (
          <div key={index} className="border-b py-4">
            <button
              onClick={() => toggleFaq(index)}
              className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-800"
            >
              {faq.question}
              <span>{faqOpen[index] ? '-' : '+'}</span>
            </button>
            {faqOpen[index] && <p className="mt-2 text-gray-700">{faq.answer}</p>}
          </div>
        ))}
      </div>

      {/* Button to trigger toast */}
      <button
        onClick={handleClick}
        className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition duration-300"
      >
        Learn More
      </button>
    </div>
  );
};

export default About;
