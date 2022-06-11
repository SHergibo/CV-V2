import { FC, useState, useEffect, createContext } from 'react';
import { useAxiosFetch } from './Hooks/useAxiosHooks';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SignInSignUp from './Pages/SignInSignUp';
import Admin from './Pages/Admin';
import Page404 from './Pages/Page404';
import { IGeneralInfo } from './interfaces';

export const generalInfoContext = createContext<IGeneralInfo | null>(null);

const App: FC = () => {
  const [generalInfo, setGeneralInfo] = useState<IGeneralInfo | null>(null);
  const { data, done } = useAxiosFetch<IGeneralInfo>('/infos');

  useEffect(() => {
    if (done) {
      setGeneralInfo(data);
    }
  }, [data, done]);

  return (
    <>
      <generalInfoContext.Provider value={generalInfo}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<SignInSignUp />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </generalInfoContext.Provider>
    </>
  );
};

export default App;
