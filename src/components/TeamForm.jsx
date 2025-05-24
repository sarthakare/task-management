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
  // Add more users as needed
];

export default function TeamForm() {
  const [formData, setFormData] = useState({
    teamName: "",
    description: "",
    department: "",
    teamLead: "",
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

    if (selectedUser && !formData.members.some((member) => member.id === selectedId)) {
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

    // Simulated POST
    fetch("/api/teams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("Team created:", res);
        // Optionally reset
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  const resetForm = () => {
    setFormData({
      teamName: "",
      description: "",
      department: "",
      teamLead: "",
      status: "",
      members: [],
    });
  };

  return (
    <div className="bg-white px-20 py-10 w-full rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex items-center gap-4 mb-4">
          <label className="w-1/5 font-medium" htmlFor="teamName">
            Team Name
          </label>
          <input
            type="text"
            name="teamName"
            id="teamName"
            value={formData.teamName}
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
            placeholder="e.g. This team is created for working on UI development."
            required
          />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <label className="w-1/5 font-medium" htmlFor="department">
            Department
          </label>
          <select
            name="department"
            id="department"
            value={formData.department}
            onChange={handleChange}
            className="w-4/5 p-2 border rounded-md"
            required
          >
            <option value="">Select Department</option>
            <option value="development">Development</option>
            <option value="accounting">Accounting</option>
            <option value="testing">Testing</option>
            <option value="management">Management</option>
          </select>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <label className="w-1/5 font-medium" htmlFor="teamLead">
            Team Lead
          </label>
          <select
            name="teamLead"
            id="teamLead"
            value={formData.teamLead}
            onChange={handleChange}
            className="w-4/5 p-2 border rounded-md"
            required
          >
            <option value="">Select Team Lead</option>
            {allUsers.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <label className="w-1/5 font-medium">Status</label>
          <div className="w-4/5 flex items-center gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="status"
                value="active"
                checked={formData.status === "active"}
                onChange={handleChange}
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

        {/* Multi-select members */}
        <div className="flex items-start gap-4 mb-4">
          <label className="w-1/5 font-medium mt-2">Add Members</label>
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

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={resetForm}
            className="bg-red-400 text-white px-6 py-2 rounded-md hover:bg-red-500 transition w-[20%] flex items-center justify-center gap-2"
          >
            <GrPowerReset size={22} /> Reset
          </button>

          <button
            type="submit"
            className="bg-green-400 text-white px-6 py-2 rounded-md hover:bg-green-500 transition w-[20%] flex items-center justify-center gap-2"
          >
            <IoIosAddCircleOutline size={22} /> Create Team
          </button>
        </div>
      </form>
    </div>
  );
}
