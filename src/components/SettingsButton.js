import React, { useState } from "react";
import { FiSettings, FiUser, FiMoon, FiLogOut } from "react-icons/fi";

const SettingsButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="settings-container">
      {/* Floating Settings Button */}
      <button className="settings-btn" onClick={() => setOpen(!open)}>
        <FiSettings size={24} />
      </button>

      {/* Dropdown Menu (Visible when `open` is true) */}
      {open && (
        <div className="settings-menu">
          <button className="settings-option">
            <FiUser /> Profile
          </button>
          <button className="settings-option">
            <FiMoon /> Theme
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
