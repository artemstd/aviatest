import styled from "styled-components";
import { FC } from "react";
import TicketsInfoBrick from "../tickets-info-brick";
import { ITicketsInfoRowProps } from "./types";

const TicketsInfoRowRaw: FC<ITicketsInfoRowProps> = ({ bricksData, className }) => {
    return <div className={ className }>
        { bricksData.map( (brick) => <TicketsInfoBrick { ...brick } /> ) }
    </div>;
}

const TicketsInfoRow = styled(TicketsInfoRowRaw)`
    display: grid;
    grid-template-columns: repeat(${props => props.bricksData.length}, 1fr);
`;

export default TicketsInfoRow;