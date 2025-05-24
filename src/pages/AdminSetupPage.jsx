import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function AdminSetupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!formData.terms) {
      alert("You must accept the terms and conditions.");
      return;
    }

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    fetch("/api/company-setup", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("Admin setup successful", res);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
        <div className="h-screen w-full p-[1%]">
      <div className="bg-[#CCE8FF] h-full w-full rounded-lg shadow-lg flex flex-col items-center justify-center px-[5%] py-[2%]">
        <div className="bg-white p-5 w-full rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold text-center">Welcome, "Company Name"</h1>
        </div>

        <p className="my-[1%] text-center text-gray-700">
          Let's set up your organization's first admin. This account will have full access to manage users, teams, tasks, and configurations.
        </p>

        <div className="bg-white px-20 py-5 w-full rounded-lg shadow-md h-full overflow-auto">
          <div className="flex items-center justify-center text-xl underline mb-[2%]">
            Create Super Admin Account
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

              <div className="flex items-center gap-4 mb-4">
              <label className="w-1/5 font-medium" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-4/5 p-2 border rounded-md"
                placeholder="e.g. John Doe"
                required
              />
            </div>

            <div className="flex items-center gap-4 mb-4">
              <label className="w-1/5 font-medium" htmlFor="phone">
                Email Address
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-4/5 p-2 border rounded-md"
                placeholder="e.g. johndoe@company.com"
                required
              />
            </div>

            <div className="flex items-center gap-4 mb-4">
              <label className="w-1/5 font-medium" htmlFor="email">
                Contact Number
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-4/5 p-2 border rounded-md"
                placeholder="e.g. +91 9876543210"
                required
              />
            </div>

            <div className="flex items-center gap-4 mb-4">
              <label className="w-1/5 font-medium" htmlFor="designation">
               Designation
              </label>
              <input
                type="text"
                name="designation"
                id="designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-4/5 p-2 border rounded-md"
                placeholder="e.g. Admin"
                required
              />
            </div>

            <div className="flex items-center gap-4 mb-4">
              <label className="w-1/5 font-medium" htmlFor="password">
               Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-4/5 p-2 border rounded-md"
                placeholder="Enter password"
                required
              />
            </div>

            <div className="flex items-center gap-4 mb-4">
              <label className="w-1/5 font-medium" htmlFor="confirmPassword">
               Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-4/5 p-2 border rounded-md"
                placeholder="e.g. Re-enter password"
                required
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="w-1/5 font-medium" htmlFor="terms">
                Terms
              </label>
              <div className="w-4/5 flex items-center gap-2">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="w-4 h-4"
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I accept the{" "}
                  <a href="#" className="text-blue-600 underline hover:text-blue-800">
                    terms and conditions
                  </a>
                </label>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition w-[20%] flex items-center justify-center gap-2"
              >
                Next <FaLongArrowAltRight size={22} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
