import React from "react";
import UserForm from "../../../components/UserForm";

export default function CreateUserPage() {
  return (
    <div className="flex h-screen">
      <div className="p-[1%] w-full">
        <div className="flex-1 p-6 bg-[#CCE8FF] rounded-lg shadow-lg h-full overflow-y-auto">
          <div className="mb-3">
            <h2 className="text-xl font-semibold">Create User</h2>
            <p>
              Add people to your organization. You can assign them to teams
              after creating teams.
            </p>
          </div>
          <div className="overflow-y-auto pr-2">
            <UserForm />
          </div>
        </div>
      </div>
    </div>
  );
}

