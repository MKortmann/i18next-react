import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-locize-backend';
import { DateTime } from 'luxon';

// Import translations
// import enTranslation from '../public/locales/en';
// import deTranslation from '../public/locales/de';

i18n
  // i18next-http-backend
  // loads translations from your server
  // https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    backend: {
      projectId: 'ad27f023-3c23-4e60-b031-75f1e1445270',
      apiKey: 'a5b87c60-eccd-43f6-a17b-175970006aa0',
    }
    // interpolation: {
    //   escapeValue: false, // not needed for react as it escapes by default
    // },
    // resources: {
    //   en: {
    //     translation: enTranslation,
    //   },
    //   de: {
    //     translation: deTranslation,
    //   },
    // },
    // resources: {
    //   en: {
    //     translation: {
    //       // here we will place our translations...
    //       description: {
    //         part1: 'Edit <1>src/App.js</1> and save to reload.',
    //         part2: 'Learn React'
    //       }
    //     }
    //   },
    //   de: {
    //     translation: {
    //       description: {
    //         part1: 'Ändere <1>src/App.js</1> und speichere um neu zu laden.',
    //         part2: 'Lerne React'
    //       }
    //     }
    //   }
    // }
  });

// adds a custom formatter to the i18next library. The formatter is given a name 'DATE_HUGE', and it is defined using an arrow function that takes three parameters: value, lng, options.
// value: value to format, in this case, JavaScript Date object.
// lng: it the language code for the desired locale. It tells the formatter which locale to use for formatting
// 'DATE_HUGE: is a predefined Luxon format string representing a large, human-readable date format.
i18n.services.formatter.add('DATE_HUGE', (value, lng, options) => {
  return DateTime.fromJSDate(value)
    .setLocale(lng)
    .toLocaleString(DateTime.DATE_HUGE);
});

export default i18n;
