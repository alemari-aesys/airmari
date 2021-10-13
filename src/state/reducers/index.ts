import { combineReducers } from "redux";
import { flightsReducer } from "./flightsReducer";

const reducers = combineReducers({
    flights: flightsReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>
