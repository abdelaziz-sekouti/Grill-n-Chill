'use client';

import React from 'react';
import Image from 'next/image';
import { Language, translations } from '@/lib/translations';
import { Utensils, Award, Flame, BookOpen } from 'lucide-react';

interface SignatureSpecialtiesProps {
  currentLang: Language;
  onPreReserveDish: (dishTitle: string, price: string) => void;
  onViewFullMenu: () => void;
}

export default function SignatureSpecialties({
  currentLang,
  onPreReserveDish,
  onViewFullMenu,
}: SignatureSpecialtiesProps) {
  const t = translations[currentLang];

  return (
    <section id="specialties-section" className="w-full py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-label uppercase tracking-widest text-[#e63b2e] font-bold block mb-1">
            {t.specialties.tagline}
          </span>
          <h2 className="text-3xl sm:text-5xl font-headline font-bold uppercase tracking-tight text-[#1a1a1a]">
            {t.specialties.title}
          </h2>
        </div>

        <button
          onClick={onViewFullMenu}
          className="inline-flex items-center gap-2 text-xs font-label uppercase font-bold tracking-wider bg-[#eee9e0] hover:bg-[#1a1a1a] hover:text-[#f5f0e8] text-[#1a1a1a] px-5 py-3 border-2 border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a] transition-all cursor-pointer"
        >
          <BookOpen className="w-4 h-4" />
          <span>{t.specialties.viewMenuPdf}</span>
        </button>
      </div>

      {/* Dish Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Dish 1: Pitmaster Brisket & Sausage Platter */}
        <div className="bg-[#faf7f2] flex flex-col border-2 border-[#1a1a1a] shadow-[6px_6px_0px_#1a1a1a] group">
          <div className="relative h-64 overflow-hidden bg-[#1a1a1a]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuClFswjEDET4xy8AMpGNZYn9JLa8zt0z-4pK4DHw3eZn896p4m-aQYTW_BOMZRL-dj2Sz4G9gBeGt-lxKv6SLPOC1gzJRsBM_cn3Kn2kMwky_a2enGKCb9s1nhkK0fUD7rJAPBxIqC80_e1he3HgMBXZriUYkgvJIYm4vi88e95PegXNu6QmT3Z0hH1n4WkLU3Hx5EbzyJc8kCFGIG_UTxrLyGLtLZXIondtifly0qsF3HLSJOH9DWc"
              alt={t.specialties.items.brisket.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 bg-[#1a1a1a] text-[#ffcc00] border border-[#ffcc00]/50 px-3 py-1 font-headline font-bold text-xs uppercase tracking-wider">
              {t.specialties.items.brisket.badge}
            </div>
            <div className="absolute bottom-4 right-4 bg-[#ffcc00] text-[#1a1a1a] border-2 border-[#1a1a1a] px-3 py-1 font-headline font-bold text-base shadow-[2px_2px_0px_#1a1a1a]">
              {t.specialties.items.brisket.price}
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow justify-between gap-4">
            <div>
              <h3 className="text-xl font-headline font-bold uppercase tracking-tight text-[#1a1a1a]">
                {t.specialties.items.brisket.title}
              </h3>
              <p className="text-xs text-[#4a4a4a] mt-2 leading-relaxed">
                {t.specialties.items.brisket.desc}
              </p>
            </div>
            <div className="pt-4 border-t border-[#1a1a1a]/10 flex items-center justify-between">
              <span className="text-[11px] font-label uppercase text-[#4a4a4a] font-bold flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5 text-[#e63b2e]" />
                {t.specialties.items.brisket.tag}
              </span>
              <button
                onClick={() =>
                  onPreReserveDish(
                    t.specialties.items.brisket.title,
                    t.specialties.items.brisket.price
                  )
                }
                className="text-xs font-label font-bold uppercase bg-[#1a1a1a] text-[#f5f0e8] hover:bg-[#e63b2e] px-4 py-2 border border-[#1a1a1a] transition-colors cursor-pointer"
              >
                {t.specialties.preReserve}
              </button>
            </div>
          </div>
        </div>

        {/* Dish 2: Double Truffle Smash Burger */}
        <div className="bg-[#faf7f2] flex flex-col border-2 border-[#1a1a1a] shadow-[6px_6px_0px_#1a1a1a] group">
          <div className="relative h-64 overflow-hidden bg-[#1a1a1a]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQdyN53UwcT5iKUzThkZTP0byzvdgo7PJ8iSfPcAhiCvS1Vp3sIV2tcpZ_SLkg8gpPYn-UgZ9YcNma14FhwZkwZo0TNxmk7TCpsjpkiWsKUn_hVYdhOPEELLO_njDvu5fgwXzlpHLE48Ems8PFVM6jsikjzcKhinh66cDxNwvyx8hjGjs_Gq2skuzmZ3nJzTsHeg7mQOJDZtNNW-mThrqJMYeaKzkTvJgyj3xXykGXp9IHG_IjXQr2"
              alt={t.specialties.items.burger.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 bg-[#e63b2e] text-[#f5f0e8] border border-[#1a1a1a] px-3 py-1 font-headline font-bold text-xs uppercase tracking-wider">
              {t.specialties.items.burger.badge}
            </div>
            <div className="absolute bottom-4 right-4 bg-[#ffcc00] text-[#1a1a1a] border-2 border-[#1a1a1a] px-3 py-1 font-headline font-bold text-base shadow-[2px_2px_0px_#1a1a1a]">
              {t.specialties.items.burger.price}
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow justify-between gap-4">
            <div>
              <h3 className="text-xl font-headline font-bold uppercase tracking-tight text-[#1a1a1a]">
                {t.specialties.items.burger.title}
              </h3>
              <p className="text-xs text-[#4a4a4a] mt-2 leading-relaxed">
                {t.specialties.items.burger.desc}
              </p>
            </div>
            <div className="pt-4 border-t border-[#1a1a1a]/10 flex items-center justify-between">
              <span className="text-[11px] font-label uppercase text-[#4a4a4a] font-bold flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#e63b2e]" />
                {t.specialties.items.burger.tag}
              </span>
              <button
                onClick={() =>
                  onPreReserveDish(
                    t.specialties.items.burger.title,
                    t.specialties.items.burger.price
                  )
                }
                className="text-xs font-label font-bold uppercase bg-[#1a1a1a] text-[#f5f0e8] hover:bg-[#e63b2e] px-4 py-2 border border-[#1a1a1a] transition-colors cursor-pointer"
              >
                {t.specialties.preReserve}
              </button>
            </div>
          </div>
        </div>

        {/* Dish 3: Ribeye Slate & Flame Skewers */}
        <div className="bg-[#faf7f2] flex flex-col border-2 border-[#1a1a1a] shadow-[6px_6px_0px_#1a1a1a] group">
          <div className="relative h-64 overflow-hidden bg-[#1a1a1a]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcuNsS_d69bXiIDnmobq6OMpTQhB8w4Agdy9XwIUHPhZYvPcJM76QWLq6hgNcwQFQXXuWe94hv3bR1e1uQqkaBTw7fICTnBoJXQzAzGboUCVjk_7-glZm2T8n9k06uymLoqYjXaUpsiPzc0-13NgYmhDZRTSfFiUitSbdU_SwZ1zNQ7zH4VrYUo3sgxzJbvZeTWNMoyI8pmtge187MFwUjH-ErkoIU3mEunEXzZtlhBeLG-MVaZ_n3"
              alt={t.specialties.items.ribeye.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 bg-[#0055ff] text-[#ffffff] border border-[#1a1a1a] px-3 py-1 font-headline font-bold text-xs uppercase tracking-wider">
              {t.specialties.items.ribeye.badge}
            </div>
            <div className="absolute bottom-4 right-4 bg-[#ffcc00] text-[#1a1a1a] border-2 border-[#1a1a1a] px-3 py-1 font-headline font-bold text-base shadow-[2px_2px_0px_#1a1a1a]">
              {t.specialties.items.ribeye.price}
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow justify-between gap-4">
            <div>
              <h3 className="text-xl font-headline font-bold uppercase tracking-tight text-[#1a1a1a]">
                {t.specialties.items.ribeye.title}
              </h3>
              <p className="text-xs text-[#4a4a4a] mt-2 leading-relaxed">
                {t.specialties.items.ribeye.desc}
              </p>
            </div>
            <div className="pt-4 border-t border-[#1a1a1a]/10 flex items-center justify-between">
              <span className="text-[11px] font-label uppercase text-[#4a4a4a] font-bold flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-[#e63b2e]" />
                {t.specialties.items.ribeye.tag}
              </span>
              <button
                onClick={() =>
                  onPreReserveDish(
                    t.specialties.items.ribeye.title,
                    t.specialties.items.ribeye.price
                  )
                }
                className="text-xs font-label font-bold uppercase bg-[#1a1a1a] text-[#f5f0e8] hover:bg-[#e63b2e] px-4 py-2 border border-[#1a1a1a] transition-colors cursor-pointer"
              >
                {t.specialties.preReserve}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
