import { FC, HTMLAttributes, memo, useState, useCallback, MouseEventHandler } from "react";
import styled from "styled-components";
import Button from "../../../../common/atoms/button";
import useCustomSelector from "../../../../common/hooks/useCustomSelector";
import { plural } from "../../../../common/utils";
import { selectEntitiesTickets, selectIdsTickets } from "../../ticketsSlice";
import TicketsItem from "../tickets-item";

const PAGE_LIMIT = 5;

const TicketsList: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
    const [ page, setPage ] = useState<number>(0);

    const ticketsEntities = useCustomSelector(selectEntitiesTickets);
    const ticketsIds = useCustomSelector(selectIdsTickets);
    const ticketsShowIds = ticketsIds.slice(0, (page * PAGE_LIMIT) + PAGE_LIMIT);

    const loadMore = useCallback<MouseEventHandler>(() => {
        setPage(prevPage => prevPage + 1);
    }, []);
    
    return <div className={ className }>
        { ticketsShowIds.map( (ticketId) => {
            const ticket = ticketsEntities[ticketId];
            return ticket && <TicketsItem key={ ticketId } ticket={ ticket } />
        } ) }
        {
            ticketsShowIds.length < ticketsIds.length &&
            <Button
                onClick={ loadMore }
                styleType="primary"
            >
                Показать ещё { PAGE_LIMIT } { plural(PAGE_LIMIT, "билет", "билета", "билетов") }!
            </Button>
        }
    </div>
}

export default memo(
    styled(TicketsList)`
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: var(--internal-indent);
    `
);