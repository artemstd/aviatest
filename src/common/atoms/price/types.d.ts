import { HTMLAttributes } from "react";
import { TCurrency } from "../../types";

export interface IPriceProps extends HTMLAttributes<HTMLSpanElement> {
    price: number;
    currency: TCurrency;
}