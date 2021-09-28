import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { env } from "process";

export default function SelectContainer() {
  const [iataDeparture, setIataDeparture] = useState<string>("");
  const [iataArrival, setIataArrival] = useState<string>("");
  const token = `Bearer kwsjyq6umv3nj3sa25etjn4e`;

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

  useEffect(() => {
    const d = new Date(2021, 9, 29);

    if (iataDeparture !== "" || iataArrival !== "") {
      let month = d.getMonth();

      let myDate = d.getFullYear().toString() + "-";

      if (d.getMonth() + 1 < 10) {
        myDate += "0" + month;
      } else {
        myDate += month + 1;
      }
      myDate += "-";
      myDate += d.getDate().toString();

      const config: AxiosRequestConfig = {
        headers: {
          Accept: "application/json",
          Authorization: token,
          "X-Originating-IP": "37.159.185.154",
        },
      };

      axios
        .get(
          `https://api.lufthansa.com/v1/operations/schedules/${iataDeparture}/${iataArrival}/${myDate}?directFlights=0`,
          config
        )
        .then((res: any) => console.log(res));
    }
  }, [iataDeparture, iataArrival]);

  function handleSearch() {
    let cityFrom = document.getElementById("from") as HTMLSelectElement;
    let opt0 = cityFrom.options[cityFrom.selectedIndex];
    setIataDeparture(opt0.value);
    let cityTo = document.getElementById("to") as HTMLSelectElement;
    let opt1 = cityFrom.options[cityTo.selectedIndex];
    setIataArrival(opt1.value);
  }

  return (
    <SelectContainer>
      <SelectFrom name="Da" id="from">
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
      <SelectTo name="A" id="to">
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
      <Button
        onClick={() => {
          handleSearch();
        }}
      >
        Cerca
      </Button>
    </SelectContainer>
  );
}
