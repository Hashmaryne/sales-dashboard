import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { channelsData } from "../utils/data";
import { PiInfoThin } from "react-icons/pi";


const ChannelsPieChart = () => {
  return (
    <div>
      <div className="card-header">
      <h3>Channels</h3>
      <span><PiInfoThin /> </span>
      </div>

      <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={channelsData}
          cx="50%"
          cy="50%"
          outerRadius={80}
          dataKey="value"
          label
        >
          {channelsData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend  layout="vertical" align="right" verticalAlign="middle"/>
      </PieChart>
      </ResponsiveContainer>
      

      <div className="read-more-container">
        <p>
          <span style={{ fontWeight: "bold" }}>{channelsData[3].value}</span> sales are made using{" "}
          {channelsData[3].name} and <span style={{ fontWeight: "bold" }}>{channelsData[0].value}</span> {" "}
          are made using {channelsData[0].name}
        </p>
        <button className="read-more-btn">READ MORE</button>
      </div>

    </div>
  );
};

export default ChannelsPieChart;
