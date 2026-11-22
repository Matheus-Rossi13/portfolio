import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";
import { useIdioma } from "../context/LanguageContext.jsx";
import TituloPagina from "../components/TituloPagina.jsx";
import RedesSociais from "../components/RedesSociais.jsx";

// Chaves do EmailJS lidas do arquivo .env (local) ou das variáveis da Vercel (produção)
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contato() {
  const { t } = useIdioma();
  const c = t.contato;
  const [status, setStatus] = useState(null); // null | "sucesso" | "erro" | "naoConfigurado"

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onTouched" });

  async function enviar(dados) {
    setStatus(null);
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("naoConfigurado");
      return;
    }
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { name: dados.nome, email: dados.email, message: dados.mensagem },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("sucesso");
      reset();
    } catch (erro) {
      console.error("Erro no EmailJS:", erro);
      setStatus("erro");
    }
  }

  return (
    <section>
      <TituloPagina titulo={c.titulo} subtitulo={c.subtitulo} />

      <div className="contato">
        <div className="contato__canais">
          <RedesSociais grande />
        </div>

        <form className="painel formulario" onSubmit={handleSubmit(enviar)} noValidate>
          <div className="campo">
            <label htmlFor="nome">{c.nome}</label>
            <input
              id="nome"
              type="text"
              autoComplete="name"
              aria-invalid={!!errors.nome}
              {...register("nome", {
                required: c.obrigatorio,
                minLength: { value: 2, message: c.nomeCurto },
              })}
            />
            {errors.nome && <span className="campo__erro">{errors.nome.message}</span>}
          </div>

          <div className="campo">
            <label htmlFor="email">{c.email}</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              aria-invalid={!!errors.email}
              {...register("email", {
                required: c.obrigatorio,
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: c.emailInvalido },
              })}
            />
            {errors.email && <span className="campo__erro">{errors.email.message}</span>}
          </div>

          <div className="campo">
            <label htmlFor="mensagem">{c.mensagem}</label>
            <textarea
              id="mensagem"
              rows={6}
              aria-invalid={!!errors.mensagem}
              {...register("mensagem", {
                required: c.obrigatorio,
                minLength: { value: 10, message: c.mensagemCurta },
              })}
            />
            {errors.mensagem && <span className="campo__erro">{errors.mensagem.message}</span>}
          </div>

          <button type="submit" className="botao" disabled={isSubmitting}>
            <FiSend /> {isSubmitting ? c.enviando : c.enviar}
          </button>

          {status && (
            <p
              className={`aviso ${status === "sucesso" ? "aviso--ok" : "aviso--erro"}`}
              role="status"
            >
              {c[status]}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
