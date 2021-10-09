import { ITicketsSortState } from "../../types";

export type ITicketsSortFieldsDesc = {
    [K in ITicketsSortState["field"]]: string
};