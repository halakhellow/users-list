import React, { useState, useEffect } from "react";
import UsersGrid from "./UsersGrid";
import UsersList from "./UsersList";
import UsersTable from "./UsersTable";
import PieChartComponent from "./PieChart";

const Homepage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.log(error));
  }, []);

  const [displayType, setDisplayType] = useState("");

  const handleDisplayType = (type) => {
    setDisplayType(type);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-white">
        Visualize User Data
      </h1>
      <div className="justify-center flex space-x-4 mb-4">
        <button
          className={`${
            displayType === "grid"
              ? "bg-lightOrange text-white"
              : "bg-gray-300 text-gray-700"
          } px-4 py-2 rounded-md`}
          onClick={() => handleDisplayType("grid")}
        >
          Grid
        </button>
        <button
          className={`${
            displayType === "list"
              ? "bg-lightOrange text-white"
              : "bg-gray-300 text-gray-700"
          } px-4 py-2 rounded-md`}
          onClick={() => handleDisplayType("list")}
        >
          List
        </button>
        <button
          className={`${
            displayType === "table"
              ? "bg-lightOrange text-white"
              : "bg-gray-300 text-gray-700"
          } px-4 py-2 rounded-md`}
          onClick={() => handleDisplayType("table")}
        >
          Table
        </button>
        <button
          className={`${
            displayType === "pie-chart"
              ? "bg-lightOrange text-white"
              : "bg-gray-300 text-gray-700"
          } px-4 py-2 rounded-md`}
          onClick={() => handleDisplayType("pie-chart")}
        >
          Pie Chart
        </button>
      </div>
      {displayType === "grid" && <UsersGrid users={users} />}
      {displayType === "list" && <UsersList users={users} />}
      {displayType === "table" && <UsersTable users={users} />}
      {displayType === "pie-chart" && <PieChartComponent users={users} />}
    </div>
  );
};

export default Homepage;
