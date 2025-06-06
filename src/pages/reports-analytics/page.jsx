import { useState } from "react";
import UserReport from "../../components/UserReport";
import TeamReport from "../../components/TeamReport";

export default function ReportsAnalytics() {
  const [tab, setTab] = useState("user");

  return (
    <div className="p-6">
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setTab("user")}
          className={`px-4 py-2 rounded ${tab === "user" ? "bg-blue-600 text-white" : "bg-gray-300"}`}
        >
          User Report
        </button>
        <button
          onClick={() => setTab("team")}
          className={`px-4 py-2 rounded ${tab === "team" ? "bg-blue-600 text-white" : "bg-gray-300"}`}
        >
          Team Report
        </button>
      </div>
      {tab === "user" ? <UserReport /> : <TeamReport />}
    </div>
  );
}