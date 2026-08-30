import { ui, type Language } from './translations';

export const LOCALES: Language[] = ['en', 'hi', 'hinglish', 'gu', 'es', 'fr', 'zh', 'ja'];
export const DEFAULT_LOCALE: Language = 'en';
export const SITE_URL = 'https://yonkostash.com';

export const HREFLANG_MAP: Record<Language, string> = {
  en: 'en',
  hi: 'hi',
  hinglish: 'hi-Latn',
  gu: 'gu',
  es: 'es',
  fr: 'fr',
  zh: 'zh',
  ja: 'ja',
};

/**
 * Strips any leading locale prefix from a pathname
 * e.g. "/hi/game/sekiro" -> "/game/sekiro"
 * e.g. "/hi" -> "/"
 */
export function cleanPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && (LOCALES as string[]).includes(segments[0])) {
    segments.shift();
  }
  const clean = '/' + segments.join('/');
  return clean === '' ? '/' : clean;
}

/**
 * Returns localized URL path for a given language
 * e.g. ("/", "hi") -> "/hi"
 * e.g. ("/game/sekiro", "hi") -> "/hi/game/sekiro"
 * e.g. ("/hi/game/sekiro", "en") -> "/game/sekiro"
 */
export function getLocalizedPath(pathname: string, targetLang: Language): string {
  const base = cleanPath(pathname);
  if (targetLang === DEFAULT_LOCALE) {
    return base;
  }
  if (base === '/') {
    return `/${targetLang}`;
  }
  return `/${targetLang}${base}`;
}

/**
 * Generates SEO hreflang links for a given pathname
 */
export function getHreflangLinks(pathname: string) {
  const base = cleanPath(pathname);
  const links: { hreflang: string; href: string }[] = [];

  // x-default points to default English path
  links.push({
    hreflang: 'x-default',
    href: `${SITE_URL}${base === '/' ? '' : base}`,
  });

  for (const lang of LOCALES) {
    const locPath = getLocalizedPath(base, lang);
    links.push({
      hreflang: HREFLANG_MAP[lang] || lang,
      href: `${SITE_URL}${locPath === '/' ? '' : locPath}`,
    });
  }

  return links;
}
