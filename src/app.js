import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./views/Home";
import { About } from "./views/About";
import Team from "./views/Team";
import { Sponsors } from "./views/Sponsors";
import { LottieView } from './views/LottieView';
import React from 'react';

export function App() {
	return (
		<div className="App">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
			</head>
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/team">Team</Link>
			<Link to="/sponsors">Sponsors</Link>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="team" element={<Team />} />
				<Route path="sponsors" element={<Sponsors />} />
				<Route path="lottie" element={<LottieView />} />
			</Routes>
		</div>
	);
}
