'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Language, translations } from '@/lib/translations';
import { Menu as MenuIcon, X, Globe, Phone, Calendar, User } from 'lucide-react';

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
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 flex-shrink-0">
            <Image
              src="https://lh3.googleusercontent.com/aida/AEtjO1XziLlY5vb1dvF6Eo8dW-J6lHGPfXTomHJZOv5gtTYXi4ekuGKt8X_ry3NwDekNo11TedQJcf3ZYPykfAl7YyCg3I-A-3yNuJhPcM4y_Y_N_ACRsNjAb04xDBW_jFoJXGkGFuq-XFi5Vpo1zqE8UOvoLCR9BmTWTwBNx9_p7WsnFDkSZKDMxsaijEBuWMTpgwdGoBoL6UV5hj4jEA69lq27miwaA1ymKW40N--F6f--z2necas4Y1FLqEA"
              alt="Grill 'n Chill Logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-headline font-bold text-xl sm:text-2xl uppercase tracking-tighter text-[#1a1a1a] leading-none group-hover:text-[#e63b2e] transition-colors">
              Grill &apos;n Chill
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#4a4a4a] font-label font-bold">
              Smokehouse &amp; Lounge • Tetouan
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-2 lg:gap-4 font-label">
          <button
            onClick={() => handleNavClick('hero-section')}
            className="text-xs uppercase tracking-wider py-1.5 px-3 bg-[#ffcc00] text-[#1a1a1a] font-bold border border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#ffcc00] transition-colors"
          >
            {t.nav.home}
          </button>
          <button
            onClick={() => handleNavClick('menu-section')}
            className="text-xs uppercase tracking-wider text-[#4a4a4a] hover:text-[#1a1a1a] hover:bg-[#eee9e0] transition-colors py-1.5 px-2.5 font-bold"
          >
            {t.nav.menu}
          </button>
          <button
            onClick={() => handleNavClick('specialties-section')}
            className="text-xs uppercase tracking-wider text-[#4a4a4a] hover:text-[#1a1a1a] hover:bg-[#eee9e0] transition-colors py-1.5 px-2.5 font-bold"
          >
            {t.nav.specialties}
          </button>
          <button
            onClick={() => handleNavClick('about-section')}
            className="text-xs uppercase tracking-wider text-[#4a4a4a] hover:text-[#1a1a1a] hover:bg-[#eee9e0] transition-colors py-1.5 px-2.5 font-bold"
          >
            {t.nav.about}
          </button>
          <button
            onClick={() => handleNavClick('reviews-section')}
            className="text-xs uppercase tracking-wider text-[#4a4a4a] hover:text-[#1a1a1a] hover:bg-[#eee9e0] transition-colors py-1.5 px-2.5 font-bold"
          >
            {t.nav.reviews}
          </button>
          <button
            onClick={() => handleNavClick('location-section')}
            className="text-xs uppercase tracking-wider text-[#4a4a4a] hover:text-[#1a1a1a] hover:bg-[#eee9e0] transition-colors py-1.5 px-2.5 font-bold"
          >
            {t.nav.location}
          </button>
        </nav>

        {/* Action Controls: Language Switcher, WhatsApp & Book Table */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher Selector */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 bg-[#eee9e0] hover:bg-[#e2ddd4] border-2 border-[#1a1a1a] px-2.5 py-1.5 text-xs font-label font-bold uppercase transition-colors shadow-[2px_2px_0px_#1a1a1a]"
              title="Change Language / تبديل اللغة"
              aria-label="Language Switcher"
            >
              <span className="text-base leading-none">{currentLangObj.flag}</span>
              <span className="hidden sm:inline font-bold">{currentLangObj.nativeName}</span>
              <span className="sm:hidden font-bold">{currentLang.toUpperCase()}</span>
              <Globe className="w-3.5 h-3.5 text-[#1a1a1a]" />
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#faf7f2] border-2 border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] py-1 z-50 animate-in fade-in zoom-in-95">
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
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs font-label uppercase text-left transition-colors ${
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

          {/* WhatsApp Direct Action */}
          <a
            href="https://wa.me/212646841539?text=Hello%20Grill%20'n%20Chill%20Tetouan!%20I%20would%20like%20to%20reserve%20a%20table."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center gap-1.5 bg-[#1a1a1a] text-[#ffcc00] border-2 border-[#1a1a1a] px-3 py-1.5 text-xs font-label uppercase font-bold tracking-wider hover:bg-[#ffcc00] hover:text-[#1a1a1a] transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">{t.nav.whatsappBooking}</span>
            <span className="lg:hidden">WhatsApp</span>
          </a>

          {/* Book Table Button */}
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center gap-1.5 bg-[#ffcc00] text-[#1a1a1a] border-2 border-[#1a1a1a] px-3.5 sm:px-4 py-1.5 text-xs font-label uppercase font-bold tracking-wider hover:bg-[#1a1a1a] hover:text-[#ffcc00] transition-colors shadow-[2px_2px_0px_#1a1a1a] active:translate-x-0.5 active:translate-y-0.5"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{t.nav.bookTable}</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 bg-[#eee9e0] border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] hover:bg-[#e2ddd4]"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#f5f0e8] border-b-4 border-[#1a1a1a] px-6 py-6 space-y-4 shadow-xl">
          <div className="grid grid-cols-2 gap-2 text-xs font-label uppercase font-bold">
            <button
              onClick={() => handleNavClick('hero-section')}
              className="py-2.5 px-3 bg-[#ffcc00] text-[#1a1a1a] text-center border-2 border-[#1a1a1a]"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => handleNavClick('menu-section')}
              className="py-2.5 px-3 bg-[#eee9e0] text-[#1a1a1a] text-center border-2 border-[#1a1a1a] hover:bg-[#ffcc00]"
            >
              {t.nav.menu}
            </button>
            <button
              onClick={() => handleNavClick('specialties-section')}
              className="py-2.5 px-3 bg-[#eee9e0] text-[#1a1a1a] text-center border-2 border-[#1a1a1a] hover:bg-[#ffcc00]"
            >
              {t.nav.specialties}
            </button>
            <button
              onClick={() => handleNavClick('about-section')}
              className="py-2.5 px-3 bg-[#eee9e0] text-[#1a1a1a] text-center border-2 border-[#1a1a1a] hover:bg-[#ffcc00]"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => handleNavClick('reviews-section')}
              className="py-2.5 px-3 bg-[#eee9e0] text-[#1a1a1a] text-center border-2 border-[#1a1a1a] hover:bg-[#ffcc00]"
            >
              {t.nav.reviews}
            </button>
            <button
              onClick={() => handleNavClick('location-section')}
              className="py-2.5 px-3 bg-[#eee9e0] text-[#1a1a1a] text-center border-2 border-[#1a1a1a] hover:bg-[#ffcc00]"
            >
              {t.nav.location}
            </button>
          </div>

          <div className="pt-2 border-t border-[#1a1a1a]/20 flex flex-col gap-2">
            <a
              href="https://wa.me/212646841539?text=Hello%20Grill%20'n%20Chill%20Tetouan!%20I%20would%20like%20to%20reserve%20a%20table."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-[#052e16] font-bold text-xs uppercase py-3 border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a]"
            >
              <Phone className="w-4 h-4" />
              <span>{t.nav.whatsappBooking} (+212 646-841539)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
