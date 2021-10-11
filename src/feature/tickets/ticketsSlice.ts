import { createEntityAdapter, createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { ITicketsReducers, ITicketsAdditionalState, TTicketsName, IFetchSearchIdResponseData, IFetchTicketsResponseData, IFetchTicketsRequestParams, ITicketsEntity } from "./types";
import * as ticketsAPI from "./ticketsAPI";
import { IRootState, TCustomThunkAction } from "../../common/types";
import md5 from "md5";
import { selectTicketsFilter } from "../tickets-filter/ticketsFilterSlice";
import { selectTicketsSortField } from "../tickets-sort/ticketsSortSlice";
import ticketsFilterHandlers from "./ticketsFilterHandlers";
import ticketsSortHandlers from "./ticketsSortHandlers";
import { isEmpty } from "lodash";

const ticketsEntityAdapter = createEntityAdapter<ITicketsEntity>();

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
    const { tickets } = resp.data;
    tickets.forEach((ticket) => {
        if (!ticket.id) {
            ticket.id = md5(JSON.stringify(ticket));
        }
    });
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
    selectAll: selectAllTickets
} = ticketsEntityAdapter.getSelectors<IRootState>(state => state.tickets);

export const selectFilteredSortedTickets = createSelector(
    selectAllTickets,
    selectTicketsFilter,
    selectTicketsSortField,
    (allTickets, ticketsFilter, sortField) => {
        const filters = Object.keys(ticketsFilter) as [keyof typeof ticketsFilter];
        let filteredTickets = allTickets;
        for(let filter of filters) {
            if (!isEmpty(ticketsFilter[filter])) {
                filteredTickets = filteredTickets.filter(ticket => ticketsFilterHandlers[filter](ticket, ticketsFilter[filter] as any));
            }
        }
    
        return ticketsSortHandlers[sortField](filteredTickets);
    }
);

export default ticketsSlice.reducer;