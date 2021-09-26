import React from 'react'
import styled from "styled-components";
import Buttons from "./Buttons/Buttons";

export default function SearchWidget() {

    const SearchWidget = styled.div`
    height: 200px;
    background-color: #073590;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 20px;
    `;


    return (
        <div>
            <SearchWidget>
                <Buttons />
            </SearchWidget>
        </div>
    )
}
