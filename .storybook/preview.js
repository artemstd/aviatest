import { addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/';

addDecorator(storyFn => (
  <>
    <GlobalStyle />
    { storyFn() }
  </>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}