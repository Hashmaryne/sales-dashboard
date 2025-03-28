import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ageData } from "../utils/data";

const SalesChart = () => {
    return (
      <div>
        <div>
          <h3>Sales by age</h3>
         <ResponsiveContainer width="100%" height={300}>
         <BarChart layout="vertical" data={ageData} width={750} height={300}>
              <XAxis type="number" />
              <YAxis type="category" dataKey="age" />
              <Tooltip />
              <Bar dataKey="sales" fill="#1f2937" barSize={20} />
            </BarChart>
         </ResponsiveContainer>
          
        
        </div>
      </div>
    );
  };
  

export default SalesChart;
