import React, { useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    supervisor: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // POST request simulation
    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("User created:", res);
        // reset form or navigate
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <div className="bg-white px-20 py-10 w-full rounded-lg shadow-md">
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
          <label className="w-1/5 font-medium" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-4/5 p-2 border rounded-md"
            placeholder="e.g. johndoe@company.com"
            required
          />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <label className="w-1/5 font-medium" htmlFor="phone">
            Phone Number
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
          <label className="w-1/5 font-medium" htmlFor="role">
            Role / Designation
          </label>
          <select
            name="role"
            id="role"
            value={formData.role}
            onChange={handleChange}
            className="w-4/5 p-2 border rounded-md"
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="team-lead">Team Lead</option>
            <option value="developer">Developer</option>
            <option value="intern">Intern</option>
          </select>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <label className="w-1/5 font-medium" htmlFor="supervisor">
            Supervisor
          </label>
          <select
            name="supervisor"
            id="supervisor"
            value={formData.supervisor}
            onChange={handleChange}
            className="w-4/5 p-2 border rounded-md"
            required
          >
            <option value="">Select Supervisor</option>
            <option value="1">John Doe (Admin)</option>
            <option value="2">Jane Smith (Manager)</option>
            <option value="3">Samuel Brown (Team Lead)</option>
          </select>
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
            placeholder="Re-enter password"
            required
          />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <label className="w-1/5 font-medium" htmlFor="status">
            Status
          </label>
          <div className="w-4/5 flex items-center gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="status"
                value="active"
                checked={formData.status === "active"}
                onChange={handleChange}
                required
              />
              Active
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="status"
                value="inactive"
                checked={formData.status === "inactive"}
                onChange={handleChange}
              />
              Inactive
            </label>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="submit"
            className="bg-red-400 text-white px-6 py-2 rounded-md hover:bg-red-500 transition w-[20%] flex items-center justify-center gap-2"
          >
            <GrPowerReset size={22} /> Reset
          </button>

          <button
            type="submit"
            className="bg-green-400 text-white px-6 py-2 rounded-md hover:bg-green-500 transition w-[20%] flex items-center justify-center gap-2"
          >
            <IoIosAddCircleOutline size={22} /> Add User
          </button>
        </div>
      </form>
    </div>
  );
}
