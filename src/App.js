import React from "react";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./compnents/Sidebar";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Dashboard />
      {/* <SettingsButton/> */}
    </div>
  );
}

export default App;
