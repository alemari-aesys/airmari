import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import styled from "styled-components";
import RadiosContainer from "../Navbar/SearchWidget/Radios/RadiosContainer";
import SelectContainer from "../Navbar/SearchWidget/SelectMenus/SelectContainer";

export default function ButtonsWithTabs() {
  const Title = styled.div`
    display: inline-block;
    margin-left: 5px;
    color: white;

    &:hover {
      font-weight: bold;
    }
  `;

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
        <SelectContainer />
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
