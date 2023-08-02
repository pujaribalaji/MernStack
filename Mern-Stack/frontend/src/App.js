import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/auth/signup";
import Login from "./components/auth/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup></Signup>} />
        <Route path="/login" element={<Login></Login>} />
      </Routes>
    </Router>
  );
}

export default App;
