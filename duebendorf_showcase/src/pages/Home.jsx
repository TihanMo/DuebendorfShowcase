import React from 'react';
import './Home.css';
import Carousel from '../components/Carousel';

const images = [
  { id: 1, src: "/images/Three_Point_2.JPG", alt: "Three Point", description: "Description for Three Point" },
  { id: 2, src: "/images/Glatt.JPG", alt: "Glatt", description: "Description for Glatt" },
  { id: 3, src: "/images/Schild_3.JPG", alt: "Dübendorf Schild", description: "Description for Schild" },
  { id: 4, src: "/images/Autobahn.JPG", alt: "Autobahn", description: "Description for Autobahn" },
  { id: 5, src: "/images/Bhf_alter_Wagon.JPG", alt: "Alter Wagon am Bahnhof", description: "Description for Wagon" },
];

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
          <Carousel images={images} />
          <a href="/gallery">Entdecke noch mehr </a>
        </section>
      </main>
    </div>
  );
};

export default Home;
