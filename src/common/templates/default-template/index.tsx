import styled from "styled-components";
import { FC } from "react";
import { IDefaultTemplateProps } from "./types";

const DefaultTemplate: FC<IDefaultTemplateProps> = ({ header, leftAside, content, className }) => {
    return <div className={ className }>
        <header>{ header }</header>
        <aside>{ leftAside }</aside>
        <main>{ content }</main>
    </div>;
}

export default styled(DefaultTemplate)`
    width: 754px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: var(--internal-indent);
    padding: var(--internal-indent) 0 50px;
    header {
        grid-column: 1/3;
    }
`;