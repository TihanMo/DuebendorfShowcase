import React from 'react';

const ImageComponent = ({ src, alt, description, onClick }) => {
  return (
    <div className="gallery-item" onClick={onClick}> {/* onClick übergeben */}
      <img src={src} alt={alt} />
    </div>
  );
};

export default ImageComponent;
