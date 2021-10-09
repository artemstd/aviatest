import { FC } from "react";
import styled from "styled-components";
import Label from '../../atoms/label';
import Checkbox from '../../atoms/checkbox';
import { ICheckboxRowProps } from "./types";

const CheckboxRow: FC<ICheckboxRowProps> = ({ className, children, ...checkboxProps }) => (
    <Label className={ className }>
        <Checkbox { ...checkboxProps } />
        { children }
    </Label>
);

export default styled(CheckboxRow)`
    display: flex;
    align-items: center;
    cursor: pointer;
    ${Checkbox} {
        margin-right: 10px;
    }
`;