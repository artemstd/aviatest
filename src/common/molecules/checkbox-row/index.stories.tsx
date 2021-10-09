import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentType } from "react";
import CheckboxRow from './';
import { ICheckboxRowProps } from "./types";

export default {
    title: 'common/checkbox',
    component: CheckboxRow
} as ComponentMeta<ComponentType<ICheckboxRowProps>>; 

export const Row: ComponentStory<ComponentType<ICheckboxRowProps>> = args => <CheckboxRow { ...args } />;
Row.args = {
    children: 'Row',
    checked: true
};