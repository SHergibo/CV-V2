import { DefaultTheme } from 'styled-components';
import 'styled-components';

interface IColorsProps {
  mainBlue: string;
  blue: string;
  btnBlueOver: string;
  white: string;
  greyOne: string;
  greyTwo: string;
  greyThree: string;
  greyBorder: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColorsProps;
    font: {
      principalFont: string;
    };
    css: {
      border: string;
    };
  }
}

const colors: IColorsProps = {
  mainBlue: 'hsl(211, 80%, 10%)',
  blue: 'hsl(208, 100%, 43%)',
  btnBlueOver: 'hsl(232, 68%, 43%)',
  white: '#ffffff',
  greyOne: 'hsla(0, 0%, 100%, 0.7)',
  greyTwo: 'hsla(0, 0%, 100%, 0.5)',
  greyThree: 'hsla(0, 0%, 100%, 0.62)',
  greyBorder: 'hsla(0, 0%, 100%, 0.3)'
};

const theme: DefaultTheme = {
  colors,
  font: {
    principalFont: '"Poppins", sans-serif'
  },
  css: {
    border: `0.5px solid ${colors.greyBorder};`
  }
};

export { theme };
