'use client';
import { createContext, ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

interface LanguageContextType {
  lang: 'eng' | 'nl';
  selectEng: () => void;
  selectNl: () => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: 'nl',
  selectEng: () => console.warn("selectEng not implemented"),
  selectNl: () => console.warn("selectNl not implemented"),
});

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<'nl' | 'eng'>('nl');
  const router = useRouter();

  useEffect(() => {
    const _lang = Cookies.get('nl');
    if (_lang === 'eng' || _lang === 'nl') {
      setLang(_lang as 'eng' | 'nl');
    } else {
      Cookies.set('lang', 'eng', { expires: 365, path: '/' });
    }
  }, []);

  function selectEng() {
    if (lang !== 'eng') {
      setLang('eng');
      Cookies.set('lang', 'eng', { expires: 365, path: '/' });
      router.refresh();
    }
  }

  function selectNl() {
    if (lang !== 'nl') {
      setLang('nl');
      Cookies.set('lang', 'nl', { expires: 365, path: '/' });
      router.refresh();
    }
  }

  return (
    <LanguageContext.Provider value={{ lang, selectEng, selectNl }}>
      {children}
    </LanguageContext.Provider>
  );
}
