import React from "react";

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <div className="p-[1%] w-full">
        <div className="flex-1 p-6 bg-[#CCE8FF] rounded-lg shadow-lg h-full overflow-auto">
          <div className="bg-white p-5 w-full rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold text-center">
              Welcome "Admin Name"
            </h1>
          </div>
          <p className="my-[1%] font-bold text-center text-gray-700">
            Your workspace is ready. Here is what you should do next to get your
            team rolling:
          </p>

          {/* Tick boxes */}
          <div className="grid grid-cols-1 gap-4 mt-6 px-[10%]">
            <label className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-lg font-medium">Create User</span>
            </label>

            <label className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-lg font-medium">Create Team</span>
            </label>

            <label className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-lg font-medium">Create Project</span>
            </label>

            <label className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-lg font-medium">Create Task</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
