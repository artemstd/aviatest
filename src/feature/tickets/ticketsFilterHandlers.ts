import { difference, uniq } from "lodash";
import { ITicketsFilterHandlers } from "./types";

const ticketsFilterHandlers: ITicketsFilterHandlers = {
    stops(ticket, filter) {
        const ticketStopsCount = uniq(
            ticket.segments.reduce<number[]>(
                (acc, segment) => [ ...acc, segment.stops.length ], []
            )
        );

        return !difference(ticketStopsCount, filter).length;
    }
}

export default ticketsFilterHandlers;