import React from "react";
import styled from "styled-components";

export default function SelectContainer() {
  const SelectFrom = styled.select`
    width: 500px;
    height: 3rem;
    border-radius: 8px 0 0 8px;
  `;

  const SelectTo = styled.select`
    width: 500px;
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
    </SelectContainer>
  );
}
