'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Language, translations } from '@/lib/translations';
import { Menu as MenuIcon, X, Globe, Phone, Calendar, Utensils, Award, Users, MapPin, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: () => void;
}

export default function Header({ currentLang, onLanguageChange, onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const t = translations[currentLang];

  const languages: { code: Language; label: string; flag: string; nativeName: string }[] = [
    { code: 'darija', label: 'Darija', flag: '🇲🇦', nativeName: 'الدارجة' },
    { code: 'es', label: 'Español', flag: '🇪🇸', nativeName: 'Español' },
    { code: 'fr', label: 'Français', flag: '🇫🇷', nativeName: 'Français' },
    { code: 'en', label: 'English', flag: '🇬🇧', nativeName: 'English' },
  ];

  const currentLangObj = languages.find((l) => l.code === currentLang) || languages[3];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f0e8]/95 backdrop-blur-md border-b-2 border-[#1a1a1a]">
      <div className="h-16 sm:h-20 max-w-7xl mx-auto px-3 sm:px-6 lg:px-12 flex items-center justify-between gap-2">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
            <Image
              src="https://lh3.googleusercontent.com/aida/AEtjO1XziLlY5vb1dvF6Eo8dW-J6lHGPfXTomHJZOv5gtTYXi4ekuGKt8X_ry3NwDekNo11TedQJcf3ZYPykfAl7YyCg3I-A-3yNuJhPcM4y_Y_N_ACRsNjAb04xDBW_jFoJXGkGFuq-XFi5Vpo1zqE8UOvoLCR9BmTWTwBNx9_p7WsnFDkSZKDMxsaijEBuWMTpgwdGoBoL6UV5hj4jEA69lq27miwaA1ymKW40N--F6f--z2necas4Y1FLqEA"
              alt="Grill 'n Chill Logo"
              width={32}
              height={32}
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-headline font-bold text-base sm:text-xl lg:text-2xl uppercase tracking-tighter text-[#1a1a1a] leading-none group-hover:text-[#e63b2e] transition-colors whitespace-nowrap">
              Grill &apos;n Chill
            </span>
            <span className="hidden md:block text-[9px] uppercase tracking-widest text-[#4a4a4a] font-label font-bold mt-0.5">
              Smokehouse &amp; Lounge • Tetouan
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-2 lg:gap-4 font-label">
          <button
            onClick={() => handleNavClick('hero-section')}
            className="text-xs uppercase tracking-wider py-1.5 px-3 bg-[#ffcc00] text-[#1a1a1a] font-bold border border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#ffcc00] transition-colors cursor-pointer"
          >
            {t.nav.home}
          </button>
          <button
            onClick={() => handleNavClick('menu-section')}
            className="text-xs uppercase tracking-wider text-[#4a4a4a] hover:text-[#1a1a1a] hover:bg-[#eee9e0] transition-colors py-1.5 px-2.5 font-bold cursor-pointer"
          >
            {t.nav.menu}
          </button>
          <button
            onClick={() => handleNavClick('specialties-section')}
            className="text-xs uppercase tracking-wider text-[#4a4a4a] hover:text-[#1a1a1a] hover:bg-[#eee9e0] transition-colors py-1.5 px-2.5 font-bold cursor-pointer"
          >
            {t.nav.specialties}
          </button>
          <button
            onClick={() => handleNavClick('about-section')}
            className="text-xs uppercase tracking-wider text-[#4a4a4a] hover:text-[#1a1a1a] hover:bg-[#eee9e0] transition-colors py-1.5 px-2.5 font-bold cursor-pointer"
          >
            {t.nav.about}
          </button>
          <button
            onClick={() => handleNavClick('reviews-section')}
            className="text-xs uppercase tracking-wider text-[#4a4a4a] hover:text-[#1a1a1a] hover:bg-[#eee9e0] transition-colors py-1.5 px-2.5 font-bold cursor-pointer"
          >
            {t.nav.reviews}
          </button>
          <button
            onClick={() => handleNavClick('location-section')}
            className="text-xs uppercase tracking-wider text-[#4a4a4a] hover:text-[#1a1a1a] hover:bg-[#eee9e0] transition-colors py-1.5 px-2.5 font-bold cursor-pointer"
          >
            {t.nav.location}
          </button>
        </nav>

        {/* Action Controls: Responsive Language Switcher, WhatsApp & Book Table */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
          {/* Language Switcher Selector */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1 bg-[#eee9e0] hover:bg-[#ffcc00] border-2 border-[#1a1a1a] px-2 py-1 sm:px-2.5 sm:py-1.5 text-[11px] sm:text-xs font-label font-bold uppercase transition-colors shadow-[2px_2px_0px_#1a1a1a] cursor-pointer"
              title="Change Language / تبديل اللغة"
              aria-label="Language Switcher"
            >
              <span className="text-sm sm:text-base leading-none">{currentLangObj.flag}</span>
              <span className="hidden sm:inline font-bold">{currentLangObj.nativeName}</span>
              <span className="sm:hidden font-bold">{currentLang.toUpperCase()}</span>
              <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#1a1a1a]" />
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-44 sm:w-48 bg-[#faf7f2] border-2 border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] py-1 z-50 animate-in fade-in zoom-in-95">
                <div className="px-3 py-1.5 text-[10px] font-label uppercase tracking-widest text-[#4a4a4a] border-b border-[#1a1a1a]/10 font-bold">
                  Select Language
                </div>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs font-label uppercase text-left transition-colors cursor-pointer ${
                      currentLang === lang.code
                        ? 'bg-[#ffcc00] font-bold text-[#1a1a1a]'
                        : 'hover:bg-[#eee9e0] text-[#1a1a1a]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-base">{lang.flag}</span>
                      <span className="font-bold">{lang.nativeName}</span>
                    </span>
                    <span className="text-[10px] text-[#4a4a4a]">{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* WhatsApp Direct Action (Desktop / Large Tablet) */}
          <a
            href="https://wa.me/212646841539?text=Hello%20Grill%20'n%20Chill%20Tetouan!%20I%20would%20like%20to%20reserve%20a%20table."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center justify-center gap-1.5 bg-[#1a1a1a] text-[#ffcc00] border-2 border-[#1a1a1a] px-3 py-1.5 text-xs font-label uppercase font-bold tracking-wider hover:bg-[#ffcc00] hover:text-[#1a1a1a] transition-colors shadow-[2px_2px_0px_#1a1a1a]"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{t.nav.whatsappBooking}</span>
          </a>

          {/* Book Table Button (Responsive: compact icon+text on mobile, full on tablet+) */}
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center gap-1 sm:gap-1.5 bg-[#ffcc00] text-[#1a1a1a] border-2 border-[#1a1a1a] px-2.5 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs font-label uppercase font-bold tracking-wider hover:bg-[#1a1a1a] hover:text-[#ffcc00] transition-colors shadow-[2px_2px_0px_#1a1a1a] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.nav.bookTable}</span>
            <span className="sm:hidden">
              {currentLang === 'darija' ? 'حجز' : currentLang === 'es' ? 'Mesa' : currentLang === 'fr' ? 'Table' : 'Book'}
            </span>
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 sm:p-2 bg-[#ffcc00] text-[#1a1a1a] border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#ffcc00] transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <MenuIcon className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>
      </div>

      {/* Upgraded Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#f5f0e8] border-b-4 border-[#1a1a1a] px-4 sm:px-6 py-5 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto">
          {/* Quick In-Drawer Language Switcher */}
          <div>
            <div className="text-[10px] uppercase font-label font-bold text-[#4a4a4a] mb-2 flex items-center justify-between">
              <span>Choose Language / اختيار اللغة</span>
              <span className="text-[#ffcc00] bg-[#1a1a1a] px-1.5 py-0.5 text-[9px] font-bold">
                {currentLangObj.flag} {currentLangObj.nativeName}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {languages.map((lang) => (
                <button
                  key={`drawer-${lang.code}`}
                  onClick={() => {
                    onLanguageChange(lang.code);
                  }}
                  className={`py-2 px-1 text-center border-2 border-[#1a1a1a] text-xs font-label uppercase font-bold transition-all ${
                    currentLang === lang.code
                      ? 'bg-[#1a1a1a] text-[#ffcc00] shadow-[2px_2px_0px_#ffcc00]'
                      : 'bg-[#faf7f2] text-[#1a1a1a] hover:bg-[#ffcc00] shadow-[2px_2px_0px_#1a1a1a]'
                  }`}
                >
                  <span className="block text-sm">{lang.flag}</span>
                  <span className="block text-[10px] mt-0.5 truncate">{lang.nativeName}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Links Grid with Icons */}
          <div className="grid grid-cols-2 gap-2 text-xs font-label uppercase font-bold pt-1">
            <button
              onClick={() => handleNavClick('hero-section')}
              className="py-3 px-3 bg-[#ffcc00] text-[#1a1a1a] text-center border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.nav.home}</span>
            </button>
            <button
              onClick={() => handleNavClick('menu-section')}
              className="py-3 px-3 bg-[#faf7f2] text-[#1a1a1a] text-center border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] hover:bg-[#ffcc00] flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>{t.nav.menu}</span>
            </button>
            <button
              onClick={() => handleNavClick('specialties-section')}
              className="py-3 px-3 bg-[#faf7f2] text-[#1a1a1a] text-center border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] hover:bg-[#ffcc00] flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
            >
              <Award className="w-3.5 h-3.5" />
              <span>{t.nav.specialties}</span>
            </button>
            <button
              onClick={() => handleNavClick('about-section')}
              className="py-3 px-3 bg-[#faf7f2] text-[#1a1a1a] text-center border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] hover:bg-[#ffcc00] flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
            >
              <Users className="w-3.5 h-3.5" />
              <span>{t.nav.about}</span>
            </button>
            <button
              onClick={() => handleNavClick('reviews-section')}
              className="py-3 px-3 bg-[#faf7f2] text-[#1a1a1a] text-center border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] hover:bg-[#ffcc00] flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#ffcc00] fill-[#ffcc00]" />
              <span>{t.nav.reviews}</span>
            </button>
            <button
              onClick={() => handleNavClick('location-section')}
              className="py-3 px-3 bg-[#faf7f2] text-[#1a1a1a] text-center border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] hover:bg-[#ffcc00] flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{t.nav.location}</span>
            </button>
          </div>

          {/* Quick Action CTAs */}
          <div className="pt-2 border-t-2 border-[#1a1a1a]/20 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#ffcc00] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#ffcc00] font-headline font-bold text-xs uppercase py-3 border-2 border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a] flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.nav.bookTable}</span>
            </button>

            <a
              href="https://wa.me/212646841539?text=Hello%20Grill%20'n%20Chill%20Tetouan!%20I%20would%20like%20to%20reserve%20a%20table."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-[#052e16] font-headline font-bold text-xs uppercase py-3 border-2 border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a] hover:brightness-105 transition-all"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>{t.nav.whatsappBooking} (+212 646-841539)</span>
            </a>
          </div>

          {/* Micro Operating Note */}
          <div className="text-[10px] text-center text-[#4a4a4a] font-label uppercase font-bold pt-1">
            📍 Avenue Mohammed V, Tetouan • Open Daily 12:00 – 01:00
          </div>
        </div>
      )}
    </header>
  );
}
