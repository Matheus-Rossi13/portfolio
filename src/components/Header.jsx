import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useIdioma } from "../context/LanguageContext.jsx";
import { perfil } from "../data/perfil.js";

export default function Header() {
  const { t, idioma, alternarIdioma } = useIdioma();
  const [aberto, setAberto] = useState(false);

  const links = [
    { to: "/", label: t.menu.sobre },
    { to: "/projetos", label: t.menu.projetos },
    { to: "/experiencias", label: t.menu.experiencias },
    { to: "/contato", label: t.menu.contato },
  ];

  const fechar = () => setAberto(false);

  return (
    <header className="cabecalho">
      <div className="cabecalho__interno">
        <Link to="/" className="marca" onClick={fechar}>
          <span className="marca__sigla">MR</span>
          <span className="marca__nome">{perfil.nomeCurto}</span>
        </Link>

        <nav className={`menu ${aberto ? "menu--aberto" : ""}`} aria-label="Principal">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => `menu__link ${isActive ? "menu__link--ativo" : ""}`}
              onClick={fechar}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="cabecalho__acoes">
          <button
            type="button"
            className="idioma"
            onClick={alternarIdioma}
            aria-label={t.menu.trocarIdioma}
            title={t.menu.trocarIdioma}
          >
            <span className={idioma === "pt" ? "idioma--ativo" : ""}>PT</span>
            <span aria-hidden="true">/</span>
            <span className={idioma === "en" ? "idioma--ativo" : ""}>EN</span>
          </button>
          <button
            type="button"
            className="hamburguer"
            onClick={() => setAberto((v) => !v)}
            aria-label={aberto ? t.menu.fechar : t.menu.abrir}
            aria-expanded={aberto}
          >
            {aberto ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
