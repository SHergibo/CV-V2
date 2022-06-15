import { useState } from 'react';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Loading from '../Components/Loading';
import Portfolio from '../Components/Portfolio';
import Resume from '../Components/Resume';
import { IGeneralInfo } from './../interfaces';

interface ILoaded {
  isLoaded: boolean;
  error: boolean;
}

export interface IFetchLoaded {
  info: ILoaded;
  portfolio: ILoaded;
  educExp: ILoaded;
  skill: ILoaded;
}

const HomagePage = () => {
  const [generalInfo, setGeneralInfo] = useState<IGeneralInfo | null>(null);
  const [fetchLoaded, setFetchLoaded] = useState<IFetchLoaded>({
    info: { isLoaded: false, error: false },
    portfolio: { isLoaded: false, error: false },
    educExp: { isLoaded: false, error: false },
    skill: { isLoaded: false, error: false }
  });

  return (
    <>
      <Loading fetchLoaded={fetchLoaded} />
      <h1>Homepage</h1>
      <About setGeneralInfo={setGeneralInfo} setFetchLoaded={setFetchLoaded} />
      <Portfolio setFetchLoaded={setFetchLoaded} />
      <Resume setFetchLoaded={setFetchLoaded} />
      <Contact generalInfo={generalInfo} />
    </>
  );
};

export default HomagePage;
