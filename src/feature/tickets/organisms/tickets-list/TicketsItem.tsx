import { FC, memo } from "react";
import Block from "../../../../common/atoms/block";
import Price from "../../../../common/atoms/price";
import Image from "../../../../common/atoms/image";
import { ITicketsItemProps } from "./types";
import { getImageUrlForAviaCode, plural } from "../../../../common/utils";
import moment from "moment";
import TicketsInfoRow from "../../molecules/tickets-info-row";
import Time from "../../../../common/atoms/time";
import TimeDuration from "../../../../common/atoms/time-duration";

const TicketsItem: FC<ITicketsItemProps> = ({ ticket, className }) => {
    return <Block className={ className }>
        <div>
            <Price price={ ticket.price } currency="rub" />
            <Image src={ getImageUrlForAviaCode(ticket.carrier) } />
        </div>
        <div>
            {
                ticket.segments.map(
                    (segment) => {
                        const date1 = segment.date;
                        const date2 = moment(segment.date).add(segment.duration, "minutes")
                        return <TicketsInfoRow
                            bricksData={[
                                {
                                    topText: `${ segment.origin } - ${ segment.destination }`,
                                    bottomText: <>
                                        <Time date={ date1 } /> - <Time date={ date2 } />
                                    </>
                                },
                                {
                                    topText: "В пути",
                                    bottomText: <TimeDuration date1={ date1 } date2={ date2 } />
                                },
                                {
                                    topText: segment.stops.length
                                        ? `${ segment.stops.length } ${ plural(segment.stops.length, "пересадка", "пересадки", "пересадок") }`
                                        : "без пересадок",
                                    bottomText: segment.stops.join(", ")
                                }
                            ]}
                        />
                    }
                )
            }
        </div>
    </Block>;
}

export default memo(TicketsItem);