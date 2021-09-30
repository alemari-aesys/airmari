import React, { useState, useEffect, MouseEvent, ChangeEvent } from "react";
import styled from "styled-components";

const SelectContent = styled.select`
  width: 400px;
  height: 3rem;
  border-radius: 8px;
`;

const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`;

interface selectInterface {
  setIataDeparture: React.Dispatch<React.SetStateAction<string>>;
  setIataArrival: React.Dispatch<React.SetStateAction<string>>;
  iataArrival: string;
  iataDeparture: string;
}

const SelectContainer: React.FC<selectInterface> = ({
  setIataDeparture,
  setIataArrival,
  iataDeparture,
  iataArrival,
}): JSX.Element => {
  return (
    <SelectWrapper>
      <SelectContent
        name="Da"
        id="from"
        onChange={(e) => {
          setIataDeparture(e.target.value);
        }}
        value={iataDeparture}
      >
        <option value="" disabled hidden>
          DA
        </option>
        <option value="FCO">Roma Fiumicino</option>
        <option value="MXP">Milano Malpensa</option>
        <option value="FLR">Firenze</option>
        <option value="BLQ">Bologna</option>
        <option value="EWR">New York</option>
        <option value="VKO">Mosca</option>
        <option value="STN">Londra</option>
        <option value="PAR">Parigi</option>
      </SelectContent>
      <SelectContent
        // defaultValue=""
        name="A"
        id="to"
        onChange={(e) => {
          setIataArrival(e.target.value);
        }}
        value={iataArrival}
      >
        <option value="" disabled hidden>
          A
        </option>
        <option value="FCO">Roma Fiumicino</option>
        <option value="MXP">Milano Malpensa</option>
        <option value="FLR">Firenze</option>
        <option value="BLQ">Bologna</option>
        <option value="EWR">New York</option>
        <option value="VKO">Mosca</option>
        <option value="STN">Londra</option>
        <option value="PAR">Parigi</option>
      </SelectContent>
    </SelectWrapper>
  );
};

export default SelectContainer;
