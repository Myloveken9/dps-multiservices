import '../index.css';
import '../section.css';
import type { Lang } from '../App';

import icon1 from '../assets/icon1.png';
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png';
import banner from '../assets/banner.jpg';
import argent1 from '../assets/argent1.png'; // adapte le chemin si nécessaire
import argent2 from '../assets/argent2.png';
import icons from '../assets/icons.jpg';
import quem from '../assets/quem.png';
import migration from '../assets/migration.jpg'; // Remplacez par le bon nom et extension de fichier
import projeto2 from "../assets/projeto2.jpg"
import cpf from "../assets/cpf.jpg";
import police from "../assets/police.jpg";
import rne from "../assets/rne.jpg";
import nat from "../assets/nat.jpg";
import transfe from '../assets/transfe.jpg';
import depoimento from '../assets/depoimento.jpg';
import moneygram from '../assets/moneygran.jpg';
import caribe from '../assets/caribe.jpg';
import contact from '../assets/contact.jpg';
import cam from '../assets/cam.jpg'


interface HomeProps {
  lang: Lang;
}
import { useEffect } from 'react';

function Home({ lang }: HomeProps) {
  const texts = {
    pt: {
      welcome: "Bem-vindo à DP's Multi-Services, Serviços Migratórios e Administrativos em geral",
      subtitle: " Serviços migratorios em geral",
      aboutTitle: "Quem Somos?",
      aboutText: "Somos uma agência especializada no apoio integral aos imigrantes. Oferecemos desde serviços de regularização migratória — como : vistos, residência, naturalização, etc... Até soluções financeiras práticas e seguras. Realizamos recargas de celular para qualquer país. Além de Depósito bancarío, Servicios de Envio e Recebimento de Ordens de pagamento do ou para Exterior via RIA, MoneyGram, Unitransfer, Caribe-Express, C.A.M, MonCash, Natcash etc... Nossa missão é facilitar sua integração no país com confiança, agilidade e um atendimento humanizado em vários idiomas.",
      servicesTitle: "Nossos Serviços",
      contactTitle: "Contato",
      contactText: "Entre em contato conosco para tirar suas dúvidas ou solicitar um orçamento.",
      contactButton: "Entre em contato"
    },
    fr: {
      welcome: "Bienvenue chez DP's Multi-Services, services migratoires et administratifs en général.",
      subtitle: "Services migratoire et administratif ",
      aboutTitle: "Qui sommes-nous?",
      aboutText: "Nous sommes une agence spécialisée dans le soutien complet aux immigrants. Nous proposons des services de régularisation migratoire – tels que : visas, résidence, naturalisation, etc. – ainsi que des solutions financières pratiques et sécurisées. Nous effectuons des recharges de téléphone pour tous les pays. En plus de dépôts bancaires, nous offrons des services d’envoi et de réception de l'Ordre depuis ou vers l’étranger via RIA, MoneyGram, Unitransfer, Caribe-Express, C.A.M, MonCash, Natcash, etc. Notre mission est de faciliter votre intégration dans le pays avec confiance, rapidité et un accueil humain dans plusieurs langues.",
      servicesTitle: "Nos Services",
      contactTitle: "Contact",
      contactText: "Contactez-nous pour poser vos questions ou demander un devis.",
      contactButton: "Contactez-nous"
    },
    ht: {
      welcome: "Byenveni nan DP's Multi-Services, sèvis migratwa ak administratif an jeneral.",
      subtitle: "Fasilite sèvis migrasyon w ak administrasyon w. ",
      aboutTitle: "Kilès nou ye?",
      aboutText: "Nou se yon ajans ki espesyalize nan sipò total pou imigran yo. Nou ofri sèvis pou regilarizasyon imigrasyon – tankou : viza, rezidans, natiralizasyon, elatriye – ansanm ak solisyon finansye ki pratik ak sekirize. Nou fè rechaj telefòn pou tout peyi. Anplis depo bankè, nou bay sèvis voye ak resevwa lajan nan Lòd soti oswa ale aletranje atravè RIA, MoneyGram, Unitransfer, Caribe-Express, C.A.M, MonCash, Natcash, elatriye. Misyon nou se fasilite entegrasyon ou nan peyi a ak konfyans, efikasite, epi yon sèvis imanitè nan plizyè lang.",
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

  const t = texts[lang];

  useEffect(() => {
    const btn = document.getElementById('backToTop');
    const handleScroll = () => {
      if (!btn) return;
      if (window.scrollY > 200) {
        btn.style.display = 'block';
      } else {
        btn.style.display = 'none';
      }
    };
    window.addEventListener('scroll', handleScroll);

    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    btn?.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      btn?.removeEventListener('click', handleClick);
    };
  }, []);

return (
  <>
    <div className="app">
      {/* === Banner === */}
      <section id="home" className="banner">
        <img src={banner} alt="banner" className="banner-image" />

        <div className="banner-content">
          {/* Icônes flottantes */}
          <img src={icon1} className="floating-icon icon1" alt="icon" />
          <img src={icon3} className="floating-icon icon3" alt="icon" />
          <img src={icon4} className="floating-icon icon4" alt="icon" />
          

          {/* Texte principal */}
          <h1>{t.welcome}</h1>
          <p>{t.subtitle}</p>
          <br />
          <a href="https://wa.me/5511953482936" className="btn-banner">{t.contactButton}</a>
        </div>

        {/* Vague décorative */}
        <div className="banner-wave">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path
              d="M0.00,49.98 C150.00,150.00 349.47,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none", fill: "#f9f9f9" }}
            />
          </svg>
        </div>

        {/* Section icônes avec descriptions */}
        <div className="scroll-wrapper">
          <div className="banner-icons">
            {/* Bloc 1 */}
            <div className="icon-box">
              <img src={argent1} alt="Cidade" />
              <p>{{
                pt: "Deposito bancário, Envio e recebimento de remessas internacionais.",
                fr: "Dépôt bancaire, envoi et réception de transferts internationaux",
                en: "Bank deposit, international money sending and receiving",
                ht: "Depo labank, voye ak resevwa lajan entènasyonal",
                es: "Depósito bancario, envío y recepción de remesas internacionales"
              }[lang]}</p>
              <p>{{
                pt: "Via MoneyGram, RIA, Caribe Express, C.A.M, Unitransfert, MonCash, Natcash etc...",
                fr: "Par MoneyGram, RIA, Caribe Express, C.A.M, Unitransfert, MonCash, Natcash etc...",
                en: "MoneyGram, RIA, Caribe Express, C.A.M, Unitransfert, MonCash, Natcash etc...",
                ht: "Atravè MoneyGram, RIA, Caribe Express, C.A.M, Unitransfert, MonCash, Natcash etc...",
                es: "Via MoneyGram, RIA, Caribe Express, C.A.M, Unitransfert MonCash, Natcash."
              }[lang]}</p>
            </div>

            {/* Bloc 2 */}
            <div className="icon-box">
              <img src={argent2} alt="Visto" />
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
          </div>
        </div>
      </section>
    </div>
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
    {/* === Quem Somos === */}
    <>
      <section id="quem-somos" className="quem-somos">
        <div className="quem-somos-content">
          <div className="quem-somos-text">
            <h2>{t.aboutTitle}</h2>
            <p dangerouslySetInnerHTML={{ __html: t.aboutText }} />
          </div>
          <div className="quem-somos-image">
            <img src={quem} alt="quem" />
          </div>
        </div>
      </section>

      <div className="quem-somos-etapas">
        <div className="etapa">
          <span>01</span>
          {{
            pt: "Avaliação ",
            fr: "Évaluation ",
            en: "Evaluation",
            ht: "Evalyasyon",
            es: "Evaluación"
          }[lang]}
        </div>
        <div className="etapa">
          <span>02</span>
          {{
            pt: "Atendimento Rápido",
            fr: "Service rapide",
            en: "Fast service",
            ht: "Sèvis rapid",
            es: "Atención rápida"
          }[lang]}
        </div>
        <div className="etapa">
          <span>03</span>
          {{
            pt: "Administração",
            fr: "Administration",
            en: "Administration",
            ht: "Administration",
            es: "Administración"
          }[lang]}
        </div>
        <div className="etapa">
          <span>04</span>
          {{
            pt: "Acompanhamento",
            fr: "Accompagnement",
            en: "Support",
            ht: "Swivi",
            es: "Acompañamiento"
          }[lang]}
        </div>
      </div>

      <div>
        <p>
          {{
            pt: "Aproveite uma avaliação gratuita e um acompanhamento personalizado. 📞 Entre em contato conosco hoje mesmo e siga em frente com confiança!",
            fr: "Profitez d’une évaluation gratuite et d’un accompagnement personnalisé. 📞 Contactez-nous dès aujourd’hui et avancez en toute confiance !",
            en: "Get a free evaluation and personalized support. 📞 Contact us today and move forward with confidence!",
            ht: "Pwofite de yon yon evalyasyon gratis ak yon sipò pèsonalize. 📞 Kontakte nou jodi a pou avanse ak konfyans!",
            es: "Aproveche una evaluación gratuita y un acompañamiento personalizado. 📞 ¡Contáctenos hoy y avance con confianza!"
          }[lang]}
        </p>
      </div>
      <div className="quem-somos-banner-image">
        <div className="overlay-text">
          {{
            pt: "Ajuda profissional para sua jornada migratória",
            fr: "Aide professionnelle pour votre parcours migratoire",
            en: "Professional support for your migration journey",
            ht: "Èd pwofesyonèl pou vwayaj migratwa ou",
            es: "Ayuda profesional para tu proceso migratorio"
          }[lang]}
        </div>
        <img src={migration} alt="migration" />
        <div className="whatsapp-button">
          <a
            href="https://wa.me/5511953482936" // ← remplace par ton numéro WhatsApp au format international sans +
            target="_blank"
            rel="noopener noreferrer"
          >
            {{
              pt: "Entrar em contato",
              fr: "Contacter nous",
              en: "Contact us",
              ht: "Kontakte nou",
              es: "Contactar-nos"
            }[lang]}
          </a>
        </div>
      </div>
    </>
      {/* === Serviços === */}
<section id="servicos" className="servicos">
  <h2>
    {{
      pt: "Nossos Serviços",
      fr: "Nos Services",
      ht: "Sèvis nou yo",
      en: "Our Services",
      es: "Nuestros Serviços"
    }[lang]}
  </h2>
  <h2>
    {{
      pt: "Conheça as soluções que oferecemos para facilitar sua vida no Brasil.",
      fr: "Découvrez les solutions que nous offrons pour faciliter votre vie au Brésil.",
      en: "Discover the solutions we offer to make your life easier in Brazil.",
      ht: "Dekouvri solisyon nou ofri yo pou fasilite lavi ou nan Brezil.",
      es: "Descubra las soluciones que ofrecemos para facilitar su vida en Brasil."
    }[lang]}
  </h2>
  {/* === WRAPPER DES CARTES === */}
  <div className="cards-container">

    {/* Transferência de dinheiro */}
    <div className="card">
      
      <h3>{{
        pt: "Transferência de dinheiro",
          fr: "Transfert d'argent",
        en: "Money Transfer",
        ht: "Transfè lajan",
        es: "Transferencia de dinero"
      }[lang]}</h3>
      <div className= "icone serviço">
        <img src={icons} alt="Icons" />
      </div>
      <p>{{
        pt: "Transferências internacionais com Ria, C.A.M, MoneyGram, Unitransfer, etc...",
        fr: "Transferts internationaux via Ria, C.A.M, MoneyGram, Unitransfer, etc...",
        en: "Account opening, bank deposits, international money transfers with Ria, C.A.M, MoneyGram, Unitransfer, etc...",
        ht: "Transfè entènasyonal atravè Ria, C.A.M, MoneyGram, Unitransfer, etc... ",
        es: "Transferencias internacionales a través de Ria, C.A.M, MoneyGram, Unitransfer, etc..."
      }[lang]}</p>
    </div>

    {/*Depósitos Bancarios*/}
    <div className="card">
      <h3>{{
        pt: "Depósitos Bancários",
        fr: "Dépôts bancaires",
        en: "Bank Deposits",
        ht: "Depo bankè",
        es: "Depósitos Bancarios"
      }[lang]}</h3>
      <div className= "icone serviço">
        <img src={icons} alt="Icons" />
      </div>
      <p>{{
        pt: "Depósitos bancários e Abertura de conta em diversas instituições financeiras Nacional e Internacional.",
        fr: "Dépôts bancaires et ouverture de compte dans diverses institutions financières nationales et internationales.",
        en: "Bank deposits and account opening in various national and international financial institutions.",
        ht: "Depo bankè ak ouvèti kont nan divès enstitisyon finansye nasyonal ak entènasyonal.",
        es: "Depósitos bancarios y apertura de cuenta en diversas instituciones financieras nacionales e internacionales."
      }[lang]}</p>
    </div>

    {/* Compra e Venda de Moedas Estrangeiras */}
    <div className="card">
      <h3>{{
      pt: "Compra e Venda de Moedas Estrangeiras",
      fr: "Achat et vente de devises étrangères",
      en: "Foreign Currency Exchange",
      ht: "Achte ak vann lajan etranje",
      es: "Compra y venta de divisas extranjeras"
      }[lang]}</h3>
      <div className= "icone serviço">
        <img src={icons} alt="Icons" />
        </div>
      <p>{{
        pt: "Compra e venda de moedas estrangeiras com taxas competitivas.",
        fr: "Achat et vente de devises étrangères à des taux compétitifs.",
        en: "Buying and selling foreign currencies at competitive rates.",
        ht: "Achte ak vann lajan etranje ak to konpetitif.",
        es: "Compra y venta de divisas extranjeras a tasas competitivas."
      }[lang]}</p>
    </div>

 {/* Recarga de celular */}
    <div className="card">
      
      <h3>{{
        pt: "Recarga de celular",
        fr: "Recharge de téléphone",
        en: "Mobile Recharge",
        ht: "Rechaj telefòn",
        es: "Recarga de celular"
      }[lang]}</h3>
      <div className= "icone serviço">
        <img src={icons} alt="Icons" />
      </div>
      <p>{{
        pt: "Recarga internacional com digicel, natcom, movitel, claro, orange, altice etc.",
        fr: "Recharge internationale avec digicel, natcom, movitel, claro, orange, altice etc...",
        en: "International Top-Up with digicel, natcom, movitel, claro, orange, altice etc...",
        ht: "Rechaj mobil entènasyonal ak digicel, natcom, movitel, claro, orange, altice etc...",
        es: "Recargue digicel, natcom, movitel, claro, orange, altice etc..."
      }[lang]}</p>
    </div>


    {/* Agendamento PF */}
    <div className="card">
      
      <h3>{{
        pt: "Agendamento PF",
        fr: "Rendez-vous à la Police Fédérale",
        en: "Federal Police Appointment",
        ht: "Randevou Polis Federal",
        es: "Cita con la Policía Federal"
      }[lang]}</h3>
      <div className= "icone serviço">
        <img src={icons} alt="Icons" />
      </div>
      <p>{{
        pt: "Atendimento e regularização migratória junto à Polícia Federal.",
        fr: "Assistance et régularisation migratoire auprès de la Police Fédérale.",
        en: "Assistance and immigration regularization with the Federal Police.",
        ht: "Sipò ak regilarizasyon migratwa ak Polis Federal la.",
        es: "Asistencia y regularización migratoria con la Policía Federal."
      }[lang]}</p>
    </div>

    {/* CPF */}
    <div className="card">
      <h3>{{
        pt: "CPF",
        fr: "CPF",
        en: "CPF",
        ht: "CPF",
        es: "CPF"
      }[lang]}</h3>
      <div className= "icone serviço">
        <img src={icons} alt="Icons" />
      </div>
      <p>{{
        pt: "Facilitamos o processo de obtenção do 1° e 2 via CPF.",
        fr: "Nous facilitons le processus d’obtention du 1° e 2 via CPF.",
        en: "We facilitate the CPF registration process.",
        ht: "Nou fasilite pwosesis pou jwenn 1° e 2 via CPF",
        es: "Facilitamos el proceso de obtención del CPF."
      }[lang]}</p>
    </div>

     {/* Agendamento de Passaporte*/}
    <div className="card">
      <h3>{{
        pt: "Agendamento para Passaporte",
        fr: "Rendez-vous Passeport",
        en: "Passaport apointment",
        ht: "Randevou Paspò",
        es: "Cita para Passaporte"
      }[lang]}</h3>
      <div className= "icone serviço">
        <img src={icons} alt="Icons" />
      </div>
      <p>{{
        pt: "Agendamento para 1° e 2° via do Passaporte.",
        fr: "Rendez-vous Passport 1° et 2° copie.",
        en: "Passport apointment 1° and 2° copy.",
        ht: "Randevou pou Paspò.",
        es: "Cita para 1° e 2° via do Passaporte."
      }[lang]}</p>
    </div>

    {/* Solicitação de refúgio */}
<div className="card">
  <h3>{{
    pt: "Solicitação de refúgio, Renovação de Protocolo etc..",
    fr: "Demande d’asile et renouvellement de protocole etc.. ",
    en: "Refugee application Protocol renewal etc..",
    ht: "Demann azil ak Renouvèlman Pwotokòl elatriye..",
    es: "Solicitud de asilo e Renovación de protocolo etc.."
  }[lang]}</h3>
  
  <div className="icone serviço">
    <img src={icons} alt="Icons" />
  </div>

  <p>{{
    pt: "Acompanhamento completo na sua solicitação de refúgio.",
    fr: "Accompagnement complet dans votre demande d’asile.",
    en: "Full support with your refugee application.",
    ht: "Nou akonpaye w nan tout pwosesis demann azil ou.",
    es: "Acompañamiento integral en su solicitud de asilo."
  }[lang]}</p>
</div>

    {/* Naturalização */}
    <div className="card">
      
      <h3>{{
        pt: "Naturalização",
        fr: "Naturalisation",
        en: "Naturalization",
        ht: "Natiwalisasyon",
        es: "Naturalización"
      }[lang]}</h3>
      <div className= "icone serviço">
        <img src={icons} alt="Icons" />
      </div>
      <p>{{
        pt: "Naturalização em qualquer estado do Brasil, acompagnamos até a obtenção do Passaporte.",
        fr: "Processus d'obtention de la citoyenneté brésilienne, acompagnement jusqu'a l'obtention du Passport.",
        en: "Process to obtain Brazilian citizenship.",
        ht: "Pwosesis pou jwenn sitwayènte brezilyen, akonpayman jiskake ou gen Paspò a.",
        es: "Proceso para obtener la ciudadanía brasileña."
      }[lang]}</p>
    </div>


    {/* Reagrupamento familiar */}
    <div className="card">
      <h3>{{
        pt: "Autorização de residência",
        fr: "Autorisation de residence",
        en: "Residence permit",
        ht: "Otorizasyon Rezidans",
        es: "Autorizacíon del residencia"
      }[lang]}</h3>
      <div className= "icone serviço">
        <img src={icons} alt="Icons" />
      </div>
      <p>{{
        pt: "Em base de reunião familiar, para os cidadãos da CPLP etc... Apoio completo e profissionalizado.",
        fr: " Conformément à la réunification familiale, l’obtention d’un titre de séjour pour les ressortissants de la CPLP etc... Su´pport complet et professionnelle.",
        en: "Comprehensive support for family reunification, residence authorization for CPLP nationals etc... Full support.",
        ht: "Sipò konplè pou reyini fanmi w legalman, otorizasyon rezidans pou sitwayen CPLP yo elatriye... Sipò konplè e pwofesyonèl.",
        es: "En base del la reunificación familiar, autorización de residencia para ciudadanos de la CPLP etc.. Apoio completo e profissionalizado."
      }[lang]}</p>
    </div>

    {/* Carta de convite/ Declaração de depêndencia financeira */}
    <div className="card">
      
      <h3>{{
        pt: "Carta Convite / Declaração de depêndencia financeira ",
        fr: "Carte d'invitation / Déclaration de dépendance financière ",
        en: "Invitation Letter /Financial dependency declaration",
        ht: "Lèt envitasyon / Deklarasyon depandans finansyè",
        es: "Carta de invitación / Declaración de dependencia financiera"
      }[lang]}</h3>
      <div className= "icone serviço">
        <img src={icons} alt="Icons" />
      </div>
      <p>{{
        pt: "Carta convite, declaração de apoio financeiro para o seu processo etc..",
        fr: "Lettre d’invitation, déclaration de soutien financier pour vos démarches etc...",
        en: "Invitation letter, financial support statement for your application etc...",
        ht: "Lèt envitasyon, deklarasyon sipò finansye pou w ranpli dosye w, elatriye..",
        es: "Carta de invitación, declaración de apoyo financiero para su trámite etc.."
      }[lang]}</p>
    </div>


{/* Declaração de residência e documentos diversos */}
<div className="card">
  <h3>{{
    pt: "Declaração de residência e documentos diversos",
    fr: "Déclaration de résidence et autres documents",
    en: "Proof of residence and various documents",
    ht: "Deklarasyon rezidans ak lòt dokiman",
    es: "Declaración de residencia y documentos diversos"
  }[lang]}</h3>

  <div className="icone serviço">
    <img src={icons} alt="Icons" />
  </div>

  <p>{{
    pt: "Criação de CNPJ, Contrato de aluguel, Extraits d'Archives, Cassier judiciaire, Declaração concubinagem etc...",
    fr: "Création de CNPJ,  Contrat de résidence, Extraits d'archives, Casier judiciaire, Déclaration de concubinage, etc..",
    en: "Create CNPJ, Residency contract, Archive extracts, Criminal record, Declaration of cohabitation, etc...",
    ht: "Kreyasyon CNPJ, Kontra lwaye, Ekstrè Achiv, Kazye Jidisyè Deklaration konkibinaj, elatriye...",
    es: "Criação de CNPJ, Contrato de residencia, Extractos de archivos, Antecedentes penales, Declaración de convivencia, etc.."
  }[lang]}</p>
</div>


{/* Abertura de carteira digital */}
<div className="card">
  <h3>{{
    pt: "Abertura de carteira de trabalho digital",
    fr: "Ouverture de portefeuille de travail numérique",
    en: "Digital work wallet setup",
    ht: "Ouvèti kanè travay dijital",
    es: "Abertura de billetera de trabajo digital"
  }[lang]}</h3>

  <div className="icone serviço">
    <img src={icons} alt="Icons" />
  </div>

  <p>{{
    pt: "Assistência para criar e ativar sua carteira de trabalho digital.",
    fr: "Assistance pour créer et activer votre portefeuille de travail.",
    en: "Support to create and activate your digital wallet.",
    ht: "Nou ede w kreye ak aktive kanè travay dijital.",
    es: "Asistencia para crear y activar su billetera de trabajo digital."
  }[lang]}</p>
</div>

    {/* Traduções */}
    <div className="card">
      
      <h3>{{
        pt: "Traduções juramentadas",
        fr: "Traductions assermentées",
        en: "Certified Translations",
        ht: "Tradiksyon Sèman",
        es: "Traducciones juradas"
      }[lang]}</h3>
      <div className= "icone serviço">
        <img src={icons} alt="Icons" />
      </div>
      <p>{{
        pt: "Documentos oficiais traduzidos por tradutores certificados.",
        fr: "Documents officiels traduits par des traducteurs certifiés.",
        en: "Official documents translated by certified translators.",
        ht: "Dokiman ofisyèl tradui pa tradiktè sètifye.",
        es: "Documentos oficiales traducidos por traductores certificados."
      }[lang]}</p>
    </div>

    {/*"Parceria com Faculdade"*/}
    <div className="card">
      
      <h3>{{
        pt: "Parceria com Faculdade",
        fr: "Partenariat avec une université",
        en: "Partnership with University",
        ht: "Patnè ak Inivèsite",
        es: "Asociación con Universidad"
      }[lang]}</h3>
      <div className= "icone serviço">
        <img src={icons} alt="Icons" />
      </div>
      <p>{{
        pt: "Parceria com faculdade para curso de proficiencia na lingua portuguesa para naturalização.",
        fr: "Partenariat avec une université pour un cours de langue portugaise pour la naturalisation.",
        en: "Partnership with university for Portuguese proficiency course for naturalization.",
        ht: "Patenarya ak inivèsite pou kou konpetans nan lang Pòtigè pou natiralizasyon.",
        es: "Asociación con universidad para curso de competencia en lengua portuguesa para naturalización."
      }[lang]}</p>
    </div>

   
    {/* Agência e Segurança de Viagens */}
    <div className="card">
      
      <h3>{{
        pt: "Agência e Segurança de Viagens",
        fr: "Agence de voyage et securité",
        en: "Travel agency e security",
        ht: "Ajans de vwayaj e sekirite",
        es: "Agência de viagens e securidade"
      }[lang]}</h3>
      <div className= "icone serviço">
        <img src={icons} alt="Icons" />
      </div>
      <p>{{
        pt: "Agência especializada em viagens e segurança para todas as suas deslocações.",
        fr: "Agence spécialisée en voyages et sécurité pour tous vos déplacements.",
        en: "Agency specialized in travel and security for all your trips.",
        ht: "Ajans espesyalize nan vwayaj ak sekirite pou tout deplasman ou yo.",
        es: "Agencia especializada en viajes y seguridad para todos sus desplazamientos."
      }[lang]}</p>
    </div>

    {/* Consultoria em vistos e documentação */}
<div className="card">
  <h3>{{
    pt: "Consultoria em vistos e documentação",
    fr: "Conseil en visas et documentation",
    en: "Visa and documentation consultancy",
    ht: "Konsiltasyon sou viza ak dokiman",
    es: "Consultoría en visas y documentación"
  }[lang]}</h3>

  <div className="icone serviço">
    <img src={icons} alt="Icons" />
  </div>

  <p>{{
    pt: "Orientação especializada para obtenção de documentos.",
    fr: "Conseils spécialisés pour l’obtention du visa et les documents.",
    en: "Specialized guidance for obtaining visa and documents.",
    ht: "Gid espesyalize pou jwenn viza ak dokiman.",
    es: "Orientación especializada para la obtención de visto y documentos."
  }[lang]}</p>
  </div>
  </div>
</section>

<section id="projetos" className="projetos">
  <h2>
    {{
      pt: "Projetos em Destaque",
      fr: "Projets phares",
      ht: "Pwojè ki make nou",
      en: "Featured Projects",
      es: "Proyectos Destacados"
    }[lang]}
  </h2>

  <section className="bloco-projeto">
    {/* Image à gauche */}
    <div className="imagem-projeto">
        <img src={projeto2} alt="projeto2" />
    </div>

    {/* Textes à droite */}
    <div className="textos-projeto">
      <div className="bloco-texto">
        <h3>{{
          pt: "Campanha de Documentação",
          fr: "Campagne de documentation",
          ht: "Kanpay dokiman legal",
          en: "Documentation Campaign",
          es: "Campaña de Documentación"
        }[lang]}</h3>
        <p>{{
          pt: "Ajudamos mais de 3000 imigrantes a obter seus documentos em 2024.",
          fr: "Nous avons aidé plus de 300 immigrés à obtenir leurs documents en 2024.",
          ht: "Nou ede plis pase 300 imigran jwenn papye yo an 2024.",
          en: "We helped over 300 immigrants obtain legal documents in 2024.",
          es: "Ayudamos a más de 300 inmigrantes a obtener documentos en 2024."
        }[lang]}</p>
      </div>

      <div className="bloco-texto">
        <h3>{{
          pt: "Integração Cultural",
          fr: "Intégration culturelle",
          ht: "Entegrasyon kiltirèl",
          en: "Cultural Integration",
          es: "Integración cultural"
        }[lang]}</h3>
        <p>{{
          pt: "Ações para facilitar adaptação de imigrantes no Brasil.",
          fr: "Actions pour faciliter l’adaptation des immigrés au Brésil.",
          ht: "Aksyon pou fasilite adaptasyon imigran ann Brezil.",
          en: "Initiatives to support immigrant adaptation in Brazil.",
          es: "Acciones para facilitar la adaptación de inmigrantes en Brasil."
        }[lang]}</p>
      </div>

      <div className="bloco-texto">
        <h3>{{
          pt: "Mutirão de Regularização",
          fr: "Régularisation collective",
          ht: "Mutin regilarizasyon",
          en: "Regularization Task Force",
          es: "Jornadas de Regularización"
        }[lang]}</h3>
        <p>{{
          pt: "Mutirões com advogados e tradutores para agilizar processos.",
          fr: "Événements avec avocats et traducteurs pour accélérer les démarches.",
          ht: "Mutin ak avoka ak tradiktè pou akselere pwosesis yo.",
          en: "Events with lawyers and translators to speed up legal procedures.",
          es: "Jornadas con abogados y traductores para acelerar procesos."
        }[lang]}</p>
      </div>
    </div>
  </section>
</section>


{/* === Depoimentos === */}
<section id="depoimentos" className="depoimentos">
  <h2>
    {{
      pt: "Depoimentos",
      fr: "Témoignages",
      ht: "Temwayaj",
      en: "Testimonials",
      es: "Testimonios"
    }[lang]}
  </h2>

  <div className="depoimentos-wrapper">
    
    {/* IMAGE À GAUCHE */}
    <div className="depoimentos-photo">
      <img src={depoimento} alt="Témoignages" />
    </div>

    {/* TÉMOIGNAGES À DROITE */}
    <div className="depoimentos-cards">

      <div className="depoimento-card">
        <p>{{
          pt: "Graças à orientação da DP’s, obtive meu RNE e CPF com tranquilidade...",
          fr: "Grâce à l'accompagnement de DP’s, j'ai obtenu mon RNE et mon CPF sans stress...",
          ht: "Mèsi ak konsèy DP’s, mwen te jwenn RNE ak CPF mwen fasilman...",
          en: "Thanks to DP’s guidance, I got my RNE and CPF smoothly...",
          es: "Gracias a la orientación de DP’s, obtuve mi RNE y CPF con tranquilidad..."
        }[lang]}</p>
        <strong>Naomi – Angola</strong>
      </div>

      <div className="depoimento-card">
        <p>{{
          pt: "Recebi apoio completo para legalizar minha estadia no Brasil...",
          fr: "J’ai reçu un accompagnement complet pour légaliser mon séjour...",
          ht: "Mwen te resevwa tout sipò pou legalize prezans mwen...",
          en: "I received full support to legalize my stay in Brazil...",
          es: "Recibí apoyo total para legalizar mi estadía en Brasil..."
        }[lang]}</p>
        <strong>Muhamad – Síria</strong>
      </div>

      <div className="depoimento-card">
        <p>{{
          pt: "DP’s cuidou de todo meu processo de naturalização...",
          fr: "DP’s a pris en charge toute ma naturalisation...",
          ht: "DP’s okipe tout pwosesis natiralizasyon mwen...",
          en: "DP’s handled my entire naturalization process...",
          es: "DP’s se encargó de todo mi proceso de naturalización..."
        }[lang]}</p>
        <strong>Viktorich – Rússia</strong>
      </div>

      <div className="depoimento-card">
        <p>{{
          pt: "Agradeço à DP’s por me ajudar a tirar meus documentos...",
          fr: "Je remercie DP’s de m’avoir aidé à obtenir mes documents...",
          ht: "Mwen remèsye DP’s pou èd li ban mwen...",
          en: "I thank DP’s for helping me get my documents...",
          es: "Agradezco a DP’s por ayudarme a obtener mis documentos..."
        }[lang]}</p>
        <strong>Abdoulaye – Senegal</strong>
      </div>

    </div>
  </div>
</section>
<section id="galeria" className="galeria">
  <h2>Our strengths</h2>
  <div className="galeria-container">
    
    <div className="galeria-item">
      <img src={moneygram} alt="Témoignages" />
      <div className="overlay">Professional</div>
    </div>
    
    <div className="galeria-item">
      <img src={caribe} alt="Témoignages" />
      <div className="overlay">Multi-Services</div>
    </div>
    
    <div className="galeria-item">
      <img src={cam} alt="Témoignages" />
      <div className="overlay">Speed</div>
    </div>
    
    <div className="galeria-item">
      <img src={contact} alt="Contact" />
      <div className="overlay">Contact</div>
    </div>

  </div>
</section>
{/* === Contato === */}
<section id="contato" className="contato">
  <h2>
    {{
      pt: "Fale-conosco",
      fr: "Contactez-nous",
      ht: "Kontak-nou",
      en: "Contact-us",
      es: "Contactar-nos"
    }[lang]}
  </h2>
  <p>
    {{
      pt: "Entre em contato conosco para esclarecer suas dúvidas ou solicitar um orçamento.",
      fr: "Contactez-nous pour toute question ou demande de devis.",
      ht: "Kontakte nou pou nenpòt kesyon oswa demann pri.",
      en: "Get in touch for any questions or to request a quote.",
      es: "Contáctanos para aclarar tus dudas ou solicitar un presupuesto."
    }[lang]}
  </p>
  <a
    href="https://forms.gle/2zf1nwwaGjuMbYJb7"
    className="btn-contato"
    target="_blank"
    rel="noopener noreferrer"
  >
    {{
      pt: "Formulário de Contato",
      fr: "Formulaire de Contact",
      ht: "Fòm Kontak",
      en: "Contact Form",
      es: "Formulario de Contacto"
    }[lang]}
  </a>
</section>


      {/* === Footer === */}
{/* === Footer === */}
<footer className="site-footer">
  <div className="footer-grid">
    {/* Coluna: Logo e Contacto */}
    <div className="footer-section">
      <h3>DP’s Multi-Services</h3>
      <p>📍 Rua Frederico Alvarenga nº300<br />Centro – São Paulo – SP</p>
      <p>📧 dps.migration@gmail.com</p>
      <p>📞 +55 (11) 95348-2936</p>
    </div>

    {/* Coluna: Liens */}
    <div className="footer-section">
      <h4>{{
        pt: "Links úteis",
        fr: "Liens utiles",
        ht: "Lyens itil",
        en: "Useful Links",
        es: "Enlaces útiles"
      }[lang]}</h4>
      <ul>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#contato">Contato</a></li>
        <li><a href="#depoimentos">Depoimentos</a></li>
        <li><a href="#projetos">Projetos</a></li>
      </ul>
    </div>

    {/* Coluna: Horário */}
    <div className="footer-section">
      <h4>{{
        pt: "Horário de Atendimento",
        fr: "Horaires",
        ht: "Orè travay",
        en: "Business Hours",
        es: "Horario de atención"
      }[lang]}</h4>
      <p>{{
        pt: "Segunda à Sexta: 9h às 18h",
        fr: "Lundi à Vendredi : 9h à 18h",
        ht: "Lendi rive Vandredi: 9h - 18h",
        en: "Monday to Friday: 9am to 6pm",
        es: "Lunes a Viernes: 9h a 18h"
      }[lang]}</p>
    </div>

    {/* Coluna: Google Maps */}
    <div className="footer-section map">
      <h4>{{
        pt: "Localização",
        fr: "Localisation",
        ht: "Kote nou ye",
        en: "Location",
        es: "Ubicación"
      }[lang]}</h4>
      <iframe
        title="Mapa DP’s"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.962447305387!2d-46.636106924744464!3d-23.569702578800503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5914d95ae3f1%3A0x62213aa41cf8c279!2sR.%20Frederico%20Alvarenga%2C%20300%20-%20S%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001006-040%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1719524638289!5m2!1spt-BR!2sbr"
        width="100%"
        height="150"
        style={{ border: 0, borderRadius: "8px" }}
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
    </div>
  </div>

  {/* Bas de page */}
  <div className="footer-bottom">
    <p>
      © 2025 DP’s Multi-Services — {{
        pt: "Todos os direitos reservados.",
        fr: "Tous droits réservés.",
        ht: "Tout dwa rezève.",
        en: "All rights reserved.",
        es: "Todos los derechos reservados."
      }[lang]}
    </p>
  </div>
</footer>
  </>
  );
}
export default Home;
