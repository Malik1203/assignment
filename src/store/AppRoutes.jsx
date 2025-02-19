import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "../components/Counter";
import UserForm from "../components/UserForm";
import RichTextEditor from "../components/RichTextEditor";
import "../App.css"
// import Dashboard from "./components/Dashboard";

const AppRoutes = () => {
  return (
    <Router>
      {/* Navbar with center-aligned links */}
      <nav className="navbar">
        <Link to="/">Counter</Link>
        <Link to="/form">User Form</Link>
        <Link to="/editor">Rich Text Editor</Link>
        {/* <Link to="/dashboard">Dashboard</Link> */}
      </nav>

      {/* Main content with padding below the navbar */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/form" element={<UserForm />} />
          <Route path="/editor" element={<RichTextEditor />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;
