'use client';

import React, { useState } from 'react';
import { Language, translations } from '@/lib/translations';
import { Star, MessageSquarePlus, X, CheckCircle } from 'lucide-react';

interface ReviewsSectionProps {
  currentLang: Language;
}

export default function ReviewsSection({ currentLang }: ReviewsSectionProps) {
  const t = translations[currentLang];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [userCity, setUserCity] = useState('');
  const [rating, setRating] = useState(5);
  const [userComment, setUserComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setSubmitted(false);
      setUserName('');
      setUserCity('');
      setUserComment('');
    }, 1500);
  };

  return (
    <section id="reviews-section" className="w-full py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-label uppercase tracking-widest text-[#e63b2e] font-bold block mb-1">
            {t.reviews.tagline}
          </span>
          <h2 className="text-3xl sm:text-4xl font-headline font-bold uppercase tracking-tight mt-1 text-[#1a1a1a]">
            {t.reviews.title}
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 bg-[#faf7f2] border-2 border-[#1a1a1a] px-3.5 py-1.5 shadow-[2px_2px_0px_#1a1a1a]">
            <div className="flex text-[#ffcc00]">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-[#ffcc00] text-[#1a1a1a]" />
              ))}
            </div>
            <span className="font-headline font-bold text-xs uppercase text-[#1a1a1a]">
              {t.reviews.ratingText}
            </span>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-[#1a1a1a] text-[#ffcc00] hover:bg-[#ffcc00] hover:text-[#1a1a1a] border-2 border-[#1a1a1a] px-4 py-2 text-xs font-label uppercase font-bold shadow-[2px_2px_0px_#1a1a1a] transition-colors cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>{t.reviews.leaveReviewBtn}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Review 1 */}
        <div className="bg-[#faf7f2] p-8 border-2 border-[#1a1a1a] shadow-[6px_6px_0px_#1a1a1a] flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex text-[#e63b2e]">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-[#e63b2e] text-[#e63b2e]" />
              ))}
            </div>
            <p className="text-sm font-medium leading-relaxed italic text-[#1a1a1a]">
              {t.reviews.review1.quote}
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[#1a1a1a]/15 flex items-center justify-between text-xs font-label">
            <span className="font-bold uppercase text-[#1a1a1a]">{t.reviews.review1.author}</span>
            <span className="text-[#4a4a4a] text-[10px] uppercase font-bold bg-[#eee9e0] px-2 py-0.5 border border-[#1a1a1a]/30">
              {t.reviews.review1.verified}
            </span>
          </div>
        </div>

        {/* Review 2 */}
        <div className="bg-[#faf7f2] p-8 border-2 border-[#1a1a1a] shadow-[6px_6px_0px_#1a1a1a] flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex text-[#e63b2e]">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-[#e63b2e] text-[#e63b2e]" />
              ))}
            </div>
            <p className="text-sm font-medium leading-relaxed italic text-[#1a1a1a]">
              {t.reviews.review2.quote}
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[#1a1a1a]/15 flex items-center justify-between text-xs font-label">
            <span className="font-bold uppercase text-[#1a1a1a]">{t.reviews.review2.author}</span>
            <span className="text-[#4a4a4a] text-[10px] uppercase font-bold bg-[#eee9e0] px-2 py-0.5 border border-[#1a1a1a]/30">
              {t.reviews.review2.verified}
            </span>
          </div>
        </div>

        {/* Review 3 */}
        <div className="bg-[#faf7f2] p-8 border-2 border-[#1a1a1a] shadow-[6px_6px_0px_#1a1a1a] flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex text-[#e63b2e]">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-[#e63b2e] text-[#e63b2e]" />
              ))}
            </div>
            <p className="text-sm font-medium leading-relaxed italic text-[#1a1a1a]">
              {t.reviews.review3.quote}
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[#1a1a1a]/15 flex items-center justify-between text-xs font-label">
            <span className="font-bold uppercase text-[#1a1a1a]">{t.reviews.review3.author}</span>
            <span className="text-[#4a4a4a] text-[10px] uppercase font-bold bg-[#eee9e0] px-2 py-0.5 border border-[#1a1a1a]/30">
              {t.reviews.review3.verified}
            </span>
          </div>
        </div>
      </div>

      {/* Leave Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#1a1a1a]/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#faf7f2] border-4 border-[#1a1a1a] shadow-[8px_8px_0px_#1a1a1a] max-w-lg w-full p-6 sm:p-8 animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between border-b-2 border-[#1a1a1a] pb-4 mb-4">
              <h3 className="font-headline font-bold text-xl uppercase tracking-tight text-[#1a1a1a]">
                {t.modals.reviewTitle}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="p-1 hover:bg-[#eee9e0] border border-[#1a1a1a]">
                <X className="w-5 h-5 text-[#1a1a1a]" />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-[#25D366] mx-auto" />
                <p className="font-headline font-bold text-lg uppercase text-[#1a1a1a]">
                  {t.modals.thankYou}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4 text-xs font-label">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block uppercase font-bold text-[#1a1a1a] mb-1">
                      {t.modals.yourName}
                    </label>
                    <input
                      type="text"
                      required
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full bg-[#f5f0e8] border-2 border-[#1a1a1a] p-2.5 text-xs text-[#1a1a1a] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block uppercase font-bold text-[#1a1a1a] mb-1">
                      {t.modals.yourCity}
                    </label>
                    <input
                      type="text"
                      required
                      value={userCity}
                      onChange={(e) => setUserCity(e.target.value)}
                      className="w-full bg-[#f5f0e8] border-2 border-[#1a1a1a] p-2.5 text-xs text-[#1a1a1a] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block uppercase font-bold text-[#1a1a1a] mb-1">
                    {t.modals.rating}
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className={`p-2 border-2 border-[#1a1a1a] flex items-center justify-center ${
                          rating >= star ? 'bg-[#ffcc00]' : 'bg-[#eee9e0]'
                        }`}
                      >
                        <Star className={`w-5 h-5 ${rating >= star ? 'fill-[#1a1a1a]' : 'text-[#4a4a4a]'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block uppercase font-bold text-[#1a1a1a] mb-1">
                    {t.modals.yourComment}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={userComment}
                    onChange={(e) => setUserComment(e.target.value)}
                    className="w-full bg-[#f5f0e8] border-2 border-[#1a1a1a] p-3 text-xs text-[#1a1a1a] focus:outline-none"
                    placeholder="Tell us what you loved about our smokehouse cuts, ambiance or service..."
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="bg-[#eee9e0] text-[#1a1a1a] font-bold uppercase py-2.5 px-4 border-2 border-[#1a1a1a]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#1a1a1a] text-[#ffcc00] hover:bg-[#ffcc00] hover:text-[#1a1a1a] font-bold uppercase py-2.5 px-6 border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a]"
                  >
                    {t.modals.submitReview}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
