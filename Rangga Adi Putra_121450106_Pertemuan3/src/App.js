// File: src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BookProvider } from "./context/BookContext";
import Home from "./pages/Home";
import Stats from "./pages/Stats";

const App = () => {
  return (
    <Router>
      <BookProvider>
        <div className="min-h-screen bg-gray-100">
          <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between">
            <h1 className="text-lg font-bold">📚 Book Manager</h1>
            <div className="space-x-4">
              <Link to="/">Home</Link>

            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </div>
      </BookProvider>
    </Router>
  );
};

export default App;