import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import DefenceLeads from "./components/LeadTable";
import CivilLeads from "./components/CivilLeadTable";
import Settings from "./components/Settings";
import Header from "./components/Header"; // ✔ imported

function App() {
  return (
    <Router>
      <Sidebar />

      {/* Use the header here */}
      <Header />

      {/* Main content shifted to the right */}
      <div style={{ marginLeft: "260px", padding: "20px" }}>
        <Routes>
          <Route path="/defence-leads" element={<DefenceLeads />} />
          <Route path="/civil-leads" element={<CivilLeads />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
