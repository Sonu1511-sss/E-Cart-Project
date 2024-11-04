import React, { useRef, useState } from "react";
import Title from "../Title"; // Ensure you have this component
import { toast } from "react-hot-toast"; // Import the toast function

// Contact methods data
const contactMethods = [
  { id: 1, title: "Email", detail: "Shubhamuprade0@gmail.com", icon: "📧" },
  { id: 2, title: "Phone", detail: "+91 9977423362", icon: "📞" },
  {
    id: 3,
    title: "LinkedIn",
    detail: "linkedin.com/shubham-uprade",
    icon: "🔗",
  },
  {
    id: 4,
    title: "GitHub",
    detail: "https://github.com/Sonu1511-sss",
    icon: "🐱",
  },
  {
    id: 5,
    title: "Location",
    detail: "Bhopal, Madhya Pradesh, India",
    icon: "📍",
  },
];

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // EmailJS function to send the email
    emailjs
      .sendForm(
        "service_fdrkusw", // Replace with your service ID
        "template_g7h0uq9", // Replace with your template ID
        form.current,
        "YtkT7-e_NYTsOLza-" // Replace with your user ID
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          toast.success("Message sent successfully!"); // Show success notification
          setFormData({ from_name: "", from_email: "", message: "" }); // Clear form
        },
        (error) => {
          console.error("Failed to send message...", error);
          setStatus("Failed to send message, please try again later.");
          toast.error("Failed to send message, please try again later."); // Show error notification
        }
      );
  };

  return (
    <section className="py-12 mt-10 text-gray-900">
      <Title className="text-1xl" text1={"Contact"} text2={"Us"} />

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        <form ref={form} onSubmit={sendEmail} className="p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              placeholder="Name"
              className="w-full text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Message"
              className="w-full text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Send Message
          </button>
          {status && (
            <p className="mt-4 text-center text-orange-400">{status}</p>
          )}
        </form>
        
        {/* Contact Methods Section */}
        <div className="p-6 rounded-lg shadow-lg">
          <Title className="text-1xl" text1={"Contact"} text2={"Method"} />
          <ul className="space-y-4">
            {contactMethods.map((method) => (
              <li key={method.id} className="flex items-center">
                <span className="text-2xl mr-2">{method.icon}</span>
                <div>
                  <h4 className="text-lg font-semibold text-white">{method.title}</h4>
                  <p className="text-gray-800">{method.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508343!2d144.95373531531553!3d-37.81720997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f1a05ab%3A0x5045675218ceed0!2sYour%20Business%20Name!5e0!3m2!1sen!2sau!4v1610000000000!5m2!1sen!2sau"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="w-full h-auto rounded shadow-lg"
        ></iframe>
      </div>
      
      {/* Subscribe Section */}
      <div className="text-center py-10 px-4">
        <h3 className="text-2xl font-bold mb-4">Subscribe now & get 20% off</h3>
        <p className="mb-4 text-gray-500 max-w-lg mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <div className="flex justify-center">
          <form className="w-full max-w-md flex">
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
    </section>
  );
};

export default Contact;
