import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectTable from "../../components/ProjectTable";

export default function ProjectListPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/project-management/create");
  };

  return (
    <div className="flex h-screen">
      <div className="p-[1%] w-full">
        <div className="flex-1 p-6 bg-[#CCE8FF] rounded-lg shadow-lg h-full overflow-auto">
          <div className="flex items-center justify-between pb-3">
            <h1 className="text-2xl font-semibold">Project Management</h1>
            <div className="flex items-center justify-end">
              <button
                onClick={handleClick}
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Create Project
              </button>
            </div>
          </div>
          <ProjectTable/>
        </div>
      </div>
    </div>
  );
}
