import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios, { AxiosRequestConfig } from "axios";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import styled from "styled-components";
import RadiosContainer from "../SearchWidget/Radios/RadiosContainer";
import SelectWrapper from "../SearchWidget/SelectMenus/SelectContainer";
import { format } from "date-fns";
import { context } from "../../../App";
import { useContext } from "react";
import { flightSchedulesInterface } from "../../../interfaces/interface";

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
  const [theDate, setTheDate] = useState<string>("");
  const {
    setCities,
    setDepartureDate,
    setLoading,
    flightSchedules,
    setFlightSchedules,
  } = useContext(context);

  useEffect(() => {
    if (cityFrom !== "" && cityTo !== "") {
      console.log("YEEEEEEEEEEEESSSSSSSSS!!!");
    }
  }, [cityFrom, cityTo]);

  useEffect(() => {
    if (flightSchedules) {
      setCities({ firstCity: cityFrom, secondCity: cityTo });
      setDepartureDate(theDate);
      setLoading(false);
    }
  }, [flightSchedules]);

  const token = process.env.REACT_APP_AUTHORIZATION;
  const [startDate, setStartDate] = useState(new Date());

  const getData = (vanillaDate: string) => {
    const config: AxiosRequestConfig = {
      headers: {
        Accept: "application/json",
        Authorization: token,
      },
    };

    try {
      axios
        .get(
          `https://api.lufthansa.com/v1/operations/schedules/${iataDeparture}/${iataArrival}/${vanillaDate}`,
          config
        )
        .then((res: flightSchedulesInterface) => setFlightSchedules(res));
    } catch (error) {
      console.log(error);
    }
  };

  async function handleSearch() {
    const myDate = format(startDate, "yyyy-MM-dd");
    setTheDate(myDate);
    setLoading(true);
    await getData(myDate);
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
          style={{
            width: "800px",
            maxWidth: "800px",
            height: "145px",
            marginTop: "30px",
            minHeight: "145px",
          }}
        ></div>
      </TabPanel>
      <TabPanel>
        <div
          style={{
            width: "800px",
            maxWidth: "800px",
            height: "145px",
            marginTop: "30px",
            minHeight: "145px",
          }}
        ></div>
      </TabPanel>
      <TabPanel>
        <div
          style={{
            width: "800px",
            maxWidth: "800px",
            height: "145px",
            marginTop: "30px",
            minHeight: "145px",
          }}
        ></div>
      </TabPanel>
    </Tabs>
  );
}
