import React, { useState } from 'react';
import { useAccessibility } from './AccessibilityContext'; // ייבוא ה-Hook מה-Context
import './AccessibilityButton.css'; // קובץ CSS חדש
import image from './image.png'; // ייבוא התמונה מקומית

const AccessibilityButton = () => {
  const { fontSize, highContrast, increaseFontSize, toggleContrast, resetSettings } = useAccessibility(); // שימוש ב-Hook
  const [isOpen, setIsOpen] = useState(false); // מצב פתיחה/סגירה של התפריט

  const toggleMenu = () => {
    setIsOpen(!isOpen); // משנה את המצב של התפריט
  };

  return (
    <div className="accessibility-container">
      <button className="accessibility-button" onClick={toggleMenu}>
        <img src={image} alt="נגישות" className="image" /> {/* הצגת התמונה */}
      </button>
      {isOpen && (
        <div className="accessibility-options">
          <h3>אפשרויות נגישות</h3>
          <ul>
            <li onClick={increaseFontSize}>
              {fontSize === 'normal' ? 'הגדלת גודל הפונט' : 'החזרת גודל הפונט לברירת מחדל'}
            </li>
            <li onClick={toggleContrast}>
              {highContrast ? 'החזרת ניגודיות רגילה' : 'הפעלת ניגודיות גבוהה'}
            </li>
            <li>הפעלת קריאה קולית</li>
            <li>הפעלת תרגום תמלילים</li>
            <li onClick={resetSettings}>חזרה לברירת מחדל</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccessibilityButton;
