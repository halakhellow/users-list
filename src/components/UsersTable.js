import React, { useState } from "react";

import PopupWindow from "./PopupWindow";

const UsersTable = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const openPopup = (user) => {
    setSelectedUser(user);
  };

  const closePopup = () => {
    setSelectedUser(null);
  };
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-white text-2xl font-bold mb-4">Users Table</h2>
      <table className="min-w-full bg-white border border-gray-400">
        <thead>
          <tr>
            <th className="px-6 py-4 text-xl border-b border-gray-400">ID</th>
            <th className="px-6 py-4 text-xl border-b border-gray-400">Name</th>
            <th className="px-6 py-4 text-xl border-b border-gray-400">
              Title
            </th>
            <th className="px-6 py-4 text-xl border-b border-gray-400">
              Department
            </th>
            <th className="px-6 py-4 text-xl border-b border-gray-400">
              Username
            </th>
            <th className="px-6 py-4 text-xl border-b border-gray-400">
              Email
            </th>
            <th className="px-6 py-4 text-xl border-b border-gray-400">
              More Details
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 border-b border-gray-400">{user.id}</td>
              <td className="px-6 py-4 border-b border-gray-400">
                {user.firstName} {user.lastName}
              </td>
              <td className="px-6 py-4 border-b border-gray-400">
                {user.company.title}
              </td>
              <td className="px-6 py-4 border-b border-gray-400">
                {user.company.department}
              </td>
              <td className="px-6 py-4 border-b border-gray-400">
                {user.username}
              </td>
              <td className="px-6 py-4 border-b border-gray-400">
                {user.email}
              </td>
              <td className="px-6 py-4 border-b border-gray-400">
                <button className="text-xl" onClick={() => openPopup(user)}>
                  ...
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && <PopupWindow user={selectedUser} onClose={closePopup} />}
    </div>
  );
};

export default UsersTable;
