import React, { useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";

const allUsers = [
  { id: "1", name: "John Doe (Admin)" },
  { id: "2", name: "Jane Smith (Manager)" },
  { id: "3", name: "Samuel Brown (Team Lead)" },
  { id: "4", name: "Emily Davis (Developer)" },
  { id: "5", name: "Michael Johnson (QA)" },
];

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    supervisor: "",
    startDate: "",
    endDate: "",
    status: "",
    members: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMemberSelect = (e) => {
    const selectedId = e.target.value;
    const selectedUser = allUsers.find((user) => user.id === selectedId);
    if (selectedUser && !formData.members.some((m) => m.id === selectedId)) {
      setFormData((prev) => ({
        ...prev,
        members: [...prev.members, selectedUser],
      }));
    }
  };

  const removeMember = (id) => {
    setFormData((prev) => ({
      ...prev,
      members: prev.members.filter((member) => member.id !== id),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log("Project Data:", formData);
  };

  const handleReset = () => {
    setFormData({
      projectName: "",
      description: "",
      supervisor: "",
      startDate: "",
      endDate: "",
      status: "",
      members: [],
    });
  };

  return (
    <div className="bg-white px-20 py-10 w-full rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-5">

        <div className="flex items-center gap-4 mb-4">
          <label className="w-1/5 font-medium" htmlFor="projectName">
            Project Name
          </label>
          <input
            type="text"
            name="projectName"
            id="projectName"
            value={formData.projectName}
            onChange={handleChange}
            className="w-4/5 p-2 border rounded-md"
            placeholder="e.g. UI Development"
            required
          />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <label className="w-1/5 font-medium" htmlFor="description">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="w-4/5 p-2 border rounded-md"
            placeholder="e.g. Team for frontend development."
            required
          />
        </div>

        {/* Multi-member select */}
        <div className="flex items-start gap-4 mb-4">
          <label className="w-1/5 font-medium mt-2">Assigned Team</label>
          <div className="w-4/5">
            <select
              onChange={handleMemberSelect}
              className="w-full p-2 border rounded-md"
              defaultValue=""
            >
              <option value="" disabled>
                Select a member to add
              </option>
              {allUsers
                .filter((user) => !formData.members.some((m) => m.id === user.id))
                .map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
            </select>
            <div className="flex flex-wrap mt-3 gap-2">
              {formData.members.map((member) => (
                <div
                  key={member.id}
                  className="bg-gray-200 text-sm px-3 py-1 rounded-full flex items-center gap-2"
                >
                  {member.name}
                  <button
                    type="button"
                    onClick={() => removeMember(member.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <IoCloseCircle size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <label className="w-1/5 font-medium" htmlFor="supervisor">
            Project Manager
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
            {allUsers.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <label className="w-1/5 font-medium" htmlFor="startDate">
            Start Date
          </label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-4/5 p-2 border rounded-md"
            required
          />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <label className="w-1/5 font-medium" htmlFor="endDate">
            End Date
          </label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-4/5 p-2 border rounded-md"
            required
          />
        </div>

        {/* Project Status */}
        <div className="flex items-center gap-4 mb-4">
          <label className="w-1/5 font-medium" htmlFor="status">
            Status
          </label>
          <div className="w-4/5 flex flex-wrap gap-6">
            {["active", "on-hold", "completed", "cancelled"].map((status) => (
              <label key={status} className="flex items-center gap-2 capitalize">
                <input
                  type="radio"
                  name="status"
                  value={status}
                  checked={formData.status === status}
                  onChange={handleChange}
                  required
                />
                {status.replace("-", " ")}
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={handleReset}
            className="bg-red-400 text-white px-6 py-2 rounded-md hover:bg-red-500 transition w-[20%] flex items-center justify-center gap-2"
          >
            <GrPowerReset size={22} /> Reset
          </button>

          <button
            type="submit"
            className="bg-green-400 text-white px-6 py-2 rounded-md hover:bg-green-500 transition w-[20%] flex items-center justify-center gap-2"
          >
            <IoIosAddCircleOutline size={22} /> Create Project
          </button>
        </div>
      </form>
    </div>
  );
}
