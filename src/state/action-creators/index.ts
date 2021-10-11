import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import React, { Dispatch } from "react";
import { ActionTypes } from "../action-types/index";
import {Action, searchFlightsSuccess } from "../actions/index"
import { flightSchedulesInterface } from "../../interfaces/interface";

interface searchFlightInterface {
    cityFrom: string,
    cityTo: string,
    // departureDate: Date,
    iataDeparture: string,
    iataArrival: string,
    vanillaDate: string
}
const config: AxiosRequestConfig = {
    headers: {
      Accept: "application/json",
      Authorization: process.env.REACT_APP_AUTHORIZATION,
    }
}

export const searchFlight = ({
    cityFrom,
    cityTo,
    // departureDate,
    iataDeparture,
    iataArrival,
    vanillaDate
}: searchFlightInterface) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.SEARCH_FLIGHTS
        })
        
        try {
            const response = await axios.get(`https://api.lufthansa.com/v1/operations/schedules/${iataDeparture}/${iataArrival}/${vanillaDate}`)
            .then((res) => res);
            const flightSchedules = response.data;
            if (flightSchedules) {
                dispatch({
                    type: ActionTypes.SEARCH_FLIGHTS_SUCCESS,
                    payload: {
                        cityFrom,
                        cityTo,
                        // departureDate,
                        flightSchedules
                    }
                })
            }
        }
        catch (err: any) {
            dispatch({
                type: ActionTypes.SEARCH_FLIGHTS_ERROR,
                payload: err.message
            })
        }

    }
}