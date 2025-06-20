import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, About, Contact } from './pages/hub';
import Discovery from './pages/Discovery';
import Experience from './pages/Experience';

function App() {
  return (
    <Router>
      <nav style={{display: 'flex', gap: '1.5rem', padding: '1rem', background: '#f7f7f7', borderBottom: '1px solid #eee'}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/tours">Tours</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tours" element={<Discovery />} />
        <Route path="/tours/:destinationId" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App;
