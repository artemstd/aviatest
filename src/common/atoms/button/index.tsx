import styled from "styled-components";
import { IButtonProps } from "./types";

const Button = styled.button<IButtonProps>`
    text-transform: uppercase;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
    padding: 15px 24px;
    border-radius: var(--radius);
    cursor: pointer;
    ${({ styleType }) => {
        switch(styleType) {
            case 'primary':
                return `
                    color: #FFF;
                    background-color: var(--color-blue);
                `;
            default:
                return 'background-color: #FFF;';
        }
    }}
`;
Button.defaultProps = {
    styleType: "default"
};

export default Button;