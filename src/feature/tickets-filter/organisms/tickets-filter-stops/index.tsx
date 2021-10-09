import { FC, MouseEventHandler, useCallback } from "react";
import FilterRow from "../../../../common/atoms/filter-row";
import CheckboxRow from "../../../../common/molecules/checkbox-row";
import { plural } from "../../../../common/utils";
import { ITicketsFilterStopsProps } from "./types";
import FilterHeader from "../../../../common/atoms/filter-header";
import FilterBlock from "../../../../common/atoms/filter-block";
import useCustomSelector from "../../../../common/hooks/useCustomSelector";
import { selectTicketsFilterStops, setTicketsFilterStops, toggleTicketsFilterStop } from "../../ticketsFilterSlice";
import useCustomDispatch from "../../../../common/hooks/useCustomDispatch";

const TicketsFilterStops: FC<ITicketsFilterStopsProps> = ({ maxStops }) => {
    const dispatch = useCustomDispatch();
    const stops = useCustomSelector(selectTicketsFilterStops);
    const countFilters = maxStops + 1;

    const onClickAll = useCallback<MouseEventHandler>((e) => {
        e.preventDefault();
        if (stops.length < countFilters) {
            dispatch(setTicketsFilterStops(Array.from(Array(countFilters).keys())));
        } else {
            dispatch(setTicketsFilterStops([]));
        }
    }, [stops.length, countFilters, dispatch]);

    let rows = [
        <FilterRow key={ "__all__" } withHover onClick={ onClickAll }>
            <CheckboxRow readOnly checked={ stops.length === countFilters }>
                Все
            </CheckboxRow>
        </FilterRow>
    ];
    for (let i = 0; i <= maxStops; i++) {
        const onClick: MouseEventHandler = (e) => {
            e.preventDefault();
            dispatch(toggleTicketsFilterStop(i));
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