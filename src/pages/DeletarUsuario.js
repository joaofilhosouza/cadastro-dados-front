import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import api from "../apis/api";

function DeleteUsuario() {
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    async function DeleteUsuario() {
      try {
        await api.delete(`http://localhost:4000/api/delete-usuario/${id}`);
        navigate("/lista");
      } catch (err) {
        console.error(err);
      }
    }
    DeleteUsuario();
  });

  return <div>Deletando...</div>;
}

export default DeleteUsuario;
