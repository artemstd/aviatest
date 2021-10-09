import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "../feature/tickets/ticketsSlice";
import ticketsFilterReducer from "../feature/tickets-filter/ticketsFilterSlice";
import ticketsSortReducer from "../feature/tickets-sort/ticketsSortSlice";

export default configureStore({
    reducer: {
        tickets: ticketsReducer,
        ticketsFilter: ticketsFilterReducer,
        ticketsSort: ticketsSortReducer
    }
});