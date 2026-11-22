import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useIdioma } from "../context/LanguageContext.jsx";
import { perfil } from "../data/perfil.js";
import { habilidades } from "../data/textos.js";
import RedesSociais from "../components/RedesSociais.jsx";

export default function SobreMim() {
  const { t } = useIdioma();
  const s = t.sobre;

  return (
    <section className="sobre">
      <motion.div
        className="sobre__hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="sobre__texto">
          <p className="sobre__saudacao">{s.saudacao}</p>
          <h1 className="sobre__nome">{perfil.nome}</h1>
          <p className="sobre__cargo">{s.cargo}</p>
          <p className="sobre__local">
            <FiMapPin /> {perfil.cidade}
          </p>
          <div className="sobre__botoes">
            <Link to="/projetos" className="botao">
              {s.verProjetos} <FiArrowRight />
            </Link>
            <Link to="/contato" className="botao botao--contorno">
              {s.falarComigo}
            </Link>
          </div>
          <RedesSociais />
        </div>

        <div className="sobre__foto" aria-hidden={!perfil.foto}>
          {perfil.foto ? (
            <img src={perfil.foto} alt={perfil.nome} />
          ) : (
            <span className="sobre__iniciais">MR</span>
          )}
        </div>
      </motion.div>

      <div className="sobre__grade">
        <motion.div
          className="painel sobre__bio"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {s.paragrafos.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </motion.div>

        <motion.aside
          className="sobre__lateral"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="painel">
            <h2 className="painel__titulo">{s.tituloFormacao}</h2>
            <p>{s.formacao}</p>
          </div>
          <div className="painel">
            <h2 className="painel__titulo">{s.tituloInteresses}</h2>
            <ul className="lista-simples">
              {s.interesses.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <div className="painel">
            <h2 className="painel__titulo">{s.tituloHabilidades}</h2>
            <ul className="etiquetas">
              {habilidades.map((h) => (
                <li key={h} className="etiqueta">
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
