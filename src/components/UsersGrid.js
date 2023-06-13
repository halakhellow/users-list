import React from "react";

const UsersGrid = ({ users }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-white text-2xl font-bold mb-4">Users Cards</h2>
      <div className="grid grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="bg-white shadow-md rounded-lg p-4">
            <div className="flex flex-col items-center mb-4">
              <img
                className="w-28 h-28 rounded-full mb-2"
                src={user.image}
                alt={`Avatar of ${user.firstName}`}
              />
              <h3 className="text-xl font-bold">
                {user.firstName} {user.lastName}
              </h3>
            </div>
            <p className="font-semibold mb-1">{user.company.title}</p>
            <p className="text-gray-600 mb-2">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersGrid;
