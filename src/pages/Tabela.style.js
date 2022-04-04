import styled from "styled-components";
// estilos da tabela
export const TabelaContainer = styled.div`
  width: 100%;
  padding: 5px;
`;
export const DivTabela = styled.tr`
  display: flex;
  width: 98%;
  padding: 10px;
  margin: 0 auto;
  background: green;
`;
export const DivTd = styled.td`
  padding: 10px;
  margin: 0 auto;
  border-radius: 15px;
  width: 100px;
  font-size: 18px;
  font-weight: bold;
`;

// estilos da home
export const HomeContainer = styled.div`
  width: 71%;
  padding: 10px;
  background: #7b7575;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`;

export const DivTh = styled.th`
  padding: 10px;
  margin: 0 auto;
  border-radius: 15px;
  width: 100px;
  font-size: 20px;
  font-weight: bold;
  color: #2a2929;
`;
export const DivHome = styled.tr`
  display: flex;
  width: 100%;
  padding: 10px;
  margin: 0 auto;
`;

// estilo detalhe da tabela
export const DetalheContainer = styled.div`
  width: 90%;
  padding: 10px;
  background: #7b7575;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const DivThDetalhe = styled.th`
  padding: 10px;
  margin: 0 auto;
  width: 150px;
  font-size: 20px;
  font-weight: bold;
  color: #2a2929;
  align-items: center;
  text-align: center;
`;
export const DivDetalhe = styled.tr`
  display: flex;
  width: 100%;
  padding: 10px;
  margin: 0 auto;
`;
export const PaginaDetalhe = styled.div`
  display: block;
  width: 100%;
  padding: 10px;
  margin: 0 auto;
`;

export const DivDetalheTbody = styled.div`
  width: 90%;
  margin: 0 auto;
  background: green;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
