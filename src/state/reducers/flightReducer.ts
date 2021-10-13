import { stateInterface, Action } from "../actions"
import { ActionType } from "../action-types"

export const flightReducer = (state: stateInterface, action: Action): stateInterface => {
    switch (action.type) {
        case ActionType.SEARCH_FLIGHT:
            return { data: undefined, error: null, loading: true};
        case ActionType.SEARCH_FLIGHT_ERROR:
            return { data: undefined, error: action.payload, loading: false};
        case ActionType.SEARCH_FLIGHT_SUCCESS:
            return { data: action.payload, error: null, loading: false};
        default:
            return state;
    }
}