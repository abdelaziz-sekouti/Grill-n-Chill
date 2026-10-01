'use client';

import React, { useState } from 'react';
import { Language, translations } from '@/lib/translations';
import { Calendar, Clock, Users, Flame, Phone, ArrowRight, CheckCircle2, FlameKindling } from 'lucide-react';

interface ReservationEngineProps {
  currentLang: Language;
}

export default function ReservationEngine({ currentLang }: ReservationEngineProps) {
  const t = translations[currentLang];

  const todayStr = new Date().toISOString().split('T')[0];

  const [date, setDate] = useState<string>(todayStr);
  const [slot, setSlot] = useState<string>('dinner');
  const [guests, setGuests] = useState<string>('four');
  const [zone, setZone] = useState<string>('indoor');
  const [phone, setPhone] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowFeedback(true);

    const slotLabel = t.reservation.slotOptions[slot as keyof typeof t.reservation.slotOptions] || slot;
    const guestsLabel = t.reservation.guestOptions[guests as keyof typeof t.reservation.guestOptions] || guests;
    const zoneLabel = t.reservation.zoneOptions[zone as keyof typeof t.reservation.zoneOptions] || zone;

    const msg = `Hello Grill 'n Chill Tetouan! I'd like to book a table:
📅 Date: ${date}
⏰ Slot: ${slotLabel}
👥 Party Size: ${guestsLabel}
📍 Preferred Zone: ${zoneLabel}
📱 My WhatsApp: ${phone || 'Not provided'}
🎁 Claim Free Chef Appetizer Perk: Yes!
Please confirm table availability. Thank you!`;

    const encodedMsg = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/212646841539?text=${encodedMsg}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
    }, 700);
  };

  return (
    <section id="quick-reserve" className="relative z-20 -mt-10 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto w-full">
      <div className="bg-[#faf7f2] text-[#1a1a1a] p-6 sm:p-10 border-2 border-[#1a1a1a] shadow-[8px_8px_0px_#1a1a1a]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-xs uppercase font-label tracking-widest text-[#e63b2e] font-bold block mb-1">
              {t.reservation.fastTrack}
            </span>
            <h2 className="text-2xl sm:text-3xl font-headline font-bold uppercase tracking-tight">
              {t.reservation.title}
            </h2>
          </div>
          <p className="text-xs font-label text-[#4a4a4a] flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] inline-block animate-ping"></span>
            {t.reservation.liveSync}
          </p>
        </div>

        {/* Lead Capture Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Dining Date */}
          <div className="flex flex-col gap-1.5 bg-[#f5f0e8] p-3 border border-[#1a1a1a]">
            <label className="text-[11px] font-label uppercase font-bold text-[#4a4a4a] flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#1a1a1a]" />
              {t.reservation.dateLabel}
            </label>
            <input
              type="date"
              required
              min={todayStr}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-transparent font-headline font-bold text-sm text-[#1a1a1a] focus:outline-none cursor-pointer"
            />
          </div>

          {/* Time Slot */}
          <div className="flex flex-col gap-1.5 bg-[#f5f0e8] p-3 border border-[#1a1a1a]">
            <label className="text-[11px] font-label uppercase font-bold text-[#4a4a4a] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#1a1a1a]" />
              {t.reservation.slotLabel}
            </label>
            <select
              value={slot}
              onChange={(e) => setSlot(e.target.value)}
              className="bg-transparent font-headline font-bold text-sm text-[#1a1a1a] focus:outline-none cursor-pointer"
            >
              <option value="lunch">{t.reservation.slotOptions.lunch}</option>
              <option value="sunset">{t.reservation.slotOptions.sunset}</option>
              <option value="dinner">{t.reservation.slotOptions.dinner}</option>
              <option value="late">{t.reservation.slotOptions.late}</option>
            </select>
          </div>

          {/* Party Size */}
          <div className="flex flex-col gap-1.5 bg-[#f5f0e8] p-3 border border-[#1a1a1a]">
            <label className="text-[11px] font-label uppercase font-bold text-[#4a4a4a] flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#1a1a1a]" />
              {t.reservation.guestsLabel}
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="bg-transparent font-headline font-bold text-sm text-[#1a1a1a] focus:outline-none cursor-pointer"
            >
              <option value="two">{t.reservation.guestOptions.two}</option>
              <option value="four">{t.reservation.guestOptions.four}</option>
              <option value="six">{t.reservation.guestOptions.six}</option>
              <option value="eight">{t.reservation.guestOptions.eight}</option>
            </select>
          </div>

          {/* Dining Zone */}
          <div className="flex flex-col gap-1.5 bg-[#f5f0e8] p-3 border border-[#1a1a1a]">
            <label className="text-[11px] font-label uppercase font-bold text-[#4a4a4a] flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-[#1a1a1a]" />
              {t.reservation.zoneLabel}
            </label>
            <select
              value={zone}
              onChange={(e) => setZone(e.target.value)}
              className="bg-transparent font-headline font-bold text-sm text-[#1a1a1a] focus:outline-none cursor-pointer"
            >
              <option value="indoor">{t.reservation.zoneOptions.indoor}</option>
              <option value="terrace">{t.reservation.zoneOptions.terrace}</option>
              <option value="vip">{t.reservation.zoneOptions.vip}</option>
            </select>
          </div>

          {/* Phone / WhatsApp Input */}
          <div className="sm:col-span-2 flex flex-col gap-1.5 bg-[#f5f0e8] p-3 border border-[#1a1a1a]">
            <label className="text-[11px] font-label uppercase font-bold text-[#4a4a4a] flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#1a1a1a]" />
              {t.reservation.phoneLabel}
            </label>
            <input
              type="tel"
              required
              placeholder={t.reservation.phonePlaceholder}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-transparent font-headline font-bold text-sm text-[#1a1a1a] focus:outline-none placeholder:text-[#4a4a4a]/50"
            />
          </div>

          {/* Submit CTA */}
          <div className="sm:col-span-2 flex items-stretch">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#1a1a1a] text-[#ffcc00] hover:bg-[#ffcc00] hover:text-[#1a1a1a] border-2 border-[#1a1a1a] py-4 px-6 font-headline font-bold uppercase tracking-wider text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-[2px_2px_0px_#1a1a1a] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
            >
              <span>{isSubmitting ? t.reservation.submitting : t.reservation.submitBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Confirmation Feedback Box */}
        {showFeedback && (
          <div className="mt-4 p-4 bg-[#ffcc00] border-2 border-[#1a1a1a] text-[#1a1a1a] font-label font-bold text-xs uppercase flex items-center justify-between shadow-[2px_2px_0px_#1a1a1a] animate-in fade-in">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1a1a1a] flex-shrink-0" />
              {t.reservation.feedbackMsg}
            </span>
          </div>
        )}

        {/* Trust Row Under Booking */}
        <div className="mt-6 pt-4 border-t border-[#1a1a1a]/15 flex flex-wrap items-center justify-between gap-3 text-xs text-[#4a4a4a] font-label">
          <div className="flex items-center gap-2">
            <FlameKindling className="w-4 h-4 text-[#e63b2e]" />
            <span className="font-semibold">{t.reservation.trustPerk}</span>
          </div>
          <div className="text-right">
            <span>
              {t.reservation.customEvent}{' '}
              <a href="tel:+212539000000" className="underline font-bold text-[#1a1a1a]">
                {t.reservation.callNow}
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
