'use client';

import React from 'react';
import Image from 'next/image';
import { Language, translations } from '@/lib/translations';
import { Star, ShieldCheck, Clock, MapPin, TableProperties, MessageCircle } from 'lucide-react';

interface HeroSectionProps {
  currentLang: Language;
  onReserveClick: () => void;
}

export default function HeroSection({ currentLang, onReserveClick }: HeroSectionProps) {
  const t = translations[currentLang];

  return (
    <section
      id="hero-section"
      className="relative w-full overflow-hidden bg-[#1a1a1a] text-[#f5f0e8] py-20 lg:py-28 px-4 sm:px-6 lg:px-12"
    >
      {/* Background Image Underlay with Rich Vignette & Texture */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcuNsS_d69bXiIDnmobq6OMpTQhB8w4Agdy9XwIUHPhZYvPcJM76QWLq6hgNcwQFQXXuWe94hv3bR1e1uQqkaBTw7fICTnBoJXQzAzGboUCVjk_7-glZm2T8n9k06uymLoqYjXaUpsiPzc0-13NgYmhDZRTSfFiUitSbdU_SwZ1zNQ7zH4VrYUo3sgxzJbvZeTWNMoyI8pmtge187MFwUjH-ErkoIU3mEunEXzZtlhBeLG-MVaZ_n3"
          alt="Grill 'n Chill signature prime grilled steaks and gourmet burger in Tetouan"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 mix-blend-luminosity filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/85 to-[#1a1a1a]/60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffcc00_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-start gap-8">
        {/* Trust Chips / Badges */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3 text-xs font-label uppercase tracking-widest">
          <span className="inline-flex items-center gap-1.5 bg-[#ffcc00] text-[#1a1a1a] px-3.5 py-1.5 font-bold shadow-[2px_2px_0px_#ffffff]">
            <Star className="w-4 h-4 fill-[#1a1a1a] text-[#1a1a1a]" />
            {t.hero.googleReviews}
          </span>
          <span className="inline-flex items-center gap-1.5 bg-[#f5f0e8] text-[#1a1a1a] px-3.5 py-1.5 font-bold shadow-[2px_2px_0px_#ffffff]">
            <ShieldCheck className="w-4 h-4 text-[#e63b2e]" />
            {t.hero.halalCertified}
          </span>
          <span className="inline-flex items-center gap-1.5 bg-[#e8e3da] text-[#1a1a1a] px-3.5 py-1.5 font-bold shadow-[2px_2px_0px_#ffffff]">
            <Clock className="w-4 h-4 text-[#1a1a1a]" />
            {t.hero.openHours}
          </span>
        </div>

        {/* Main Headline */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-headline font-bold uppercase tracking-tight text-[#f5f0e8] leading-[1.08]">
            {t.hero.titlePart1}{' '}
            <span className="bg-[#ffcc00] text-[#1a1a1a] px-2.5 py-0.5 inline-block border-2 border-[#1a1a1a] shadow-[4px_4px_0px_#ffffff]">
              {t.hero.titleHighlight}
            </span>{' '}
            {t.hero.titlePart2}
          </h1>
          <p className="text-base sm:text-xl text-[#e8e3da] max-w-2xl font-light leading-relaxed">
            {t.hero.description}
          </p>
        </div>

        {/* Hero Actions CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
          <button
            onClick={onReserveClick}
            className="inline-flex items-center justify-center gap-2.5 bg-[#ffcc00] text-[#1a1a1a] border-2 border-[#1a1a1a] px-7 py-4 font-headline uppercase font-bold text-sm tracking-wider hover:bg-[#f5f0e8] hover:text-[#1a1a1a] transition-transform active:scale-95 shadow-[4px_4px_0px_#ffffff]"
          >
            <TableProperties className="w-5 h-5 text-[#1a1a1a]" />
            {t.hero.reserveInstantly}
          </button>
          <a
            href="https://wa.me/212646841539?text=Hello%20Grill%20'n%20Chill%20Tetouan!%20I%20would%20like%20to%20reserve%20a%20table."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-[#052e16] border-2 border-[#1a1a1a] px-7 py-4 font-headline uppercase font-bold text-sm tracking-wider hover:brightness-110 transition-transform active:scale-95 shadow-[4px_4px_0px_#ffffff]"
          >
            <MessageCircle className="w-5 h-5 fill-[#052e16] text-[#052e16]" />
            {t.hero.whatsappDirect}
          </a>
        </div>

        {/* Location Micro-bar */}
        <div className="flex items-center gap-2.5 text-xs font-label text-[#e8e3da] pt-2">
          <MapPin className="w-4 h-4 text-[#ffcc00] flex-shrink-0" />
          <span>{t.hero.address}</span>
        </div>
      </div>
    </section>
  );
}
