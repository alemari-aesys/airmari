import React, { useState, useEffect, MouseEvent, ChangeEvent } from "react";
import styled from "styled-components";

export default function SelectContainer() {
  const [cityFrom, setCityFrom] = useState("");
  const [cityTo, setCityTo] = useState("");

  const SelectFrom = styled.select`
    width: 400px;
    height: 3rem;
    border-radius: 8px 0 0 8px;
  `;

  const SelectTo = styled.select`
    width: 400px;
    height: 3rem;
    border-radius: 0 8px 8px 0;
  `;

  const SelectContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100%;
  `;

  return (
    <SelectContainer>
      <SelectFrom
        name="Da"
        id="from"
        onChange={(e) => {
          setCityFrom(e.target.value);
        }}
        value={cityFrom}
      >
        <option value="" disabled selected hidden>
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
      </SelectFrom>
      <SelectTo
        name="A"
        id="to"
        onChange={(e) => {
          setCityTo(e.target.value);
        }}
        value={cityTo}
      >
        <option value="" disabled selected hidden>
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
      </SelectTo>
    </SelectContainer>
  );
}
