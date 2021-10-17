import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../../../state/reducers";
import { Dispatch } from "react";

const SelectContent = styled.select`
  width: 400px;
  height: 3rem;
  border-radius: 8px;
  margin-bottom: 10px;
  &:hover {
    background: linear-gradient(45deg, white, lightblue);
    border: 1px solid black;
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`;
interface selectInterface {
  setIataDeparture: React.Dispatch<React.SetStateAction<string>>,
  setIataArrival: React.Dispatch<React.SetStateAction<string>>,
  setCityFrom: React.Dispatch<React.SetStateAction<string>>,
  setCityTo: React.Dispatch<React.SetStateAction<string>>,
  cityFrom: string,
  cityTo: string,
  iataArrival: string,
  iataDeparture: string
}

const SelectContainer: React.FC<selectInterface> = ({
  setIataDeparture,
  setIataArrival,
  setCityFrom,
  setCityTo,
  cityFrom,
  cityTo,
  iataDeparture,
  iataArrival,
}): JSX.Element => {
  
  const state = useSelector((state: RootState) => state.flights)

  useEffect(() => {
    state.data!.cityFrom = cityFrom;
    state.data!.cityTo = cityTo;
    
    
  }, [cityFrom, cityTo])

  return (
    <SelectWrapper>
      <SelectContent
        name="Da"
        id="from"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          setIataDeparture(e.target.value);
          let s =
            e.currentTarget[(e.target as HTMLOptionsCollection).selectedIndex]!
              .firstChild;
          console.log(s?.textContent);
          setCityFrom(s?.textContent!);
        }}
        value={iataDeparture}
      >
        <option value="" disabled hidden>
          DA
        </option>
        <option value="FCO">Roma</option>
        <option value="MXP">Milano</option>
        <option value="FLR">Firenze</option>
        <option value="BLQ">Bologna</option>
        <option value="EWR">New York</option>
        <option value="VKO">Mosca</option>
        <option value="STN">Londra</option>
        <option value="PAR">Parigi</option>
        <option value="AMS">Amsterdam</option>
      </SelectContent>
      <SelectContent
        // defaultValue=""
        name="A"
        id="to"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          setIataArrival(e.target.value);
          let s =
            e.currentTarget[(e.target as HTMLOptionsCollection).selectedIndex]!
              .firstChild;
          console.log(s?.textContent);
          setCityTo(s?.textContent!);
        }}
        value={iataArrival}
      >
        <option value="" disabled hidden>
          A
        </option>
        <option value="FCO">Roma</option>
        <option value="MXP">Milano</option>
        <option value="FLR">Firenze</option>
        <option value="BLQ">Bologna</option>
        <option value="EWR">New York</option>
        <option value="VKO">Mosca</option>
        <option value="STN">Londra</option>
        <option value="PAR">Parigi</option>
        <option value="AMS">Amsterdam</option>
      </SelectContent>
    </SelectWrapper>
  );
};

export default SelectContainer;
