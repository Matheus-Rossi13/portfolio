import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { useIdioma } from "../context/LanguageContext.jsx";
import { formatarData } from "../data/projetos.js";

export default function ItemTimeline({ projeto, indice }) {
  const { idioma, t } = useIdioma();
  const lado = indice % 2 === 0 ? "esquerda" : "direita";

  return (
    <motion.li
      className={`timeline__item timeline__item--${lado}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
    >
      <span className="timeline__ponto" aria-hidden="true" />
      <article className="cartao-projeto">
        <time className="cartao-projeto__data" dateTime={projeto.data}>
          {formatarData(projeto.data, idioma)}
        </time>
        <img
          className="cartao-projeto__imagem"
          src={projeto.imagem}
          alt={projeto.nome}
          loading="lazy"
        />
        <div className="cartao-projeto__corpo">
          <h2>{projeto.nome}</h2>
          <p>{projeto.descricao[idioma]}</p>
          <ul className="etiquetas" aria-label={t.projetos.tecnologias}>
            {projeto.tecnologias.map((tec) => (
              <li key={tec} className="etiqueta">
                {tec}
              </li>
            ))}
          </ul>
          <a
            className="botao botao--contorno"
            href={projeto.repositorio}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub /> {t.projetos.repositorio}
          </a>
        </div>
      </article>
    </motion.li>
  );
}
