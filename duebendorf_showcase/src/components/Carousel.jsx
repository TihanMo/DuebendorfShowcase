import React, { useState } from "react";
import "./Carousel.css";
import ImageComponent from "./ImageComponent";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container">
      <button className="carousel-arrow left-arrow" onClick={prevSlide}>
        &#10094;
      </button>

      <div className="carousel-image">
        <ImageComponent
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          description={images[currentIndex].description}
        />
      </div>

      <button className="carousel-arrow right-arrow" onClick={nextSlide}>
        &#10095;
      </button>

      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`carousel-indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
