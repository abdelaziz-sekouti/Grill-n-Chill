'use client';

import React from 'react';
import { Language } from '@/lib/translations';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  currentLang: Language;
}

export default function FloatingWhatsApp({ currentLang }: FloatingWhatsAppProps) {
  const labels: Record<Language, string> = {
    en: 'WhatsApp Us',
    es: 'WhatsApp Directo',
    fr: 'WhatsApp En Ligne',
    darija: 'تواصل فـ الواتساب',
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/212646841539?text=Hello%20Grill%20'n%20Chill%20Tetouan!%20I%20would%20like%20to%20ask%20a%20question%20or%20reserve%20a%20table."
        target="_blank"
        rel="noopener noreferrer"
        title="Direct WhatsApp Assistance"
        className="flex items-center gap-2.5 bg-[#25D366] text-[#052e16] px-4 py-3 rounded-full border-2 border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] hover:scale-105 active:scale-95 transition-all group"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-[#052e16] text-[#052e16]" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#ffcc00] border border-[#1a1a1a] animate-pulse"></span>
        </div>
        <span className="font-headline font-bold text-xs uppercase tracking-wider hidden sm:inline">
          {labels[currentLang]}
        </span>
      </a>
    </div>
  );
}
