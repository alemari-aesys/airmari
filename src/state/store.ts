import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { useState } from "react";
import { dataInt } from "../interfaces/interface";
import { flightSchedulesInterface } from "../interfaces/interface";

export const store = createStore(reducers, {}, applyMiddleware(thunk));