// Experiências exibidas na página "Experiências".
// TODO: confira os períodos e acrescente estágios, freelas, eventos ou hackathons que você tiver.

export const experiencias = [
  {
    id: "extensao-pratos-de-minas",
    organizacao: "PUC Minas · Restaurante Pratos de Minas",
    cargo: {
      pt: "Extensão universitária (em equipe)",
      en: "University outreach project (team)",
    },
    periodo: { pt: "2º semestre de 2026", en: "Fall 2026" },
    descricao: {
      pt: "Ação extensionista com um restaurante de Belo Horizonte: criação de um bot de atendimento no WhatsApp e atualização da presença digital do negócio no Instagram e no Google.",
      en: "Outreach project with a restaurant in Belo Horizonte: built a WhatsApp customer service bot and refreshed the business's digital presence on Instagram and Google.",
    },
    tipo: "extensao",
  },
  {
    id: "automacao-leads",
    organizacao: "Projeto independente",
    cargo: {
      pt: "Desenvolvedor de automações",
      en: "Automation developer",
    },
    periodo: { pt: "2026", en: "2026" },
    descricao: {
      pt: "Fluxo no n8n para converter leads que chegam pelo WhatsApp, com mensagens de follow-up automáticas para quem não respondeu.",
      en: "n8n workflow that converts leads coming in through WhatsApp, with automatic follow-up messages for those who didn't reply.",
    },
    tipo: "freela",
  },
  {
    id: "puc-minas",
    organizacao: "PUC Minas",
    cargo: {
      pt: "Graduação em Engenharia de Software",
      en: "B.Sc. in Software Engineering",
    },
    periodo: { pt: "Em andamento", en: "In progress" },
    descricao: {
      pt: "Projetos em equipe com metodologia ágil (sprints, histórias de usuário e Git), programação modular em Java, banco de dados relacional e NoSQL e desenvolvimento web.",
      en: "Team projects using agile methods (sprints, user stories and Git), modular programming in Java, relational and NoSQL databases and web development.",
    },
    tipo: "academico",
  },
];
