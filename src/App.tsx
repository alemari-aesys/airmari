import React, { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";

interface contextInt {
  cities: dataInt;
  setCities: React.Dispatch<React.SetStateAction<dataInt[]>> | undefined;
}

export interface dataInt {
  firstCity: string;
  secondCity: string;
}

export const context = createContext<contextInt>({
  cities: { firstCity: "", secondCity: "" },
  setCities: undefined,
});

const App: React.FC = (): JSX.Element => {
  const [cities, setCities] = useState<dataInt>();

  return (
    <div>
      <context.Provider value={{ cities, setCities }}>
        <Navbar />
        <Container />
      </context.Provider>
    </div>
  );
};

export default App;
