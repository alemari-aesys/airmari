import { useState, useEffect, useContext, createContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios, { AxiosRequestConfig } from "axios";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import styled from "styled-components";
import RadiosContainer from "../SearchWidget/Radios/RadiosContainer";
import SelectWrapper from "../SearchWidget/SelectMenus/SelectContainer";
import { format } from "date-fns";

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
  const [cityFrom, setCityFrom] = useState<string>("");
  const [cityTo, setCityTo] = useState<string>("");

  useEffect(() => {
    if (cityFrom !== "" && cityTo !== "")
      console.log("YEEEEEEEEEEEESSSSSSSSS!!!");
  }, [cityFrom, cityTo]);
  // const [day, setDay] = useState<string>("");
  const token = `Bearer jv9gf6r5qz6z3zxjvzddvcwr`;
  const [startDate, setStartDate] = useState(new Date());
  // const [vanillaDate, setVanillaDate] = useState<string>("");

  const getData = (vanillaDate: string) => {
    console.log(iataDeparture);
    console.log(iataArrival);

    console.log(vanillaDate);

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
    const myDate = format(startDate, "yyyy-MM-dd");
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
          setCityFrom={setCityFrom}
          setCityTo={setCityTo}
          iataDeparture={iataDeparture}
          iataArrival={iataArrival}
        />
        {iataArrival && iataDeparture && (
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => {
              setStartDate(date);
            }}
          />
        )}
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
