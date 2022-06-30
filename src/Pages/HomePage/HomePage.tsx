import { useState, useEffect, useRef } from 'react';
import NavContext from '../../Context/NavContext';
import About from '../../Components/About';
import Contact from '../../Components/Contact';
import Loading from '../../Components/Loading';
import NavBar from '../../Components/NavBar';
import Portfolio from '../../Components/Portfolio';
import Resume from '../../Components/Resume';
import Welcome from '../../Components/Welcome';
import { IGeneralInfo } from '../../interfaces';

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
  const headerRef = useRef<HTMLElement>(null!);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!generalInfo?.hasPortfolio) {
      setFetchLoaded((prevState: IFetchLoaded) => ({
        ...prevState,
        portfolio: { isLoaded: true, error: false }
      }));
    }
    if (!generalInfo?.hasResume) {
      setFetchLoaded((prevState: IFetchLoaded) => ({
        ...prevState,
        resume: { isLoaded: true, error: false }
      }));
    }
  }, [generalInfo]);

  return (
    <>
      <Loading fetchLoaded={fetchLoaded} />
      <header ref={headerRef}>
        <Welcome generalInfo={generalInfo} />
        <NavContext.Provider value={{ generalInfo, headerRef }}>
          <NavBar />
        </NavContext.Provider>
      </header>
      <main>
        <About setGeneralInfo={setGeneralInfo} setFetchLoaded={setFetchLoaded} />
        {generalInfo?.hasPortfolio && <Portfolio setFetchLoaded={setFetchLoaded} />}
        {generalInfo?.hasResume && <Resume setFetchLoaded={setFetchLoaded} />}
        <Contact generalInfo={generalInfo} />
      </main>
    </>
  );
};

export default HomagePage;
