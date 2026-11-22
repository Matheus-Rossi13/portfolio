import { Link } from "react-router-dom";
import { useIdioma } from "../context/LanguageContext.jsx";

export default function NaoEncontrada() {
  const { t } = useIdioma();
  return (
    <section className="nao-encontrada">
      <p className="nao-encontrada__codigo">404</p>
      <h1>{t.naoEncontrada.titulo}</h1>
      <Link to="/" className="botao">
        {t.naoEncontrada.voltar}
      </Link>
    </section>
  );
}
