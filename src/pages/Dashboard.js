import React from "react";
import Card from "../components/Card";
import Chart from "../components/Chart";
import ChannelsPieChart from "../components/ChannelsPieChart";
import SalesChart from "../components/SalesChart";
import SalesTable from "../components/SalesTable";
import Header from "../components/Header";
import TopSellingProducts from "../components/TopSellingProducts";
import SettingsButton from "../components/SettingsButton";

const Dashboard = () => {
    return (
        <div className="dashboard">
            {/* Page Header */}
            <Header />
            <h1>Sales</h1>

            {/* Stats Overview Row */}
            <div className="stats">
                <Card title="Sales" value="$230,220" change="+55%" date="6 May - 7 May" />
                <Card title="Customers" value="3,200" change="+12%" date="6 May - 7 May" />
                <Card title="Avg. Revenue" value="$1,200" change="+213" date="6 May - 7 May" />
            </div>

            {/* Charts Section */}
            <div className="charts-row">
                {/* Sales Channels Distribution */}
                <div className="chart-small">
                    <ChannelsPieChart />
                </div>
                {/* Sales Trend Chart */}
                <div className="chart-large">
                    <Chart />
                </div>
            </div>

            {/* Sales Performance & Table */}
            <div className="charts-row">
                {/* Sales Performance Over Time */}
                <div className="chart-large">
                    <SalesChart />
                </div>
                {/* Detailed Sales Data */}
                <div className="chart-small">
                    <SalesTable />
                </div>
            </div>

            {/* Top Selling Products Section */}
            <div className="charts-row">
                <div className="chart-large">
                    <TopSellingProducts />
                </div>
            </div>

            {/* Settings Button */}
            <SettingsButton />
        </div>
    );
};

export default Dashboard;
