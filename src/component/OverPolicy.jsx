import React from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { RiCustomerServiceFill, RiExchangeFundsFill } from "react-icons/ri";

const policies = [
  {
    icon: <RiExchangeFundsFill />,
    title: "Easy Exchange Policy",
    description: "We offer hassle-free exchange policy",
  },
  {
    icon: <IoCheckmarkDoneCircle />,
    title: "7 Days Return Policy",
    description: "We provide 7 days free return policy",
  },
  {
    icon: <RiCustomerServiceFill />,
    title: "Best Customer Support",
    description: "We provide 24/7 customer support",
  },
];

const OverPolicy = () => {
  const onSubhmitHandle = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      {/* Policy Section */}
      <div className="flex flex-col sm:flex-row justify-around items-center py-10 gap-8 sm:gap-0">
        {policies.map((policy, index) => (
          <div key={index} className="text-center max-w-xs">
            <div className="text-5xl mb-4 ml-[5.3rem]">{policy.icon}</div>
            <h3 className="text-lg font-bold mb-2">{policy.title}</h3>
            <p className="text-gray-500">{policy.description}</p>
          </div>
        ))}
      </div>

      {/* Subscribe Section */}
      <div className="text-center py-10 px-4">
        <h3 className="text-2xl font-bold mb-4">Subscribe now & get 20% off</h3>
        <p className="mb-4 text-gray-500 max-w-lg mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <div className="flex justify-center">
          <form onSubmit={onSubhmitHandle} className="w-full max-w-md flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 p-2 w-full rounded-l-md"
            />
            <button className="bg-black text-white p-2 rounded-r-md">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OverPolicy;
