import "normalize.css";

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { Home } from "./views/Home";
import { About } from "./views/About";
import { Sponsors } from "./views/Sponsors";
import { Nav } from "./components/Nav";

import "./App.scss";

export const BREAKPOINT = 640;

export function App() {
  const location = useLocation();
  const colorVariants = { "/about": "red", "/": "blue", "/sponsors": "green" };
  const width = window.innerWidth;

  return (
    <div>
      {width < BREAKPOINT ? (
        <></>
      ) : (
        <Nav color={colorVariants[location.pathname]} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="sponsors" element={<Sponsors />} />
      </Routes>
    </div>
  );
}
