import { DefaultTheme } from 'styled-components';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      mainBlue: string;
    };
    font: {
      principalFont: string;
    };
  }
}

const theme: DefaultTheme = {
  colors: {
    mainBlue: 'hsl(211, 80%, 10%)'
  },
  font: {
    principalFont: '"Poppins", sans-serif'
  }
};

export { theme };
