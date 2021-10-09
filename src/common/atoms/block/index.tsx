import styled from "styled-components";
import { IBlockProps } from './types';

const Block = styled.div<IBlockProps>`
    ${({ withPadding }) => withPadding ? 'padding: var(--internal-indent);' : ''}
    background-color: var(--bg-color-wrapper-default);
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: var(--radius);
`;
Block.defaultProps = {
    withPadding: true
};

export default Block;