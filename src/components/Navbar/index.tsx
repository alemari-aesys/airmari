import React from "react";
import Header from "./Header";
import SearchWidget from "./SearchWidget";

const Navbar: React.FC = () => {
  return (
    <div>
      <Header />
      <SearchWidget />
    </div>
  );
};

export default Navbar;
