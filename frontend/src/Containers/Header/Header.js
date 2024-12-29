import React from 'react';
import './Header.css';
import logo from './Logo.png.webp'; // נתיב הלוגו המדויק

function Header() {
  return (
    <header className="header-container">
      <div className="logo">
        <img src={logo} alt="Mama Kitchen Logo" className="logo-image" />
        <h1 className="logo-title">Mama Kitchen</h1>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><a href="#home">צור קשר</a></li>
          <li><a href="#menu">תפריט</a></li>
          <li><a href="#about">עלינו</a></li>
          <li><a href="#contact">מוצרים</a></li>
          <li><a href="#contact">בית</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
