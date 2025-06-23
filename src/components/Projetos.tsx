import type { Lang } from '../App';

interface ProjetosProps {
  lang: Lang;
}

const projetosText: Record<Lang, { title: string; subtitle: string }> = {
  pt: {
    title: "Projetos",
    subtitle: "Conheça algumas de nossas principais iniciativas."
  },
  en: {
    title: "Projects",
    subtitle: "Discover some of our main initiatives."
  },
  fr: {
    title: "Projets",
    subtitle: "Découvrez quelques-unes de nos principales initiatives."
  },
  es: {
    title: "Proyectos",
    subtitle: "Conozca algunas de nuestras principales iniciativas."
  },
  ht: {
    title: "Pwojè",
    subtitle: "Dekouvri kèk nan inisyativ prensipal nou yo."
  }
};

function Projetos({ lang }: ProjetosProps) {
  return (
    <section id="projetos" className="projetos">
      <h2>{projetosText[lang].title}</h2>
      <p>{projetosText[lang].subtitle}</p>

      <div className="projetos-container">
        {/* Projeto 1 */}
        <div className="projeto-card">
          <h3>{
            {
              pt: "Campanha de Documentação",
              fr: "Campagne de documentation",
              ht: "Kanpay dokiman legal",
              en: "Documentation Campaign",
              es: "Campaña de Documentación"
            }[lang]
          }</h3>
          <p>{
            {
              pt: "Ajudamos mais de 300 imigrantes a obter seus documentos em 2024.",
              fr: "Nous avons aidé plus de 300 immigrés à obtenir leurs documents en 2024.",
              ht: "Nou ede plis pase 300 imigran jwenn papye yo an 2024.",
              en: "We helped over 300 immigrants obtain legal documents in 2024.",
              es: "Ayudamos a más de 300 inmigrantes a obtener documentos en 2024."
            }[lang]
          }</p>
        </div>

        {/* Projeto 2 */}
        <div className="projeto-card">
          <h3>{
            {
              pt: "Integração Cultural",
              fr: "Intégration culturelle",
              ht: "Entegrasyon kiltirèl",
              en: "Cultural Integration",
              es: "Integración cultural"
            }[lang]
          }</h3>
          <p>{
            {
              pt: "Ações para facilitar adaptação de imigrantes no Brasil.",
              fr: "Actions pour faciliter l’adaptation des immigrés au Brésil.",
              ht: "Aksyon pou fasilite adaptasyon imigran ann Brezil.",
              en: "Initiatives to support immigrant adaptation in Brazil.",
              es: "Acciones para facilitar la adaptación de inmigrantes en Brasil."
            }[lang]
          }</p>
        </div>

        {/* Projeto 3 */}
        <div className="projeto-card">
          <h3>{
            {
              pt: "Mutirão de Regularização",
              fr: "Régularisation collective",
              ht: "Mutin regilarizasyon",
              en: "Regularization Task Force",
              es: "Jornadas de Regularización"
            }[lang]
          }</h3>
          <p>{
            {
              pt: "Mutirões com advogados e tradutores para agilizar processos.",
              fr: "Événements avec avocats et traducteurs pour accélérer les démarches.",
              ht: "Mutin ak avoka ak tradiktè pou akselere pwosesis yo.",
              en: "Events with lawyers and translators to speed up legal procedures.",
              es: "Jornadas con abogados y traductores para acelerar procesos."
            }[lang]
          }</p>
        </div>
      </div>
    </section>
  );
}

export default Projetos;

