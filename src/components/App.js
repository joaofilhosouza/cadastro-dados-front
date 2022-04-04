import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import ListaTabela from "../pages/ListaTabela";
import CriarUsuario from "../pages/CriarUsuario";
import DetalheUsuario from "../pages/DetalheUsuario";
import EditarUsuario from "../pages/EditarUsuario";
import DeleteUsuario from "../pages/DeletarUsuario";
import Tabela from "../pages/TabelaUsuario";
import Top from "../components/Navbar";

import { AuthContextComponent } from "../contexts/authContext";

function App() {
  return (
    <div className="color-site">
      <AuthContextComponent>
        <Top />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lista" element={<ListaTabela />} />
          <Route path="/tabela" element={<Tabela />} />
          <Route path="/criar" element={<CriarUsuario />} />
          <Route path="/detalhe/:id" element={<DetalheUsuario />} />
          <Route path="/editar/:id" element={<EditarUsuario />} />
          <Route path="/deletar/:id" element={<DeleteUsuario />} />
        </Routes>
      </AuthContextComponent>
    </div>
  );
}

export default App;
