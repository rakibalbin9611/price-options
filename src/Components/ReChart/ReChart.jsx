import React from "react";
import { LineChart, Line, XAxis, YAxis, PieChart, Pie } from "recharts";
const ReChart = () => {
  const students = [
    { name: "Alice", math: 60, physics: 82 },
    { name: "Ben", math: 78, physics: 80 },
    { name: "Charlie", math: 92, physics: 89 },
    { name: "Diana", math: 88, physics: 90 },
    { name: "Ethan", math: 75, physics: 70 },
    { name: "Fiona", math: 95, physics: 94 },
    { name: "George", math: 80, physics: 76 },
    { name: "Hannah", math: 90, physics: 92 },
    { name: "Isaac", math: 84, physics: 81 },
    { name: "Julia", math: 89, physics: 87 },
  ];

  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const data02 = [
    { name: "A1", value: 100 },
    { name: "A2", value: 300 },
    { name: "B1", value: 100 },
    { name: "B2", value: 80 },
    { name: "B3", value: 40 },
    { name: "B4", value: 30 },
    { name: "B5", value: 50 },
    { name: "C1", value: 100 },
    { name: "C2", value: 200 },
    { name: "D1", value: 150 },
    { name: "D2", value: 50 },
  ];

  return (
    <div>
      <LineChart height={500} width={800} data={students}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line type={"monotone"} dataKey={"physics"} stroke="yellow"></Line>
        <Line type={"monotone"} dataKey={"math"} stroke="red"></Line>
      </LineChart>
      <br />
      <h3 className="text-4xl">Pie chart</h3>
      <PieChart width={400} height={400}>
        <Pie
          data={data01}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8884d8"
        />
        <Pie
          data={data02}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </div>
  );
};

export default ReChart;
