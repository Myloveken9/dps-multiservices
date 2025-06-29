import React from 'react';
import type { Lang } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

interface LanguageSwitcherProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ lang, setLang }) => {
  return (
    <div className="language-bar">
      {/* LANGUES À GAUCHE */}
      <div className="bar-left">
        <div className="lang-buttons">
          <button onClick={() => setLang('pt')} disabled={lang === 'pt'}>PT</button>
          <button onClick={() => setLang('en')} disabled={lang === 'en'}>EN</button>
          <button onClick={() => setLang('fr')} disabled={lang === 'fr'}>FR</button>
          <button onClick={() => setLang('ht')} disabled={lang === 'ht'}>HT</button>
          <button onClick={() => setLang('es')} disabled={lang === 'es'}>ES</button>
        </div>
      </div>

      {/* EMAIL + TÉLÉPHONE AU CENTRE */}
      <div className="bar-center">
        <span>
          <FontAwesomeIcon icon={faEnvelope} /> dps.migration@gmail.com
        </span>
        <span>
          <FontAwesomeIcon icon={faPhone} /> +55 (11) 95348-2936 — Seg à Sáb: 10h às 19h
        </span>
      </div>

      {/* RÉSEAUX SOCIAUX À DROITE */}
      <div className="bar-right">
        <a href="https://wa.me/5511953482936" target="_blank" rel="noopener noreferrer" title="WhatsApp">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
