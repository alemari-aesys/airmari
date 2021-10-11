import { flightSchedulesInterface } from "../../interfaces/interface";
import { ActionTypes } from "../action-types";

export interface flightState {
    data: dataInterface | null,
    loading: boolean,
    error: string | null
}

export interface dataInterface {
    cityFrom: string,
    cityTo: string,
    // departureDate: Date | null,
    flightSchedules: flightSchedulesInterface
}

export interface searchFlightsAction {
    type: ActionTypes.SEARCH_FLIGHTS
}

export interface searchFlightsError {
    type: ActionTypes.SEARCH_FLIGHTS_ERROR,
    payload: dataInterface
}

export interface searchFlightsSuccess {
    type: ActionTypes.SEARCH_FLIGHTS_SUCCESS,
    payload: dataInterface
}

export type Action = searchFlightsAction | searchFlightsError | searchFlightsSuccess;