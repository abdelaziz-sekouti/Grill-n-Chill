'use client';

import React from 'react';
import { Language, translations } from '@/lib/translations';
import { Flame, Armchair, GlassWater } from 'lucide-react';

interface FeaturesSectionProps {
  currentLang: Language;
}

export default function FeaturesSection({ currentLang }: FeaturesSectionProps) {
  const t = translations[currentLang];

  return (
    <section id="about-section" className="w-full bg-[#1a1a1a] text-[#f5f0e8] py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-label uppercase tracking-widest text-[#ffcc00] font-bold block mb-1">
            {t.features.tagline}
          </span>
          <h2 className="text-3xl sm:text-5xl font-headline font-bold uppercase tracking-tight text-[#f5f0e8]">
            {t.features.title}
          </h2>
          <p className="text-sm text-[#e8e3da] mt-3 leading-relaxed">
            {t.features.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-[#242424] border-2 border-[#ffcc00] p-8 flex flex-col gap-4 shadow-[6px_6px_0px_#000000]">
            <div className="w-12 h-12 bg-[#ffcc00] text-[#1a1a1a] flex items-center justify-center font-bold border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#ffffff]">
              <Flame className="w-6 h-6 fill-[#1a1a1a]" />
            </div>
            <h3 className="text-xl font-headline font-bold uppercase tracking-tight text-[#f5f0e8]">
              {t.features.item1.title}
            </h3>
            <p className="text-xs text-[#e8e3da] leading-relaxed">
              {t.features.item1.desc}
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#242424] border-2 border-[#e63b2e] p-8 flex flex-col gap-4 shadow-[6px_6px_0px_#000000]">
            <div className="w-12 h-12 bg-[#e63b2e] text-[#f5f0e8] flex items-center justify-center font-bold border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#ffffff]">
              <Armchair className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-headline font-bold uppercase tracking-tight text-[#f5f0e8]">
              {t.features.item2.title}
            </h3>
            <p className="text-xs text-[#e8e3da] leading-relaxed">
              {t.features.item2.desc}
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#242424] border-2 border-[#f5f0e8] p-8 flex flex-col gap-4 shadow-[6px_6px_0px_#000000]">
            <div className="w-12 h-12 bg-[#f5f0e8] text-[#1a1a1a] flex items-center justify-center font-bold border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#ffffff]">
              <GlassWater className="w-6 h-6 text-[#1a1a1a]" />
            </div>
            <h3 className="text-xl font-headline font-bold uppercase tracking-tight text-[#f5f0e8]">
              {t.features.item3.title}
            </h3>
            <p className="text-xs text-[#e8e3da] leading-relaxed">
              {t.features.item3.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
