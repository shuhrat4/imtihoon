import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(
      (user) => user.username === formData.username && user.password === formData.password
    );

    if (user) {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="mx-auto mt-[150px] w-[540px] font-semibold">
      <h1 className="text-[36px] leading-[49px]">Welcome, Log into your account</h1>
      <form className="w-[512px] h-[390px] rounded-md shadow-md border-gray-300 mt-[70px] p-[20px]" onSubmit={handleSubmit}>
        <p className="text-[16px] font-normal mt-[30px] text-center">
          It is our great pleasure to have <br /> you on board!
        </p>
        <input
          type="text"
          name="username"
          placeholder="Enter your Login"
          value={formData.username}
          onChange={handleChange}
          className="outline-none text-[14px] pl-[10px] rounded-[4px] w-[248px] mt-[30px] border border-gray-400 h-[42px] mx-auto block"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="outline-none text-[14px] pl-[10px] w-[248px] rounded-[4px] mt-[15px] border border-gray-400 h-[42px] mx-auto block"
          required
        />
        <button type="submit" className="w-[248px] h-[42px] bg-blue-500 text-white mt-[20px] mx-auto block rounded">
          Login
        </button>
        <a href="/" className="block text-center mt-[15px] text-blue-500">
          Sign up
        </a>
      </form>
    </div>
  );
}

export default SignIn;
