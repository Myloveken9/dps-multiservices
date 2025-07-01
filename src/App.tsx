// src/App.tsx
import { useState } from 'react';
import Home from './pages/Home';
import './index.css';

import LanguageSwitcher from './components/LanguageSwitcher';
import Navbar from './components/Navbar';

export type Lang = 'pt' | 'fr' | 'ht' | 'en' | 'es';

function App() {
  const [lang, setLang] = useState<Lang>('pt');

  return (
    <div className="app">
      <LanguageSwitcher lang={lang} setLang={setLang} />
      <Navbar lang={lang} />
      <Home lang={lang} />
    </div>
  );
}

export default App;
