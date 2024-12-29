import React, { createContext, useState, useContext, useEffect } from 'react';

// יצירת ה-Context
const AccessibilityContext = createContext();

// קומפוננטה שספקה את הערכים עבור Context
export const AccessibilityProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState('normal');
  const [highContrast, setHighContrast] = useState(false);

  // פונקציות לשינוי הגדרות הנגישות
  const increaseFontSize = () => setFontSize(fontSize === 'normal' ? 'large' : 'normal');
  const toggleContrast = () => setHighContrast(!highContrast);
  const resetSettings = () => {
    setFontSize('normal');
    setHighContrast(false);
  };

  // עדכון הגדרות ה-body על פי השינויים
  useEffect(() => {
    document.body.className = `${fontSize} ${highContrast ? 'high-contrast' : ''}`;
  }, [fontSize, highContrast]);

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        highContrast,
        increaseFontSize,
        toggleContrast,
        resetSettings,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

// Hook שימושי לקבלת הערכים מה-Context
export const useAccessibility = () => useContext(AccessibilityContext);
