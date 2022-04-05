import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import api from "../apis/api";
import FormField from "../components/Form";
import ErrorAlert from "../components/ErroAlert";

function Signup() {
  const [roomData, setRoomData] = useState({
    Nome: "",
    Idade: "",
    estadoCivil: "",
    cpf: "",
    Cidade: "",
    Estado: "",
  });

  const { id } = useParams();

  // Loading
  const [loading, setLoading] = useState(false);
  // Tratamento do erro
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function room() {
      try {
        const response = await api.get(
          `http://localhost:4000/api/delete-usuario/${id}`
        );

        delete response.data._id;

        setRoomData({ ...roomData, ...response.data });
      } catch (e) {
        console.log(e);
      }
    }
    room();
  }, [id, roomData]);

  function handleChange(e) {
    setRoomData({ ...roomData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      setError(null);

      const response = await api.patch(
        `http://localhost:4000/api/atualizar-usuario/${id}`,
        roomData
      );

      setLoading(false);
      console.log(response);

      navigate("/");
    } catch (err) {
      setLoading(false);
      console.error(err);
      if (err.response) {
        console.error(err.response);
        setError(err.response.data);
      }
    }
  }

  return (
    <div className="w-50 d-flex flex-column m-auto">
      <h1 className="text-center mt-5 mb-4">Editar Dados</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome"
          type="text"
          id="Nome"
          required
          name="Nome"
          onChange={handleChange}
          value={roomData.Nome}
          readOnly={loading}
        />

        <FormField
          label="Idade"
          type="number"
          id="Idade"
          required
          name="Idade"
          onChange={handleChange}
          value={roomData.Idade}
          readOnly={loading}
        />

        <FormField
          label="Estado Civil"
          type="text"
          id="estadoCivil"
          required
          name="estadoCivil"
          onChange={handleChange}
          value={roomData.estadoCivil}
          readOnly={loading}
        />
        <FormField
          label="CPF"
          type="number"
          id="cpf"
          required
          name="cpf"
          onChange={handleChange}
          value={roomData.cpf}
          readOnly={loading}
        />
        <FormField
          label="Cidade"
          type="text"
          id="Cidade"
          required
          name="Cidade"
          onChange={handleChange}
          value={roomData.Cidade}
          readOnly={loading}
        />
        <FormField
          label="Estado"
          type="text"
          id="estadoCivil"
          required
          name="Estado"
          onChange={handleChange}
          value={roomData.Estado}
          readOnly={loading}
        />
        <div className="d-flex gap-4">
          <div className="mb-3">
            <button
              disabled={loading}
              type="submit"
              className="btn btn-primary p-3 me-5"
            >
              {loading ? (
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
              ) : null}
              Atualizar
            </button>
            <a href="/" className="btn btn-link text-light  btn-primary p-3 ">
              Voltar
            </a>
          </div>
        </div>

        {error ? <ErrorAlert>{error}</ErrorAlert> : null}
      </form>
    </div>
  );
}

export default Signup;
