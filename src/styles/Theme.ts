import { DefaultTheme } from 'styled-components';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      mainBlue: string;
      blue: string;
      white: string;
      greyOne: string;
      greyThree: string;
      greyBorder: string;
    };
    font: {
      principalFont: string;
    };
  }
}

const theme: DefaultTheme = {
  colors: {
    mainBlue: 'hsl(211, 80%, 10%)',
    blue: 'hsl(208, 100%, 43%)',
    white: '#ffffff',
    greyOne: 'hsla(0, 0%, 100%, 0.7)',
    greyThree: 'hsla(0, 0%, 100%, 0.62)',
    greyBorder: 'hsla(0, 0%, 100%, 0.3)'
  },
  font: {
    principalFont: '"Poppins", sans-serif'
  }
};

export { theme };
