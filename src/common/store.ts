import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "../feature/tickets/ticketsSlice";
import ticketsFilterReducer from "../feature/tickets-filter/ticketsFilterSlice";

export default configureStore({
    reducer: {
        tickets: ticketsReducer,
        ticketsFilter: ticketsFilterReducer
    }
});