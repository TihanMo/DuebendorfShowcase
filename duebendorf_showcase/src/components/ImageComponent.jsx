import React, { useState } from 'react';

const ImageComponent = ({ src, alt }) => {
  const [isLandscape, setIsLandscape] = useState(true);

  const handleImageLoad = (event) => {
    const { naturalWidth, naturalHeight } = event.target;
    setIsLandscape(naturalWidth >= naturalHeight);
  };

  return (
    <div className={`gallery-item ${isLandscape ? 'landscape' : 'portrait'}`}>
      <img src={src} alt={alt} onLoad={handleImageLoad} />
    </div>
  );
};

export default ImageComponent;