import styled from "styled-components";
import Button from "../../atoms/button";
import { IButtonGroupProps } from "./types";

const ButtonGroup = styled.div<IButtonGroupProps>`
    display: flex;
    border: 1px solid var(--border-color);
    border-radius: var(--radius);
    ${Button} {
        flex: 1;
        &:not(:first-child):not(:last-child) {
            border-radius: 0;
        }
    }

    ${({ isVertical }) => {
        return isVertical
            ? `
                flex-direction: column;
                ${Button} {
                    + ${Button} {
                        border-top: 1px solid var(--border-color);
                    }
                    &:first-child {
                        border-bottom-left-radius: 0;
                        border-bottom-right-radius: 0;
                    }
                    &:last-child {
                        border-top-left-radius: 0;
                        border-top-right-radius: 0;
                    }
                }
            `
            : `
                flex-direction: row;
                ${Button} {
                    + ${Button} {
                        border-left: 1px solid var(--border-color);
                    }
                    &:first-child {
                        border-top-right-radius: 0;
                        border-bottom-right-radius: 0;
                    }
                    &:last-child {
                        border-top-left-radius: 0;
                        border-bottom-left-radius: 0;
                    }
                }
            `
    }}
`;

ButtonGroup.defaultProps = {
    isVertical: false
};

export default ButtonGroup;