import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITicketsReducers, ITicketsAdditionalState, TTicketsName, IFetchSearchIdResponseData, IFetchTicketsResponseData, IFetchTicketsRequestParams, ITicketsEntity } from "./types";
import * as ticketsAPI from "./ticketsAPI";
import { IRootState, TCustomThunkAction } from "../../common/types";

const ticketsEntityAdapter = createEntityAdapter<ITicketsEntity>({
    selectId: (ticket) => JSON.stringify(ticket)
});

const initialState = ticketsEntityAdapter.getInitialState<ITicketsAdditionalState>({
    isLoading: false,
    searchStop: false
});

const fetchSearchId = (): TCustomThunkAction<Promise<PayloadAction<IFetchSearchIdResponseData>>> => async (dispatch) => {
    const resp = await ticketsAPI.fetchSearchId();
    return dispatch(searchIdFetched(resp.data));
};

const fetchTickets = (params: IFetchTicketsRequestParams): TCustomThunkAction<Promise<PayloadAction<IFetchTicketsResponseData>>> => async (dispatch) => {
    const resp = await ticketsAPI.fetchTickets(params);
    return dispatch(ticketsFetched(resp.data));
};

export const fetchTicketsChaining = (): TCustomThunkAction<Promise<void>> => async (dispatch, getState) => {
    const { tickets: { searchStop, searchId, isLoading } } = getState();

    if (searchStop) {
        dispatch(loadingSuccess());
        return;
    }

    !isLoading && dispatch(loadingStart());

    try {
        searchId
            ? await dispatch(fetchTickets({ searchId }))
            : await dispatch(fetchSearchId());

        dispatch(fetchTicketsChaining());
    } catch(e) {
        dispatch(loadingError((e as Error).message));
    }
};

const ticketsSlice = createSlice<typeof initialState, ITicketsReducers<typeof initialState>, TTicketsName>({
    name: "tickets",
    initialState,
    reducers: {
        loadingStart: (state) => {
            state.isLoading = true;
        },
        loadingSuccess: (state) => {
            state.isLoading = false;
        },
        loadingError: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        searchIdFetched: (state, action) => {
            state.searchId = action.payload.searchId;
        },
        ticketsFetched: (state, action) => {
            ticketsEntityAdapter.addMany(state, action.payload.tickets)
            state.searchStop = !!action.payload.stop;
        }
    }
});

export const { loadingStart, loadingSuccess, loadingError, searchIdFetched, ticketsFetched } = ticketsSlice.actions;

export const {
    selectAll: selectAllTickets,
    selectEntities: selectEntitiesTickets
} = ticketsEntityAdapter.getSelectors<IRootState>(state => state.tickets);

export default ticketsSlice.reducer;