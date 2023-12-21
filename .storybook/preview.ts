import { ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import  GlobalStyles  from '../src/styles/globalstyles'

import { light, dark } from '../src/styles/theme';

/* snipped for brevity */

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
        light: light,
        dark: dark,
      },
  Provider: ThemeProvider,
  GlobalStyles,
})];


