import React, { useState, useEffect, useRef } from 'react';
import './CustomerReviews.css';

const reviews = [
  { id: 1, text: 'האוכל טעים והמשלוח היה מהיר!', author: 'אבי' },
  { id: 2, text: 'שירות מעולה, מאוד מרוצים!', author: 'שרון' },
  { id: 3, text: 'קוסקוס כמו של סבתא! פשוט מושלם.', author: 'דנה' },
  { id: 4, text: 'שניצל מטורף בטעם של בית!', author: 'יוסי' },
  { id: 5, text: 'הכל היה מסודר, טרי וטעים!', author: 'מיכל' },
  { id: 6, text: 'אוכל שמזכיר את השבת של סבתא.', author: 'נועה' },
  { id: 7, text: 'מנות מושקעות! פשוט חגיגה.', author: 'עדי' },
  { id: 8, text: 'טעים ברמות אחרות!', author: 'תומר' },
  { id: 9, text: 'משלוח מהיר ומדויק.', author: 'יעל' },
  { id: 10, text: 'המפרום הכי טעים שטעמתי!', author: 'אלי' },
  { id: 11, text: 'מנות באיכות גבוהה מאוד.', author: 'אביבה' },
  { id: 12, text: 'שירות מצוין וחם.', author: 'דוד' },
  { id: 13, text: 'אין על השניצל שלכם!', author: 'מאיה' },
  { id: 14, text: 'חוויה לכל המשפחה!', author: 'רונית' },
  { id: 15, text: 'טעים, טרי ומסודר.', author: 'אור' },
  { id: 16, text: 'אין תחליף לאוכל שלכם!', author: 'קרן' },
  { id: 17, text: 'מנות ביתיות ברמה גבוהה.', author: 'רמי' },
  { id: 18, text: 'שווה כל שקל!', author: 'שרית' },
  { id: 19, text: 'תענוג בכל מנה!', author: 'אמיר' },
  { id: 20, text: 'טעים בצורה יוצאת דופן.', author: 'מירי' },
];

function CustomerReviews() {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        if (sliderRef.current) {
          sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
          if (
            sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >=
            sliderRef.current.scrollWidth
          ) {
            sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          }
        }
      }, 4000); // שינוי כל 4 שניות

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const handleTouchStart = (e) => {
    setIsPaused(true); // עצירת הגלילה האוטומטית
    sliderRef.current.isDragging = true;
    sliderRef.current.startX = e.touches[0].pageX - sliderRef.current.offsetLeft;
    sliderRef.current.scrollLeftStart = sliderRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!sliderRef.current.isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - sliderRef.current.startX) * 2; // מהירות הגלילה
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeftStart - walk;
  };

  const handleTouchEnd = () => {
    sliderRef.current.isDragging = false;
    setTimeout(() => setIsPaused(false), 2000); // חידוש הגלילה האוטומטית לאחר 4 שניות
  };

  return (
    <div className="reviews-container">
      <h2 className="reviews-title">מה הלקוחות שלנו אומרים</h2>
      <div
        className="reviews-slider"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <p className="review-text">"{review.text}"</p>
            <span className="review-author">– {review.author}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerReviews;
