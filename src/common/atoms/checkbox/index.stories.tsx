import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentType } from "react";
import Checkbox from './';
import { ICheckboxProps } from "./types";

export default {
    title: 'common/checkbox',
    component: Checkbox,
} as ComponentMeta<ComponentType<ICheckboxProps>>;

const Story: ComponentStory<ComponentType<ICheckboxProps>> = args => <Checkbox { ...args } />;

export const Checked = Story.bind(null);
Checked.args = {
    checked: true
};

export const Unchecked = Story.bind(null);
Unchecked.args = {
    checked: false
};