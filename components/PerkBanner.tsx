'use client';

import React from 'react';
import { Language, translations } from '@/lib/translations';
import { Gift, MessageCircle } from 'lucide-react';

interface PerkBannerProps {
  currentLang: Language;
  onClaimClick: () => void;
}

export default function PerkBanner({ currentLang, onClaimClick }: PerkBannerProps) {
  const t = translations[currentLang];

  return (
    <section className="w-full bg-[#ffcc00] text-[#1a1a1a] py-12 px-4 sm:px-6 lg:px-12 border-y-2 border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-2 text-center lg:text-left">
          <span className="text-xs font-label uppercase tracking-widest font-black text-[#e63b2e] inline-flex items-center gap-1.5">
            <Gift className="w-4 h-4" />
            {t.perk.tagline}
          </span>
          <h3 className="text-2xl sm:text-3xl font-headline font-bold uppercase tracking-tight text-[#1a1a1a]">
            {t.perk.title}
          </h3>
          <p className="text-xs sm:text-sm font-body max-w-xl text-[#1a1a1a]/85 leading-relaxed">
            {t.perk.desc}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <button
            onClick={onClaimClick}
            className="bg-[#1a1a1a] text-[#f5f0e8] hover:bg-[#faf7f2] hover:text-[#1a1a1a] px-6 py-3.5 font-headline font-bold uppercase text-xs tracking-wider border-2 border-[#1a1a1a] transition-colors text-center shadow-[3px_3px_0px_#1a1a1a] cursor-pointer"
          >
            {t.perk.claimBtn}
          </button>
          <a
            href="https://wa.me/212646841539?text=Hello%20Grill%20'n%20Chill!%20I%20would%20like%20to%20claim%20the%20VIP%20Free%20Chef%20Appetizer%20perk%20for%20my%20table%20reservation."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#faf7f2] text-[#1a1a1a] hover:bg-[#e63b2e] hover:text-[#f5f0e8] px-6 py-3.5 font-headline font-bold uppercase text-xs tracking-wider border-2 border-[#1a1a1a] transition-colors text-center flex items-center justify-center gap-2 shadow-[3px_3px_0px_#1a1a1a]"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>{t.perk.whatsappClaim}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
