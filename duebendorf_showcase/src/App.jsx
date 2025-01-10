import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import About from './pages/About';
import Contact from './pages/Contact';
import ImagePage from './pages/ImagePage';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation */}
        <nav className="navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/gallery">Galerie</a></li>
            <li><a href="/quiz">Quiz</a></li>
            <li><a href="/about">Über Uns</a></li>
            <li><a href="/contact">Kontakt</a></li>
          </ul>
        </nav>

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/quiz" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/image/:imageId" element={<ImagePage />} />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <p>Footer Placeholder</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
