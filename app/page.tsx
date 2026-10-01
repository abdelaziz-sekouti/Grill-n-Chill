'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/useLanguage';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ReservationEngine from '@/components/ReservationEngine';
import SignatureSpecialties from '@/components/SignatureSpecialties';
import FullMenuSection from '@/components/FullMenuSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';
import ReviewsSection from '@/components/ReviewsSection';
import PerkBanner from '@/components/PerkBanner';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ScrollToTop from '@/components/ScrollToTop';
import BookingModal from '@/components/BookingModal';

export default function HomePage() {
  const [currentLang, setCurrentLang] = useLanguage();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);

  const handleLanguageChange = (lang: typeof currentLang) => {
    setCurrentLang(lang);
  };

  const handlePreReserveDish = (dishTitle: string, price: string) => {
    const msg = encodeURIComponent(
      `Hello Grill 'n Chill Tetouan! I want to pre-reserve the "${dishTitle}" (${price}) for my upcoming visit.`
    );
    window.open(`https://wa.me/212646841539?text=${msg}`, '_blank');
  };

  const scrollToReservation = () => {
    const reserveElement = document.getElementById('quick-reserve');
    if (reserveElement) {
      reserveElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsBookingModalOpen(true);
    }
  };

  const scrollToMenu = () => {
    const menuElement = document.getElementById('menu-section');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isRTL = currentLang === 'darija';

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      suppressHydrationWarning
      className={`min-h-screen bg-[#f5f0e8] text-[#1a1a1a] font-body selection:bg-[#ffcc00] selection:text-[#1a1a1a] ${
        isRTL ? 'font-arabic' : ''
      }`}
    >
      {/* Top Header with 4-Language Switcher */}
      <Header
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onOpenBooking={() => setIsBookingModalOpen(true)}
      />

      <main className="w-full pt-20">
        {/* Hero Section */}
        <HeroSection
          currentLang={currentLang}
          onReserveClick={scrollToReservation}
        />

        {/* Quick Fast-Track Reservation Engine */}
        <ReservationEngine currentLang={currentLang} />

        {/* Signature Specialties (Matches HTML Reference) */}
        <SignatureSpecialties
          currentLang={currentLang}
          onPreReserveDish={handlePreReserveDish}
          onViewFullMenu={scrollToMenu}
        />

        {/* Full Digital Menu with Category Filters & Search */}
        <FullMenuSection currentLang={currentLang} />

        {/* Authentic Experience / Features Section */}
        <FeaturesSection currentLang={currentLang} />

        {/* Heritage & About Lounge */}
        <AboutSection currentLang={currentLang} />

        {/* Social Proof / Verified Google Reviews */}
        <ReviewsSection currentLang={currentLang} />

        {/* Limited Direct Reservation Perk Magnet */}
        <PerkBanner
          currentLang={currentLang}
          onClaimClick={scrollToReservation}
        />

        {/* Location & Embedded Google Maps Section */}
        <LocationSection currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenBooking={() => setIsBookingModalOpen(true)}
      />

      {/* Floating Bottom-Right WhatsApp Action Button */}
      <FloatingWhatsApp currentLang={currentLang} />

      {/* Floating Animated Scroll to Top Button */}
      <ScrollToTop />

      {/* Interactive Quick Table Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        currentLang={currentLang}
      />
    </div>
  );
}
