import { FC } from "react";
import styled from "styled-components";
import { IHeadingProps } from "./types";

const HeadingRaw: FC<IHeadingProps> = ({ size, ...otherProps }) => {
    const TagName = `h${size}` as `h${IHeadingProps['size']}`;
    return <TagName { ...otherProps } />;
}

const Heading = styled(HeadingRaw)``;

export default Heading;