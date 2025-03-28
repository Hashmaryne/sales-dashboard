import React, { useState, useEffect } from "react";
import { FiSettings, FiUser, FiMoon, FiSun, FiLogOut } from "react-icons/fi";

const SettingsButton = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Apply theme when the component mounts
  useEffect(() => {
    document.body.classList.toggle("dark-theme", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="settings-container">
      {/* Floating Settings Button */}
      <button className="settings-btn" onClick={() => setOpen(!open)}>
        <FiSettings size={24} />
      </button>

      {/* Options List (Visible when open is true) */}
      {open && (
        <div className="settings-menu">
          <button className="settings-option">
            <FiUser /> Profile
          </button>
          <button className="settings-option" onClick={toggleTheme}>
            {theme === "light" ? <FiMoon /> : <FiSun />} {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
          <button className="settings-option logout">
            <FiLogOut /> Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default SettingsButton;
