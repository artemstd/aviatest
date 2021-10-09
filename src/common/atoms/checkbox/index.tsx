import { FC } from "react";
import styled from "styled-components";
import { ICheckboxProps } from "./types";

const CheckboxRaw: FC<ICheckboxProps> = ({ className, ...otherProps }) => (
    <label className={className}>
        <input type="checkbox" { ...otherProps } />
        <span />
    </label>
);

const Checkbox = styled(CheckboxRaw)`
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    cursor: pointer;
    input {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
        top: 0;
        left: 0;
        &:checked + span {
            border-color: var(--color-blue);
            &:before {
                content: '';
                position: absolute;
                width: 10px;
                height: 6px;
                top: 3px;
                left: 3px;
                border: solid var(--color-blue);
                border-width: 0 0 2px 2px;
                transform: rotate(-45deg);
            }
        }
    }
    span {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 1px solid #9ABBCE;
        border-radius: 2px;
    }
`;

export default Checkbox;