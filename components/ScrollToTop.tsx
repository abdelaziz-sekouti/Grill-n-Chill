'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ y: -4, scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          aria-label="Scroll to top"
          title="Scroll to Top / الرجوع للأعلى"
          className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-[#ffcc00] hover:bg-[#1a1a1a] text-[#1a1a1a] hover:text-[#ffcc00] p-3.5 sm:px-4 sm:py-3 border-2 border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] hover:shadow-[2px_2px_0px_#ffffff] transition-colors cursor-pointer group"
        >
          <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
          <span className="font-headline font-bold text-xs uppercase tracking-wider hidden sm:inline">
            Top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
