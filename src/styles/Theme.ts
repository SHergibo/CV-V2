import { DefaultTheme } from 'styled-components';
import 'styled-components';

interface IColorsProps {
  mainBlue: string;
  blue: string;
  blueHover: string;
  btnBlue: string;
  btnBlueHover: string;
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
    mediaQueries: {
      tablet: string;
      desktop: string;
    };
  }
}

const colors: IColorsProps = {
  mainBlue: 'hsl(211, 80%, 10%)',
  blue: 'hsl(208, 100%, 43%)',
  blueHover: 'hsla(210, 88%, 53%, 0.849)',
  btnBlue: 'hsl(167, 72%, 60%)',
  btnBlueHover: 'hsl(232, 68%, 43%)',
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
  },
  mediaQueries: {
    tablet: 'min-width: 640px',
    desktop: 'min-width: 960px'
  }
};

export { theme };
