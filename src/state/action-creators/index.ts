export {}
// import axios, { AxiosRequestConfig } from "axios";
// import React, { Dispatch } from "react";
// import { ActionTypes } from "../action-types/index";
// import {Action, searchFlightsSuccess } from "../actions/index"

// interface searchFlightInterface {
//     iataDeparture: string,
//     iataArrival: string,
//     vanillaDate: string
// }

// const config: AxiosRequestConfig = {
//     headers: {
//       Accept: "application/json",
//       Authorization: process.env.REACT_APP_AUTHORIZATION,
//     }
// }

// export const searchFlight: React.FC<searchFlightInterface> = ({
//     iataDeparture,
//     iataArrival,
//     vanillaDate,
// }) => {

//     return async (dispatch: Dispatch<Action>) => {
//         dispatch({
//             type: ActionTypes.SEARCH_FLIGHTS
//         })

//         try {
//             const response: any = await axios.get(`https://api.lufthansa.com/v1/operations/schedules/${iataDeparture}/${iataArrival}/${vanillaDate}`)
//         }
//         catch (err) {
//             console.log(err);
            
//         }

//     }
// }