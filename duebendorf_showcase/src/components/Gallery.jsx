import React, { useState } from "react";
import ImageComponent from "./ImageComponent";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: "/images/Three_Point_2.JPG", alt: "Three Point", description: "Description for Three Point" },
    { id: 2, src: "/images/Glatt.JPG", alt: "Glatt", description: "Description for Glatt" },
    { id: 3, src: "/images/Schild_3.JPG", alt: "Dübendorf Schild", description: "Description for Schild" },
    { id: 4, src: "/images/Autobahn.JPG", alt: "Autobahn", description: "Description for Autobahn" },
    { id: 5, src: "/images/Bhf_alter_Wagon.JPG", alt: "Alter Wagon am Bahnhof", description: "Description for Wagon" },
    { id: 6, src: "/images/Bhf_Polizei.JPG", alt: "Bahnhof Polizeiauto", description: "Description for Polizeiauto" },
    { id: 7, src: "/images/Three_Point_night.JPG", alt: "Three Point in der Nacht", description: "Description for Night" },
    { id: 8, src: "/images/Shell.JPG", alt: "Shell Tankstelle", description: "Description for Shell" },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {/* Galerie */}
      <div className="gallery">
        {images.map((image) => (
          <ImageComponent
            key={image.id}
            src={image.src}
            alt={image.alt}
            description={image.description}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h1>{selectedImage.alt}</h1>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <p>{selectedImage.description}</p>
            <button onClick={closeModal}>Schliessen</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
