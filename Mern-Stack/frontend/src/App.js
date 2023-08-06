import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/auth/signup";
import Login from "./components/auth/login";
import Dashboard from "./components/pages/dashboard";
import Homepage from "./components/pages/homepage";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Homepage/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
