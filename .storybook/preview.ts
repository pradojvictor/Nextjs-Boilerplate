import { ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { GlobalStyles } from '../src/styles/global-styles'

import { theme, light, dark } from '../src/styles/theme';
import { textSpanEnd } from 'typescript';

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


