import React from 'react';
import './HomePage.css';
import Header from '../Header/Header'; // נתיב יחסי ל-Header
import GalleryHome from '../GalleryHome/GalleryHome';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import AboutSection from '../AboutSection/AboutSection';
import FloatingWhatsapp from '../FloatingWhatsapp/FloatingWhatsapp';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks'; // ייבוא SocialMediaLinks
import AccessibilityButton from '../AccessibilityButton/AccessibilityButton'; // ייבוא כפתור הנגישות
import { AccessibilityProvider } from '../AccessibilityButton/AccessibilityContext';
import Footer from '../Footer/Footer'; // ייבוא הפוטר

function HomePage() {
  return (
    <AccessibilityProvider>
      <div className="home-page">
        <Header />
        <GalleryHome />
        <CustomerReviews />
        <AboutSection />
        <FloatingWhatsapp />
        <SocialMediaLinks />
        {/* כפתור הנגישות */}
        <AccessibilityButton /> 
        <Footer /> {/* הפוטר */}

      </div>
    </AccessibilityProvider>
  );
}

export default HomePage;
