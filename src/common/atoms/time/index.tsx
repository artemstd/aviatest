import moment from "moment";
import { FC } from "react";
import { Span } from "../typography";
import { ITimeProps } from "./types";

const Time: FC<ITimeProps> = ({ date }) => {
    return <Span>{ moment(date).format("HH:mm") }</Span>
}

export default Time;