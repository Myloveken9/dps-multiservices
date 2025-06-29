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

  <h2>
    {{
      pt: "Conheça as soluções que oferecemos para facilitar sua vida no Brasil.",
      fr: "Découvrez les solutions que nous offrons pour faciliter votre vie au Brésil.",
      en: "Discover the solutions we offer to make your life easier in Brazil.",
      ht: "Dekouvri solisyon nou ofri yo pou fasilite lavi ou nan Brezil.",
      es: "Descubra las soluciones que ofrecemos para facilitar su vida en Brasil."
    }[lang]}
  </h2>

  const services: Record<Lang, { title: string; desc: string }[]> = {
    pt: [
      { title: "Transferência de Dinheiro e Depósito bancario", desc: "Abertura de conta, depósitos bancários e transferências internacionais com Ria, MoneyGram, Unitransfer, etc..." },
      { title: "Recarga de Celular", desc: "Recarga internacional com digicel, natcom, movitel, claro, orange, altice etc." },
      { title: "Agendamento para Polícia Féderal", desc: "Atendimento e regularização migratória junto à Polícia Federal." },
      { title: "Agendamento para Passaporte", desc: "Agendamento para 1° e 2° via do Passaporte." },
      { title: "Solicitação de Refúgio e Renovação de Protocolo", desc: "Acompanhamento completo na sua solicitação de refúgio." },
      { title: "Naturalização", desc: "Naturalização em qualquer estado do Brasil até a obtenção do Passaporte." },
      { title: "Autorização de Residência", desc: "Em base de reunião familiar, para os cidadãos da CPLP etc... Apoio completo e profissionalizado" },
      { title: "Carta Convite / Declaração de depêndencia financeira ", desc: "Carta convite com declaração de apoio financeiro para o seu processo." },
      { title: "Declaração de residência e documentos diversos", desc: "Emissão de declarações e documentos exigidos por órgãos públicos ou privados, Criação de CNPJ etc..." },
      { title: "Abertura de Carteira de Trabalho Digital", desc: "Assistência para criar e ativar sua carteira de trabalho digital." },
      { title: "Traduções juramentadas", desc: "Documentos oficiais traduzidos por tradutores certificados." },
      { title: "Agência e Segurança de Viagens", desc: "Agência especializada em viagens e segurança para todas as suas deslocações." },
      { title: "Consultoria em vistos e documentação", desc: "Orientação especializada para obtenção de visto e os documentos."}

    ],
    fr: [
      { title: "Transfert d'argent et Depôt bancaire", desc: "Ouverture de compte, dépôts bancaires et transferts internationaux via Ria, MoneyGram, Unitransfer, etc..." },
      { title: "Recharge de Téléphone", desc: "Recharge internationale avec digicel, natcom, movitel, claro, orange, altice etc..."},
      { title: "Rendez-vous à la Police Fédérale", desc: "Assistance et régularisation migratoire auprès de la Police Fédérale." },
      { title: "Rendez-vous Passport", desc: "Rendez-vous Passport 1° et 2° copie" },
      { title: "Demande d’asile et Renouvellement de Protocole ", desc: "Accompagnement complet dans votre demande d’asile." },
      { title: "Naturalisation", desc: "Processus d'obtention de la citoyenneté brésilienne, jusqu'a l'obtention du Passport." },
      { title: "Autorisation de Residence", desc: " Conformément à la réunification familiale, l’obtention d’un titre de séjour pour les ressortissants de la CPLP etc... Support complet et professionnelle" },
      { title: "Carte d'invitation / Déclaration de dependance finacière ", desc: "Lettre d’invitation avec déclaration de soutien financier pour vos démarches." },
      { title: "Déclaration de Résidence et autres Documents", desc: "Émission de déclarations et documents requis par des organismes publics ou privés, Création de CNPJ etc.." },
      { title: "Ouverture de Carte de Travail numérique", desc: "Assistance pour créer et activer votre portefeuille de travail." },
      { title: "Traductions assermentées", desc: "Documents officiels traduits par des traducteurs certifiés." },
      { title: "Agence de voyage et securité", desc: "Agence spécialisée en voyages et sécurité pour tous vos déplacements." },
      { title: "Conseil en visas et documentation", desc: "Conseils spécialisés pour l’obtention de visa et les documents."} 
    
    ],
    
      ht: [
      { title: "Transfè lajan ak Depo bankè Entènasyonal", desc: "Ouvèti kont, depo bankè ak transfè entènasyonal atravè Ria, MoneyGram, Unitransfer, etc... " },
      { title: "Rechaj Telefón", desc: "Rechaj mobil entènasyonal ak digicel, natcom, movitel, claro, orange, altice etc..." },
      { title: "Randevou Polis Federal", desc: "Sipò ak randevou migratwa pou Polis Federal." },
      { title: "Randevou Paspò", desc: "Randevou pou Paspò" },
      { title: "Demann azil ak Renouvèlman Pwotokòl", desc: "Nou akonpaye w nan tout pwosesis demann azil." },
      { title: "Natiralizasyon", desc: "Pwosesis pou jwenn sitwayènte brezilyen, akonpayman jiskake ou gen Paspò a." },
      { title: "Otorizasyon Rezidans", desc: " Konfòmeman ak reyinyon fanmilyal, otorizasyon rezidans pou sitwayen CPLP yo elatriye..., Sipò konplè e pwofesyonèl" },
      { title: "Lèt envitasyon / Deklarasyon depandans finansyè", desc: "Lèt envitasyon, deklarasyon sipò finansye pou w ranpli dosye w elatriye..." },
      { title: "Deklarasyon Rezidans ak lòt Dokiman", desc: "Delivrans deklarasyon ak dokiman otorite piblik oswa prive mande, kreyasyon CNPJ elatriye..." },
      { title: "Ouvèti Kanè Travay dijital", desc: "Nou ede w kreye ak aktive kanè travay dijital." },
      { title: "Tradiksyon Sèmante", desc: "Dokiman ofisyèl tradui pa tradiktè sètifye." },
      { title: "Ajans de vwayaj e sekirite", desc: "Ajans espesyalize nan vwayaj ak sekirite pou tout deplasman ou yo." },
      { title: "Konsiltasyon sou viza ak dokiman", desc: "Gid espesyalize pou jwenn viza ak dokiman."}

    ],
    en: [
      { title: "Money Transfer and Internacional Deposit", desc: "Account opening, bank deposits, and international money transfers with Ria, MoneyGram, Unitransfer, etc..." },
      { title: "Mobile Recharge", desc: "International Top-Up with digicel, natcom, movitel, claro, orange, altice etc..."},
      { title: "Federal Police Appointment", desc: "Assistance and immigration regularization with the Federal Police." },
      { title: "Passaport apointment", desc: "Passport apointment 1° and 2° copy." },
      { title: "Refugee application Protocol renewal", desc: "Full support with your refugee application." },
      { title: "Naturalisation", desc: "Process to obtain Brazilian citizenship." },
      { title: "Resident Permit", desc: "Comprehensive support for family reunification, residence authorization for CPLP nationals etc.." },
      { title: "Invitation Letter /Financial dependency declaration", desc: "Invitation letter, financial support statement for your application etc..." },
      { title: "Proof of Residence and Various documents", desc: "Issuance of declarations and documents required by public or private entities, Create CNPJ etc..." },
      { title: "Digital Work Card setup", desc: "Support to create and activate your digital wallet." },
      { title: "Certified Translations", desc: "Official documents translated by certified translators." },
      { title: "Travel agency e security", desc: "Agency specialized in travel and security for all your trips." },
      { title: "Visa and documentation consultancy", desc: "Specialized guidance for obtaining visa and documents."}

    ],

    es: [
      { title: "Transferencia de dinero e Deposito en la cuenta bancaria", desc: "Abertura de cuenta, depósitos bancarios y transferencias internacionales a través de Ria, MoneyGram, Unitransfer, etc..." },
      { title: "Recarga de celular", desc: "Recargue digicel, natcom, movitel, claro, orange, altice etc..." },
      { title: "Cita con la Policía Federal", desc: "Asistencia y regularización migratoria con la Policía Federal." },
      { title: "Cita para Passaporte", desc: "Cita para Passaporte." },
      { title: "Solicitud de asilo e Renovación de protocolo", desc: "Acompañamiento integral en su solicitud de asilo" },
      { title: "Naturalizacíon", desc: "Proceso para obtener la ciudadanía brasileña" },
      { title: "Autorizacíon del Residencía", desc: "En base del la reunificación familiar, la autorización de residencia para ciudadanos de la CPLP etc.. Apoyo completo e profissionalizado" },
      { title: "Carta de invitación / Declaración de dependencia financiera", desc: "Carta de invitación, declaración de apoyo financiero para su trámite etc." },
      { title: "Declaración de Residencia y Documentos diversos", desc: "Emisión de declaraciones y documentos exigidos por entidades públicas o privadas, Criação de CNPJ." },
      { title: "Abertura de Carta de trabajo digital", desc: "Asistencia para crear y activar su billetera de trabajo digital." },
      { title: "Traduções juramentadas", desc: "Documentos oficiales traducidos por traductores certificados." },
      { title: "Agência e Segurança de Viagens", desc: "Agencia especializada en viajes y seguridad para todos sus desplazamientos." },
      { title: "Consultoría en visas y documentación", desc: "Orientación especializada para la obtención de visto y documentos."}

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
