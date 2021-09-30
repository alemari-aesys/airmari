import { useState, useEffect, useContext, createContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios, { AxiosRequestConfig } from "axios";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import styled from "styled-components";
import RadiosContainer from "../Navbar/SearchWidget/Radios/RadiosContainer";
import SelectWrapper from "../Navbar/SearchWidget/SelectMenus/SelectContainer";

const Title = styled.div`
  display: inline-block;
  margin-left: 5px;
  color: white;

  &:hover {
    font-weight: bold;
  }
`;

const Button = styled.button`
  background-color: greenyellow;
  border-radius: 8px;
  font-weight: bold;
  width: 282px;
  height: 52px;
  border: 0px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 256, 0);
  }
  &:active {
    background-color: rgba(0, 256, 0, 0.7);
  }
`;

export default function ButtonsWithTabs() {
  const [iataDeparture, setIataDeparture] = useState<string>("");
  const [iataArrival, setIataArrival] = useState<string>("");

  const token = `Bearer jv9gf6r5qz6z3zxjvzddvcwr`;
  const [startDate, setStartDate] = useState(new Date());

  const getData = (vanillaDate: string) => {
    console.log(iataDeparture);
    console.log(iataArrival);
    const config: AxiosRequestConfig = {
      headers: {
        Accept: "application/json",
        Authorization: token,
      },
    };

    axios
      .get(
        `https://api.lufthansa.com/v1/operations/schedules/${iataDeparture}/${iataArrival}/${vanillaDate}`,
        config
      )
      .then((res: any) => console.log(res));
  };

  function handleSearch() {
    let day = startDate.getDate();
    let month = startDate.getMonth() + 1;
    let year = startDate.getFullYear();
    let myDate = year + "-";
    if (month < 10) {
      myDate += "0" + month;
    } else {
      myDate += month;
    }
    myDate += "-";
    if (day < 10) {
      myDate += "0" + day;
    } else {
      myDate += day;
    }
    getData(myDate);
  }

  return (
    <Tabs>
      <TabList className="myTabList">
        <Tab className="ciao">
          <span
            style={{ transform: "rotate(45deg)" }}
            className="material-icons"
          >
            flight
          </span>
          <Title>VOLI</Title>
        </Tab>
        <Tab className="ciao">
          <span className="material-icons">directions_car</span>
          <Title>AUTONOLEGGIO</Title>
        </Tab>
        <Tab className="ciao">
          <span className="material-icons">hotel</span>
          <Title>HOTEL</Title>
        </Tab>
        <Tab className="ciao">
          <span className="material-icons">photo_camera</span>
          <Title>EVENTI E ATTIVITA'</Title>
        </Tab>
      </TabList>

      <TabPanel>
        <RadiosContainer />
        <SelectWrapper
          setIataDeparture={setIataDeparture}
          setIataArrival={setIataArrival}
          iataDeparture={iataDeparture}
          iataArrival={iataArrival}
        />
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => {
            setStartDate(date);
          }}
        />
        <div style={{ color: "white" }}>MM/DD/YYYY</div>
        <Button onClick={() => handleSearch()}>Cerca</Button>
      </TabPanel>
      <TabPanel>
        <div
          style={{ width: "910px", height: "94px", marginTop: "30px" }}
        ></div>
      </TabPanel>
      <TabPanel>
        <div
          style={{ width: "910px", height: "94px", marginTop: "30px" }}
        ></div>
      </TabPanel>
      <TabPanel>
        <div
          style={{ width: "910px", height: "94px", marginTop: "30px" }}
        ></div>
      </TabPanel>
    </Tabs>
  );
}
