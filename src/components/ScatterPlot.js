import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const ScatterPlot = ({ users }) => {
  const data = users.map((user) => ({
    longitude: user.address.coordinates.lng,
    latitude: user.address.coordinates.lat,
  }));

  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <h2 className="text-white text-2xl font-bold mb-4">User Scatter Plot</h2>
      <div className="bg-gray-300 rounded shadow-md h-[33rem]">
        <ScatterChart className="mx-auto py-2" width={600} height={500}>
          <CartesianGrid stroke="#000000" strokeDasharray="3 3" />
          <XAxis
            dataKey="longitude"
            type="number"
            name="Longitude"
            label={{
              value: "Longitude",
              offset: -5,
              position: "insideBottom",
              fill: "#000000",
            }}
          />
          <YAxis
            dataKey="latitude"
            type="number"
            name="Latitude"
            label={{
              value: "Latitude",
              offset: 10,
              position: "insideLeft",
              angle: -90,
              fill: "#000000",
            }}
          />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="User Locations" data={data} fill="#D8334F" />
        </ScatterChart>
      </div>
    </div>
  );
};

export default ScatterPlot;
