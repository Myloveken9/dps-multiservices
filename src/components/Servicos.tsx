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
      { title: "Transferência de Dinheiro", desc: "Transferências internacionais com Ria, C.A.M, MoneyGram, Unitransfer, etc..." },
      { title:"Depósitos Bancários", desc: "Depósitos bancários e Abertura de conta em diversas instituições financeiras Nacional e Internacional."},
      { title: "Compra e Venda de Moedas Estrangeiras", desc: "Compra e venda de moedas estrangeiras com taxas competitivas."},
      { title: "Recarga de Celular", desc: "Recarga internacional com digicel, natcom, movitel, claro, orange, altice etc." },
      { title: "Agendamento para Polícia Féderal", desc: "Atendimento e regularização migratória junto à Polícia Federal." },
      { title:"CPF", desc: "Facilitamos o processo de obtenção do 1° e 2 via CPF."},
      { title: "Agendamento para Passaporte", desc: "Agendamento para 1° e 2° via do Passaporte." },
      { title: "Solicitação de Refúgio e Renovação de Protocolo", desc: "Acompanhamento completo na sua solicitação de refúgio." },
      { title: "Naturalização", desc: "Naturalização em qualquer estado do Brasil até a obtenção do Passaporte." },
      { title: "Autorização de Residência", desc: "Em base de reunião familiar, para os cidadãos da CPLP etc... Apoio completo e profissionalizado" },
      { title: "Carta Convite / Declaração de depêndencia financeira ", desc: "Carta convite com declaração de apoio financeiro para o seu processo." },
      { title: "Declaração de residência e documentos diversos", desc: "Criação de CNPJ, Contrato de aluguel, Extraits d'Archives, Cassier judiciaire, Declaração concubinagem etc..." },
      { title: "Abertura de Carteira de Trabalho Digital", desc: "Assistência para criar e ativar sua carteira de trabalho digital." },
      { title: "Traduções juramentadas", desc: "Documentos oficiais traduzidos por tradutores certificados." },
      {title: "Parceria com Faculdade", desc: "Parceria com faculdade para curso de proficiencia na lingua portuguesa para naturalização"},
      { title: "Agência e Segurança de Viagens", desc: "Agência especializada em viagens e segurança para todas as suas deslocações." },
      { title: "Consultoria em vistos e documentação", desc: "Orientação especializada para obtenção de visto e os documentos."}

    ],
    fr: [
      { title: "Transfert d'argent", desc: "Transferts internationaux via Ria, C.A.M, MoneyGram, Unitransfer, etc..." },
      { title: "Dépôts bancaires", desc: "Dépôts bancaires et ouverture de compte dans diverses institutions financières nationales et internationales."},
      { title: "Achat et vente de devises étrangères", desc: "Achat et vente de devises étrangères avec des taux compétitifs."},
      { title: "Recharge de Téléphone", desc: "Recharge internationale avec digicel, natcom, movitel, claro, orange, altice etc..."},
      { title: "Rendez-vous à la Police Fédérale", desc: "Assistance et régularisation migratoire auprès de la Police Fédérale." },
      { title: "CPF", desc: "Nous facilitons le processus d’obtention du 1° e 2 via CPF." },
      { title: "Rendez-vous Passeport", desc: "Rendez-vous Passeport 1° et 2° copie" },
      { title: "Demande d’asile et Renouvellement de Protocole ", desc: "Accompagnement complet dans votre demande d’asile." },
      { title: "Naturalisation", desc: "Processus d'obtention de la citoyenneté brésilienne, jusqu'a l'obtention du Passport." },
      { title: "Autorisation de Residence", desc: " Conformément à la réunification familiale, l’obtention d’un titre de séjour pour les ressortissants de la CPLP etc... Support complet et professionnelle" },
      { title: "Carte d'invitation / Déclaration de dependance financière ", desc: "Lettre d’invitation avec déclaration de soutien financier pour vos démarches." },
      { title: "Déclaration de Résidence et autres Documents", desc: "Création de CNPJ, Contrat de résidence, Extraits d'archives, Casier judiciaire, Déclaration de concubinage, etc.." },
      { title: "Ouverture de Carte de Travail numérique", desc: "Assistance pour créer et activer votre portefeuille de travail." },
      { title: "Traductions assermentées", desc: "Documents officiels traduits par des traducteurs certifiés." },
      { title: "Partenariat avec une Université", desc: "Partenariat avec une université pour le cours de compétence en langue portugaise pour la naturalisation" },
      { title: "Agence de voyage et securité", desc: "Agence spécialisée en voyages et sécurité pour tous vos déplacements." },
      { title: "Conseil en visas et documentation", desc: "Conseils spécialisés pour l’obtention de visa et les documents."} 
    
    ],
    
      ht: [
      { title: "Transfè lajan", desc: "Transfè entènasyonal atravè Ria, C.A.M, MoneyGram, Unitransfer, etc... " },
      { title: "Depo Bankè", desc: "Depo bankè ak ouvèti kont nan divès enstitisyon finansye nasyonal ak entènasyonal."},
      { title: "Acha ak Vann Lajan Etranje", desc: "Acha ak vann lajan etranje ak to konpetitif."},
      { title: "Rechaj Telefòn", desc: "Rechaj entènasyonal ak digicel, natcom, movitel, claro, orange, altice etc..." },
      { title: "Randevou Polis Féderal", desc: "Sipò ak regilarizasyon migratwa ansanm ak Polis Féderal." },
      { title: "CPF", desc: "Nou fasilite pwosesis pou jwenn 1° e 2 via CPF." },
      { title: "Rechaj Telefón", desc: "Rechaj mobil entènasyonal ak digicel, natcom, movitel, claro, orange, altice etc..." },
      { title: "Randevou Polis Federal", desc: "Sipò ak randevou migratwa pou Polis Federal." },
      { title: "Randevou Paspò", desc: "Randevou pou Paspò" },
      { title: "Demann azil ak Renouvèlman Pwotokòl", desc: "Nou akonpaye w nan tout pwosesis demann azil." },
      { title: "Natiralizasyon", desc: "Pwosesis pou jwenn sitwayènte brezilyen, akonpayman jiskake ou gen Paspò a." },
      { title: "Otorizasyon Rezidans", desc: " Konfòmeman ak reyinyon fanmilyal, otorizasyon rezidans pou sitwayen CPLP yo elatriye..., Sipò konplè e pwofesyonèl" },
      { title: "Lèt envitasyon / Deklarasyon depandans finansyè", desc: "Lèt envitasyon, deklarasyon sipò finansye pou w ranpli dosye w elatriye..." },
      { title: "Deklarasyon Rezidans ak lòt Dokiman", desc: "Kreyasyon CNPJ, Kontra lwaye, Ekstrè Achiv, Kazye Jidisyè Deklaration konkibinaj, elatriye..." },
      { title: "Ouvèti Kanè Travay dijital", desc: "Nou ede w kreye ak aktive kanè travay dijital." },
      { title: "Tradiksyon Sèmante", desc: "Dokiman ofisyèl tradui pa tradiktè sètifye." },
      { title: "Patenarya ak Inivèsite", desc: "Patnè ak inivèsite pou kou konpetans nan lang Pòtigè pou natiralizasyon" },
      { title: "Ajans de vwayaj e sekirite", desc: "Ajans espesyalize nan vwayaj ak sekirite pou tout deplasman ou yo." },
      { title: "Konsiltasyon sou viza ak dokiman", desc: "Gid espesyalize pou jwenn viza ak dokiman."}

    ],
    en: [
      { title: "Money Transfer", desc: "International money transfers with Ria, C.A.M, MoneyGram, Unitransfer, etc..." },
      { title: "Bank Deposits", desc: "Bank deposits and account opening in various national and international financial institutions."},
      { title: "Foreign Currency Exchange", desc: "Buying and selling foreign currencies with competitive rates."},
      { title: "Mobile Recharge", desc: "International Top-Up with digicel, natcom, movitel, claro, orange, altice etc..."},
      { title: "Federal Police Appointment", desc: "Assistance and immigration regularization with the Federal Police." },
      { title: "CPF", desc: "We facilitate the CPF registration process." },
      { title: "Passport Appointment", desc: "Appointment for 1st and 2nd copy of Passport." },
      { title: "Refugee application Protocol renewal", desc: "Full support with your refugee application." },
      { title: "Naturalisation", desc: "Process to obtain Brazilian citizenship." },
      { title: "Resident Permit", desc: "Comprehensive support for family reunification, residence authorization for CPLP nationals etc.." },
      { title: "Invitation Letter /Financial dependency declaration", desc: "Invitation letter, financial support statement for your application etc..." },
      { title: "Proof of Residence and Various documents", desc: "Create CNPJ, Residency contract, Archive extracts, Criminal record, Declaration of cohabitation, etc..." },
      { title: "Digital Work Card setup", desc: "Support to create and activate your digital wallet." },
      { title: "Certified Translations", desc: "Official documents translated by certified translators." },
      { title: "Partnership with University", desc: "Partnership with university for Portuguese language proficiency course for naturalization" },
      { title: "Travel agency e security", desc: "Agency specialized in travel and security for all your trips." },
      { title: "Visa and documentation consultancy", desc: "Specialized guidance for obtaining visa and documents."}

    ],

    es: [
      { title: "Transferencia", desc: "Transferencias internacionales a través de Ria, C.A.M, MoneyGram, Unitransfer, etc..." },
      { title: "Depósitos Bancarios", desc: "Depósitos bancarios y apertura de cuenta en diversas instituciones financieras nacionales e internacionales."},
      { title: "Compra y Venta de Divisas", desc: "Compra y venta de divisas extranjeras con tasas competitivas."},
      { title: "Recarga de celular", desc: "Recargue digicel, natcom, movitel, claro, orange, altice etc..." },
      { title: "Cita con la Policía Federal", desc: "Asistencia y regularización migratoria con la Policía Federal." },
      { title: "CPF", desc: "Facilitamos el proceso de obtención del CPF." },
      { title: "Cita para Passaporte", desc: "Cita para Passaporte." },
      { title: "Solicitud de asilo e Renovación de protocolo", desc: "Acompañamiento integral en su solicitud de asilo" },
      { title: "Naturalizacíon", desc: "Proceso para obtener la ciudadanía brasileña" },
      { title: "Autorizacíon del Residencía", desc: "En base del la reunificación familiar, la autorización de residencia para ciudadanos de la CPLP etc.. Apoyo completo e profissionalizado" },
      { title: "Carta de invitación / Declaración de dependencia financiera", desc: "Carta de invitación, declaración de apoyo financiero para su trámite etc." },
      { title: "Declaración de Residencia y Documentos diversos", desc: "Criação de CNPJ, Contrato de residencia, Extractos de archivos, Antecedentes penales, Declaración de convivencia, etc.." },
      { title: "Abertura de Carta de trabajo digital", desc: "Asistencia para crear y activar su billetera de trabajo digital." },
      { title: "Traduções juramentadas", desc: "Documentos oficiales traducidos por traductores certificados." },
      { title: "Parceria con Universidad", desc: "Parceria con universidad para curso de proficiencia en la lengua portuguesa para naturalización" },
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
