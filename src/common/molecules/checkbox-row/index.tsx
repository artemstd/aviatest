import { FC } from "react";
import styled from "styled-components";
import Label from '../../atoms/label';
import Checkbox from '../../atoms/checkbox';
import { ICheckboxRowProps } from "./types";

const CheckboxRowRaw: FC<ICheckboxRowProps> = ({ className, children, ...checkboxProps }) => (
    <Label className={ className }>
        <Checkbox { ...checkboxProps } />
        { children }
    </Label>
);

const CheckboxRow = styled(CheckboxRowRaw)`
    display: flex;
    align-items: center;
    cursor: pointer;
    ${Checkbox} {
        margin-right: 10px;
    }
`;

export default CheckboxRow;