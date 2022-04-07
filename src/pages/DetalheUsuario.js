import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../apis/api";
import { FaTrashAlt } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import ConfirmationModal from "../components/Modal";
import {
  DetalheContainer,
  DivTd,
  DivDetalhe,
  DivThDetalhe,
  PaginaDetalhe,
  DivDetalheTbody,
} from "../pages/Tabela.style";

function DetalheUsuario(props) {
  const [showModal, setShowModal] = useState(false);

  const [usuarioDetalhe, setUsuarioDetalhe] = useState({
    Nome: "",
    Idade: "",
    estadoCivil: "",
    cpf: "",
    Cidade: "",
    Estado: "",
  });

  const navigate = useNavigate();

  const { id } = useParams();
  // const navigate = useNavigate();

  useEffect(() => {
    async function fetchDetalhe() {
      try {
        const response = await api.get(`/*detalhe-usuario/${id}`);

        setUsuarioDetalhe({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchDetalhe();
  }, [id]);

  return (
    <>
      <PaginaDetalhe>
        <DetalheContainer>
          <DivDetalhe>
            <DivThDetalhe> Nome</DivThDetalhe>
            <DivThDetalhe>Idade</DivThDetalhe>
            <DivThDetalhe>Estado Civil</DivThDetalhe>
            <DivThDetalhe>CPF</DivThDetalhe>
            <DivThDetalhe>Cidade</DivThDetalhe>
            <DivThDetalhe>Estado</DivThDetalhe>
            <DivThDetalhe>Editar</DivThDetalhe>
            <DivThDetalhe>Deletar</DivThDetalhe>
          </DivDetalhe>
        </DetalheContainer>

        <DivDetalheTbody>
          <DivTd>{usuarioDetalhe.Nome}</DivTd>
          <DivTd>{usuarioDetalhe.Idade}</DivTd>
          <DivTd>{usuarioDetalhe.estadoCivil}</DivTd>
          <DivTd>{usuarioDetalhe.cpf}</DivTd>
          <DivTd>{usuarioDetalhe.Cidade}</DivTd>
          <DivTd>{usuarioDetalhe.Estado}</DivTd>
          <DivTd>
            <button className="btn btn-warning">
              <Link to={`/editar/${id}`}>
                <BiEdit />
              </Link>
            </button>
          </DivTd>
          <DivTd>
            <button
              className="btn btn-danger btn-link"
              onClick={() => setShowModal(true)}
            >
              <FaTrashAlt />
            </button>
          </DivTd>
        </DivDetalheTbody>
      </PaginaDetalhe>
      <ConfirmationModal
        title="Tem certeza que quer deletar?"
        variant="danger"
        confirmationText="Deletar"
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleConfirmation={() => {
          navigate(`/deletar/${id}`);
          setShowModal(false);
        }}
      >
        Esta ação é irreversível!
      </ConfirmationModal>
    </>
  );
}

export default DetalheUsuario;
