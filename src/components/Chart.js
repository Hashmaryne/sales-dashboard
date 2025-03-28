import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import { salesData } from "../utils/data";
import { PiInfoThin } from "react-icons/pi";

const Chart = () => {
    return (
        <div className="revenue-chart">
            {/* Header Section with Info Icon */}
            <div className="card-header">
                <h3>Revenue</h3>
                <span><PiInfoThin /></span>
            </div>

            {/* Line Chart Container */}
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={salesData}>
                    {/* X and Y Axes */}
                    <XAxis dataKey="month" />
                    <YAxis />

                    {/* Tooltip & Grid */}
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" />

                    {/* Revenue Lines */}
                    <Line type="monotone" dataKey="facebookAds" stroke="blue" />
                    <Line type="monotone" dataKey="googleAds" stroke="black" />

                    {/* Legend with Custom Formatting */}
                    <Legend
                        layout="horizontal"
                        align="left"
                        verticalAlign="top"
                        iconType="rect"
                        wrapperStyle={{ paddingBottom: 20 }}
                        formatter={(value) => (
                            <span style={{ color: "#333", fontWeight: "bold" }}>
                                {value === "facebookAds" ? "Facebook Ads" : "Google Ads"}
                            </span>
                        )}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
