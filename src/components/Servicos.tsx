type Lang = 'pt' | 'fr' | 'ht' | 'en' | 'es';

interface ServicosProps {
  lang: Lang;
}

function Servicos({ lang }: ServicosProps) {
  const titles: Record<Lang, string> = {
    pt: "Nossos Serviços",
    fr: "Nos Services",
    ht: "Sèvis Nou Yo",
    en: "Our Services",
    es: "Nuestros Servicios"
  };

  const services: Record<Lang, { title: string; desc: string }[]> = {
    pt: [
      { title: "Agendamento PF", desc: "Atendimento e regularização migratória junto à Polícia Federal." },
      { title: "Naturalização", desc: "Processo para obtenção da cidadania brasileira." },
      { title: "Traduções juramentadas", desc: "Documentos oficiais traduzidos por tradutores certificados." },
      { title: "Transferência de dinheiro", desc: "Com Ria, MoneyGram, Unitransfer, Caribe Express, Remesa." },
      { title: "Recarga de celular", desc: "Recarregue com Moncash, Natcash e outras operadoras." },
      { title: "Conta bancária", desc: "Abertura de conta e depósitos em bancos internacionais." },
      { title: "Apostilamento e consularização", desc: "Legalização de documentos para uso internacional." },
      { title: "Consultoria Migratória", desc: "Elaboração de estratégias e apoio para residência em Portugal." },
      { title: "Contratos de serviços", desc: "Água, luz, gás, internet e mais." },
      { title: "Consultoria Fiscal", desc: "Representação fiscal e obtenção de NIF." },
      { title: "Reagrupamento familiar", desc: "Apoio completo para reunir sua família legalmente." },
      { title: "Inscrição escolar/universitária", desc: "Suporte completo para matrícula em escolas e universidades." }
    ],
    fr: [
      { title: "Rendez-vous PF", desc: "Prise de rendez-vous et régularisation auprès de la Police Fédérale." },
      { title: "Naturalisation", desc: "Accompagnement pour obtenir la nationalité brésilienne." },
      { title: "Traductions assermentées", desc: "Traduction officielle pour documents internationaux." },
      { title: "Transfert d'argent", desc: "Unitransfer, Ria, MoneyGram, Caribe Express, Remesa." },
      { title: "Recharges téléphone", desc: "Moncash, Natcash et autres services de recharge mobile." },
      { title: "Ouverture de compte", desc: "Comptes bancaires internationaux avec assistance." },
      { title: "Légalisation de documents", desc: "Apostilles, certification, consularisation." },
      { title: "Consultation migratoire", desc: "Aide pour résidence au Portugal et dans l’UE." },
      { title: "Contrats (électricité, eau…)", desc: "Installation et gestion des services essentiels." },
      { title: "Consultation fiscale", desc: "Obtenir NIF, statut de résident fiscal, etc." },
      { title: "Regroupement familial", desc: "Démarches pour faire venir la famille légalement." },
      { title: "Inscription scolaire", desc: "Soutien pour écoles, universités, équivalences." }
    ],
    ht: [
      { title: "Randevou Lapolis", desc: "Randevou pou w regilarize sitiyasyon w." },
      { title: "Natiralizasyon", desc: "Ede w jwenn nasyonalite brezilyen oswa Ewopeyen." },
      { title: "Tradiksyon ofisyèl", desc: "Tradiksyon sètifye pou dokiman legal." },
      { title: "Transfè lajan", desc: "Via Ria, Unitransfer, MoneyGram, Remesa, Caribe Express." },
      { title: "Rechaj telefòn", desc: "Moncash, Natcash, ak lòt sèvis entènernasyonal." },
      { title: "Konto labank", desc: "Louvri kont labank epi fè depo entènasyonal." },
      { title: "Legalizasyon dokiman", desc: "Apostiy, konsilarizasyon, sètifikasyon." },
      { title: "Konsiltasyon migratwa", desc: "Ede w jwenn rezidans nan Pòtigal ak lòt peyi." },
      { title: "Sèvis debaz", desc: "Kontra dlo, limyè, gaz, entènèt." },
      { title: "Konsiltasyon fiskal", desc: "Jwenn NIF, reprezantan fiskal, elatriye." },
      { title: "Rasanbleman fanmi", desc: "Mete tout fanmi w ansanm legalman." },
      { title: "Enskripsyon lekòl", desc: "Ede w rantre lekòl oswa inivèsite." }
    ],
    en: [
      { title: "Federal Police Appointments", desc: "Booking and status regularization in Brazil." },
      { title: "Naturalization", desc: "Support to apply for Brazilian or EU citizenship." },
      { title: "Certified Translations", desc: "Legal document translation by sworn translators." },
      { title: "Money Transfers", desc: "With Ria, MoneyGram, Unitransfer, Remesa, Caribe Express." },
      { title: "Mobile Top-ups", desc: "Moncash, Natcash and other top-up services." },
      { title: "Bank Account", desc: "Open international bank accounts and make deposits." },
      { title: "Document Legalization", desc: "Apostille, consularization, certification." },
      { title: "Migration Consulting", desc: "Strategies to obtain Portuguese residence." },
      { title: "Utility Contracts", desc: "Water, electricity, internet and more." },
      { title: "Tax Consulting", desc: "Get your NIF and fiscal representation." },
      { title: "Family Reunification", desc: "Assistance to legally reunite families." },
      { title: "School Enrollment", desc: "Help with school or university admissions." }
    ],
    es: [
      { title: "Cita Policía Federal", desc: "Agendamiento y regularización migratoria." },
      { title: "Naturalización", desc: "Apoyo para obtener la ciudadanía brasileña o europea." },
      { title: "Traducciones certificadas", desc: "Traducciones oficiales para documentos legales." },
      { title: "Transferencias de dinero", desc: "Ria, MoneyGram, Caribe Express, Remesa, Unitransfer." },
      { title: "Recargas de celular", desc: "Servicios de recarga como Moncash y Natcash." },
      { title: "Cuenta bancaria", desc: "Apertura y depósito en cuentas internacionales." },
      { title: "Legalización de documentos", desc: "Apostilla, certificación y consularización." },
      { title: "Asesoría migratoria", desc: "Residencia en Portugal y procesos migratorios." },
      { title: "Contratos de servicios", desc: "Agua, luz, gas, internet y más." },
      { title: "Consultoría fiscal", desc: "Representación y obtención de NIF." },
      { title: "Reagrupación familiar", desc: "Reunificación familiar legal y segura." },
      { title: "Inscripción escolar", desc: "Matrícula en escuelas y universidades." }
    ]
  };

  return (
    <section className="servicos">
      <h2>{titles[lang]}</h2>
      <div className="cards-container">
        {services[lang].map((s, idx) => (
          <div className="card" key={idx}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicos;
