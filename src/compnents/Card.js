import React from "react";


const Card = ({ title, value, change, date }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h3>{title}</h3>
                <span className="card-date">{date}</span>
            </div>
            <div>
            <p>{value}</p>
            <p><span style={{ color: 'green' }}>{change}</span> since last month</p>
            </div>
            
        </div>
    );
};

export default Card;
