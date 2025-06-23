// src/components/Banner.tsx
import React from 'react';

interface BannerProps {
  lang: Lang;
}
export type Lang = 'pt' | 'fr' | 'ht'| 'en'| 'es';

const texts: Record<Lang, string> = {
  pt: "Bem-vindo à DP’s Multi-Services",
  fr: "Bienvenue chez DP’s Multi-Services",
  ht: "Byenveni nan DP’s Multi-Services",
  en: "Welcome to DP’s Multi-Services",
  es: "Bienvenido a DP’s Multi-Services"
};

const subtitles: Record<Lang, string> = {
  pt: "Ajudamos imigrantes com serviços administrativos e regularização no Brasil.",
  fr: "Nous aidons les immigrés avec des services administratifs et de régularisation au Brésil.",
  ht: "Nou ede imigran yo ak sèvis administratif ak regilarizasyon O Brezil.",
  en: "We help immigrants with administrative services and regularization in Brazil.",
  es: "Ayudamos a los inmigrantes con servicios administrativos y regularización en Brasil."
};

const Banner: React.FC<BannerProps> = ({ lang }) => {
  return (
    <section className="banner">
      <h1>{texts[lang]}</h1>
      <p className="banner-subtitle">{subtitles[lang]}</p>
    </section>
  );
};

export default Banner;
