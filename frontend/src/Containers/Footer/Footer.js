import React from 'react';
import './Footer.css'; // קובץ CSS חדש לפוטר

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>MAMA KITCHEN</h3>
        </div>
        <div className="footer-center">
          <h4>קישורים חשובים</h4>
          <ul>
            <li><a href="/about">אודות</a></li>
            <li><a href="/menu">תפריט</a></li>
            <li><a href="/contact">צור קשר</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <h4>עקוב אחרינו</h4>
          <ul>
            <li><a href="https://www.instagram.com">Instagram</a></li>
            <li><a href="https://www.facebook.com">Facebook</a></li>
            <li><a href="https://www.tiktok.com">TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 .Msoft inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
