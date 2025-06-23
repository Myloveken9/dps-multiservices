import React from 'react';
import type { Lang } from '../App';

interface FooterProps {
  lang: Lang;
}

const translations = {
  pt: '© 2025 DP’s Multi-Services - Todos os direitos reservados.',
  en: '© 2025 DP’s Multi-Services - All rights reserved.',
  fr: '© 2025 DP’s Multi-Services - Tous droits réservés.',
  ht: '© 2025 DP’s Multi-Services - Tout dwa rezève.',
  es: '© 2025 DP’s Multi-Services - Todos los derechos reservados.',
};

const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>{translations[lang]}</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#24445C',
    color: 'white',
    textAlign: 'center' as const,
    padding: '20px 0',
    marginTop: '40px',
  },
  text: {
    fontSize: '14px',
    margin: 0,
  },
};

export default Footer;
