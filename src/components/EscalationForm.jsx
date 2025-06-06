export default function EscalationForm({ onClose }) {
  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-6 rounded w-[400px] border border-gray-200 shadow-lg">
        <h3 className="text-lg font-bold mb-4">New Escalation</h3>
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Task Name"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="datetime-local"
            placeholder="Escalation Time"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Notify To (comma-separated)"
            className="w-full border px-3 py-2 rounded"
          />
          <button
            type="submit"
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </form>
        <button onClick={onClose} className="mt-4 text-sm text-gray-600">
          Cancel
        </button>
      </div>
    </div>
  );
}
