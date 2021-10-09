import { FC } from "react";
import styled from "styled-components";
import DefaultTemplate from "../../templates/default-template";
import Header from "../../organisms/header";
import TicketsFilterStops from "../../../feature/tickets-filter/organisms/tickets-filter-stops";
import TicketsSort from "../../../feature/tickets-sort/molecules/tickets-sort";
import TicketsList from "../../../feature/tickets/organisms/tickets-list";

const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: var(--internal-indent);
`;

const IndexPage: FC = () => {
    return <DefaultTemplate
        header={ <Header /> }
        leftAside={ <TicketsFilterStops maxStops={ 3 } /> }
        content={
            <ContentWrapper>
                <TicketsSort />
                <TicketsList />
            </ContentWrapper>
        }
    />
};

export default IndexPage;