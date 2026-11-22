import { useIdioma } from "../context/LanguageContext.jsx";
import { projetos, ordenarPorData } from "../data/projetos.js";
import TituloPagina from "../components/TituloPagina.jsx";
import ItemTimeline from "../components/ItemTimeline.jsx";

export default function Projetos() {
  const { t } = useIdioma();
  // Timeline dinâmica: gerada a partir do array de dados, sempre em ordem cronológica
  const lista = ordenarPorData(projetos);

  return (
    <section>
      <TituloPagina titulo={t.projetos.titulo} subtitulo={t.projetos.subtitulo} />
      <ol className="timeline">
        {lista.map((projeto, indice) => (
          <ItemTimeline key={projeto.id} projeto={projeto} indice={indice} />
        ))}
      </ol>
    </section>
  );
}
