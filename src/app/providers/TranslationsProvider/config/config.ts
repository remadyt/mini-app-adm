import { en, ru } from '@/app/locales';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

const options = {
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
  resources,
};

i18n.use(initReactI18next).use(Backend).use(LanguageDetector).init(options);

export { default as i18nSettings } from 'i18next';
