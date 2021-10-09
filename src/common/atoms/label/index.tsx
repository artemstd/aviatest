import { LabelHTMLAttributes } from "react";
import styled from "styled-components";

const Label = styled.label<LabelHTMLAttributes<HTMLLabelElement>>`
    font-size: 13px;
    line-height: 20px;
`;

export default Label;