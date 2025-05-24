import React, { useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function TaskForm() {
  const [formData, setFormData] = useState({
    taskName: "",
    description: "",
    projectName: "",
    dueDate: "",
    followupDate: "",
    priority: "",
    assignees: "",
    status: "",
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = new FormData();
    for (const key in formData) {
      payload.append(key, formData[key]);
    }

    // Simulate POST request
    fetch("/api/tasks", {
      method: "POST",
      body: payload,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("Task created:", res);
        // Reset form or redirect logic
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <div className="bg-white px-20 py-10 w-full rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex items-center gap-4 mb-4">
          <label className="w-1/5 font-medium" htmlFor="taskName">
            Task Name
          </label>
          <input
            type="text"
            name="taskName"
            id="taskName"
            value={formData.taskName}
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
            placeholder="e.g. Frontend development module"
            required
          />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <label className="w-1/5 font-medium" htmlFor="projectName">
            Project Name
          </label>
          <select
            name="projectName"
            id="projectName"
            value={formData.projectName}
            onChange={handleChange}
            className="w-4/5 p-2 border rounded-md"
            required
          >
            <option value="">Select Project Name</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="team-lead">Team Lead</option>
            <option value="developer">Developer</option>
            <option value="intern">Intern</option>
          </select>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <label className="w-1/5 font-medium" htmlFor="status">
            Status
          </label>
          <select
            name="status"
            id="status"
            value={formData.status}
            onChange={handleChange}
            className="w-4/5 p-2 border rounded-md"
            required
          >
            <option value="">Select Status</option>
            <option value="1">Pending</option>
            <option value="1">On Hold</option>
            <option value="1">In Progress</option>
            <option value="1">Cancelled</option>
            <option value="1">Finished</option>
          </select>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <label className="w-1/5 font-medium" htmlFor="dueDate">
            Due Date
          </label>
          <input
            type="date"
            name="dueDate"
            id="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="w-4/5 p-2 border rounded-md"
            required
          />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <label className="w-1/5 font-medium" htmlFor="followupDate">
            Follow-up Date
          </label>
          <input
            type="date"
            name="followupDate"
            id="followupDate"
            value={formData.followupDate}
            onChange={handleChange}
            className="w-4/5 p-2 border rounded-md"
            required
          />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <label className="w-1/5 font-medium" htmlFor="priority">
            Priority
          </label>
          <select
            name="priority"
            id="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-4/5 p-2 border rounded-md"
            required
          >
            <option value="">Select Priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <label className="w-1/5 font-medium" htmlFor="assignees">
            Assignees
          </label>
          <select
            name="assignees"
            id="assignees"
            value={formData.assignees}
            onChange={handleChange}
            className="w-4/5 p-2 border rounded-md"
            required
          >
            <option value="">Select Assignee</option>
            <option value="1">John Doe (Admin)</option>
            <option value="2">Jane Smith (Manager)</option>
            <option value="3">Samuel Brown (Team Lead)</option>
          </select>
        </div>

      
        <div className="flex items-center gap-4 mb-4">
          <label className="w-1/5 font-medium" htmlFor="attachment">
            Attachment
          </label>
          <input
            type="file"
            name="attachment"
            id="attachment"
            accept="image/*"
            onChange={handleChange}
            className="w-4/5 p-2 border rounded-md"
          />
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() =>
              setFormData({
                taskName: "",
                description: "",
                projectName: "",
                dueDate: "",
                followupDate: "",
                priority: "",
                assignees: "",
                status: "",
                attachment: null,
              })
            }
            className="bg-red-400 text-white px-6 py-2 rounded-md hover:bg-red-500 transition w-[20%] flex items-center justify-center gap-2"
          >
            <GrPowerReset size={22} /> Reset
          </button>

          <button
            type="submit"
            className="bg-green-400 text-white px-6 py-2 rounded-md hover:bg-green-500 transition w-[20%] flex items-center justify-center gap-2"
          >
            <IoIosAddCircleOutline size={22} /> Add Task
          </button>
        </div>
      </form>
    </div>
  );
}
