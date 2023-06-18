import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from "victory";
import { calculateAverageAge } from "../helpers/helpers";

const BarChart = ({ users }) => {
  const averageAge = calculateAverageAge(users);
  const data = users.map((user) => ({ x: user.firstName, y: user.age }));

  return (
    <div>
      <h2 className="text-center text-gray-200 text-xl mb-2">
        Average Age: {averageAge}
      </h2>
      <VictoryChart>
        <VictoryAxis label="Users" style={{ tickLabels: { fontSize: 0 } }} />

        <VictoryAxis dependentAxis tickFormat={(tick) => `${tick}`} />

        <VictoryBar
          data={data}
          style={{
            data: {
              fill: (d) => (d.y === averageAge ? "lightOrange" : "darkBlue"),
            },
            tickLabels: { fontSize: 0 },
            labels: {
              fontSize: "10px",
              fill: "gray",
            },
          }}
          labels={({ datum }) => datum.y}
          labelComponent={<VictoryLabel dy={-5} />}
        />

        <VictoryBar
          data={[{ x: "Average Age", y: averageAge }]}
          style={{
            data: {
              fill: "red",
            },
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default BarChart;
