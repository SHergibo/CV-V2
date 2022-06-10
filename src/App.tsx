import { FC, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { apiDomain, apiVersion } from './../config/environment.config';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SignInSignUp from './Pages/SignInSignUp';
import Admin from './Pages/Admin';
import Page404 from './Pages/Page404';
import { IGeneralInfo } from './interfaces';

const App: FC = () => {
  const [generalInfo, setGeneralInfo] = useState<IGeneralInfo | object>({});

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<SignInSignUp />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
