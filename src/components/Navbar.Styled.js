import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 100px;
  flex-direction: column;
  display: flex;
  background-color: black;
  margin-bottom: 40px;
`;

export const DivContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  display: flex;
`;
export const ContainerLeft = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;
export const ContainerRight = styled.div`
  flex: 30%;
  align-items: center;
  margin: auto;
`;

export const ContainerLinks = styled.div`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarExtendContainer = styled.div``;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;
