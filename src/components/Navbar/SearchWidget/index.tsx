import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ButtonsWithTabs from "../../TabsTest/ButtonsWithTabs";

export default function SearchWidget() {
  const SearchWidget = styled.div`
    height: 500px;
    background-color: #073590;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
  `;

  return (
    <div>
      <SearchWidget>
        <ButtonsWithTabs />
      </SearchWidget>
    </div>
  );
}
