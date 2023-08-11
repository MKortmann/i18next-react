import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation, Trans } from 'react-i18next';
import { Greeting } from './components/greeting/Greeting';

const lngs: any = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' },
};

function App() {
  const { t, i18n } = useTranslation();
  const [count, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>1- {t('header.part1')}</p>
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              style={{
                fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
              }}
              type="submit"
              onClick={() => {
                i18n.changeLanguage(lng);
                setCounter(count + 1);
              }}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
        <p>
          {/* the variable must be count */}
          <p>2- {t('header.part2')}</p>
          <i>{t('counter', { count })}</i>
        </p>
        <p>3- {t('header.part3')}</p>
        <p>
          <Trans i18nKey="description.part1">
            Edit <code>src/App.js</code> and save to reload.
          </Trans>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('description.part2')}
        </a>
        <p>4- {t('header.part4')}</p>
        <Greeting t={t}></Greeting>
      </header>
    </div>
  );
}

export default App;
