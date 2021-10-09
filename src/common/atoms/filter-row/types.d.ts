import { HTMLAttributes } from "react";

export interface IFilterRowProps extends HTMLAttributes<HTMLDivElement> {
    withHover?: boolean;
    rowType?: 'checkbox';
}