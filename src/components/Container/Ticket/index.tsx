import styled from "styled-components";
import { FlightType } from "../../../interfaces/interface";
import Logo from "../../../assets/lufthansa.png";
import React, { useState, useEffect } from "react";

interface ticketInt {
  airportCodeDep: string;
  dateTimeDep: string;
  airportCodeArr: string;
  dateTimeArr: string;
}

const TicketStyled = styled.div`
  display: flex;
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
}): JSX.Element => {
  return (
    <TicketStyled>
      <img src={Logo} alt="Lufthansa" width="50rem" height="50rem" />
      <span>{airportCodeDep}</span>
      <span>{dateTimeDep}</span>
      <span>{airportCodeArr}</span>
      <span>{dateTimeArr}</span>
    </TicketStyled>
  );
};

export default Ticket;
