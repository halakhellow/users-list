import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const PieChartComponent = ({ users }) => {
  const bloodGroups = [];
  users.map((user) => bloodGroups.push(user.bloodGroup));
  const groupCounts = bloodGroups.reduce((counts, group) => {
    counts[group] = (counts[group] || 0) + 1;
    return counts;
  }, {});
  const chartData = Object.entries(groupCounts).map(([bloodGroup, count]) => ({
    name: bloodGroup,
    value: count,
  }));

  const colors = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#66CC99",
    "#FF9900",
    "#9966FF",
    "#FF66CC",
    "#99CCFF",
    "#FF6666",
    "#CCCC00",
  ];

  return (
    <div className="bg-gray-200 p-4 rounded-md">
      <h3 className="text-lg font-bold mb-2">Blood Group Distribution</h3>
      <PieChart className="m-auto" width={400} height={300}>
        <Pie
          data={chartData}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
