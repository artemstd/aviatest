import { ITicketsEntity, ITicketsSortHandlers } from "./types";

const ticketsSortHandlers = new class TicketsSortHandlers implements ITicketsSortHandlers {
    private __priceSorter = (ticketA: ITicketsEntity, ticketB: ITicketsEntity): number => {
        return ticketA.price - ticketB.price;
    }
    price = (tickets: ITicketsEntity[]) => {
        return tickets.slice().sort(this.__priceSorter);
    }

    private __getTotalDuration = (ticket: ITicketsEntity): number => {
        return ticket.segments.reduce<number>((acc, segment) => acc + segment.duration, 0)
    }

    private __durationSorter = (ticketA: ITicketsEntity, ticketB: ITicketsEntity): number => {
        return this.__getTotalDuration(ticketA) - this.__getTotalDuration(ticketB);
    }
    duration = (tickets: ITicketsEntity[]) => {
        return tickets.slice().sort(this.__durationSorter);
    }

    private __optimalSorter = (ticketA: ITicketsEntity, ticketB: ITicketsEntity): number => {
        const priceDiff = ( ticketA.price - ticketB.price ) / Math.min(ticketA.price, ticketB.price);
        const durationA = this.__getTotalDuration(ticketA);
        const durationB = this.__getTotalDuration(ticketB);
        const durationDiff = ( durationA - durationB ) / Math.min(durationA, durationB);
        return priceDiff + durationDiff;
    }
    optimal = (tickets: ITicketsEntity[]) => {
        return tickets.slice().sort(this.__optimalSorter);
    }
}();

export default ticketsSortHandlers;