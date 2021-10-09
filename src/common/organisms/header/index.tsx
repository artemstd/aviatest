import styled from "styled-components";
import { FC, HTMLAttributes } from "react";
import Image from "../../atoms/image";

const Header: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
    return <div className={ className }>
        <Image src="/logo.svg" />
    </div>
}

export default styled(Header)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
`;