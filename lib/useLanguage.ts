'use client';

import { useSyncExternalStore, useCallback } from 'react';
import { Language } from '@/lib/translations';

let currentLangState: Language = 'en';
const listeners = new Set<() => void>();

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener('storage', callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener('storage', callback);
  };
}

function getClientSnapshot(): Language {
  if (typeof window === 'undefined') return 'en';
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang') as Language;
    if (langParam && ['en', 'es', 'fr', 'darija'].includes(langParam)) {
      currentLangState = langParam;
      return langParam;
    }
    const saved = localStorage.getItem('grillnchill_lang') as Language;
    if (saved && ['en', 'es', 'fr', 'darija'].includes(saved)) {
      currentLangState = saved;
      return saved;
    }
  } catch {
    // Fallback
  }
  return currentLangState;
}

function getServerSnapshot(): Language {
  return 'en';
}

export function useLanguage() {
  const lang = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  const setLanguage = useCallback((newLang: Language) => {
    currentLangState = newLang;
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('grillnchill_lang', newLang);
        const url = new URL(window.location.href);
        url.searchParams.set('lang', newLang);
        window.history.replaceState({}, '', url.toString());
      } catch {
        // Fallback
      }
    }
    emitChange();
  }, []);

  return [lang, setLanguage] as const;
}
