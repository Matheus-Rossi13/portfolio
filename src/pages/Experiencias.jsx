import { motion } from "framer-motion";
import { FiBriefcase, FiUsers, FiBookOpen, FiCalendar } from "react-icons/fi";
import { useIdioma } from "../context/LanguageContext.jsx";
import { experiencias } from "../data/experiencias.js";
import TituloPagina from "../components/TituloPagina.jsx";

const icones = {
  freela: <FiBriefcase />,
  extensao: <FiUsers />,
  academico: <FiBookOpen />,
  estagio: <FiBriefcase />,
  evento: <FiCalendar />,
};

export default function Experiencias() {
  const { t, idioma } = useIdioma();

  return (
    <section>
      <TituloPagina titulo={t.experiencias.titulo} subtitulo={t.experiencias.subtitulo} />
      <div className="experiencias">
        {experiencias.map((exp, i) => (
          <motion.article
            key={exp.id}
            className="painel experiencia"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <span className="experiencia__icone" aria-hidden="true">
              {icones[exp.tipo] ?? <FiBriefcase />}
            </span>
            <div>
              <h2 className="experiencia__cargo">{exp.cargo[idioma]}</h2>
              <p className="experiencia__org">{exp.organizacao}</p>
              <p className="experiencia__periodo">{exp.periodo[idioma]}</p>
              <p>{exp.descricao[idioma]}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
