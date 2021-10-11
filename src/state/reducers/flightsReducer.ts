import { flightSchedulesInterface } from "../../interfaces/interface";
import { Action } from "../actions";
import { flightState } from "../actions";
import { ActionTypes } from "../action-types";


const initialState: flightState = {
    loading: false,
    error: null,
    data: {
        cityFrom: "",
        cityTo: "",
        // departureDate: new Date(),
        flightSchedules: {
            data: {
                ScheduleResource: {
                    Schedule: [
                      {
                        Flight: [],
                        TotalJourney: {
                          Duration: ""
                        }
                      }
                    ]
                }
            }
        }
    }
}

export const flightsReducer = (state: flightState = initialState, action: Action): flightState => {
    switch (action.type) {
        case ActionTypes.SEARCH_FLIGHTS:
            return {
                data: initialState.data,
                loading: false,
                error: null
            }
        case ActionTypes.SEARCH_FLIGHTS_SUCCESS: 
            return {
                data: action.payload,
                loading: false,
                error: null
            }
        case ActionTypes.SEARCH_FLIGHTS_ERROR:
            return {
                data: null,
                loading: false,
                error: action.payload.toString()
            }
        default:
            return state;
        }
}