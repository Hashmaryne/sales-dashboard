import React from "react";

const Card = ({ title, value, change, date }) => {
    return (
        <div className="card">
            {/* Card Header with Title and Date */}
            <div className="card-header">
                <h3>{title}</h3>
                <span className="card-date">{date}</span>
            </div>

            {/* Card Content */}
            <div className="card-content">
                <p className="card-value">{value}</p>
                <p className="card-change">
                    <span style={{ color: "green" }}>{change}</span> since last month
                </p>
            </div>
        </div>
    );
};

export default Card;
