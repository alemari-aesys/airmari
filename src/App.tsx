import React, { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import { useSelector } from "react-redux";
import { RootState } from "./state/reducers/index";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { searchFlight } from "./state/action-creators/index"
import {
  flightSchedulesInterface,
  dataInt,
} from "./interfaces/interface";
import { store } from "./state/store";

// export const context = createContext<contextInt>({
//   cities: { firstCity: "", secondCity: "" },
//   setCities: () => null,
//   departureDate: "",
//   setDepartureDate: () => null,
//   loading: false,
//   setLoading: () => null,
//   flightSchedules: {
//     data: {
//       ScheduleResource: {
//         Schedule: [
//           {
//             Flight: [],
//             TotalJourney: {
//               Duration: "",
//             },
//           },
//         ],
//       },
//     },
//   },
//   setFlightSchedules: () => null,
// });

const App: React.FC = (): JSX.Element => {

  const state = useSelector((state: RootState) => state.flights)
  console.log(state);
  const dispatch = useDispatch();
  const AC = bindActionCreators(searchFlight, dispatch)

  // const [cities, setCities] = useState<dataInt>({
  //   firstCity: "",
  //   secondCity: "",
  // });
  // const [loading, setLoading] = useState<boolean>(false);
  // const [departureDate, setDepartureDate] = useState<string>("");
  // const [flightSchedules, setFlightSchedules] =
  //   useState<flightSchedulesInterface>({
  //     data: {
  //       ScheduleResource: {
  //         Schedule: [
  //           {
  //             Flight: [],
  //             TotalJourney: {
  //               Duration: "",
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   });

  return (
    <div>
        <Navbar />
        <Container />
    </div>
  );
};

export default App;