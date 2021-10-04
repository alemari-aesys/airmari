import React, { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";

interface contextInt {
  cities: dataInt | undefined;
  setCities: React.Dispatch<React.SetStateAction<dataInt>>;
  departureDate: string;
  setDepartureDate: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  flightSchedules: flightSchedulesInterface;
  setFlightSchedules: React.Dispatch<
    React.SetStateAction<flightSchedulesInterface>
  >;
}

export interface flightSchedulesInterface {
  data: {
    ScheduleResource: {
      Schedule: [
        {
          Flight: {};
        }
      ];
    };
  };
}

export interface dataInt {
  firstCity: string;
  secondCity: string;
}

export const context = createContext<contextInt>({
  cities: { firstCity: "", secondCity: "" },
  setCities: () => null,
  departureDate: "",
  setDepartureDate: () => null,
  loading: false,
  setLoading: () => null,
  flightSchedules: {
    data: {
      ScheduleResource: {
        Schedule: [
          {
            Flight: {},
          },
        ],
      },
    },
  },
  setFlightSchedules: () => null,
});

const App: React.FC = (): JSX.Element => {
  const [cities, setCities] = useState<dataInt>({
    firstCity: "",
    secondCity: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [departureDate, setDepartureDate] = useState<string>("");
  const [flightSchedules, setFlightSchedules] =
    useState<flightSchedulesInterface>({
      data: {
        ScheduleResource: {
          Schedule: [
            {
              Flight: {},
            },
          ],
        },
      },
    });

  return (
    <div>
      <context.Provider
        value={{
          cities,
          setCities,
          departureDate,
          setDepartureDate,
          loading,
          setLoading,
          flightSchedules,
          setFlightSchedules,
        }}
      >
        <Navbar />
        <Container />
      </context.Provider>
    </div>
  );
};

export default App;
