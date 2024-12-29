import React, { useState, useEffect } from 'react';
import './GalleryHome.css';

import image1 from './image1.webp';
import image2 from './image2.webp';
import image3 from './image3.webp';
import image4 from './image4.webp';

const images = [
  { src: image1, title: 'חדש לחנוכה מארזי ספינג וסופגניות' },
  { src: image2, title: 'כריכי שניצל בהזמנה אישית בימי שלישי ושישי ב40 ש"ח בלבד' },
  { src: image3, title: 'מנות קוסקוס ומפרום טריפוליטאי כל יום שלישי בהזמנה אישית' },
  { src: image4, title: 'שולחני שוק מעוצבים' }
];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5500); // Change image every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`gallery-slide ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={image.src} alt={`Gallery Image ${index + 1}`} className="gallery-image" />
          <div className="gallery-overlay">
            <h2 className="gallery-title">{image.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
