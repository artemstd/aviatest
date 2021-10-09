import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentType } from "react";
import Button from './';
import { IButtonProps } from "./types";

export default {
    title: 'common/button',
    component: Button,
    argTypes: {
        styleType: {
            options: ['primary', 'default'],
            control: { type: 'radio' }
        }
    }
} as ComponentMeta<ComponentType<IButtonProps>>;

const Story: ComponentStory<ComponentType<IButtonProps>> = args => <Button { ...args } />;

export const Primary = Story.bind(null);
Primary.args = {
    styleType: 'primary',
    children: 'Primary'
};

export const Default = Story.bind(null);
Default.args = {
    styleType: 'default',
    children: 'Default'
};