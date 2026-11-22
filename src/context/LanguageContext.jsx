import { createContext, useContext, useEffect, useState } from "react";
import { textos } from "../data/textos.js";

const LanguageContext = createContext(null);

function idiomaInicial() {
  try {
    const salvo = localStorage.getItem("idioma");
    if (salvo === "pt" || salvo === "en") return salvo;
  } catch {
    // localStorage indisponível: segue com o padrão
  }
  return "pt";
}

export function LanguageProvider({ children }) {
  const [idioma, setIdioma] = useState(idiomaInicial);

  useEffect(() => {
    document.documentElement.lang = idioma === "pt" ? "pt-BR" : "en";
    try {
      localStorage.setItem("idioma", idioma);
    } catch {
      // ignora
    }
  }, [idioma]);

  const alternarIdioma = () => setIdioma((atual) => (atual === "pt" ? "en" : "pt"));

  // t = textos fixos da interface no idioma atual
  const t = textos[idioma];

  return (
    <LanguageContext.Provider value={{ idioma, alternarIdioma, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// oxlint-disable-next-line react/only-export-components
export function useIdioma() {
  return useContext(LanguageContext);
}
