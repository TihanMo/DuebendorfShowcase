import React from 'react';
import './Home.css';
import Gallery from '../components/Gallery';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="hero">
        <img
          className="hero-background"
          src="./images/Dübi_Fest.JPG"
          alt="Hintergrundbild"
        />
        <div className="hero-content">
          <img
            id="hero-img"
            src="./images/Stadt_Dübendorf.png"
            alt="Stadtlogo"
            className="logo"
          />
          <h1>Entdecke Dübendorf</h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        {/* Sidebar */}
        <aside className="sidebar">
          <h2>Seitenleiste</h2>
          <p>Hier können Links oder zusätzliche Informationen stehen.</p>
        </aside>

        {/* Main Section */}
        <section className="content">
          <h2>Hauptinhalt</h2>
          <p>Hier erscheint der Hauptinhalt Ihrer Webseite.</p>
          <Gallery />
          <a href="/gallery">Entdecke noch mehr </a>
        </section>
      </main>
    </div>
  );
};

export default Home;
