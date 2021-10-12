import styled from "styled-components";
import Loading from "../loading";
import { ILoadingBlockProps } from "./types";

const LoadingBlock = styled.div<ILoadingBlockProps>`
    ${
        props => props.isLoading
            ? `
                position: relative;
                > *:not(${Loading}) {
                    opacity: .5;
                }
                ${Loading} {
                    position: absolute;
                    left: 50%;
                    z-index: 1;
                }
            `
            : ""
    }
`;

LoadingBlock.defaultProps = {
    isLoading: false
}

export default LoadingBlock