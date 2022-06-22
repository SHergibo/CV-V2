import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/Theme';
import GlobalStyles from '../styles/Global';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

interface ICypressMountProps {
  children: JSX.Element;
}

const CypressMount = ({ children }: ICypressMountProps) => {
  return (
    <ThemeProvider theme={theme}>
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default CypressMount;
