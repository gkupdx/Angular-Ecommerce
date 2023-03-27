import { createReducer, on } from "@ngrx/store";
import { activateMembership, deactivateMembership } from "./account.actions";

export const initialState = true;

export const membershipReducer = createReducer(
    initialState,
    on(activateMembership, (state) => state = true),
    on(deactivateMembership, (state) => state = false),
);