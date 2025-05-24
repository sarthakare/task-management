import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Navigate } from "react-router-dom";

export default function CompanySetupPage() {
  const [formData, setFormData] = useState({
    name: "",
    domain: "",
    address: "",
    industry: "",
    email: "",
    phone: "",
    logo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    // POST to backend
    fetch("/api/company-setup", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("Company setup successful", res);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <div className="h-screen w-full p-[1%]">
      <div className="bg-[#CCE8FF] h-full w-full rounded-lg shadow-lg flex flex-col items-center justify-center px-[5%] py-[2%]">
        <div className="bg-white p-5 w-full rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold text-center">
            Welcome to Task Manager
          </h1>
        </div>
        <p className="my-[1%] text-center text-gray-700">
          This setup will help you get started with your new Task Management
          workspace. You can configure your company, and create your admin
          account in just a few steps.
        </p>
        <div className="bg-white px-20 py-5 w-full rounded-lg shadow-md h-full overflow-auto">
          <div className="flex items-center justify-center text-xl underline mb-[2%]">
            <p>Company Setup Form</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex items-center gap-4 mb-4">
              <label className="w-1/5 font-medium" htmlFor="name">
                Company Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-4/5 p-2 border rounded-md"
                placeholder="e.g. Acme Inc."
                required
              />
            </div>

            <div className="flex items-center gap-4 mb-4">
              <label htmlFor="domain" className="w-1/5 font-medium">
                Company Domain
              </label>
              <input
                type="text"
                name="domain"
                id="domain"
                value={formData.domain}
                onChange={handleChange}
                className="w-4/5 p-2 border rounded-md"
                placeholder="e.g. acme.com"
                required
              />
            </div>

            <div className="flex items-center gap-4 mb-4">
              <label className="w-1/5 font-medium" htmlFor="address">
                Company Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                className="w-4/5 p-2 border rounded-md"
                placeholder="123 Business Rd, City"
                required
              />
            </div>

            <div className="flex items-center gap-4 mb-4">
              <label className="w-1/5 font-medium" htmlFor="industry">
                Industry Type
              </label>
              <select
                name="industry"
                id="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-4/5 p-2 border rounded-md"
                required
              >
                <option value="">Select Industry</option>
                <option value="IT">IT</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <label className="w-1/5 font-medium" htmlFor="email">
                Contact Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-4/5 p-2 border rounded-md"
                placeholder="contact@acme.com"
                required
              />
            </div>

            <div className="flex items-center gap-4 mb-4">
              <label className="w-1/5 font-medium" htmlFor="phone">
                Contact Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-4/5 p-2 border rounded-md"
                placeholder="e.g. +91 9876543210"
                required
              />
            </div>

            <div className="flex items-center gap-4 mb-4">
              <label className="w-1/5 font-medium" htmlFor="logo">
                Company Logo
              </label>
              <input
                type="file"
                name="logo"
                id="logo"
                accept="image/*"
                onChange={handleChange}
                className="w-4/5 p-2 border rounded-md"
              />
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition w-[20%] flex items-center justify-center gap-2"
                onClick={handleSubmit}
              >
                Next <FaLongArrowAltRight size={22}/>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
