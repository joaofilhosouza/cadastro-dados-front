import React from "react";
import ListaUsuario from "./TabelaUsuario";
import { HomeContainer, DivHome, DivTh } from "./Tabela.style";

function Home() {
  return (
    <>
      <HomeContainer>
        <DivHome>
          <DivTh> Nome</DivTh>
          <DivTh>Idade</DivTh>
          <DivTh>Estado Civil</DivTh>
          <DivTh>CPF</DivTh>
          <DivTh>Cidade</DivTh>
          <DivTh>Estado</DivTh>
          <DivTh>Editar</DivTh>
          <DivTh>Deletar</DivTh>
          <DivTh>Detalhes</DivTh>
        </DivHome>
      </HomeContainer>
      <ListaUsuario />
    </>
  );
}

export default Home;
