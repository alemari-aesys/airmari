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
  flightSchedules: Object;
  setFlightSchedules: React.Dispatch<React.SetStateAction<Object>>;
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
  flightSchedules: [{}],
  setFlightSchedules: () => null,
});

const App: React.FC = (): JSX.Element => {
  const [cities, setCities] = useState<dataInt>({
    firstCity: "",
    secondCity: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [departureDate, setDepartureDate] = useState<string>("");
  const [flightSchedules, setFlightSchedules] = useState<Object>({});

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
