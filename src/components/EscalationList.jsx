import { useState } from "react";
import EscalationForm from "./EscalationForm";

export default function EscalationList() {
  const [showForm, setShowForm] = useState(false);

  const sampleEscalations = [
    {
      id: 1,
      task: "Submit Client Feedback",
      due: "2025-06-04",
      escalatedAt: "2025-06-05 10:00",
      level: "L2",
      notifiedTo: ["Manager"],
      status: "Escalated",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Escalations</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          + New Escalation
        </button>
      </div>

      <table className="w-full text-left border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Task</th>
            <th className="p-2">Due</th>
            <th className="p-2">Escalated At</th>
            <th className="p-2">Level</th>
            <th className="p-2">Notified To</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sampleEscalations.map((e) => (
            <tr key={e.id} className="border-t">
              <td className="p-2">{e.task}</td>
              <td className="p-2">{e.due}</td>
              <td className="p-2">{e.escalatedAt}</td>
              <td className="p-2">{e.level}</td>
              <td className="p-2">{e.notifiedTo.join(", ")}</td>
              <td className="p-2">{e.status}</td>
              <td className="p-2">🔍 ✏️ ✅</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && <EscalationForm onClose={() => setShowForm(false)} />}
    </div>
  );
}
