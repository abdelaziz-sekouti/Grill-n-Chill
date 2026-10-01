'use client';

import React, { useState } from 'react';
import { Language, translations } from '@/lib/translations';
import { X, Calendar, Clock, Users, Flame, Phone, CheckCircle2, MessageCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export default function BookingModal({ isOpen, onClose, currentLang }: BookingModalProps) {
  const t = translations[currentLang];
  const todayStr = new Date().toISOString().split('T')[0];

  const [date, setDate] = useState<string>(todayStr);
  const [slot, setSlot] = useState<string>('dinner');
  const [guests, setGuests] = useState<string>('four');
  const [zone, setZone] = useState<string>('indoor');
  const [phone, setPhone] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const slotLabel = t.reservation.slotOptions[slot as keyof typeof t.reservation.slotOptions] || slot;
    const guestsLabel = t.reservation.guestOptions[guests as keyof typeof t.reservation.guestOptions] || guests;
    const zoneLabel = t.reservation.zoneOptions[zone as keyof typeof t.reservation.zoneOptions] || zone;

    const msg = `Hello Grill 'n Chill VIP Desk! I want to confirm a table booking:
👤 Guest Name: ${name || 'Valued Guest'}
📅 Date: ${date}
⏰ Slot: ${slotLabel}
👥 Guests: ${guestsLabel}
📍 Preferred Zone: ${zoneLabel}
📱 Contact: ${phone}
📝 Special Requests: ${notes || 'None'}
🎁 Claim VIP Free Appetizer: Yes!
Please confirm our reservation. Thank you!`;

    const encoded = encodeURIComponent(msg);
    setTimeout(() => {
      window.open(`https://wa.me/212646841539?text=${encoded}`, '_blank');
      setSubmitted(false);
      onClose();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1a1a1a]/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#faf7f2] border-4 border-[#1a1a1a] shadow-[10px_10px_0px_#1a1a1a] max-w-xl w-full p-6 sm:p-8 animate-in fade-in zoom-in-95 max-h-[92vh] overflow-y-auto">
        <div className="flex items-start justify-between border-b-2 border-[#1a1a1a] pb-4 mb-6">
          <div>
            <span className="text-[10px] font-label font-bold uppercase tracking-widest text-[#e63b2e] block">
              {t.reservation.fastTrack}
            </span>
            <h3 className="font-headline font-bold text-2xl uppercase tracking-tight text-[#1a1a1a]">
              {t.reservation.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#eee9e0] border border-[#1a1a1a] transition-colors"
          >
            <X className="w-5 h-5 text-[#1a1a1a]" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-[#25D366] mx-auto animate-bounce" />
            <h4 className="font-headline font-bold text-xl uppercase text-[#1a1a1a]">
              {t.reservation.feedbackMsg}
            </h4>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-label">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block uppercase font-bold text-[#1a1a1a] mb-1">
                  Full Name / الاسم
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Karim Benali"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#f5f0e8] border-2 border-[#1a1a1a] p-2.5 text-xs text-[#1a1a1a] focus:outline-none"
                />
              </div>

              <div>
                <label className="block uppercase font-bold text-[#1a1a1a] mb-1 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" />
                  {t.reservation.phoneLabel}
                </label>
                <input
                  type="tel"
                  required
                  placeholder={t.reservation.phonePlaceholder}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#f5f0e8] border-2 border-[#1a1a1a] p-2.5 text-xs text-[#1a1a1a] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block uppercase font-bold text-[#1a1a1a] mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {t.reservation.dateLabel}
                </label>
                <input
                  type="date"
                  required
                  min={todayStr}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#f5f0e8] border-2 border-[#1a1a1a] p-2.5 text-xs text-[#1a1a1a] focus:outline-none cursor-pointer"
                />
              </div>

              <div>
                <label className="block uppercase font-bold text-[#1a1a1a] mb-1 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {t.reservation.slotLabel}
                </label>
                <select
                  value={slot}
                  onChange={(e) => setSlot(e.target.value)}
                  className="w-full bg-[#f5f0e8] border-2 border-[#1a1a1a] p-2.5 text-xs text-[#1a1a1a] focus:outline-none cursor-pointer"
                >
                  <option value="lunch">{t.reservation.slotOptions.lunch}</option>
                  <option value="sunset">{t.reservation.slotOptions.sunset}</option>
                  <option value="dinner">{t.reservation.slotOptions.dinner}</option>
                  <option value="late">{t.reservation.slotOptions.late}</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block uppercase font-bold text-[#1a1a1a] mb-1 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  {t.reservation.guestsLabel}
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-[#f5f0e8] border-2 border-[#1a1a1a] p-2.5 text-xs text-[#1a1a1a] focus:outline-none cursor-pointer"
                >
                  <option value="two">{t.reservation.guestOptions.two}</option>
                  <option value="four">{t.reservation.guestOptions.four}</option>
                  <option value="six">{t.reservation.guestOptions.six}</option>
                  <option value="eight">{t.reservation.guestOptions.eight}</option>
                </select>
              </div>

              <div>
                <label className="block uppercase font-bold text-[#1a1a1a] mb-1 flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5" />
                  {t.reservation.zoneLabel}
                </label>
                <select
                  value={zone}
                  onChange={(e) => setZone(e.target.value)}
                  className="w-full bg-[#f5f0e8] border-2 border-[#1a1a1a] p-2.5 text-xs text-[#1a1a1a] focus:outline-none cursor-pointer"
                >
                  <option value="indoor">{t.reservation.zoneOptions.indoor}</option>
                  <option value="terrace">{t.reservation.zoneOptions.terrace}</option>
                  <option value="vip">{t.reservation.zoneOptions.vip}</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block uppercase font-bold text-[#1a1a1a] mb-1">
                Special Requests / Birthday / Dietary Preferences
              </label>
              <textarea
                rows={2}
                placeholder="E.g., High chair needed, anniversary celebration, outdoor corner preferred..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-[#f5f0e8] border-2 border-[#1a1a1a] p-2.5 text-xs text-[#1a1a1a] focus:outline-none"
              />
            </div>

            <div className="p-3 bg-[#ffcc00] border border-[#1a1a1a] text-[11px] font-bold text-[#1a1a1a]">
              ✨ {t.reservation.trustPerk}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 bg-[#1a1a1a] text-[#ffcc00] hover:bg-[#ffcc00] hover:text-[#1a1a1a] border-2 border-[#1a1a1a] py-3.5 px-6 font-headline font-bold uppercase text-xs tracking-wider transition-colors flex items-center justify-center gap-2 shadow-[3px_3px_0px_#1a1a1a]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{t.reservation.submitBtn}</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="bg-[#eee9e0] text-[#1a1a1a] hover:bg-[#e2ddd4] font-bold uppercase py-3.5 px-6 border-2 border-[#1a1a1a]"
              >
                Close
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
