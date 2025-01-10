import React from 'react';
import './App.css';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navigation">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        {/* Background image in HTML, dimmed by CSS */}
        <img
          className="hero-background"
          src="./images/Dübi_Fest.JPG"
          alt="Hero background"
        />

        <div className="hero-content">
          {/* City logo (unaffected by filter) */}
          <img
            id="hero-img"
            src="./images/Stadt_Dübendorf.png"
            alt="City Logo"
            className="logo"
          />
          <h1>Entdecke Dübendorf</h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        {/* Sidebar */}
        <aside className="sidebar">
          <h2>Sidebar Placeholder</h2>
          <p>Links or additional information can go here.</p>
        </aside>

        {/* Main Section */}
        <section className="content">
          <h2>Main Content Placeholder</h2>
          <p>This is where your main content will appear.</p>
          {/* Integrate your Gallery here */}
          <Gallery />
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Footer Placeholder</p>
      </footer>
    </div>
  );
}

export default App;