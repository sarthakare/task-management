import React from "react";
import { useNavigate } from "react-router-dom";
import TaskTable from "../../components/TaskTable";

export default function TaskListPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/task-management/create");
  };

  return (
    <div className="flex h-screen">
      <div className="p-[1%] w-full">
        <div className="flex-1 p-6 bg-[#CCE8FF] rounded-lg shadow-lg h-full overflow-auto">
          <div className="flex items-center justify-between pb-3">
            <h1 className="text-2xl font-semibold">Task Management</h1>
            <div className="flex items-center justify-end">
              <button
                onClick={handleClick}
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Create Task
              </button>
            </div>
          </div>
          <TaskTable/>
        </div>
      </div>
    </div>
  );
}
