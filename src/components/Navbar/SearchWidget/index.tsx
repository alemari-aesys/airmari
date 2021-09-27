import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Buttons from "./Buttons/Buttons";
import RadiosContainer from "./Radios/RadiosContainer";
import SelectContainer from "./SelectMenus/SelectContainer";

export default function SearchWidget() {
  const SearchWidget = styled.div`
    height: 200px;
    background-color: #073590;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 20px;
  `;

  return (
    <div>
      <SearchWidget>
        <Buttons />
        <RadiosContainer />
        <SelectContainer />
      </SearchWidget>
    </div>
  );
}
