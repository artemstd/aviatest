import styled from "styled-components";
import { FC } from "react";
import TicketsInfoBrick from "../tickets-info-brick";
import { ITicketsInfoRowProps } from "./types";

const TicketsInfoRow: FC<ITicketsInfoRowProps> = ({ bricksData, className }) => {
    return <div className={ className }>
        { bricksData.map( (brick, i) => <TicketsInfoBrick key={ i } { ...brick } /> ) }
    </div>;
}

export default styled(TicketsInfoRow)`
    display: grid;
    grid-template-columns: repeat(${props => props.bricksData.length}, 1fr);
`;