import { FC, MouseEventHandler } from "react";
import FilterRow from "../../../../common/atoms/filter-row";
import CheckboxRow from "../../../../common/molecules/checkbox-row";
import { plural } from "../../../../common/utils";
import { ITicketsFilterStopsProps } from "./types";
import FilterHeader from "../../../../common/atoms/filter-header";
import FilterBlock from "../../../../common/atoms/filter-block";
import useCustomSelector from "../../../../common/hooks/useCustomSelector";
import { selectTicketsFilterStops, toggleStop } from "../../ticketsFilterSlice";
import useCustomDispatch from "../../../../common/hooks/useCustomDispatch";

const TicketsFilterStops: FC<ITicketsFilterStopsProps> = ({ maxStops }) => {
    const dispatch = useCustomDispatch();
    const stops = useCustomSelector(selectTicketsFilterStops);

    let rows = [];
    for (let i = 0; i <= maxStops; i++) {
        const onClick: MouseEventHandler = (e) => {
            e.preventDefault();
            dispatch(toggleStop(i));
        }

        rows.push(
            <FilterRow key={ i } withHover onClick={ onClick }>
                <CheckboxRow readOnly checked={ !!~stops.indexOf(i) }>
                    { i ? `${ i } ${ plural(i, "пересадка", "пересадки", "пересадок") }` : "Без пересадок" }
                </CheckboxRow>
            </FilterRow>
        );
    }

    return <FilterBlock>
        <FilterHeader>Количество пересадок</FilterHeader>
        { rows }
    </FilterBlock>
}

export default TicketsFilterStops;