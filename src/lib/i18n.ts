import en from '../locales/en.yml';
import ja from '../locales/ja.yml';

const translations = { en, ja };

type Locale = keyof typeof translations;

/**
 * Base translator: looks up a key in the given locale.
 */
export function t(locale: Locale, key: string): string {
  const parts = key.split('.');
  return parts.reduce<unknown>((obj, part) => {
    if (typeof obj === 'object' && obj !== null && part in obj) {
      return (obj as Record<string, unknown>)[part];
    }
    return undefined;
  }, translations[locale]) as string;
}

/**
 * Creates a translator bound to a specific locale.
 * Example: const t = useTranslator('en'); t('greeting');
 */
export function useTranslator(locale: Locale) {
  return (key: string) => t(locale, key);
}
