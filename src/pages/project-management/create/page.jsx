import React from "react";
import ProjectForm from "../../../components/ProjectForm";

export default function CreateProjectPage() {
  return (
    <div className="flex h-screen">
      <div className="p-[1%] w-full">
        <div className="flex-1 p-6 bg-[#CCE8FF] rounded-lg shadow-lg h-full overflow-y-auto">
          <div className="mb-3">
            <h2 className="text-xl font-semibold">Create Project</h2>
            <p>
              Define your projects and assign them to teams and managers
            </p>
          </div>
          <div className="overflow-y-auto pr-2">
            <ProjectForm />
          </div>
        </div>
      </div>
    </div>
  );
}
