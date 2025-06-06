export default function TeamReport() {
  const teamReports = [
    { team: "Alpha", completed: 30, pending: 12, escalated: 3 },
    { team: "Beta", completed: 25, pending: 9, escalated: 5 },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Team Report</h2>
      <table className="w-full border text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Team</th>
            <th className="p-2">Completed</th>
            <th className="p-2">Pending</th>
            <th className="p-2">Escalated</th>
          </tr>
        </thead>
        <tbody>
          {teamReports.map((r, i) => (
            <tr key={i} className="border-t">
              <td className="p-2">{r.team}</td>
              <td className="p-2">{r.completed}</td>
              <td className="p-2">{r.pending}</td>
              <td className="p-2">{r.escalated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
