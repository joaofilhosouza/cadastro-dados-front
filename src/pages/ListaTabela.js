import { useState, useEffect } from "react";
import api from "../apis/api";
import Tabela from "../pages/TabelaUsuario";
// import index from "../assets/styles/index.css";
function ListaUsuario() {
  const [ListaUsuario, setListaUsuario] = useState([]);

  useEffect(() => {
    async function fetchTabela() {
      try {
        const response = await api.get(
          "http://localhost:4000/api/lista-usuario"
        );

        setListaUsuario([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchTabela();
  }, []);

  return (
    <div className="container  mb-3">
      <div className="row  row-col-md-4">
        {ListaUsuario.map((currentTable) => (
          <Tabela key={currentTable._id} {...currentTable} />
        ))}
      </div>
    </div>
  );
}
export default ListaUsuario;
