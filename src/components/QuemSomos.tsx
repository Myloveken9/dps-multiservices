import quemsomosImage from '../assets/quemsomos.png';

type Lang = 'pt' | 'fr' | 'ht' | 'en' | 'es';

interface QuemSomosProps {
  lang: Lang;
}

const QuemSomos: React.FC<QuemSomosProps> = ({ lang }) => {
  const content: Record<Lang, string> = {
    pt: "Somos uma agência especializada no apoio integral aos imigrantes no Brasil. Oferecemos desde serviços de regularização migratória — como vistos, residência e naturalização — até soluções financeiras práticas e seguras.<br /> Realizamos depósitos bancários internacionais via MonCash e NatCash, além de envios e recebimentos de dinheiro com RIA, MoneyGram, Unitransfer, Karibe Express e Cam Transfert.<br /> Nossa equipe é composta por profissionais experientes e multilíngues, prontos para atender suas necessidades com agilidade e eficiência. Trabalhamos com ética, transparência e compromisso, sempre priorizando o bem-estar dos nossos clientes.<br /> Nossa missão é facilitar sua integração no país com confiança, agilidade e um atendimento humanizado em vários idiomas.<br /> Se você é imigrante no Brasil e precisa de apoio, entre em contato conosco. Estamos aqui para ajudar!",
    fr: "Nous sommes une agence dédiée à l’accompagnement complet des immigrés au Brésil. Nous assistons dans les démarches de visas, de régularisation de séjour, de résidence permanente et de naturalisation. <br> Nous proposons également des dépôts bancaires internationaux via MonCash et NatCash, ainsi que des transferts d’argent via RIA, MoneyGram, Unitransfer, Karibe Express et Cam Transfert. <br> Notre mission est de vous accompagner avec professionnalisme, sécurité et en plusieurs langues.",
    ht: "Nou se yon ajans ki bay tout sipò pou imigran. Nou ede w ak tout pwosedi legal yo tankou viza, rezidans, ak natiralizasyon. <br> Nou fè depo labank entènasyonal atravè MonCash ak NatCash, epi nou travay ak transfè lajan tankou RIA, MoneyGram, Unitransfer, Karibe Express, ak Cam Transfert. <br> Misyon nou se ede w entegre ou byen vit, an sekirite, e nan plizyè lang pou ou santi w lakay ou.",
    en: "We are an agency specialized in providing full support for immigrants in Brazil. From visa assistance and residency applications to naturalization processes, we guide you every step of the way. <br> We also offer international bank deposit services via MonCash and NatCash, and money transfers through RIA, MoneyGram, Unitransfer, Karibe Express, and Cam Transfert.<br> Our mission is to make your integration process in Brazil smoother, safer, and supported in multiple languages.",
    es: "Somos una agencia especializada en el apoyo integral a inmigrantes en Brasil. Ofrecemos desde servicios de regularización migratoria —como visas, residencia y naturalización— hasta soluciones financieras prácticas y seguras.<br> Realizamos depósitos bancarios internacionales vía MonCash y NatCash, además de envíos y recepciones de dinero con RIA, MoneyGram, Unitransfer, Karibe Express y Cam Transfert. <br> Nuestra misión es facilitar su integración al país con confianza, agilidad y atención humanizada en varios idiomas.",
  };

const titles: Record<Lang, string> = {
  pt: 'Quem Somos',
  fr: 'Qui sommes-nous',
  ht: 'Kilès nou ye',
  en: 'About Us',
  es: 'Quiénes Somos',
};



  return (
    <>
      <section className="quem-somos">
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
              href="https://wa.me/5511970450064"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{
                pt: "Fale-conosco",
                fr: "Contactez-nous",
                en: "Contact-us",
                ht: "Kontakte-nou",
                es: "Contactar-nos"
              }[lang]}
            </a>
          </div>
        </div>

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
              ht: "Swivi konplè",
              es: "Acompañamiento total"
            }[lang]}
          </div>
        </div>
        {{
          pt: "Aproveite uma avaliação gratuita e um acompanhamento personalizado. 📞 Entre em contato conosco hoje mesmo e siga em frente com confiança!",
          fr: "Profitez d’une évaluation gratuite et d’un accompagnement personnalisé. 📞 Contactez-nous dès aujourd’hui et avancez en toute confiance !",
          en: "Get a free evaluation and personalized support. 📞 Contact us today and move forward with confidence!",
          ht: "Pwofite de yon yon evalyasyon gratis ak yon sipò pèsonalize. 📞 Kontakte nou jodi a pou avanse ak konfyans!",
          es: "Aproveche una evaluación gratuita y un acompañamiento personalizado. 📞 ¡Contáctenos hoy y avance con confianza!"
        }[lang]}

        <div className="quem-somos-container">
          <div className="quem-somos-text">
            <h2>{titles[lang]}</h2>
            <p dangerouslySetInnerHTML={{ __html: content[lang] }} />
          </div>
          <div className="quem-somos-image">
            <img src={quemsomosImage} alt="Equipe DP’s Multi-Services" />
          </div>
        </div>
      </section>
      <div className="primeiro-atendimento">
        <h2>
          {{
            pt: "PRIMEIRO ATENDIMENTO GRATUITO",
            fr: "PREMIER CONTACT GRATUIT",
            en: "FIRST FREE CONSULTATION",
            ht: "PREMYE KONSILT GRATIS",
            es: "PRIMERA CONSULTA GRATUITA"
          }[lang as Lang]}
        </h2>
        <p>
          {{
            pt: "Entre em contato com um de nossos especialistas pelo WhatsApp para maiores informações.",
            fr: "Contactez l’un de nos spécialistes via WhatsApp pour plus d’informations.",
            en: "Get in touch with one of our specialists on WhatsApp for more information.",
            ht: "Kontakte youn nan espesyalis nou yo sou WhatsApp pou plis enfòmasyon.",
            es: "Póngase en contacto con uno de nuestros especialistas por WhatsApp para más información."
          }[lang as Lang]}
        </p>

        <a
          className="whatsapp-banner-button"
          href="https://wa.me/5511970450064"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{
            pt: "IR PARA O WHATSAPP",
            fr: "ALLER SUR WHATSAPP",
            en: "GO TO WHATSAPP",
            ht: "ALE SOU WHATSAPP",
            es: "IR A WHATSAPP"
          }[lang as Lang]}
        </a>
      </div>
    </>
  );
};

export default QuemSomos;
