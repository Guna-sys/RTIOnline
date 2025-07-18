
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import RequestList from "./pages/RequestList";       
import RequestDetails from "./pages/RequestDetails"; 
// import Reports from "./pages/Reports";
// import Utility from "./pages/Utility";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search" element={<RequestList />} />
        <Route path="/assessment" element={<RequestDetails />} />
        {/* <Route path="/reports" element={<Reports />} />
        <Route path="/utility" element={<Utility />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

