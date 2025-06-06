export default function UserReport() {
  const reports = [
    { name: "Alice", completed: 12, pending: 5, overdue: 2 },
    { name: "Bob", completed: 8, pending: 3, overdue: 4 },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">User Report</h2>
      <table className="w-full border text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">User</th>
            <th className="p-2">Completed</th>
            <th className="p-2">Pending</th>
            <th className="p-2">Overdue</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((r, i) => (
            <tr key={i} className="border-t">
              <td className="p-2">{r.name}</td>
              <td className="p-2">{r.completed}</td>
              <td className="p-2">{r.pending}</td>
              <td className="p-2">{r.overdue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}