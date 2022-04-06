import { useState } from "react";
import { TabelaContainer, DivTabela, DivTd } from "../pages/Tabela.style";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import ConfirmationModal from "../components/Modal";
function Tabela(props) {
  const [showModal, setShowModal] = useState(false);

  useParams();
  const navigate = useNavigate();

  return (
    <>
      <TabelaContainer>
        <DivTabela>
          <DivTd className="align-middle">{props.Nome}</DivTd>
          <DivTd className="align-middle">{props.Idade}</DivTd>
          <DivTd className="align-middle">{props.estadoCivil}</DivTd>
          <DivTd className="align-middle">{props.cpf}</DivTd>
          <DivTd className="align-middle">{props.Cidade}</DivTd>
          <DivTd className="align-middle">{props.Estado}</DivTd>
          <DivTd>
            <button className="btn btn-warning">
              <Link to={`/editar/${props._id}`}>
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
          <DivTd>
            <button className="btn btn-primary">
              <Link
                className="text-color text-dark"
                to={`/detalhe/${props._id}`}
              >
                Detalhe
              </Link>
            </button>
          </DivTd>
        </DivTabela>
      </TabelaContainer>
      <ConfirmationModal
        title="Tem certeza que quer deletar?"
        variant="danger"
        confirmationText="Deletar"
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleConfirmation={() => {
          navigate(`/deletar/${props._id}`);
          setShowModal(false);
        }}
      >
        Esta ação é irreversível!
      </ConfirmationModal>
    </>
  );
}
export default Tabela;
