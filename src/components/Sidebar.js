import React, { useState } from "react";
import {
  FaTachometerAlt, FaChartLine, FaShoppingCart, FaBoxes, FaLock
} from "react-icons/fa";
import { FiSettings, FiUser, FiLogOut } from "react-icons/fi";
import { MdOutlinePages, MdOutlineApps } from "react-icons/md";
import { AiOutlineBook, AiOutlineSetting, AiOutlineDown, AiOutlineMenu } from "react-icons/ai";
import { RiFileList2Line } from "react-icons/ri";

const Sidebar = () => {
  // State to track open/closed menu sections
  const [openSections, setOpenSections] = useState({
    dashboards: true,
    pages: false,
    applications: false,
    ecommerce: false,
    authentication: false,
    docs: false,
    profile: false,
  });

  // State to track sidebar visibility (for mobile)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle individual menu sections
  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Toggle full sidebar visibility (for mobile)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Mobile Sidebar Toggle Button */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <AiOutlineMenu />
      </button>

      {/* Sidebar Container */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h3>Material Dashboard PRO</h3>

          {/* User Info Section */}
          <div className="user-info">
            <div className="menu-item" onClick={() => toggleSection("profile")}>
              <img
                src="https://randomuser.me/api/portraits/women/10.jpg"
                alt="User"
                className="user-avatar"
              />
              <span className="menu-item-label">Brooklyn Alice</span>
              <AiOutlineDown className={`arrow-icon ${openSections.profile ? "open" : ""}`} />
            </div>
          </div>

          {/* Profile Submenu */}
          {openSections.profile && (
            <div className="submenu">
              <div className="submenu-item">
                <FiUser className="submenu-icon" /> Profile
              </div>
              <div className="submenu-item">
                <FiSettings className="submenu-icon" /> Settings
              </div>
              <div className="submenu-item">
                <FiLogOut className="submenu-icon" /> Logout
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Menu */}
        <div className="menu">
          {/* Dashboards Section */}
          <div className="menu-item" onClick={() => toggleSection("dashboards")}>
            <FaTachometerAlt className="menu-icon" />
            <span className="menu-item-label">Dashboards</span>
            <AiOutlineDown className={`arrow-icon ${openSections.dashboards ? "open" : ""}`} />
          </div>

          {openSections.dashboards && (
            <div className="submenu">
              <div className="submenu-item">
                <FaChartLine className="submenu-icon" /> Analytics
              </div>
              <div className="submenu-item active">
                <FaShoppingCart className="submenu-icon" /> Sales
              </div>
            </div>
          )}

          {/* Pages Section */}
          <div className="menu-item" onClick={() => toggleSection("pages")}>
            <MdOutlinePages className="menu-icon" />
            <span className="menu-item-label">Pages</span>
            <AiOutlineDown className={`arrow-icon ${openSections.pages ? "open" : ""}`} />
          </div>

          {openSections.pages && (
            <div className="submenu">
              <div className="submenu-item" onClick={() => toggleSection("applications")}>
                <MdOutlineApps className="submenu-icon" />
                <span>Applications</span>
              </div>
              <div className="submenu-item" onClick={() => toggleSection("ecommerce")}>
                <FaBoxes className="submenu-icon" />
                <span>Ecommerce</span>
              </div>
              <div className="submenu-item" onClick={() => toggleSection("authentication")}>
                <FaLock className="submenu-icon" />
                <span>Authentication</span>
              </div>
            </div>
          )}

          {/* Docs Section */}
          <div className="menu-item" onClick={() => toggleSection("docs")}>
            <AiOutlineBook className="menu-icon" />
            <span className="menu-item-label">Docs</span>
            <AiOutlineDown className={`arrow-icon ${openSections.docs ? "open" : ""}`} />
          </div>

          {openSections.docs && (
            <div className="submenu">
              <div className="submenu-item">
                <AiOutlineSetting className="submenu-icon" /> Basic
              </div>
              <div className="submenu-item">
                <AiOutlineSetting className="submenu-icon" /> Components
              </div>
              <div className="submenu-item">
                <RiFileList2Line className="submenu-icon" /> Change Log
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
