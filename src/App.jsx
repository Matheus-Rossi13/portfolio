import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import SobreMim from "./pages/SobreMim.jsx";
import Projetos from "./pages/Projetos.jsx";
import Experiencias from "./pages/Experiencias.jsx";
import Contato from "./pages/Contato.jsx";
import NaoEncontrada from "./pages/NaoEncontrada.jsx";

// Volta para o topo sempre que a rota muda
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="layout">
      <ScrollToTop />
      <Header />
      <main className="conteudo">
        <Routes>
          <Route path="/" element={<SobreMim />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/experiencias" element={<Experiencias />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
