import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
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
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    existingUsers.push(formData);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    navigate('/signin');
  };

  return (
    <div className="mx-auto mt-[98px] w-[540px] font-semibold">
      <h1 className="text-[36px] text-center leading-[49px]">Welcome, Sign up</h1>
      <form className="w-[512px] h-[494px] border-gray-300 mt-[40px] p-[20px] rounded-md shadow-md" onSubmit={handleSubmit}>
        <p className="text-[16px] font-normal mt-[30px] text-center">
          It is our great pleasure to have <br /> you on board!
        </p>
        <input
          type="text"
          name="email"
          placeholder="Enter your Email"
          value={formData.email}
          onChange={handleChange}
          className="outline-none text-[14px] rounded-[4px] pl-[10px] w-[248px] mt-[30px] border border-gray-400 h-[42px] mx-auto block focus:border-blue-500"
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Create your Login"
          value={formData.username}
          onChange={handleChange}
          className="outline-none text-[14px] rounded-[4px] pl-[10px] w-[248px] mt-[15px] border border-gray-400 h-[42px] mx-auto block focus:border-blue-500"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Create your Password"
          value={formData.password}
          onChange={handleChange}
          className="outline-none text-[14px] pl-[10px] rounded-[4px] w-[248px] mt-[15px] border border-gray-400 h-[42px] mx-auto block focus:border-blue-500"
          required
        />
        <button type="submit" className="w-[248px] h-[42px] bg-blue-500 text-white mt-[20px] mx-auto block rounded hover:bg-blue-900">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
