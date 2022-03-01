import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import BlogPost from "./components/BlogPost";
import BlogPostTable from "./components/BlogPostTable";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Blog</h1>
        <nav>
          <Link to="/">Blog Posts</Link>
        </nav>
        <Routes>
          <Route path="/" element={<BlogPostTable />} />
          <Route path="/blogpost" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
