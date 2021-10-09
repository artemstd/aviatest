import styled from "styled-components";
import { FC, HTMLAttributes } from "react";
import { ITicketsInfoBrickProps } from "./types";
import { Span } from "../../../../common/atoms/typography";

const Wrapper = styled.div<HTMLAttributes<HTMLDivElement>>`
    display: flex;
    flex-direction: column;
`;

const StyledSpanTop = styled(Span)`
    color: var(--color-text-gray);
    font-weight: 600;
    text-transform: uppercase;
`;

const StyledSpanBottom = styled(Span)`
    font-size: 14px;
    line-height: 21px;
    font-weight: 600;
`;

const TicketsInfoBrick: FC<ITicketsInfoBrickProps> = ({ topText, bottomText }) => (
    <Wrapper>
        <StyledSpanTop>{ topText }</StyledSpanTop>
        <StyledSpanBottom>{ bottomText }</StyledSpanBottom>
    </Wrapper>
)

export default TicketsInfoBrick;