// src/components/Banner.tsx
import React from 'react';
import icon1 from '../assets/icon1.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import banner from '../assets/banner1.jpg';
import argent1 from '../assets/argent1.png'; // adapte le chemin si nécessaire
import argent2 from './assets/argent2.png';
import argent3 from '/assets/argent3.png'
import cpf from "../assets/cpf.jpg";
import police from "../assets/police.jpg";
import rne from "../assets/rne.jpg";
import nat from "../assets/nat.jpg";
import transfe from '../assets/transfe.jpg';



interface BannerProps {
  lang: Lang;
}
export type Lang = 'pt' | 'fr' | 'ht'| 'en'| 'es';

 const texts = {
    pt: {
      welcome: "Bem-vindo à DP's Multi-Services, Serviços Migratórios e Administrativos em geral",
      subtitle: " Serviços migratorios em geral",
      aboutTitle: "Quem Somos?",
      aboutText: "Somos uma agência especializada no apoio integral aos imigrantes. Oferecemos desde serviços de regularização migratória — como : vistos, residência, naturalização, etc... Até soluções financeiras práticas e seguras. Realizamos recargas de celular para qualquer país. Além de Depósito bancarío, Servicios de Envio e Recebimento de Holdens de pagamento do ou para Exterior via RIA, MoneyGram, Unitransfer, Caribe-Express, C.A.M, MonCash, Natcash etc... Nossa missão é facilitar sua integração no país com confiança, agilidade e um atendimento humanizado em vários idiomas.",
      servicesTitle: "Nossos Serviços",
      contactTitle: "Contato",
      contactText: "Entre em contato conosco para tirar suas dúvidas ou solicitar um orçamento.",
      contactButton: "Entre em contato"
    },
    fr: {
      welcome: "Bienvenue chez DP's Multi-Services, services migratoires et administratifs en général.",
      subtitle: "Services migratoire et administratif ",
      aboutTitle: "Qui sommes-nous?",
      aboutText: "Nous sommes une agence spécialisée dans le soutien complet aux immigrants. Nous proposons des services de régularisation migratoire – tels que : visas, résidence, naturalisation, etc. – ainsi que des solutions financières pratiques et sécurisées. Nous effectuons des recharges de téléphone pour tous les pays. En plus de dépôts bancaires, nous offrons des services d’envoi et de réception de Holdens depuis ou vers l’étranger via RIA, MoneyGram, Unitransfer, Caribe-Express, C.A.M, MonCash, Natcash, etc. Notre mission est de faciliter votre intégration dans le pays avec confiance, rapidité et un accueil humain dans plusieurs langues.",
      servicesTitle: "Nos Services",
      contactTitle: "Contact",
      contactText: "Contactez-nous pour poser vos questions ou demander un devis.",
      contactButton: "Contactez-nous"
    },
    ht: {
      welcome: "Byenveni nan DP's Multi-Services, sèvis migratwa ak administratif an jeneral.",
      subtitle: "Fasilite sèvis migrasyon w ak administrasyon w. ",
      aboutTitle: "Kilès nou ye?",
      aboutText: "Nou se yon ajans ki espesyalize nan sipò total pou imigran yo. Nou ofri sèvis pou regilarizasyon imigrasyon – tankou : viza, rezidans, natiralizasyon, elatriye – ansanm ak solisyon finansye ki pratik ak sekirize. Nou fè rechaj telefòn pou tout peyi. Anplis depo bankè, nou bay sèvis voye ak resevwa lajan (Holdens) soti oswa ale aletranje atravè RIA, MoneyGram, Unitransfer, Caribe-Express, C.A.M, MonCash, Natcash, elatriye. Misyon nou se fasilite entegrasyon ou nan peyi a ak konfyans, efikasite, epi yon sèvis imanitè nan plizyè lang.",
      servicesTitle: "Sèvis Nou Yo",
      contactTitle: "Kontak",
      contactText: "Tanpri kontakte nou pou nenpòt kesyon oswa demann estimasyon.",
      contactButton: "Kontakte-nou"
    },
    en: {
      welcome: "Welcome to DP's Multi-Services, your destination for migration and general administrative services.",
      subtitle: "Facilitating your service migration",
      aboutTitle: "About Us",
      aboutText: "We are an agency specialized in comprehensive support for immigrants. We offer services for migration regularization – such as visas, residence, naturalization, etc. – and practical, secure financial solutions. We provide mobile recharges for any country. In addition to bank deposits, we offer money sending and receiving services from or to abroad via RIA, MoneyGram, Unitransfer, Caribe-Express, C.A.M, MonCash, Natcash, etc. Our mission is to make your integration in the country easier with trust, speed, and humanized service in multiple languages.",
      servicesTitle: "Our Services",
      contactTitle: "Contact",
      contactText: "Get in touch with us for any questions or to request a quote.",
      contactButton: "Contact-us"
    },
    es: {
      welcome: "Bienvenido a DP's Multi-Services, servicios migratorios y administrativos en general.",
      subtitle: "Facilitando su viaje migratorio ",
      aboutTitle: "Quiénes Somos",
      aboutText: "Somos una agencia especializada en el apoyo integral a inmigrantes. Ofrecemos servicios de regularización migratoria – como visas, residencia, naturalización, etc. – y soluciones financieras prácticas y seguras. Realizamos recargas de celulares para cualquier país. Además de depósitos bancarios, ofrecemos servicios de envío y recepción de giros desde o hacia el exterior vía RIA, MoneyGram, Unitransfer, Caribe-Express, C.A.M, MonCash, Natcash, etc. Nuestra misión es facilitar su integración en el país con confianza, agilidad y un servicio humano en varios idiomas. ",
      servicesTitle: "Nuestros Servicios",
      contactTitle: "Contacto",
      contactText: "Contáctenos para cualquier duda o para solicitar un presupuesto.",
      contactButton: "contactar-nós"
    }
  };

const Banner: React.FC<BannerProps> = ({ lang }) => {
  const t = texts[lang];

  return (
    <div className="app">
      {/* === Banner === */}
      <section id="home" className="banner">
        <img src={banner} alt="Cidade" />
        
        <div className="banner-content">
          {/* Décorations flottantes */}
          <img src={icon1} className="floating-icon icon1" alt="icon" />
          <img src={icon3} className="floating-icon icon3" alt="icon" />
          <img src={icon4} className="floating-icon icon4" alt="icon" />
          {/* Texte de bienvenue */}

          <h1>{t.welcome}</h1>
          <p>{t.subtitle}</p>
          <a href="#contato" className="btn-banner">{t.contactButton}</a>
        </div>

        {/* Effet de vague décoratif */}
        <div className="banner-wave">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path
              d="M0.00,49.98 C150.00,150.00 349.47,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none", fill: "#f9f9f9" }}
            />
          </svg>
        </div>

        <div className="banner-icons">
          <div className="icon-box">
            <img src={argent1} alt="Cidade" />
            <p>
              {{
                pt: "Deposito bancário, Envio e recebimento de remessas internacionais.",
                fr: "Dépôt bancaire, envoi et réception de transferts internationaux",
                en: "Bank deposit, international money sending and receiving",
                ht: "Depo labank, voye ak resevwa lajan entènasyonal",
                es: "Depósito bancario, envío y recepción de remesas internacionales"
              }[lang]}
            </p>
            <p>
              {{
                 pt: "Via MoneyGram, RIA, Caribe Express, C.A.M, Unitransfert, MonCash, Natcash etc...",
                fr: "Par MoneyGram, RIA, Caribe Express, C.A.M, Unitransfert, MonCash, Natcash etc...",
                en: "MoneyGram, RIA, Caribe Express, C.A.M, Unitransfert, MonCash, Natcash etc...",
                ht: "Atravè MoneyGram, RIA, Caribe Express, C.A.M, Unitransfert, MonCash, Natcash etc...",
                es: "Via MoneyGram, RIA, Caribe Express, C.A.M, Unitransfert MonCash, Natcash."
              }[lang]}
            </p>
          </div>

          <div className="icon-box">
            <img src={argent2} alt="Cidade" />
            <p>{{
               pt: "Serviços migratórios e administrativos em geral",
                fr: "Services migratoires et administratifs en général",
                en: "General migration and administrative services",
                ht: "Sèvis migratwa ak administratif an jeneral",
                es: "Servicios migratorios y administrativos en general"
            }[lang]}</p>
            <p>{{
               pt: "Assistência completa e processos migratórios: vistos, regularização, naturalização e documentos oficiais.",
                fr: "Assistance complète aux démarches migratoires : visas, régularisation, naturalisation et documents officiels.",
                en: "Full assistance with migration processes: visas, regularization, naturalization, and official documents.",
                ht: "Asistans konplè pou pwosesis migratwa: viza, regilarizasyon, natiralizasyon ak dokiman ofisyèl.",
                es: "Asistencia completa en trámites migratorios: visas, regularización, naturalización y documentos oficiales."
            }[lang]}</p>
          </div>

          <div className="icon-box">
            <img src={argent3} alt="Cidade" />
            <p>{{
              pt: "Atendimento multilingue",
              fr: "Assistance multilingue",
              en: "Multilingual support",
              ht: "Sèvis plizyè lang",
              es: "Atención multilingüe"
            }[lang]}</p>
            <p>
              {{
                pt: "Atendimento em francês, português, inglês, espanhol e crioulo haitiano.",
                fr: "Service multilingue disponible en français, portugais, anglais, espagnol et créole haïtien.",
                en: "Service available in French, Portuguese, English, Spanish, and Haitian Creole.",
                ht: "Sèvis disponib an franse, pòtigè, anglè, panyòl ak kreyòl ayisyen.",
                es: "Atención en francés, portugués, inglés, español y criollo haitiano."
              }[lang]}
            </p>
          </div>
      </div>
    </section>
    <section>
      <div className="marquee-track">
        <div className="icon-box2">
          <img src={transfe} alt="Transferência internacionais" />
          <p>{{
            pt: "Transferências internacionais",
            fr: "Transferts internationaux",
            en: "International Transfers",
            ht: "Transfè entènasyonal",
            es: "Transferencias internacionales"
          }[lang]}</p>
        </div>

    <div className="icon-box2">
      <img src={cpf} alt="Facilitamos seu CPF" />
      <p>{{
        pt: "Facilitamos seu CPF",
        fr: "Nous facilitons votre CPF",
        en: "We help with CPF registration",
        ht: "Nou ede ou jwenn CPF ou",
        es: "Facilitamos su CPF"
      }[lang]}</p>      
    </div>

    <div className="icon-box2">
      <img src={police} alt="Agendamos sua Polícia Federal" />
      <p>{{
        pt: "Agendamento da Polícia Federal",
        fr: "Rendez-vous à la Police Fédérale",
        en: "Federal Police Appointment",
        ht: "Randevou ak Polis Federal",
        es: "Cita con la Policía Federal"
      }[lang]}</p>
    </div>

    <div className="icon-box2">
      <img src={rne} alt="Traduzimos documentos" />
      <p>{{
        pt: "Registro Nacional de Estrangeiros (RNE)",
        fr: "Registre National des Étrangers (RNE)",
        en: "National Registry of Foreigners (RNE)",
        ht: "Rejis Nasyonal Etranje yo (RNE)",
        es: "Registro Nacional de Extranjeros (RNE)"
      }[lang]}</p>
      
    </div>

    <div className="icon-box2">
      <img src={nat} alt="Naturalização" />
      <p>{{
        pt: "Naturalização brasileira",
        fr: "Naturalisation brésilienne",
        en: "Brazilian naturalization",
        ht: "Natilalizasyon brezilyen",
        es: "Naturalización brasileña"
      }[lang]}</p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Banner;
