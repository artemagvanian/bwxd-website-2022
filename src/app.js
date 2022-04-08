import "normalize.css";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./views/Home";
import { About } from "./views/About";
import { Sponsors } from "./views/Sponsors";
import { Nav } from "./components/Nav";
import React from "react";

export function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="sponsors" element={<Sponsors />} />
      </Routes>
    </div>
  );
}
