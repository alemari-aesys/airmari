import React from "react";
import styled from "styled-components";

export default function SelectContainer() {
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

  const Button = styled.button`
    margin-left: 10px;
    background-color: greenyellow;
    border-radius: 8px;
    font-weight: bold;
    width: 100px;
    border: 0px;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 256, 0);
    }
    &:active {
      background-color: rgba(0, 256, 0, 0.7);
    }
  `;

  return (
    <SelectContainer>
      <SelectFrom name="Da">
        <option value="" disabled selected hidden>
          DA
        </option>
        <option value="Roma">Roma</option>
        <option value="Milano">Milano</option>
        <option value="Firenze">Firenze</option>
        <option value="Bologna">Bologna</option>
      </SelectFrom>
      <SelectTo name="A">
        <option value="" disabled selected hidden>
          A{" "}
        </option>
        <option value="Roma">Roma</option>
        <option value="Milano">Milano</option>
        <option value="Firenze">Firenze</option>
        <option value="Bologna">Bologna</option>
      </SelectTo>
      <Button>Cerca</Button>
    </SelectContainer>
  );
}
