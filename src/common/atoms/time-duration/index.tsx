import moment from "moment";
import { FC } from "react";
import { Span } from "../typography";
import { ITimeDurationProps } from "./types";

const TimeDuration: FC<ITimeDurationProps> = ({ date1, date2 }) => {
    const d1 = moment(date1);
    const d2 = moment(date2);

    const days = d2.diff(d1, "days");
    const hours = d2.subtract(days, "days").diff(d1, "hours");
    const minutes = d2.subtract(hours, "hours").diff(d1, "minutes");

    return <Span>
        { days > 0 ? `${days}д ` : null }
        { `${hours}ч ` }
        { `${`0${minutes}`.slice(-2)}м` }
    </Span>
}

export default TimeDuration;