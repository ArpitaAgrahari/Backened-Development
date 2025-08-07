import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Card from '../components/01_Card/Card';
import Dashboard from '../components/02_Dashboard/Dashboard'

const MainPage: React.FC = () => (
  <main>
    <h1>Practicals of CSS/JS</h1>
    <ul>
      <li><Link to="/card">Card Project</Link></li>
      <li><Link to="/dashboard">Real Time Dashboard</Link></li>
    </ul>
  </main>
);

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/card" element={<Card />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;