import {
  NavbarContainer,
  NavbarInnerContainer,
  ContainerRight,
  ContainerLeft,
  ContainerLinks,
  NavbarLink,
  NavbarExtendContainer,
  NavbarLinkContainer,
} from "../components/Navbar.Styled";

function Top() {
  return (
    <NavbarContainer>
      {/* <Navbar collapseOnSelect expand="lg" className="top"> */}
      <NavbarInnerContainer>
        <ContainerLeft>
          <NavbarLinkContainer>
            <img
              src="./img/banco.png"
              alt="logo"
              width="200"
              height="90"
              bg="black"
              className="imagem-logo"
            />
          </NavbarLinkContainer>
        </ContainerLeft>
        <ContainerRight>
          <ContainerLinks>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/criar">Criar</NavbarLink>
          </ContainerLinks>
        </ContainerRight>
      </NavbarInnerContainer>
      <NavbarExtendContainer></NavbarExtendContainer>
    </NavbarContainer>
  );
}
export default Top;
