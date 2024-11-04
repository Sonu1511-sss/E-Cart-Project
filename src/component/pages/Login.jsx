import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import Title from '../Title';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your API endpoint
      const response = await fetch(isLogin ? '/api/login' : '/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(isLogin ? 'Login successful!' : 'Signup successful!');
        // Handle successful login/signup (e.g., store token, redirect)
      } else {
        toast.error(data.message || 'An error occurred!');
      }
    } catch (error) {
      toast.error('Network error!');
      console.error('Error during authentication:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-full mt-16">
      <Toaster />
      <div className="bg-white p-6 rounded shadow-md w-96">
      <Title className="text-1xl mr-11" text1={"Sign"} text2={"Up"} />
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border p-2 w-full"
                placeholder='Email'
              />
            </div>
          )}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border p-2 w-full"
              placeholder='Email'
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="border p-2 w-full"
              placeholder='Password'
            />
          </div>
          <button type="submit" className="bg-black text-white p-2 rounded w-full">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p className="mt-4 text-center">
          {isLogin ? 'Don’t have an account?' : 'Already have an account?'}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-black ml-1"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login
