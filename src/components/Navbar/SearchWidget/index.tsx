import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import Buttons from "./Buttons/Buttons";
import RadiosContainer from "./Radios/RadiosContainer";

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


    const Select = styled.select`

    `;

    return (
        <div>
            <SearchWidget>
                <Buttons />
                <RadiosContainer />
                <p style={{color: "white"}}>DA:</p>
                <Select name="Da">
                    <option value="Roma">Roma</option>
                    <option value="Milano">Milano</option>
                    <option value="Firenze">Firenze</option>
                    <option value="Bologna">Bologna</option>
                </Select>
                <p style={{color: "white"}}>A:</p>
                <Select name="A">
                    <option value="Roma">Roma</option>
                    <option value="Milano">Milano</option>
                    <option value="Firenze">Firenze</option>
                    <option value="Bologna">Bologna</option>
                </Select>
            </SearchWidget>
        </div>
    )
}
