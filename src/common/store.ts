import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "../feature/tickets/ticketsSlice";

export default configureStore({
    reducer: {
        tickets: ticketsReducer
    }
});