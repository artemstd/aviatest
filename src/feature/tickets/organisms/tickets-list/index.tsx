import { FC, HTMLAttributes, memo, useState, useCallback, MouseEventHandler, useEffect } from "react";
import styled from "styled-components";
import Button from "../../../../common/atoms/button";
import useCustomDispatch from "../../../../common/hooks/useCustomDispatch";
import useCustomSelector from "../../../../common/hooks/useCustomSelector";
import { plural } from "../../../../common/utils";
import { fetchTicketsChaining, selectFilteredSortedTickets } from "../../ticketsSlice";
import TicketsItem from "../tickets-item";

const PAGE_LIMIT = 5;

const TicketsList: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
    const [ page, setPage ] = useState<number>(0);

    const allTickets = useCustomSelector(selectFilteredSortedTickets);
    const ticketsShow = allTickets.slice(0, (page * PAGE_LIMIT) + PAGE_LIMIT);

    const loadMore = useCallback<MouseEventHandler>(() => {
        setPage(prevPage => prevPage + 1);
    }, []);

    const dispatch = useCustomDispatch();
    useEffect(() => {
        dispatch(fetchTicketsChaining());
    }, [dispatch]);
    
    return <div className={ className }>
        { ticketsShow.map( (ticket) => {
            return <TicketsItem key={ ticket.id } ticket={ ticket } />
        } ) }
        {
            ticketsShow.length < allTickets.length &&
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