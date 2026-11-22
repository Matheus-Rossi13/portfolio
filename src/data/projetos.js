// Projetos exibidos na timeline.
// A página ordena automaticamente pela "data" (AAAA-MM), do mais antigo ao mais recente,
// então é só adicionar um novo objeto aqui para ele aparecer no lugar certo.
//
// imagem: coloque o GIF/print em public/projetos/ e use o caminho "/projetos/nome.gif".
// TODO: confira as datas e os links dos repositórios antes de entregar.

export const projetos = [
  {
    id: "cycle-tech",
    data: "2026-08",
    nome: "Cycle Tech",
    descricao: {
      pt: "Plataforma web em equipe que conecta empresas geradoras de resíduos de Belo Horizonte a empresas de coleta e reciclagem. Fiquei responsável pela busca de empresas de coleta: telas de busca e resultados, filtros, ordenação e região de atendimento em JavaScript.",
      en: "Team web platform that connects waste-generating companies in Belo Horizonte with collection and recycling companies. I was responsible for the collection-company search: search and results screens, filters, sorting and service area in JavaScript.",
    },
    tecnologias: ["HTML", "CSS", "JavaScript", "Figma", "Git"],
    repositorio: "https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2026-2-ti1-7620100-cycle-tech",
    imagem: "/projetos/cycle-tech.svg",
  },
  {
    id: "tributos",
    data: "2026-11",
    nome: "Tributo Advogados",
    descricao: {
      pt: "Site institucional de página única para um escritório de direito tributário em Belo Horizonte: áreas de atuação para empresas e pessoas físicas, linha do tempo da reforma tributária (2026–2033), seção sobre o escritório e formulário de contato que abre uma mensagem por e-mail ou WhatsApp.",
      en: "Single-page website for a tax law firm in Belo Horizonte: practice areas for businesses and individuals, a tax reform timeline (2026–2033), an about section and a contact form that opens a pre-filled email or WhatsApp message.",
    },
    tecnologias: ["HTML", "CSS", "JavaScript", "Google Fonts"],
    repositorio: "https://github.com/Matheus-Rossi13/tributos",
    imagem: "/projetos/tributos.svg",
  },
  {
    id: "portfolio",
    data: "2026-11",
    nome: "Portfólio Pessoal",
    descricao: {
      pt: "Este site: portfólio bilíngue (PT/EN) em React + Vite, com timeline de projetos gerada a partir de dados, formulário de contato com validação e envio de e-mail pelo EmailJS, layout responsivo e deploy na Vercel.",
      en: "This website: a bilingual (PT/EN) portfolio built with React + Vite, featuring a data-driven project timeline, a validated contact form that sends email through EmailJS, a responsive layout and deployment on Vercel.",
    },
    tecnologias: ["React", "Vite", "React Router", "React Hook Form", "EmailJS", "Vercel"],
    repositorio: "https://github.com/Matheus-Rossi13/portfolio",
    imagem: "/projetos/portfolio.svg",
  },
];

export function ordenarPorData(lista) {
  return [...lista].sort((a, b) => a.data.localeCompare(b.data));
}

export function formatarData(data, idioma) {
  const [ano, mes] = data.split("-").map(Number);
  const texto = new Date(ano, mes - 1, 1).toLocaleDateString(idioma === "pt" ? "pt-BR" : "en-US", {
    month: "short",
    year: "numeric",
  });
  return texto.replace(".", "").replace(" de ", " ");
}
