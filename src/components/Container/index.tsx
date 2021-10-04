import styled from "styled-components";
import { headerProps } from "../Navbar/Header";
import { context } from "../../App";
import { useContext } from "react";
import { format } from "date-fns";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

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

const FlightsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${(props: headerProps) => props.backgroundColor}; //#073590;
  color: blue;
  padding-bottom: 20px;
`;

const FirstLine = styled.div`
  display: flex;
  align-items: center;
`;

const SecondLine = styled.div`
  display: flex;
  align-items: center !important;
  justify-content: center !important;
  text-align: center !important;
  color: blue;
  font-weight: bold;
  margin-left: 45%;
  border: 1px solid darkgrey;
  padding: 30px;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  box-shadow: 1px 1px 10px grey;
  border-bottom: 5px solid orange;
`;

export default function Container() {
  const { cities, departureDate, loading } = useContext(context);

  return (
    <div>
      {loading && (
        <div style={{ marginLeft: "45%" }}>
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </div>
      )}
      {!loading && cities && departureDate && (
        <HeaderContainer backgroundColor={"white"}>
          <div className="inside">
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
      )}
      {!loading && cities && departureDate && (
        <FlightsContainer backgroundColor="white">
          <FirstLine className="insideFlights">
            <span
              style={{ marginRight: "5px" }}
              className="material-icons containerIcon"
            >
              flight_takeoff
            </span>
            {cities.firstCity} a {cities.secondCity}
          </FirstLine>
          <SecondLine>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>{format(new Date(departureDate), "PP")}</span>
              <span style={{ fontWeight: "normal", color: "grey" }}>
                {format(new Date(departureDate), "ccc")}
              </span>
              <span style={{ marginTop: "30px", fontSize: "2rem" }}>
                {Math.floor(Math.random() * 100)} €
              </span>
            </div>
          </SecondLine>
        </FlightsContainer>
      )}
    </div>
  );
}
