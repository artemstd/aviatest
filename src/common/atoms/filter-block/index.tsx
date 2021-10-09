import { FC } from "react";
import styled from "styled-components";
import { IFilterBlockProps } from "./types";
import Block from "../block";

const FilterBlock: FC<IFilterBlockProps> = ({ className, children }) => {
    return <Block withPadding={ false } className={ className }>
        { children }
    </Block>
}

export default styled(FilterBlock)`
    padding: var(--internal-indent-half) 0;
`;