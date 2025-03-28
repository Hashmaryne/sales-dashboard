import React, { useState } from "react";
import { FaHome, FaUserCircle, FaCog, FaBell, FaSearch } from "react-icons/fa";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="header">
      {/* Left Section: Breadcrumb & Title */}
      <div className="left">
        <span className="breadcrumb"> <FaHome /> / Dashboards / Sales</span>
      </div>

      {/* Right Section: Search Bar & Icons */}
      <div className="right">
        {/* Search Bar (Hidden on Mobile) */}
        <input type="text" placeholder="Search here" className={`search-bar ${showSearch ? "show" : ""}`} />

        {/* Search Icon for Mobile */}
        <FaSearch className="icon search-icon" onClick={() => setShowSearch(!showSearch)} />

        {/* Icons */}
        <FaUserCircle className="icon" />
        <FaCog className="icon" />
        <div className="notification">
          <FaBell className="icon" />
          <span className="badge">9</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
