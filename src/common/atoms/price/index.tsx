import { FC } from "react";
import styled from "styled-components";
import { currencySign, numberFormat } from "../../utils";
import { IPriceProps } from "./types";

const Price: FC<IPriceProps> = ({ price, currency, ...otherProps }) => (
    <span { ...otherProps }>
        <span>{ numberFormat(price, 0, '.', ' ') }</span>
        {" "}
        <span>{ currencySign(currency) }</span>
    </span>
);

export default styled(Price)`
    color: var(--color-blue);
    font-size: 24px;
    line-height: 24px;
`;