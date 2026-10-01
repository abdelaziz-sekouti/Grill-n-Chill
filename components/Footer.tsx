'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Language, translations } from '@/lib/translations';
import { Calendar, Facebook, Youtube, Instagram } from 'lucide-react';
import { OfficialPinterestIcon, OfficialTikTokIcon } from '@/components/OfficialSocialIcons';

interface FooterProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export default function Footer({ currentLang, onOpenBooking }: FooterProps) {
  const t = translations[currentLang];

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      name: 'Facebook',
      handle: '@grillnchilltetouan',
      icon: Facebook,
      href: 'https://facebook.com/grillnchilltetouan',
      bgHover: 'hover:bg-[#1877F2]',
      color: '#1877F2',
    },
    {
      name: 'YouTube',
      handle: 'Grill n Chill Tetouan',
      icon: Youtube,
      href: 'https://youtube.com/@grillnchilltetouan',
      bgHover: 'hover:bg-[#FF0000]',
      color: '#FF0000',
    },
    {
      name: 'TikTok',
      handle: '@grillnchill_ma',
      icon: OfficialTikTokIcon,
      href: 'https://tiktok.com/@grillnchilltetouan',
      bgHover: 'hover:bg-[#fe2c55]',
      color: '#fe2c55',
    },
    {
      name: 'Instagram',
      handle: '@grillnchilltetouan',
      icon: Instagram,
      href: 'https://instagram.com/grillnchilltetouan',
      bgHover: 'hover:bg-[#E1306C]',
      color: '#E1306C',
    },
    {
      name: 'Pinterest',
      handle: 'Grill n Chill Smokehouse',
      icon: OfficialPinterestIcon,
      href: 'https://pinterest.com/grillnchilltetouan',
      bgHover: 'hover:bg-[#E60023]',
      color: '#E60023',
    },
  ];

  return (
    <footer className="w-full bg-[#1a1a1a] text-[#f5f0e8] border-t-4 border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1XziLlY5vb1dvF6Eo8dW-J6lHGPfXTomHJZOv5gtTYXi4ekuGKt8X_ry3NwDekNo11TedQJcf3ZYPykfAl7YyCg3I-A-3yNuJhPcM4y_Y_N_ACRsNjAb04xDBW_jFoJXGkGFuq-XFi5Vpo1zqE8UOvoLCR9BmTWTwBNx9_p7WsnFDkSZKDMxsaijEBuWMTpgwdGoBoL6UV5hj4jEA69lq27miwaA1ymKW40N--F6f--z2necas4Y1FLqEA"
                  alt="Grill 'n Chill Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="font-headline font-bold text-xl uppercase tracking-tighter text-[#f5f0e8]">
                Grill &apos;n Chill
              </span>
            </div>
            <p className="text-sm text-[#e8e3da] leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-[#ffcc00] text-[#1a1a1a] font-label font-bold text-xs uppercase px-5 py-2.5 border-2 border-[#1a1a1a] hover:bg-[#faf7f2] transition-colors shadow-[2px_2px_0px_#ffffff] cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.footer.bookTable}</span>
              </button>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-3">
            <h4 className="font-headline font-bold text-sm uppercase tracking-wider text-[#ffcc00]">
              {t.footer.hoursTitle}
            </h4>
            <p className="text-sm text-[#f5f0e8] font-label font-bold">{t.footer.openDaily}</p>
            <p className="text-sm text-[#e8e3da] whitespace-pre-line leading-relaxed">
              {t.footer.schedule}
            </p>
            <p className="text-xs text-[#e8e3da]/80 pt-1">{t.footer.kitchenNote}</p>
          </div>

          {/* Location */}
          <div className="space-y-3">
            <h4 className="font-headline font-bold text-sm uppercase tracking-wider text-[#ffcc00]">
              {t.footer.locationTitle}
            </h4>
            <p className="text-sm text-[#e8e3da] leading-relaxed whitespace-pre-line">
              {t.footer.address}
            </p>
            <div className="space-y-1 text-sm pt-1">
              <p className="text-[#f5f0e8] font-medium">
                <a href="tel:+212539000000" className="hover:underline">
                  {t.footer.phone}
                </a>
              </p>
              <p className="text-[#e8e3da]">
                <a
                  href="https://wa.me/212646841539"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {t.footer.whatsapp}
                </a>
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=35.5653846,-5.4005068"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-label uppercase tracking-wider text-[#ffcc00] underline hover:text-[#ffffff] transition-colors pt-1"
            >
              {t.footer.openMaps}
            </a>
          </div>

          {/* Navigation & Social Links */}
          <div className="space-y-4">
            <h4 className="font-headline font-bold text-sm uppercase tracking-wider text-[#ffcc00]">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2 text-sm text-[#e8e3da]">
              <li>
                <button
                  onClick={() => handleNavClick('menu-section')}
                  className="hover:text-[#ffffff] transition-colors cursor-pointer"
                >
                  {t.nav.menu}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('specialties-section')}
                  className="hover:text-[#ffffff] transition-colors cursor-pointer"
                >
                  {t.nav.specialties}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about-section')}
                  className="hover:text-[#ffffff] transition-colors cursor-pointer"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('reviews-section')}
                  className="hover:text-[#ffffff] transition-colors cursor-pointer"
                >
                  {t.nav.reviews}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('location-section')}
                  className="hover:text-[#ffffff] transition-colors cursor-pointer"
                >
                  {t.nav.location}
                </button>
              </li>
            </ul>

            {/* Social Media Section in column */}
            <div className="pt-2">
              <span className="text-[11px] font-label uppercase tracking-widest text-[#ffcc00] font-bold block mb-2">
                Follow Us Online
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit our ${social.name} page`}
                      title={`${social.name} • ${social.handle}`}
                      whileHover={{ y: -4, scale: 1.12 }}
                      whileTap={{ scale: 0.92 }}
                      transition={{ type: 'spring', stiffness: 450, damping: 20 }}
                      className={`w-9 h-9 bg-[#242424] hover:text-[#ffffff] text-[#f5f0e8] border-2 border-[#ffcc00] flex items-center justify-center shadow-[2px_2px_0px_#000000] hover:shadow-[3px_3px_0px_#ffffff] transition-colors ${social.bgHover} group`}
                    >
                      <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Animated Social Showcase Bar */}
        <div className="mt-12 pt-8 border-t-2 border-[#ffcc00]/25">
          <div className="bg-[#242424] border-2 border-[#ffcc00] p-6 shadow-[6px_6px_0px_#000000] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-[10px] font-label uppercase tracking-widest text-[#ffcc00] font-bold block">
                Connect With Grill &apos;n Chill Tetouan
              </span>
              <h5 className="font-headline font-bold text-lg uppercase tracking-tight text-[#f5f0e8]">
                Join Our Smokehouse Community
              </h5>
              <p className="text-xs text-[#e8e3da] mt-0.5">
                Catch daily brisket slicing stories, secret menu drops &amp; behind-the-flames videos.
              </p>
            </div>

            {/* 5 Animated Social Buttons with Labels */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={`bar-${social.name}`}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                    className={`flex items-center gap-2 bg-[#1a1a1a] text-[#f5f0e8] px-3.5 py-2 border-2 border-[#f5f0e8]/40 hover:border-[#ffcc00] shadow-[2px_2px_0px_#000000] hover:shadow-[3px_3px_0px_#ffcc00] ${social.bgHover} hover:text-white transition-all cursor-pointer`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="font-headline font-bold text-xs uppercase tracking-wider">
                      {social.name}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="mt-8 pt-6 border-t border-[#e8e3da]/15 flex flex-col sm:flex-row items-center justify-between text-xs text-[#e8e3da] gap-4">
          <p>{t.footer.rights}</p>
          <p className="uppercase font-label tracking-widest text-[10px] text-[#ffcc00]">
            {t.footer.craftedWith}
          </p>
        </div>
      </div>
    </footer>
  );
}
