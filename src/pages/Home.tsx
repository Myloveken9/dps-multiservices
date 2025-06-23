import '../index.css';
import '../section.css';
import type { Lang } from '../App';

interface HomeProps {
  lang: Lang;
}

function Home({ lang }: HomeProps) {
  const texts = {
    pt: {
      welcome: "Bem-vindo à DP's Multi-Services",
      subtitle: "Facilitando sua jornada migratória no Brasil",
      aboutTitle: "Quem Somos",
      aboutText: "Somos uma agência especializada no apoio integral aos imigrantes no Brasil. Oferecemos desde serviços de regularização migratória — como vistos, residência e naturalização — até soluções financeiras práticas e seguras. Realizamos depósitos bancários internacionais via MonCash e NatCash, além de envios e recebimentos de dinheiro com RIA, MoneyGram, Unitransfer, Caribe-Express e Cam Transfert. Nossa missão é facilitar sua integração no país com confiança, agilidade e um atendimento humanizado em vários idiomas.",
      servicesTitle: "Nossos Serviços",
      contactTitle: "Contato",
      contactText: "Entre em contato conosco para tirar suas dúvidas ou solicitar um orçamento.",
      contactButton: "Formulário de Contato"
    },
    fr: {
      welcome: "Bienvenue chez DP's Multi-Services",
      subtitle: "Faciliter votre parcours migratoire au Brésil",
      aboutTitle: "Qui sommes-nous",
      aboutText: "Nous sommes une agence spécialisée dans l'accompagnement des immigrés au Brésil. Nous offrons des services de régularisation de documents, de prise de rendez-vous avec la Police Fédérale et de naturalisation brésilienne. Nous réalisons également des dépôts bancaires internationaux via MonCash et NatCash, ainsi que des transferts d'argent avec RIA, MoneyGram, Unitransfer, Caribe-Express et Cam Transfert. Notre mission est de faciliter votre intégration dans le pays avec confiance, rapidité et un service personnalisé en plusieurs langues.",
      servicesTitle: "Nos Services",
      contactTitle: "Contact",
      contactText: "Contactez-nous pour poser vos questions ou demander un devis.",
      contactButton: "Formulaire de Contact"
    },
    ht: {
      welcome: "Byenveni nan DP's Multi-Services",
      subtitle: "Fasilite vwayaj migrasyon ou nan Brezil",
      aboutTitle: "Kilès nou ye",
      aboutText: "Nou se yon ajans ki espesyalize nan bay tout sipò pou imigran yo nan Brezil. Nou ofri sèvis pou regilarizasyon dokiman, pran randevou ak Lapolis Federal, ak natiralizasyon brezilyen. Nou fè depo labank entènasyonal atravè MonCash ak NatCash, epi nou travay ak transfè lajan tankou RIA, MoneyGram, Unitransfer, Caribe-Express ak Cam Transfert. Misyon nou se fasilite entegrasyon ou nan peyi a ak konfyans, rapidite, ak sèvis imanitè nan plizyè lang.",
      servicesTitle: "Sèvis Nou Yo",
      contactTitle: "Kontak",
      contactText: "Tanpri kontakte nou pou nenpòt kesyon oswa demann estimasyon.",
      contactButton: "Fòmilè Kontak"
    },
    en: {
      welcome: "Welcome to DP's Multi-Services",
      subtitle: "Facilitating your migration journey in Brazil",
      aboutTitle: "About Us",
      aboutText: "We are an agency specialized in providing full support for immigrants in Brazil. From visa assistance and residency applications to naturalization processes, we guide you every step of the way. We also offer international bank deposit services via MonCash and NatCash, and money transfers through RIA, MoneyGram, Unitransfer, Karibe Express, and Cam Transfert. Our mission is to make your integration process in Brazil smoother, safer, and supported in multiple languages.",
      servicesTitle: "Our Services",
      contactTitle: "Contact",
      contactText: "Get in touch with us for any questions or to request a quote.",
      contactButton: "Contact Form"
    },
    es: {
      welcome: "Bienvenido a DP's Multi-Services",
      subtitle: "Facilitando su viaje migratorio en Brasil",
      aboutTitle: "Quiénes Somos",
      aboutText: "Somos una agencia especializada en brindar apoyo integral a los inmigrantes en Brasil. Ofrecemos desde servicios de regularización migratoria — como visas, residencia y naturalización — hasta soluciones financieras prácticas y seguras. Realizamos depósitos bancarios internacionales a través de MonCash y NatCash, además de envíos y recepciones de dinero con RIA, MoneyGram, Unitransfer, Caribe-Express y Cam Transfert. Nuestra misión es facilitar su integración en el país con confianza, agilidad y un servicio personalizado en varios idiomas.",
      servicesTitle: "Nuestros Servicios",
      contactTitle: "Contacto",
      contactText: "Contáctenos para cualquier duda o para solicitar un presupuesto.",
      contactButton: "Formulario de Contacto"
    }
  };

  const t = texts[lang];

return (
  <div className="app">
    {/* === Banner === */}
    <section id="home" className="banner">
      <img src="./src/assets/banner.jpg" alt="Banner" className="banner-image" />
      
      <div className="banner-content">
        {/* Décorations flottantes */}
        <img src="./src/assets/icon1.png" className="floating-icon icon1" alt="icon" />
        <img src="./src/assets/icon3.png" className="floating-icon icon3" alt="icon" />
        <img src="./src/assets/icon4.png" className="floating-icon icon4" alt="icon" />
        <img src="./src/assets/icon5.png" className="floating-icon icon5" alt="icon" />
        
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
          <img src="./src/assets/argent1.png" alt="Cidade" />
          <p>
            {{
              pt: "Transferência de dinheiro internacional",
              fr: "Transfert d'argent international",
              en: "International Money transfer",
              ht: "Transfè lajan entènasyonal",
              es: "Transferencia de dinero internacional"
            }[lang]}
          </p>
          <p>
            {{
              pt: "Via MoneyGram, RIA, Caribe Express, CamTransfer, Unibank e Remesa.",
              fr: "Par MoneyGram, RIA, Caribe Express, CamTransfer, Unibank et Remesa.",
              en: "MoneyGram, RIA, Caribe Express, CamTransfer, Unibank and Remesa.",
              ht: "Atravè MoneyGram, RIA, Caribe Express, CamTransfer, Unibank ak Remesa.",
              es: "Via MoneyGram, RIA, Caribe Express, CamTransfer, Unibank y Remesa."
            }[lang]}
          </p>
        </div>

        <div className="icon-box">
          <img src="./src/assets/argent2.png" alt="Visto" />
          <p>{{
            pt: "Acessoria para vários tipos de visto",
            fr: "Assistance pour différents types de visa",
            en: "Visa types assistance",
            ht: "Asistans pou diferan kalite viza",
            es: "Asesoría para varios tipos de visa"
          }[lang]}</p>
          <p>{{
            pt: "Assistência completa em processos migratórios: vistos, regularização, naturalização e documentos oficiais.",
            fr: "Assistance complète aux démarches migratoires : visas, régularisation, naturalisation et documents officiels.",
            en: "Full assistance with migration processes: visas, regularization, naturalization, and official documents.",
            ht: "Asistans konplè pou pwosesis migratwa: viza, regilarizasyon, natiralizasyon ak dokiman ofisyèl.",
            es: "Asistencia completa en trámites migratorios: visas, regularización, naturalización y documentos oficiales."
          }[lang]}</p>
        </div>

        <div className="icon-box">
          <img src="./src/assets/argent3.png" alt="Idiomas" />
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
    {/* === Quem Somos === */}
    <section id="quem-somos" className="quem-somos">
      <div className="quem-somos-content">
        <div className="quem-somos-text">
          <h2>{t.aboutTitle}</h2>
          <p dangerouslySetInnerHTML={{ __html: t.aboutText }} />
        </div>
        <div className="quem-somos-image">
          <img src="./src/assets/quemsomos.png" alt="Equipe DP’s Multi-Services" />
        </div>
      </div>
    </section>

    <div className="quem-somos-etapas">
      <div className="etapa">
        <span>01</span>
        {{
          pt: "Avaliação Gratuita",
          fr: "Évaluation gratuite",
          en: "Free evaluation",
          ht: "Evalyasyon gratis",
          es: "Evaluación gratuita"
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
          pt: "Assessoria Jurídica",
          fr: "Assistance juridique",
          en: "Legal support",
          ht: "Asistans legal",
          es: "Asesoría jurídica"
        }[lang]}
      </div>
      <div className="etapa">
        <span>04</span>
        {{
          pt: "Acompanhamento completo",
          fr: "Accompagnement complet",
          en: "Full support",
          ht: "Swiv konplè",
          es: "Acompañamiento total"
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
          ht: "Ede pwofesyonèl pou vwayaj migratwa ou",
          es: "Ayuda profesional para tu proceso migratorio"
        }[lang]}
      </div>
      <img src="./src/assets/migration-help.jpg" alt="Ajuda profissional" />
      <div className="whatsapp-button">
        <a
          href="https://wa.me/5511970450064" // ← remplace par ton numéro WhatsApp au format international sans +
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
      ht: "Dekouvri solisyon nou yo pou fasilite lavi ou ann Brezil.",
      es: "Descubra las soluciones que ofrecemos para facilitar su vida en Brasil."
    }[lang]}
  </h2>
  {/* === WRAPPER DES CARTES === */}
  <div className="cards-container">

    {/* Agendamento PF */}
    <div className="card">
      
      <h3>{{
        pt: "Agendamento PF",
        fr: "Rendez-vous à la Police Fédérale",
        en: "Federal Police Appointment",
        ht: "Randevou ak Polis Federal la",
        es: "Cita con la Policía Federal"
      }[lang]}</h3>
      <div className= "icone serviço">
        <img src="./src/assets/icons.jpg" alt= "icons" />
      </div>
      <p>{{
        pt: "Atendimento e regularização migratória junto à Polícia Federal.",
        fr: "Assistance et régularisation migratoire auprès de la Police Fédérale.",
        en: "Assistance and immigration regularization with the Federal Police.",
        ht: "Sipò ak regilarizasyon migratwa ak Polis Federal la.",
        es: "Asistencia y regularización migratoria con la Policía Federal."
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
        <img src="./src/assets/icons.jpg" alt= "icons" />
      </div>
      <p>{{
        pt: "Processo para obtenção da cidadania brasileira.",
        fr: "Processus d'obtention de la citoyenneté brésilienne.",
        en: "Process to obtain Brazilian citizenship.",
        ht: "Pwosesis pou jwenn sitwayènte brezilyen.",
        es: "Proceso para obtener la ciudadanía brasileña."
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
        <img src="./src/assets/icons.jpg" alt= "icons" />
      </div>
      <p>{{
        pt: "Documentos oficiais traduzidos por tradutores certificados.",
        fr: "Documents officiels traduits par des traducteurs certifiés.",
        en: "Official documents translated by certified translators.",
        ht: "Dokiman ofisyèl tradui pa tradiktè sètifye.",
        es: "Documentos oficiales traducidos por traductores certificados."
      }[lang]}</p>
    </div>

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
        <img src="./src/assets/icons.jpg" alt= "icons" />
      </div>
      <p>{{
        pt: "Com Ria, MoneyGram, Unitransfer, Caribe Express, Remesa.",
        fr: "Avec Ria, MoneyGram, Unitransfer, Caribe Express, Remesa.",
        en: "With Ria, MoneyGram, Unitransfer, Caribe Express, Remesa.",
        ht: "Avèk Ria, MoneyGram, Unitransfer, Caribe Express, Remesa.",
        es: "Con Ria, MoneyGram, Unitransfer, Caribe Express, Remesa."
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
        <img src="./src/assets/icons.jpg" alt= "icons" />
      </div>
      <p>{{
        pt: "Recarregue com Moncash, Natcash e outras operadoras.",
        fr: "Rechargez avec Moncash, Natcash et d'autres opérateurs.",
        en: "Recharge with Moncash, Natcash and other providers.",
        ht: "Rechaje ak Moncash, Natcash ak lòt operatè yo.",
        es: "Recargue con Moncash, Natcash y otros proveedores."
      }[lang]}</p>
    </div>

    {/* Conta bancária */}
    <div className="card">
      
      <h3>{{
        pt: "Conta bancária",
        fr: "Compte bancaire",
        en: "Bank Account",
        ht: "Kont labank",
        es: "Cuenta bancaria"
      }[lang]}</h3>
      <div className= "icone serviço">
        <img src="./src/assets/icons.jpg" alt= "icons" />
      </div>
      <p>{{
        pt: "Abertura de conta e depósitos em bancos internacionais.",
        fr: "Ouverture de compte et dépôts dans des banques internationales.",
        en: "Account opening and deposits in international banks.",
        ht: "Louvri kont ak depo nan bank entènasyonal yo.",
        es: "Apertura de cuenta y depósitos en bancos internacionales."
      }[lang]}</p>
    </div>

    {/* Apostilamento e consularização */}
    <div className="card">
      
      <h3>{{
        pt: "Apostilamento e consularização",
        fr: "Apostille et légalisation consulaire",
        en: "Apostille and Consular Legalization",
        ht: "Apostil ak legalizasyon konsilè",
        es: "Apostilla y legalización consular"
      }[lang]}</h3>
      <div className= "icone serviço">
        <img src="./src/assets/icons.jpg" alt= "icons" />
      </div>
      <p>{{
        pt: "Legalização de documentos para uso internacional.",
        fr: "Légalisation de documents pour usage international.",
        en: "Legalization of documents for international use.",
        ht: "Legalizasyon dokiman pou itilize entènasyonal.",
        es: "Legalización de documentos para uso internacional."
      }[lang]}</p>
    </div>

    {/* Consultoria Migratória */}
    <div className="card">
      
      <h3>{{
        pt: "Consultoria Migratória",
        fr: "Conseil en migration",
        en: "Migration Consulting",
        ht: "Konsiltasyon migratwa",
        es: "Consultoría migratoria"
      }[lang]}</h3>
      <div className= "icone serviço">
        <img src="./src/assets/icons.jpg" alt= "icons" />
      </div>
      <p>{{
        pt: "Elaboração de estratégias e apoio para residência em Portugal.",
        fr: "Élaboration de stratégies et accompagnement pour résider au Portugal.",
        en: "Strategy development and support for residence in Portugal.",
        ht: "Devlope estrateji ak sipò pou rezidans ann Pòtigal.",
        es: "Elaboración de estrategias y apoyo para residencia en Portugal."
      }[lang]}</p>
    </div>

    {/* Contratos de serviços */}
    <div className="card">
      
      <h3>{{
        pt: "Contratos de serviços",
        fr: "Contrats de services",
        en: "Service Contracts",
        ht: "Kontra sèvis yo",
        es: "Contratos de servicios"
      }[lang]}</h3>
      <div className= "icone serviço">
        <img src="./src/assets/icons.jpg" alt= "icons" />
      </div>
      <p>{{
        pt: "Água, luz, gás, internet e mais.",
        fr: "Eau, électricité, gaz, internet et plus.",
        en: "Water, electricity, gas, internet and more.",
        ht: "Dlo, kouran, gaz, entènèt ak plis toujou.",
        es: "Agua, luz, gas, internet y más."
      }[lang]}</p>
    </div>

    {/* Consultoria Fiscal */}
    <div className="card">
      
      <h3>{{
        pt: "Consultoria Fiscal",
        fr: "Conseil fiscal",
        en: "Tax Consulting",
        ht: "Konsiltasyon fiskal",
        es: "Consultoría fiscal"
      }[lang]}</h3>
      <div className= "icone serviço">
        <img src="./src/assets/icons.jpg" alt= "icons" />
      </div>
      <p>{{
        pt: "Representação fiscal e obtenção de NIF.",
        fr: "Représentation fiscale et obtention du NIF.",
        en: "Tax representation and obtaining a NIF.",
        ht: "Reprezantasyon fiskal ak jwenn NIF.",
        es: "Representación fiscal y obtención del NIF."
      }[lang]}</p>
    </div>

    {/* Reagrupamento familiar */}
    <div className="card">
      <h3>{{
        pt: "Reagrupamento familiar",
        fr: "Regroupement familial",
        en: "Family Reunification",
        ht: "Regrupman fanmi",
        es: "Reagrupación familiar"
      }[lang]}</h3>
      <div className= "icone serviço">
        <img src="./src/assets/icons.jpg" alt= "icons" />
      </div>
      <p>{{
        pt: "Apoio completo para reunir sua família legalmente.",
        fr: "Soutien complet pour réunir légalement votre famille.",
        en: "Full support to legally reunite your family.",
        ht: "Sipò konplè pou reyini fanmi ou legalman.",
        es: "Apoyo completo para reunir legalmente a su familia."
      }[lang]}</p>
    </div>

    {/* Inscrição escolar/universitária */}
    <div className="card">
      
      <h3>{{
        pt: "Inscrição escolar/universitária",
        fr: "Inscription scolaire/universitaire",
        en: "School/University Enrollment",
        ht: "Enskripsyon lekòl/linivèsite",
        es: "Inscripción escolar/universitaria"
      }[lang]}</h3>
      <div className= "icone serviço">
        <img src="./src/assets/icons.jpg" alt= "icons" />
      </div>
      <p>{{
        pt: "Suporte completo para matrícula em escolas e universidades.",
        fr: "Soutien complet pour l'inscription dans les écoles et universités.",
        en: "Full support for enrollment in schools and universities.",
        ht: "Sipò konplè pou enskripsyon nan lekòl ak inivèsite.",
        es: "Apoyo completo para la matrícula en escuelas y universidades."
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
      <img src="./src/assets/projeto2.jpg" alt="Projet Migration" />
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
          pt: "Ajudamos mais de 300 imigrantes a obter seus documentos em 2024.",
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

  <div className="depoimentos-container">
    <div className="depoimento-card">
      <p>
        {{
          pt: "Graças à DP’s Multi-Services, consegui regularizar minha situação no Brasil com rapidez e confiança.",
          fr: "Grâce à DP’s Multi-Services, j'ai pu régulariser ma situation au Brésil rapidement et en toute confiance.",
          ht: "Mèsi a DP’s Multi-Services, mwen te kapab regilarize sitiyasyon mwen O Brezil rapidman ak konfyans.",
          en: "Thanks to DP’s Multi-Services, I was able to regularize my situation in Brazil quickly and confidently.",
          es: "Gracias a DP’s Multi-Services, pude regularizar mi situación en Brasil con rapidez y confianza."
        }[lang]}
      </p>
      <strong>Jean Baptiste – Haiti</strong>
    </div>

    <div className="depoimento-card">
      <p>
        {{
          pt: "O atendimento foi excelente. Recomendo para todos os imigrantes.",
          fr: "Le service était excellent. Je recommande à tous les immigrés.",
          ht: "Sèvis la te ekselan. Mwen rekòmande pou tout imigran yo.",
          en: "The service was excellent. I recommend it to all immigrants.",
          es: "El servicio fue excelente. Lo recomiendo a todos los inmigrantes."
        }[lang]}
      </p>
      <strong>Maria Elena – Venezuela</strong>
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
    href="https://forms.gle/formulario-exemplo"
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
      <footer>
  <p>
    © 2025 DP’s Multi-Services — {{
      pt: "Todos os direitos reservados.",
      fr: "Tous droits réservés.",
      ht: "Tout dwa rezève.",
      en: "All rights reserved.",
      es: "Todos los derechos reservados."
    }[lang]}
  </p>
</footer>

  </div>
);
}

export default Home;
