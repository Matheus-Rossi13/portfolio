import { motion } from "framer-motion";

export default function TituloPagina({ titulo, subtitulo }) {
  return (
    <motion.div
      className="titulo-pagina"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1>{titulo}</h1>
      {subtitulo && <p>{subtitulo}</p>}
    </motion.div>
  );
}
