import React from 'react';
import './SocialMediaLinks.css'; // קובץ CSS חדש
import tiktokLogo from './image.png'; // ייבוא התמונה המקומית

const SocialMediaLinks = () => {
  return (
    <section className="social-media-container">
      <h2 className="social-media-title">בואו לבקר אותנו ברשתות</h2> {/* כותרת חדשה */}

      <div className="social-media-icons">
        <a href="https://www.facebook.com/profile.php?id=61552974341229" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
            alt="Instagram"
            className="social-icon"
          />
        </a>
        <a href="https://www.instagram.com/moral_huri/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook"
            className="social-icon"
          />
        </a>
        <a href="https://www.tiktok.com/@kristalim_mafrum" target="_blank" rel="noopener noreferrer">
          <img
            src={tiktokLogo} // שימוש בתמונה המקומית
            alt="TikTok"
            className="social-icon"
          />
        </a>
      </div>
    </section>
  );
};

export default SocialMediaLinks;
