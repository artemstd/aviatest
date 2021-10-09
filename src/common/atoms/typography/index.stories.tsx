import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentType, Fragment } from "react";
import { Heading, Paragraph, Span } from './';

export default {
    title: 'common/typography',
    component: Fragment,
    subcomponents: {
        Heading,
        Paragraph,
        Span
    }
} as ComponentMeta<ComponentType>;

export const _Heading: ComponentStory<ComponentType> = () => <>
    <Heading size={1}>Lorem ipsum dolor</Heading>
    <Heading size={2}>Lorem ipsum dolor</Heading>
    <Heading size={3}>Lorem ipsum dolor</Heading>
    <Heading size={4}>Lorem ipsum dolor</Heading>
    <Heading size={5}>Lorem ipsum dolor</Heading>
    <Heading size={6}>Lorem ipsum dolor</Heading>
</>

export const _Paragraph: ComponentStory<ComponentType> = () => <>
    <Paragraph>Lorem ipsum dolor</Paragraph>
</>

export const _Span: ComponentStory<ComponentType> = () => <>
    <Span>Lorem ipsum dolor</Span>
</>