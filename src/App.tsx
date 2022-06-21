import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';
import GlobalStyles from './styles/Global';
import { Routes, Route } from 'react-router-dom';
import ContextRoute from './Routes/Context.route';
import HomePage from './Pages/HomePage';
import SignInSignUp from './Pages/SignInSignUp';
import Admin from './Pages/Admin';
import Page404 from './Pages/Page404';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Routes>
          <Route element={<ContextRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route path="/login" element={<SignInSignUp />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </>
    </ThemeProvider>
  );
};

export default App;
