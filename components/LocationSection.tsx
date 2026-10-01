'use client';

import React from 'react';
import { Language, translations } from '@/lib/translations';
import { MapPin, Clock, Phone, Car, Compass, Navigation } from 'lucide-react';

interface LocationSectionProps {
  currentLang: Language;
}

export default function LocationSection({ currentLang }: LocationSectionProps) {
  const t = translations[currentLang];

  return (
    <section id="location-section" className="w-full py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Info Left Card */}
        <div className="lg:col-span-5 bg-[#faf7f2] p-6 sm:p-10 border-2 border-[#1a1a1a] shadow-[6px_6px_0px_#1a1a1a] flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-label uppercase tracking-widest text-[#e63b2e] font-bold block mb-1">
                {t.location.tagline}
              </span>
              <h2 className="text-3xl sm:text-4xl font-headline font-bold uppercase tracking-tight text-[#1a1a1a]">
                {t.location.title}
              </h2>
            </div>

            <div className="space-y-5 text-xs">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#ffcc00] border border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[#1a1a1a]" />
                </div>
                <div>
                  <p className="font-headline font-bold uppercase text-sm text-[#1a1a1a]">
                    {t.location.venueName}
                  </p>
                  <p className="text-[#4a4a4a] leading-relaxed mt-0.5">{t.location.addressLine}</p>
                  <p className="text-[#4a4a4a] font-bold">{t.location.city}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#ffcc00] border border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] flex-shrink-0">
                  <Clock className="w-4 h-4 text-[#1a1a1a]" />
                </div>
                <div>
                  <p className="font-headline font-bold uppercase text-sm text-[#1a1a1a]">
                    {t.location.hoursTitle}
                  </p>
                  <p className="text-[#4a4a4a] leading-relaxed mt-0.5">{t.location.hoursLine1}</p>
                  <p className="text-[#4a4a4a] text-[11px] italic">{t.location.hoursLine2}</p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#ffcc00] border border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#1a1a1a]" />
                </div>
                <div>
                  <p className="font-headline font-bold uppercase text-sm text-[#1a1a1a]">
                    {t.location.contactTitle}
                  </p>
                  <p className="text-[#4a4a4a] mt-0.5">
                    <a href="tel:+212539000000" className="font-bold text-[#1a1a1a] underline hover:text-[#e63b2e]">
                      {t.location.phoneLabel}
                    </a>
                  </p>
                  <p className="text-[#4a4a4a]">
                    <a
                      href="https://wa.me/212646841539"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#1a1a1a] underline hover:text-[#25D366]"
                    >
                      {t.location.whatsappLabel}
                    </a>
                  </p>
                </div>
              </div>

              {/* Parking Note */}
              <div className="bg-[#eee9e0] p-3 border-2 border-[#1a1a1a] flex items-center gap-2.5 shadow-[2px_2px_0px_#1a1a1a]">
                <Car className="w-4 h-4 text-[#1a1a1a] flex-shrink-0" />
                <span className="text-[11px] font-label uppercase font-bold text-[#1a1a1a]">
                  {t.location.parkingNote}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <a
              href="https://www.google.com/maps/search/?api=1&query=35.5653846,-5.4005068"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#1a1a1a] text-[#f5f0e8] hover:bg-[#ffcc00] hover:text-[#1a1a1a] border-2 border-[#1a1a1a] px-6 py-4 font-headline uppercase font-bold text-xs tracking-wider transition-colors shadow-[2px_2px_0px_#1a1a1a]"
            >
              <Compass className="w-4 h-4" />
              <span>{t.location.openMapsBtn}</span>
            </a>
          </div>
        </div>

        {/* Map Display Right with embedded Google Maps iframe (No API needed, super fast & reliable) */}
        <div className="lg:col-span-7 bg-[#faf7f2] border-2 border-[#1a1a1a] shadow-[6px_6px_0px_#1a1a1a] relative min-h-[420px] flex flex-col overflow-hidden">
          <div className="w-full flex-grow min-h-[380px] relative bg-[#eee9e0]">
            <iframe
              src="https://maps.google.com/maps?q=35.5653846,-5.4005068&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Grill 'n Chill Smokehouse & Lounge Tetouan Location Map"
              className="w-full h-full min-h-[380px] object-cover"
            />
          </div>

          <div className="p-4 bg-[#1a1a1a] text-[#f5f0e8] border-t-2 border-[#1a1a1a] flex flex-wrap items-center justify-between gap-3 text-xs font-label">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e63b2e] inline-block"></span>
              <span className="text-[11px] font-medium">{t.location.gpsLine}</span>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=35.5653846,-5.4005068"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffcc00] hover:text-[#ffffff] underline uppercase font-bold text-[11px] flex items-center gap-1"
            >
              <span>{t.location.directionsBtn}</span>
              <Navigation className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
