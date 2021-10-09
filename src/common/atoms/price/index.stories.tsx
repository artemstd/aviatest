import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentType } from "react";
import Price from './';
import { IPriceProps } from "./types";

export default {
    title: 'common/price',
    component: Price,
    argTypes: {
        currency: {
            options: ['rub', 'usd'],
            control: { type: 'radio' }
        }
    }
} as ComponentMeta<ComponentType<IPriceProps>>;

const Story: ComponentStory<ComponentType<IPriceProps>> = args => <Price { ...args } />;

export const Rub = Story.bind(null);
Rub.args = {
    price: 10000,
    currency: 'rub'
};