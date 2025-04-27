import React from "react";
import { LineChart, Line, XAxis, YAxis } from "recharts";
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

  return (
    <div>
      <LineChart height={500} width={800} data={students}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line type={"monotone"} dataKey={"physics"} stroke="yellow"></Line>
        <Line type={"monotone"} dataKey={"math"} stroke="red"></Line>
      </LineChart>
    </div>
  );
};

export default ReChart;
