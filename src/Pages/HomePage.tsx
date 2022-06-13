import { useState, FC, ReactElement, useEffect } from 'react';
import About from '../Components/About';
import Contact from '../Components/Contact';
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

const HomagePage: FC = (): ReactElement => {
  const [generalInfo, setGeneralInfo] = useState<IGeneralInfo | null>(null);
  const [fetchLoaded, setFetchLoaded] = useState<IFetchLoaded>({
    info: { isLoaded: false, error: false },
    portfolio: { isLoaded: false, error: false },
    educExp: { isLoaded: false, error: false },
    skill: { isLoaded: false, error: false }
  });

  return (
    <>
      {(!fetchLoaded.info.isLoaded || !fetchLoaded.portfolio.isLoaded || !fetchLoaded.educExp.isLoaded || !fetchLoaded.skill.isLoaded) && <p>Is Loading ...</p>}
      <h1>Homepage</h1>
      <About setGeneralInfo={setGeneralInfo} setFetchLoaded={setFetchLoaded} />
      <Portfolio setFetchLoaded={setFetchLoaded} />
      <Resume setFetchLoaded={setFetchLoaded} />
      <Contact generalInfo={generalInfo} />
    </>
  );
};

export default HomagePage;
