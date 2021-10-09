import { FC } from "react";
import styled from "styled-components";
import { currencySign, numberFormat } from "../../utils";
import { IPriceProps } from "./types";

const PriceRaw: FC<IPriceProps> = ({ price, currency, ...otherProps }) => (
    <span { ...otherProps }>
        <span>{ numberFormat(price, 0, '.', ' ') }</span>
        {" "}
        <span>{ currencySign(currency) }</span>
    </span>
);

const Price = styled(PriceRaw)`
    color: var(--color-blue);
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
`;

export default Price;