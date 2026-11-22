import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { perfil } from "../data/perfil.js";

// Ícones clicáveis de contato. "grande" mostra também o texto ao lado do ícone.
export default function RedesSociais({ grande = false }) {
  const redes = [
    { nome: "E-mail", href: `mailto:${perfil.email}`, icone: <FiMail />, texto: perfil.email },
    { nome: "WhatsApp", href: `https://wa.me/${perfil.whatsapp}`, icone: <FaWhatsapp />, texto: "WhatsApp" },
    { nome: "LinkedIn", href: perfil.linkedin, icone: <FiLinkedin />, texto: "LinkedIn" },
    { nome: "GitHub", href: perfil.github, icone: <FiGithub />, texto: "GitHub" },
  ];

  return (
    <ul className={`redes ${grande ? "redes--grande" : ""}`}>
      {redes.map((rede) => (
        <li key={rede.nome}>
          <a
            href={rede.href}
            target={rede.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={rede.nome}
            title={rede.nome}
            className="redes__link"
          >
            <span className="redes__icone">{rede.icone}</span>
            {grande && <span className="redes__texto">{rede.texto}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
