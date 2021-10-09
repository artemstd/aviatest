import moment from "moment";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import store from "./store";

export type ArrayElement<T> = T extends (infer R)[] ? R : never;

export type TCurrency = 'rub' | 'usd';

export type IRootState = ReturnType<typeof store.getState>;
export type TCustomDispatch = typeof store.dispatch;

export type TCustomThunkAction<
    R = void,
    S = IRootState,
    E = unknown,
    A = AnyAction
> = ThunkAction<R, S, E, A>;

export type TDate = number | string | moment.Moment | Date;