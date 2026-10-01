'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Language, translations } from '@/lib/translations';
import { menuItems, MenuItem } from '@/lib/menuData';
import { Search, Plus, Sparkles, MessageCircle, X } from 'lucide-react';

interface FullMenuSectionProps {
  currentLang: Language;
}

export default function FullMenuSection({ currentLang }: FullMenuSectionProps) {
  const t = translations[currentLang];

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [cookingNotes, setCookingNotes] = useState<string>('');

  const filteredItems = menuItems.filter((item) => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const title = item.title[currentLang] || item.title['en'];
    const desc = item.desc[currentLang] || item.desc['en'];
    const matchesSearch =
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleOpenDishModal = (dish: MenuItem) => {
    setSelectedDish(dish);
    setQuantity(1);
    setCookingNotes('');
  };

  const handleSendDishToWhatsApp = () => {
    if (!selectedDish) return;
    const title = selectedDish.title[currentLang] || selectedDish.title['en'];
    const totalPrice = selectedDish.priceMAD * quantity;
    const msg = `Hello Grill 'n Chill Tetouan! I would like to pre-order:
🍽️ Item: ${title}
🔢 Quantity: ${quantity}
💰 Total: ${totalPrice} MAD
📝 Notes: ${cookingNotes || 'None'}
Please add this to my visit / reservation order. Thank you!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/212646841539?text=${encoded}`, '_blank');
    setSelectedDish(null);
  };

  return (
    <section id="menu-section" className="w-full py-20 px-4 sm:px-6 lg:px-12 bg-[#eee9e0] border-y-2 border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-label uppercase tracking-widest text-[#e63b2e] font-bold block mb-1">
              {t.fullMenu.tagline}
            </span>
            <h2 className="text-3xl sm:text-5xl font-headline font-bold uppercase tracking-tight text-[#1a1a1a]">
              {t.fullMenu.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#4a4a4a] mt-2 max-w-2xl">
              {t.fullMenu.subtitle}
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[260px] sm:min-w-[320px]">
            <Search className="w-4 h-4 text-[#4a4a4a] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search smokehouse, burger, ribeye..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#faf7f2] border-2 border-[#1a1a1a] pl-10 pr-4 py-2.5 text-xs font-label uppercase text-[#1a1a1a] placeholder:text-[#4a4a4a]/60 focus:outline-none shadow-[2px_2px_0px_#1a1a1a]"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2">
          {[
            { id: 'all', label: t.fullMenu.categories.all },
            { id: 'smokehouse', label: t.fullMenu.categories.smokehouse },
            { id: 'burgers', label: t.fullMenu.categories.burgers },
            { id: 'steaks', label: t.fullMenu.categories.steaks },
            { id: 'sides', label: t.fullMenu.categories.sides },
            { id: 'mocktails', label: t.fullMenu.categories.mocktails },
            { id: 'desserts', label: t.fullMenu.categories.desserts },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-label uppercase font-bold tracking-wider border-2 border-[#1a1a1a] transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#1a1a1a] text-[#ffcc00] shadow-[2px_2px_0px_#ffcc00]'
                  : 'bg-[#faf7f2] text-[#1a1a1a] hover:bg-[#ffcc00] shadow-[2px_2px_0px_#1a1a1a]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((dish) => {
            const title = dish.title[currentLang] || dish.title['en'];
            const desc = dish.desc[currentLang] || dish.desc['en'];
            const badge = dish.badge ? dish.badge[currentLang] || dish.badge['en'] : null;
            const tag = dish.tag[currentLang] || dish.tag['en'];

            return (
              <div
                key={dish.id}
                className="bg-[#faf7f2] border-2 border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] flex flex-col justify-between group hover:-translate-y-1 transition-transform"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-[#1a1a1a]">
                    <Image
                      src={dish.image}
                      alt={title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {badge && (
                      <div className="absolute top-3 left-3 bg-[#1a1a1a] text-[#ffcc00] text-[10px] font-headline font-bold uppercase px-2.5 py-1 border border-[#ffcc00]/40">
                        {badge}
                      </div>
                    )}
                    <div className="absolute bottom-3 right-3 bg-[#ffcc00] text-[#1a1a1a] font-headline font-bold text-sm px-2.5 py-1 border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a]">
                      {dish.priceMAD} MAD
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-[10px] uppercase font-label font-bold text-[#e63b2e] mb-1">
                      <Sparkles className="w-3 h-3" />
                      <span>{tag}</span>
                    </div>
                    <h3 className="font-headline font-bold text-lg uppercase tracking-tight text-[#1a1a1a] leading-snug">
                      {title}
                    </h3>
                    <p className="text-xs text-[#4a4a4a] mt-2 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => handleOpenDishModal(dish)}
                    className="w-full bg-[#1a1a1a] text-[#f5f0e8] hover:bg-[#ffcc00] hover:text-[#1a1a1a] border-2 border-[#1a1a1a] py-2.5 px-4 font-label font-bold uppercase text-xs tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-[2px_2px_0px_#1a1a1a]"
                  >
                    <Plus className="w-4 h-4" />
                    <span>{t.specialties.preReserve}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-[#faf7f2] border-2 border-[#1a1a1a] p-8 shadow-[4px_4px_0px_#1a1a1a]">
            <p className="font-headline font-bold text-base uppercase text-[#1a1a1a]">
              No dishes found matching your search.
            </p>
            <p className="text-xs text-[#4a4a4a] mt-1">Try searching for other items or change category.</p>
          </div>
        )}
      </div>

      {/* Pre-Order Modal */}
      {selectedDish && (
        <div className="fixed inset-0 z-50 bg-[#1a1a1a]/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#faf7f2] border-4 border-[#1a1a1a] shadow-[8px_8px_0px_#1a1a1a] max-w-lg w-full p-6 sm:p-8 animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between border-b-2 border-[#1a1a1a] pb-4 mb-4">
              <div>
                <span className="text-[10px] font-label font-bold uppercase tracking-widest text-[#e63b2e]">
                  {t.fullMenu.modalTitle}
                </span>
                <h3 className="font-headline font-bold text-xl sm:text-2xl uppercase tracking-tight text-[#1a1a1a]">
                  {selectedDish.title[currentLang] || selectedDish.title['en']}
                </h3>
                <p className="font-headline font-bold text-base text-[#1a1a1a] mt-1">
                  {selectedDish.priceMAD * quantity} MAD ({selectedDish.priceMAD} MAD each)
                </p>
              </div>
              <button
                onClick={() => setSelectedDish(null)}
                className="p-1.5 hover:bg-[#eee9e0] border border-[#1a1a1a]"
              >
                <X className="w-5 h-5 text-[#1a1a1a]" />
              </button>
            </div>

            <div className="space-y-4 text-xs font-label">
              <div>
                <label className="block uppercase font-bold text-[#1a1a1a] mb-1.5">
                  {t.fullMenu.quantity}
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 bg-[#eee9e0] hover:bg-[#ffcc00] border-2 border-[#1a1a1a] font-bold text-base flex items-center justify-center shadow-[2px_2px_0px_#1a1a1a]"
                  >
                    -
                  </button>
                  <span className="font-headline font-bold text-lg min-w-8 text-center text-[#1a1a1a]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 bg-[#eee9e0] hover:bg-[#ffcc00] border-2 border-[#1a1a1a] font-bold text-base flex items-center justify-center shadow-[2px_2px_0px_#1a1a1a]"
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <label className="block uppercase font-bold text-[#1a1a1a] mb-1.5">
                  {t.fullMenu.notesLabel}
                </label>
                <input
                  type="text"
                  placeholder={t.fullMenu.notesPlaceholder}
                  value={cookingNotes}
                  onChange={(e) => setCookingNotes(e.target.value)}
                  className="w-full bg-[#f5f0e8] border-2 border-[#1a1a1a] p-3 text-xs text-[#1a1a1a] focus:outline-none"
                />
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleSendDishToWhatsApp}
                  className="flex-1 bg-[#25D366] text-[#052e16] hover:brightness-110 font-bold uppercase py-3.5 px-4 border-2 border-[#1a1a1a] flex items-center justify-center gap-2 shadow-[2px_2px_0px_#1a1a1a]"
                >
                  <MessageCircle className="w-4 h-4 fill-[#052e16]" />
                  <span>{t.fullMenu.confirmWhatsApp}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedDish(null)}
                  className="bg-[#eee9e0] text-[#1a1a1a] hover:bg-[#e2ddd4] font-bold uppercase py-3.5 px-6 border-2 border-[#1a1a1a]"
                >
                  {t.fullMenu.close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
