import React from 'react';
import './FloatingWhatsapp.css'; // קובץ CSS חדש

const FloatingWhatsapp = () => {
  const whatsappNumber = "+972505951441"; // החלף במספר וואטסאפ שלך

  return (
    <div className="floating-whatsapp-container">
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-button"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="וואטסאפ" />
      </a>
    </div>
  );
};

export default FloatingWhatsapp;
