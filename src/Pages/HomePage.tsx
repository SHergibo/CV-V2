import { useState, FC, ReactElement } from 'react';
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
  resume: ILoaded;
}

const HomagePage: FC = (): ReactElement => {
  const [generalInfo, setGeneralInfo] = useState<IGeneralInfo | null>(null);
  const [fetchLoaded, setFetchLoaded] = useState<IFetchLoaded>({
    info: { isLoaded: false, error: false },
    portfolio: { isLoaded: false, error: false },
    resume: { isLoaded: false, error: false }
  });

  return (
    <>
      {!fetchLoaded.info.isLoaded && !fetchLoaded.portfolio.isLoaded && !fetchLoaded.resume.isLoaded && <p>Is Loading ...</p>}
      <h1>Homepage</h1>
      <About setGeneralInfo={setGeneralInfo} fetchLoaded={fetchLoaded} setFetchLoaded={setFetchLoaded} />
      <Portfolio fetchLoaded={fetchLoaded} setFetchLoaded={setFetchLoaded} />
      <Resume fetchLoaded={fetchLoaded} setFetchLoaded={setFetchLoaded} />
      <Contact generalInfo={generalInfo} />
    </>
  );
};

export default HomagePage;
