import { useState } from "react";
import ReminderList from "../../components/ReminderList";
import EscalationList from "../../components/EscalationList";

export default function RemindersEscalations() {
  const [tab, setTab] = useState("reminder");

  return (
    <div className="p-6">
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setTab("reminder")}
          className={`px-4 py-2 rounded ${tab === "reminder" ? "bg-blue-600 text-white" : "bg-gray-300"}`}
        >
          Reminders
        </button>
        <button
          onClick={() => setTab("escalation")}
          className={`px-4 py-2 rounded ${tab === "escalation" ? "bg-blue-600 text-white" : "bg-gray-300"}`}
        >
          Escalations
        </button>
      </div>
      {tab === "reminder" ? <ReminderList /> : <EscalationList />}
    </div>
  );
}