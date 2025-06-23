type Lang = 'pt' | 'fr' | 'ht' | 'en' | 'es';

interface ContatoProps {
  lang: Lang;
}

function Contato({ lang }: ContatoProps) {
  const texts = {
    pt: {
      title: "Contato",
      desc: "Entre em contato conosco para tirar dúvidas ou pedir um orçamento.",
      btn: "Formulário de Contato"
    },
    fr: {
      title: "Contact",
      desc: "Contactez-nous pour poser vos questions ou demander un devis.",
      btn: "Formulaire de contact"
    },
    ht: {
      title: "Kontak",
      desc: "Kontakte nou pou poze kesyon oswa mande yon estimasyon.",
      btn: "Fòmilè kontak"
    },
    en: {
      title: "Contact",
      desc: "Get in touch with us to ask questions or request a quote.",
      btn: "Contact Form"
    },
    es: {
      title: "Contacto",
      desc: "Contáctenos para hacer preguntas o solicitar un presupuesto.",
      btn: "Formulario de contacto"
    }
  };

  return (
    <section id="contato" className="contato">
      <h2>{texts[lang].title}</h2>
      <p>{texts[lang].desc}</p>
      <a
        href="https://forms.gle/formulario-exemplo"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-contato"
      >
        {texts[lang].btn}
      </a>
    </section>
  );
}

export default Contato;
