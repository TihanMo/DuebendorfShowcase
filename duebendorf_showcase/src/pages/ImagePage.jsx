import React from "react";
import { useParams } from "react-router-dom";

const ImagePage = () => {
  const { imageId } = useParams();
  const images = [
    { id: 1, src: "./images/Three_Point_2.JPG", alt: "Three Point", description: "Description for Three Point" },
    { id: 2, src: "./images/Glatt.JPG", alt: "Glatt", description: "Description for Glatt" },
    { id: 3, src: "./images/Schild_3.JPG", alt: "Dübendorf Schild", description: "Description for Schild" },
    { id: 4, src: "./images/Autobahn.JPG", alt: "Autobahn", description: "Description for Autobahn" },
    { id: 5, src: "./images/Bhf_alter_Wagon.JPG", alt: "Alter Wagon am Bahnhof", description: "Description for Wagon" },
    { id: 6, src: "./images/Bhf_Polizei.JPG", alt: "Bahnhof Polizeiauto", description: "Description for Polizeiauto" },
    { id: 7, src: "./images/Three_Point_night.JPG", alt: "Three Point in der Nacht", description: "Description for Night" },
    { id: 8, src: "./images/Shell.JPG", alt: "Shell Tankstelle", description: "Description for Shell" },
  ];

  const image = images.find((img) => img.id === parseInt(imageId));

  if (!image) {
    return (
      <div>
        <h2>Image Not Found</h2>
        <p>The requested image doesn't exist. Please check the URL or go back to the gallery.</p>
      </div>
    );
  }
  

  return (
    <div>
      <h1>{image.alt}</h1>
      <img src={image.src} alt={image.alt} />
      <p>{image.description}</p>
    </div>
  );
};

export default ImagePage;
