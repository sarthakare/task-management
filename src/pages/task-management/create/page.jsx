import React from "react";
import TableForm from "../../../components/TaskForm";

export default function CreateTaskPage() {
  return (
    <div className="flex h-screen">
      <div className="p-[1%] w-full">
        <div className="flex-1 p-6 bg-[#CCE8FF] rounded-lg shadow-lg h-full overflow-y-auto">
          <div className="mb-3">
            <h2 className="text-xl font-semibold">Create Task</h2>
            <p>
              Define your tasks and assign them to users with priorities, deadlines, and optional follow-ups.
            </p>
          </div>
          <div className="overflow-y-auto pr-2">
            <TableForm />
          </div>
        </div>
      </div>
    </div>
  );
}
