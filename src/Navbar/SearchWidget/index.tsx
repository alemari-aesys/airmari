import React from 'react'
import styled from "styled-components";


export default function SearchWidget() {

    const SearchWidget = styled.div`
    height: 200px;
    background-color: #073590;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 20px;
    `;

    const Option = styled.div`
        color: white;
        margin: 0 40px 0 30px;
    `;

    const ButtonsContainer = styled.div`
        display: flex;
        margin-left: 40px;
        justify-content: baseline;
        align-items: baseline;
    `;
    
    const Title = styled.div`
    display: inline-block;
    `;

    return (
        <div>
            <SearchWidget>
                <ButtonsContainer>
                    <Option>
                    <span style={{transform: "rotate(45deg)"}} className="material-icons">flight</span>
                        VOLI
                    </Option>
                    <Option>
                        <span className="material-icons">directions_car</span>
                        <Title>
                            AUTONOLEGGIO
                        </Title>
                    </Option>
                    <Option>
                    <span className="material-icons">hotel</span>
                        HOTEL
                    </Option>
                    <Option>
                    <span className="material-icons">photo_camera</span>
                        EVENTI E ATTIVITA'
                    </Option>
                </ButtonsContainer>
            </SearchWidget>
        </div>
    )
}
