import { CaseReducer, PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";

export type TTicketsSortFields = ["price", "duration", "optimal"];

export interface ITicketsSortState {
    field: TTicketsSortFields[number]
}

export interface ITicketsSortReducers<State> extends SliceCaseReducers<State> {
    setTicketsSortSort: CaseReducer<State, PayloadAction<ITicketsSortState["field"]>>
}

export type TTicketsSortName = "ticketsSort";