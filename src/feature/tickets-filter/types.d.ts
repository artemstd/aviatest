import { CaseReducer, PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";
import { ArrayElement } from "../../common/types";

export interface ITicketsFilterState {
    stops: number[]
}

export interface ITicketsFilterReducers<State> extends SliceCaseReducers<State> {
    toggleTicketsFilterStop: CaseReducer<State, PayloadAction<ArrayElement<ITicketsFilterState["stops"]>>>
    setTicketsFilterStops: CaseReducer<State, PayloadAction<ITicketsFilterState["stops"]>>
}

export type TTicketsFilterName = "ticketsFilter";