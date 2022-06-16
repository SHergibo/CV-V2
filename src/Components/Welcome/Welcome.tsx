import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { IGeneralInfo } from '../../interfaces';
import { JobName, DefaultWelcomeTitle, IconScroll } from './Welcome.styled';
import WelcomeSection from '../WelcomeSection';
import ReactTypingEffect from 'react-typing-effect';

interface IWelcomeProps {
  generalInfo: IGeneralInfo | null;
}

const Welcome = ({ generalInfo }: IWelcomeProps) => {
  const location = useLocation();
  const [profTitleArray, setProfTitleArray] = useState<string[]>([]);

  useEffect(() => {
    if (generalInfo && location.pathname === '/') {
      setProfTitleArray([]);
      generalInfo.professionTitles.forEach((profTitle) => {
        setProfTitleArray((prevArray) => [...prevArray, profTitle.nameProfessionTitle]);
      });
    }
  }, [generalInfo, location.pathname]);

  return (
    <WelcomeSection pageTitle={location.pathname === '/' ? 'Bienvenue' : 'Administration'} headingText={generalInfo ? `${generalInfo.firstname} ${generalInfo.lastname}` : 'Mon site CV'}>
      {location.pathname === '/' ? (
        <>
          <JobName>
            Je suis un <ReactTypingEffect text={profTitleArray} eraseDelay={250} typingDelay={250} />
          </JobName>
          <IconScroll />
        </>
      ) : (
        <>
          <DefaultWelcomeTitle>Administration</DefaultWelcomeTitle>
          <IconScroll />
        </>
      )}
    </WelcomeSection>
  );
};

export default Welcome;
