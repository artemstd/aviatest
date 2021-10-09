import { FC } from "react";
import styled from "styled-components";
import { IHeadingProps } from "./types";

const Heading: FC<IHeadingProps> = ({ size, ...otherProps }) => {
    const TagName = `h${size}` as `h${IHeadingProps['size']}`;
    return <TagName { ...otherProps } />;
}

export default styled(Heading)``;