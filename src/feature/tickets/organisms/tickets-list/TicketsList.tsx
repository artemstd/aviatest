import { FC, HTMLAttributes, memo } from "react";
import useCustomSelector from "../../../../common/hooks/useCustomSelector";
import { selectEntitiesTickets } from "../../ticketsSlice";
import TicketsItem from "./TicketsItem";

const TicketsList: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
    const ticketsEntities = useCustomSelector(selectEntitiesTickets);
    const ticketsIds = Object.keys(ticketsEntities).slice(0, 5);
    
    return <div className={ className }>
        { ticketsIds.map( (ticketId) => {
            const ticket = ticketsEntities[ticketId];
            return ticket && <TicketsItem key={ ticketId } ticket={ ticket } />
        } ) }
    </div>
}

export default memo(TicketsList);