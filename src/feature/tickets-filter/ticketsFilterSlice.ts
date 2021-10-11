import { createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../../common/types";
import { ITicketsFilterReducers, ITicketsFilterState, TTicketsFilterName } from "./types";

const initialState: ITicketsFilterState = {
    stops: []
};

const ticketsFilterSlice = createSlice<typeof initialState, ITicketsFilterReducers<typeof initialState>, TTicketsFilterName>({
    name: "ticketsFilter",
    initialState,
    reducers: {
        toggleTicketsFilterStop: (state, action) => {
            const i = state.stops.indexOf(action.payload);
            ~i ? state.stops.splice(i, 1) : state.stops.push(action.payload);
        },
        setTicketsFilterStops: (state, action) => {
            state.stops = action.payload;
        }
    }
});

export const {
    toggleTicketsFilterStop,
    setTicketsFilterStops
} = ticketsFilterSlice.actions;

export const selectTicketsFilter = (state: IRootState) => state.ticketsFilter;
export const selectTicketsFilterStops = (state: IRootState) => selectTicketsFilter(state).stops;

export default ticketsFilterSlice.reducer;