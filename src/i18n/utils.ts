import { ui, type Language } from './translations';

export const LOCALES: Language[] = ['en', 'hi', 'hinglish', 'gu', 'es', 'fr', 'zh', 'ja'];
export const DEFAULT_LOCALE: Language = 'en';
export const SITE_URL = 'https://srijan123-sys.github.io/YonkoStash';

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
 * Strips any leading base prefix and locale prefix from a pathname
 * e.g. "/YonkoStash/hi/game/sekiro" -> "/game/sekiro"
 * e.g. "/hi/game/sekiro" -> "/game/sekiro"
 * e.g. "/YonkoStash" -> "/"
 */
export function cleanPath(pathname: string): string {
  const basePrefix = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  let path = pathname;
  if (basePrefix && path.startsWith(basePrefix)) {
    path = path.slice(basePrefix.length);
  }
  const segments = path.split('/').filter(Boolean);
  if (segments.length > 0 && (LOCALES as string[]).includes(segments[0])) {
    segments.shift();
  }
  const clean = '/' + segments.join('/');
  return clean === '' ? '/' : clean;
}

/**
 * Returns localized URL path for a given language, preserving base prefix
 * e.g. ("/", "hi") -> "/YonkoStash/hi"
 * e.g. ("/game/sekiro", "hi") -> "/YonkoStash/hi/game/sekiro"
 * e.g. ("/hi/game/sekiro", "en") -> "/YonkoStash/game/sekiro"
 */
export function getLocalizedPath(pathname: string, targetLang: Language): string {
  const basePrefix = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const clean = cleanPath(pathname);
  let localized = '';
  if (targetLang === DEFAULT_LOCALE) {
    localized = clean;
  } else if (clean === '/') {
    localized = `/${targetLang}`;
  } else {
    localized = `/${targetLang}${clean}`;
  }
  const fullPath = `${basePrefix}${localized === '' ? '/' : localized}`;
  return fullPath === '' ? '/' : fullPath;
}

/**
 * Generates SEO hreflang links for a given pathname
 */
export function getHreflangLinks(pathname: string) {
  const links: { hreflang: string; href: string }[] = [];

  // x-default points to default English path
  const defaultPath = getLocalizedPath(pathname, DEFAULT_LOCALE);
  const defaultSubpath = defaultPath.startsWith('/YonkoStash') ? defaultPath.replace(/^\/YonkoStash/, '') : defaultPath;
  links.push({
    hreflang: 'x-default',
    href: `${SITE_URL}${defaultSubpath === '/' ? '' : defaultSubpath}`,
  });

  for (const lang of LOCALES) {
    const locPath = getLocalizedPath(pathname, lang);
    const locSubpath = locPath.startsWith('/YonkoStash') ? locPath.replace(/^\/YonkoStash/, '') : locPath;
    links.push({
      hreflang: HREFLANG_MAP[lang] || lang,
      href: `${SITE_URL}${locSubpath === '/' ? '' : locSubpath}`,
    });
  }

  return links;
}
