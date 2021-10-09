import { FC, memo } from "react";
import styled from "styled-components";
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
        <div className="tickets-item__header">
            <Price price={ ticket.price } currency="rub" />
            <Image src={ getImageUrlForAviaCode(ticket.carrier) } />
        </div>
        <div className="tickets-item__content">
            {
                ticket.segments.map(
                    (segment, i) => {
                        const date1 = segment.date;
                        const date2 = moment(segment.date).add(segment.duration, "minutes")
                        return <TicketsInfoRow key={ i }
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

export default memo(
    styled(TicketsItem)`
        .tickets-item__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .tickets-item__content {
            margin-top: var(--internal-indent);
            > ${TicketsInfoRow} + ${TicketsInfoRow} {
                margin-top: var(--internal-indent-half);
            }
        }
    `
);