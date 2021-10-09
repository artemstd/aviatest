import styled from 'styled-components';
import { IFilterRowProps } from './types';

const FilterRow = styled.div<IFilterRowProps>`
    padding: var(--internal-indent-half) var(--internal-indent);
    min-height: 40px;
    user-select: none;
    ${({ rowType }) => {
        switch(rowType) {
            case 'checkbox':
                return `
                    display: flex;
                    align-items: center;
                `;
            default:
                return '';
        }
    }}
    ${({ withHover }) => (
        withHover
            ? `
                &:hover {
                    cursor: pointer;
                    background-color: var(--bg-color-list-hover);
                }
            `
            : ''
    )}
`;
FilterRow.defaultProps = {
    withHover: false
};

export default FilterRow;