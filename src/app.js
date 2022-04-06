import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./views/Home";
import { About } from "./views/About";
import { Sponsors } from "./views/Sponsors";
import React from "react";

export function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/sponsors">Sponsors</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="sponsors" element={<Sponsors />} />
      </Routes>
    </div>
  );
}
