import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./views/Home";
import { About } from "./views/About";

export function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
