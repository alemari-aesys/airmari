import React from 'react'
import styled from "styled-components";
import logo from "../../assets/logo.png";

export default function Header() {
    const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #073590;
    color: white;
    height: 55px;
    z-index: 2;
  `;

  const Logo = styled.img`
    width: 157px;
    height: 32px;
    margin: 10px 0;
  `;

  const Nav = styled.nav`
    margin-right: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  `;

  const UnorderedList = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  `;

  const ListItem = styled.li`
    margin: 0 20px;
    cursor: pointer;
  `;
 
  const Vl = styled.div`
  width: 0.5px;
  height: 1rem;
  background-color: white;
  `;

  const SearchWidget = styled.div`
  height: 200px;
  display: flex;
  background-color: #073590;
  `;

    return (
        <Header>
        <Logo src={logo} />
        <Nav>
          <UnorderedList >
            <ListItem>Pianifica</ListItem>
            <Vl />
            <ListItem>Le mie prenotazioni</ListItem>
            <Vl />
            <ListItem>Iscriviti</ListItem>
            <Vl />
            <ListItem>Accedi</ListItem>
            <Vl />
            <ListItem>Aiuto</ListItem>
            <Vl />
            <ListItem>ITALIA</ListItem>
          </UnorderedList>
        </Nav>
      </Header>
    )
}
