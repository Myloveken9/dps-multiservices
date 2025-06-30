import quemsomosImage from '../assets/quemsomos.png';
import quem from '../assets/quem.png'

type Lang = 'pt' | 'fr' | 'ht' | 'en' | 'es';

interface QuemSomosProps {
  lang: Lang;
}

const QuemSomos: React.FC<QuemSomosProps> = ({ lang }) => {
  const content: Record<Lang, string> = {
    pt: "Somos uma agência especializada no apoio integral aos imigrantes. Oferecemos desde serviços de regularização migratória — como : vistos, residência, naturalização, etc... Até soluções financeiras práticas e seguras. Realizamos recargas de celular para qualquer país. Além de Depósito bancarío, Servicios de Envio e Recebimento de Ordens de pagamento do ou para Exterior via RIA, MoneyGram, Unitransfer, Caribe-Express, C.A.M, MonCash, Natcash etc... Nossa missão é facilitar sua integração no país com confiança, agilidade e um atendimento humanizado em vários idiomas.",
    fr: "Nous sommes une agence spécialisée dans le soutien complet aux immigrants. Nous proposons des services de régularisation migratoire – tels que : visas, résidence, naturalisation, etc. – ainsi que des solutions financières pratiques et sécurisées. Nous effectuons des recharges de téléphone pour tous les pays. En plus de dépôts bancaires, nous offrons des services d’envoi et de réception dans l'Ordre depuis ou vers l’étranger via RIA, MoneyGram, Unitransfer, Caribe-Express, C.A.M, MonCash, Natcash, etc. Notre mission est de faciliter votre intégration dans le pays avec confiance, rapidité et un accueil humain dans plusieurs langues.",
    ht: "Nou se yon ajans ki espesyalize nan sipò total pou imigran yo. Nou ofri sèvis pou regilarizasyon imigrasyon – tankou : viza, rezidans, natiralizasyon, elatriye – ansanm ak solisyon finansye ki pratik ak sekirize. Nou fè rechaj telefòn pou tout peyi. Anplis depo bankè, nou bay sèvis voye ak resevwa lajan nan Lòd soti oswa ale aletranje atravè RIA, MoneyGram, Unitransfer, Caribe-Express, C.A.M, MonCash, Natcash, elatriye. Misyon nou se fasilite entegrasyon ou nan peyi a ak konfyans, efikasite, epi yon sèvis imanitè nan plizyè lang.",
    en: "We are an agency specialized in comprehensive support for immigrants. We offer services for migration regularization – such as visas, residence, naturalization, etc. – and practical, secure financial solutions. We provide mobile recharges for any country. In addition to bank deposits, we offer money sending and receiving services from or to abroad via RIA, MoneyGram, Unitransfer, Caribe-Express, C.A.M, MonCash, Natcash, etc. Our mission is to make your integration in the country easier with trust, speed, and humanized service in multiple languages.",
    es: "Somos una agencia especializada en el apoyo integral a inmigrantes. Ofrecemos servicios de regularización migratoria – como visas, residencia, naturalización, etc. – y soluciones financieras prácticas y seguras. Realizamos recargas de celulares para cualquier país. Además de depósitos bancarios, ofrecemos servicios de envío y recepción de giros desde o hacia el exterior vía RIA, MoneyGram, Unitransfer, Caribe-Express, C.A.M, MonCash, Natcash, etc. Nuestra misión es facilitar su integración en el país con confianza, agilidad y un servicio humano en varios idiomas.",
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
          <img src={quem} alt="Ajuda profissional" />
          <div className="whatsapp-button">
            <a
              href="https://wa.me/5511953482936"
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
              pt: "Avaliação",
              fr: "Évaluation",
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
              ht: "Administrasyon",
              es: "Administración"
            }[lang]}
          </div>
          <div className="etapa">
            <span>04</span>
            {{
              pt: "Acompanhamento ",
              fr: "Accompagnement ",
              en: "Support",
              ht: "Swivi ",
              es: "Acompañamiento"
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
          href="https://wa.me/5511953482936"
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
