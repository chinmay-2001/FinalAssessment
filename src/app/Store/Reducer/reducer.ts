import { createReducer, on } from "@ngrx/store";
import { ADD_TICKET } from "../Action/action";
import { Flight } from "src/app/API.service";

export const initialFlightState = {
    flights: []
}

export const AUTHOR_REDUCER = createReducer(
    initialFlightState,

)