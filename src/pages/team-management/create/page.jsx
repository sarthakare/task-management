import React from "react";
import TeamForm from "../../../components/TeamForm";

export default function CreateTeamPage() {
  return (
    <div className="flex h-screen">
      <div className="p-[1%] w-full">
        <div className="flex-1 p-6 bg-[#CCE8FF] rounded-lg shadow-lg h-full overflow-y-auto">
          <div className="mb-3">
            <h2 className="text-xl font-semibold">Create Team</h2>
            <p>
              Define teams and assign existing users as members and team leads.
            </p>
          </div>
          <div className="overflow-y-auto pr-2">
            <TeamForm />
          </div>
        </div>
      </div>
    </div>
  );
}

