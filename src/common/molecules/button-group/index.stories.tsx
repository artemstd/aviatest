import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentType } from "react";
import ButtonGroup from '.';
import Button from '../../atoms/button';
import { IButtonGroupProps } from "./types";

export default {
    title: 'common/button',
    component: ButtonGroup,
    subcomponents: { Button }
} as ComponentMeta<ComponentType<IButtonGroupProps>>;

const Story: ComponentStory<ComponentType<IButtonGroupProps>> = args => <ButtonGroup { ...args }>
    <Button styleType="primary">One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
</ButtonGroup>;

export const GroupGorizontal = Story.bind(null);
GroupGorizontal.args = {
    isVertical: false
};

export const GroupVertical = Story.bind(null);
GroupVertical.args = {
    isVertical: true
};