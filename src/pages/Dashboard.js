import React from "react";
import Card from "../compnents/Card";
import Chart from "../compnents/Chart";
import ChannelsPieChart from "../compnents/ChannelsPieChart";
import SalesChart from "../compnents/SalesChart";
import SalesTable from "../compnents/SalesTable";
import Header from "../compnents/Header";
import TopSellingProducts from "../compnents/TopSellingProducts";
import SettingsButton from "../compnents/SettingsButton";

const Dashboard = () => {
    return (
       
        <div className="dashboard">
             <Header />
             <h1>Sales</h1>
            {/* Stats Row */}
            <div className="stats">
                <Card title="Sales" value="$230,220" change="+55%" date="6 May - 7 May" />
                <Card title="Customers" value="3,200" change="+12%" date="6 May - 7 May" />
                <Card title="Avg. Revenue" value="$1,200" change="+213" date="6 May - 7 May"  />
            </div>

            {/* Pie Chart & Main Chart Row */}
            <div className="charts-row">
                <div className="chart-small">
                    <ChannelsPieChart />
                </div>
                <div className="chart-large">
                    <Chart />
                </div>
            </div>

            {/* Sales Chart & Sales Table Row */}
            <div className="charts-row">
                <div className="chart-large">
                    <SalesChart />
                </div>
                <div className="chart-small">
                    <SalesTable />
                </div>
            </div>

            <div className="charts-row">
                <div className="chart-large">
                    <TopSellingProducts />
                </div>
            </div>
        <SettingsButton/>
        </div>
    );
};

export default Dashboard;
