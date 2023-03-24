import { createAction, props } from "@ngrx/store";
import { Ticket } from "src/app/API.service";


export const ADD_TICKET = createAction('ADD_TICKET', props<{ tickets: Ticket[] }>())
export const FETCH_FLIGHT = createAction('FETCH_FLIGHT')
