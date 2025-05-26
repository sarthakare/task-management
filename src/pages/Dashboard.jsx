import React, { useState } from "react";

const initialTasks = [
  {
    project: "Project 1",
    team: "Development",
    task: "Fix Login Issue",
    assignedTo: "Raj",
    status: "overdue",
    dueDate: "2025-05-24",
    priority: "high",
  },
  {
    project: "Project 2",
    team: "Design",
    task: "Design Review",
    assignedTo: "Neha",
    status: "upcoming",
    dueDate: "2025-05-28",
    priority: "medium",
  },
  {
    project: "Project 1",
    team: "Development",
    task: "API Integration",
    assignedTo: "Neha",
    status: "completed",
    dueDate: "2025-05-20",
    priority: "low",
  },
];

export default function Dashboard() {
  const [filters, setFilters] = useState({
    project: "",
    team: "",
    person: "",
    status: "",
    priority: "",
  });

  const filteredTasks = initialTasks.filter((task) => {
    return (
      (filters.project === "" || task.project === filters.project) &&
      (filters.team === "" || task.team === filters.team) &&
      (filters.person === "" || task.assignedTo === filters.person) &&
      (filters.status === "" || task.status === filters.status) &&
      (filters.priority === "" || task.priority === filters.priority)
    );
  });

  return (
    <div className="p-6 space-y-6 h-screen overflow-hidden">
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <DashboardCard title="Overdue Tasks" count={filteredTasks.filter(t => t.status === 'overdue').length} />
        <DashboardCard title="Upcoming Tasks" count={filteredTasks.filter(t => t.status === 'upcoming').length} />
        <DashboardCard title="Completed Tasks" count={filteredTasks.filter(t => t.status === 'completed').length} />
        <DashboardCard title="Pending Tasks" count={filteredTasks.filter(t => t.status === 'pending').length} />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center justify-evenly">
        <FilterSelect label="Projects" value={filters.project} onChange={(val) => setFilters({ ...filters, project: val })} options={["Project 1", "Project 2"]} />
        <FilterSelect label="Teams" value={filters.team} onChange={(val) => setFilters({ ...filters, team: val })} options={["Development", "Design"]} />
        <FilterSelect label="Persons" value={filters.person} onChange={(val) => setFilters({ ...filters, person: val })} options={["Raj", "Neha"]} />
        <FilterSelect label="Status" value={filters.status} onChange={(val) => setFilters({ ...filters, status: val })} options={["overdue", "upcoming", "completed", "pending"]} />
        <FilterSelect label="Priority" value={filters.priority} onChange={(val) => setFilters({ ...filters, priority: val })} options={["high", "medium", "low"]} />
      </div>

      {/* Table */}
      <div className="overflow-auto bg-white shadow rounded-lg mt-4 max-h-[60vh]">
        <table className="w-full table-auto min-w-[900px]">
          <thead className="bg-[#018DFF]/30 text-gray-700 text-sm sticky top-0 z-10">
            <tr>
              <th className="px-4 py-2 text-left">Project</th>
              <th className="px-4 py-2 text-left">Team</th>
              <th className="px-4 py-2 text-left">Task</th>
              <th className="px-4 py-2 text-left">Assigned To</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Due Date</th>
              <th className="px-4 py-2 text-left">Priority</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {filteredTasks.map((task, i) => (
              <tr key={i} className={task.status === "overdue" ? "bg-red-100" : task.status === "upcoming" ? "bg-yellow-100" : ""}>
                <td className="px-4 py-2">{task.project}</td>
                <td className="px-4 py-2">{task.team}</td>
                <td className="px-4 py-2">{task.task}</td>
                <td className="px-4 py-2">{task.assignedTo}</td>
                <td className="px-4 py-2 capitalize">{task.status}</td>
                <td className="px-4 py-2">{task.dueDate}</td>
                <td className="px-4 py-2 capitalize">{task.priority}</td>
                <td className="px-4 py-2">🔍 ✏️ 🗑️</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Card Component
function DashboardCard({ title, count }) {
  return (
    <div className="flex flex-col text-center text-black rounded-xl shadow">
      <div className="text-lg font-semibold bg-[#018DFF]/30 p-3 rounded-t-xl">
        {title}
      </div>
      <div className="text-2xl font-bold p-3">{count}</div>
    </div>
  );
}

// Filter Component
function FilterSelect({ label, value, onChange, options }) {
  return (
    <div className="px-4 py-1 rounded-xl bg-[#018DFF]/30">
      <select
        className="focus:outline-none px-3 bg-transparent"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{`All ${label}`}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
