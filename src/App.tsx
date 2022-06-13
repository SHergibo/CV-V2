import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';
import GlobalStyles from './styles/Global';
import { FC, ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SignInSignUp from './Pages/SignInSignUp';
import Admin from './Pages/Admin';
import Page404 from './Pages/Page404';

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<SignInSignUp />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </>
    </ThemeProvider>
  );
};

export default App;
