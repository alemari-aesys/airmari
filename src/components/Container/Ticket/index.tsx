import styled from "styled-components";
import { FlightType } from "../../../interfaces/interface";
import Logo from "../../../assets/lufthansa.png";
import Flight from "../../../assets/flight.png";
import React, { useState, useEffect } from "react";

interface ticketInt {
  airportCodeDep: string;
  dateTimeDep: string;
  airportCodeArr: string;
  dateTimeArr: string;
  duration: string;
}

const TicketStyled = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  min-width: 900px;
  height: 6rem;
  border: 1px solid grey;
  box-shadow: 3px 3px 3px grey;
  padding: 30px;
  box-sizing: border-box;
  cursor: pointer;
  color: blue;
  font-weight: bold;
  margin-top: 40px;
`;

const Ticket: React.FC<ticketInt> = ({
  airportCodeDep,
  dateTimeDep,
  airportCodeArr,
  dateTimeArr,
  duration,
}): JSX.Element => {
  const vanillaDepTime = dateTimeDep.substring(dateTimeDep.indexOf("T") + 1);
  const vanillaArrTime = dateTimeArr.substring(dateTimeArr.indexOf("T") + 1);
  const howLong = duration.substring(duration.indexOf("T") + 1);

  return (
    <TicketStyled>
      <img src={Logo} alt="Lufthansa" width="50rem" height="50rem" />
      <span
        style={{
          position: "absolute",
          marginTop: "70px",
          fontSize: "0.6rem",
          marginLeft: "3px",
          color: "green",
        }}
      >
        Lufthansa
      </span>
      <span style={{ fontSize: "2rem" }}>{vanillaDepTime}</span>
      <span
        style={{
          position: "absolute",
          marginTop: "70px",
          fontSize: "0.6rem",
          color: "blue",
          left: "201px",
        }}
      >
        {airportCodeDep}
      </span>
      <img src={Flight} alt="" />
      <span style={{ fontSize: "2rem" }}>{vanillaArrTime}</span>
      <span
        style={{
          position: "absolute",
          marginTop: "70px",
          fontSize: "0.6rem",
          color: "blue",
          right: "58px",
        }}
      >
        {airportCodeArr}
      </span>
      <span
        style={{
          position: "absolute",
          marginTop: "70px",
          fontSize: "0.6rem",
          color: "yellowgreen",
          right: "39%",
        }}
      >
        Durata: {howLong}
      </span>
    </TicketStyled>
  );
};

export default Ticket;
