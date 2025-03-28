import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ageData } from "../utils/data";

const SalesChart = () => {
  return (
    <div className="sales-chart">
      {/* Chart Header */}
      <h3>Sales by Age</h3>

      {/* Responsive Bar Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart layout="vertical" data={ageData}>
          {/* X and Y Axes */}
          <XAxis type="number" />
          <YAxis type="category" dataKey="age" />

          {/* Tooltip for Data Insights */}
          <Tooltip />

          {/* Sales Data Bar */}
          <Bar dataKey="sales" fill="#1f2937" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
