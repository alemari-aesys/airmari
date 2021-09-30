import React from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";

const App: React.FC = (): JSX.Element => {
  return (
    <div>
      <Navbar />
      <Container />
    </div>
  );
};

export default App;
