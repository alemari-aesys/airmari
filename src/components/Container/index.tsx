import styled from "styled-components";
import { headerProps } from "../Navbar/Header";
import { context } from "../../App";
import { useContext } from "react";

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
  const { cities, departureDate } = useContext(context);

  return (
    <HeaderContainer backgroundColor={"white"}>
      <div className="inside">
        {/* Torino<span className="material-icons containerIcon">swap_horiz</span>
        Londra */}
        {cities?.firstCity && cities.firstCity}
        {cities?.secondCity && (
          <span className="material-icons containerIcon">swap_horiz</span>
        )}
        {cities?.secondCity && cities.secondCity}
        <div
          style={{
            textAlign: "left",
            color: "grey",
            fontSize: "0.8rem",
            fontWeight: "normal",
          }}
        >
          {departureDate && `Andata: ${departureDate}`}
        </div>
      </div>
    </HeaderContainer>
  );
}
