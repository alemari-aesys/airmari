import React, { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";

interface contextInt {
  cities: dataInt | undefined;
  setCities: React.Dispatch<React.SetStateAction<dataInt[]>> | any;
  departureDate: string;
  setDepartureDate: React.Dispatch<React.SetStateAction<string>> | any;
}

export interface dataInt {
  firstCity: string;
  secondCity: string;
}

export const context = createContext<contextInt>({
  cities: { firstCity: "", secondCity: "" },
  setCities: undefined,
  departureDate: "",
  setDepartureDate: undefined,
});

const App: React.FC = (): JSX.Element => {
  const [cities, setCities] = useState<dataInt>({
    firstCity: "",
    secondCity: "",
  });
  const [departureDate, setDepartureDate] = useState<string>("");

  return (
    <div>
      <context.Provider
        value={{ cities, setCities, departureDate, setDepartureDate }}
      >
        <Navbar />
        <Container />
      </context.Provider>
    </div>
  );
};

export default App;
