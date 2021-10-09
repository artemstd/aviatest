import { createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../../common/types";
import { ITicketsSortReducers, ITicketsSortState, TTicketsSortFields, TTicketsSortName } from "./types";

export const ticketsSortFields: TTicketsSortFields = ["price", "duration", "optimal"];

const initialState: ITicketsSortState = {
    field: "price"
};

const ticketsSortSlice = createSlice<typeof initialState, ITicketsSortReducers<typeof initialState>, TTicketsSortName>({
    name: "ticketsSort",
    initialState,
    reducers: {
        setTicketsSortSort: (state, action) => {
            state.field = action.payload;
        }
    }
});

export const selectTicketsSortField = (state: IRootState) => state.ticketsSort.field;

export const {
    setTicketsSortSort
} = ticketsSortSlice.actions

export default ticketsSortSlice.reducer;