import { useIdioma } from "../context/LanguageContext.jsx";
import { perfil } from "../data/perfil.js";
import RedesSociais from "./RedesSociais.jsx";

const ANO_ATUAL = new Date().getFullYear();

export default function Footer() {
  const { t } = useIdioma();
  return (
    <footer className="rodape">
      <div className="rodape__interno">
        <p>
          © {ANO_ATUAL} {perfil.nome} · {t.rodape}
        </p>
        <RedesSociais />
      </div>
    </footer>
  );
}
