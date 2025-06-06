import { useState } from "react";
import ReminderForm from "./ReminderForm";

export default function ReminderList() {
  const [showForm, setShowForm] = useState(false);

  const sampleReminders = [
    {
      id: 1,
      task: "Prepare Meeting Notes",
      dueDate: "2025-06-07",
      reminderTime: "2025-06-06 10:00",
      recipients: ["TL", "Manager"],
      status: "Sent",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Reminders</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          + New Reminder
        </button>
      </div>

      <table className="w-full text-left border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Task</th>
            <th className="p-2">Due Date</th>
            <th className="p-2">Reminder Time</th>
            <th className="p-2">Recipients</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sampleReminders.map((reminder) => (
            <tr key={reminder.id} className="border-t">
              <td className="p-2">{reminder.task}</td>
              <td className="p-2">{reminder.dueDate}</td>
              <td className="p-2">{reminder.reminderTime}</td>
              <td className="p-2">{reminder.recipients.join(", ")}</td>
              <td className="p-2">{reminder.status}</td>
              <td className="p-2">🔍 ✏️ 🗑️</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && <ReminderForm onClose={() => setShowForm(false)} />}
    </div>
  );
}