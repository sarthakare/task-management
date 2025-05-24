import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(setUsers);
  }, []);

  const handleDelete = async (slug) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await fetch(`/api/users/${slug}`, { method: "DELETE" });
      setUsers(users.filter(user => user.slug !== slug));
    }
  };

  return (
    <table className="w-full border shadow rounded-md">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="p-2">User Name</th>
          <th className="p-2">Email</th>
          <th className="p-2">Role</th>
          <th className="p-2">Status</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.slug} className="border-t">
            <td className="p-2">{user.userName}</td>
            <td className="p-2">{user.email}</td>
            <td className="p-2">{user.role}</td>
            <td className="p-2">{user.userStatus}</td>
            <td className="p-2 flex gap-2">
              <button
                onClick={() => navigate(`/users/${user.slug}`)}
                className="text-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(user.slug)}
                className="text-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
