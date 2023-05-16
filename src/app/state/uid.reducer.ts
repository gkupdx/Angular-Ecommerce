import { createReducer, on } from "@ngrx/store";
import { incrementCounter } from "./uid.actions";

export const initialState = 0;

export const uidReducer = createReducer(
    initialState,
    on(incrementCounter, (state) => state += 1),
);