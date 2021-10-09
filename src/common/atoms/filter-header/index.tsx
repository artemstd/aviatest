import { FC, HTMLAttributes } from "react";
import styled from "styled-components";
import { Span } from "../typography";

const StyledSpan = styled(Span)`
    line-height: 12px;
    text-transform: uppercase;
`;

const Wrapper = styled.div<HTMLAttributes<HTMLDivElement>>`
    padding: var(--internal-indent-half) var(--internal-indent);
`;

const FilterHeader: FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...otherProps }) => {
    return <Wrapper { ...otherProps }>
        <StyledSpan>{ children }</StyledSpan>
    </Wrapper>
};

export default FilterHeader;