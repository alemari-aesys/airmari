import styled from "styled-components";
import { headerProps } from "../Navbar/Header";
import { context } from "../../App";
import { useContext, useEffect } from "react";
import { format } from "date-fns";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { FlightType } from "../../interfaces/interface";
import FirstLine from "./FirstLine/index";
import SecondLine from "./SecondLine/index";
import HeaderContainer from "./HeaderContainer";
import FlightResult from "./FlightResult";

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

export default function Container() {
  const { cities, departureDate, loading, flightSchedules } =
    useContext(context);

  useEffect(() => {
    console.log(flightSchedules.data.ScheduleResource.Schedule);
  }, [flightSchedules]);

  return (
    <div>
      {loading && (
        <div style={{ marginLeft: "47%" }}>
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
        <HeaderContainer cities={cities} departureDate={departureDate} />
      )}
      {!loading && cities && departureDate && (
        <FlightsContainer backgroundColor="white">
          <FirstLine cities={cities} />
          <SecondLine departureDate={departureDate} />
          <FlightResult flightSchedules={flightSchedules} />
        </FlightsContainer>
      )}
    </div>
  );
}
