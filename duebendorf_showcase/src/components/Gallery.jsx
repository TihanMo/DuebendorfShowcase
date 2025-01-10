import React from 'react';
import ImageComponent from './ImageComponent';

const Gallery = () => {
  const images = [
    { src: './images/Three_Point_2.JPG', alt: 'Three Point' },
    { src: './images/Glatt.JPG', alt: 'Glatt' },
    { src: './images/Bhf_Schild.JPG', alt: 'Bahnhof Dübendorf' },
  ];

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <ImageComponent key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

export default Gallery;