import { FC, MouseEventHandler } from "react";
import ButtonGroup from "../../../../common/molecules/button-group";
import Button from "../../../../common/atoms/button";
import { selectTicketsSortField, setTicketsSortSort, ticketsSortFields } from "../../ticketsSortSlice";
import useCustomSelector from "../../../../common/hooks/useCustomSelector";
import { ITicketsSortFieldsDesc } from "./types";
import useCustomDispatch from "../../../../common/hooks/useCustomDispatch";

const ticketsSortFieldsDesc: ITicketsSortFieldsDesc = {
    price: "Самый дешевый",
    duration: "Самый быстрый",
    optimal: "Оптимальный"
};

const TicketsSort: FC = () => {
    const dispatch = useCustomDispatch();
    const currentField = useCustomSelector(selectTicketsSortField);

    return <ButtonGroup>
        {
            ticketsSortFields.map( (field) => {
                const onClick: MouseEventHandler = () => {
                    dispatch(setTicketsSortSort(field))
                }

                return <Button
                    key={ field }
                    styleType={ currentField === field ? "primary" : "default" }
                    onClick={ onClick }
                >
                    { ticketsSortFieldsDesc[field] }
                </Button>
            })
        }
    </ButtonGroup>
};

export default TicketsSort;