import styled from "styled-components";
import { headerProps } from "../Navbar/Header";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${(props: headerProps) => props.backgroundColor}; //#073590;
  color: blue;
  height: 55px;
  border: 1px solid grey;
  box-shadow: 2px 2px grey;
`;

export default function Container() {
  return (
    <HeaderContainer backgroundColor={"white"}>
      <div className="inside">
        Torino<span className="material-icons containerIcon">swap_horiz</span>
        Londra
        <div
          style={{
            textAlign: "left",
            color: "grey",
            fontSize: "0.8rem",
            fontWeight: "normal",
          }}
        >
          Andata : 12 ott
        </div>
      </div>
    </HeaderContainer>
  );
}
